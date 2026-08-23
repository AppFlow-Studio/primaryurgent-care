import "server-only";

import type { FormSecurityConfig } from "./config";
import { safeTokenMatch } from "./crypto";

export class RequestSecurityError extends Error {
  constructor(
    public readonly kind: "payload_too_large" | "invalid_request",
    message: string,
  ) {
    super(message);
  }
}

export function validateContentType(
  request: Request,
  expected: "json" | "multipart",
): boolean {
  const contentType = request.headers.get("content-type")?.toLowerCase() || "";
  return expected === "json"
    ? contentType.startsWith("application/json")
    : contentType.startsWith("multipart/form-data;");
}

export function hasOversizedContentLength(
  request: Request,
  maximumBytes: number,
): boolean {
  const value = request.headers.get("content-length");
  if (!value) return false;
  const length = Number(value);
  return !Number.isFinite(length) || length < 0 || length > maximumBytes;
}

export async function readJsonWithLimit(
  request: Request,
  maximumBytes: number,
): Promise<unknown> {
  if (hasOversizedContentLength(request, maximumBytes)) {
    throw new RequestSecurityError("payload_too_large", "Request is too large");
  }
  if (!request.body)
    throw new RequestSecurityError(
      "invalid_request",
      "Request body is missing",
    );

  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let total = 0;
  let text = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > maximumBytes) {
      await reader.cancel();
      throw new RequestSecurityError(
        "payload_too_large",
        "Request is too large",
      );
    }
    text += decoder.decode(value, { stream: true });
  }
  text += decoder.decode();
  try {
    return JSON.parse(text);
  } catch {
    throw new RequestSecurityError("invalid_request", "Malformed JSON");
  }
}

export function validateOrigin(
  request: Request,
  config: FormSecurityConfig,
): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  let parsed: URL;
  try {
    parsed = new URL(origin);
  } catch {
    return false;
  }
  if (config.allowedOrigins.has(parsed.origin)) return true;
  if (
    !config.isProduction &&
    ["localhost", "127.0.0.1"].includes(parsed.hostname)
  )
    return true;
  return false;
}

// Lets one known, out-of-band tester (GTM/Google Ads conversion verification)
// skip BotID, rate limiting, and duplicate protection for a single request.
// Never gate this on client-controlled signals (query params, cookies) --
// only a secret held server-side and supplied via header can pass.
export function hasValidTestBypassToken(
  request: Request,
  config: FormSecurityConfig,
): boolean {
  if (!config.testBypassToken) return false;
  const header = request.headers.get("x-form-test-token");
  if (!header) return false;
  return safeTokenMatch(config.testBypassToken, header);
}

export function extractTrustedClientIp(
  request: Request,
  config: FormSecurityConfig,
): string | null {
  // Vercel overwrites X-Forwarded-For at its edge. Never accept a client body field as an IP.
  if (process.env.VERCEL === "1") {
    return (
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null
    );
  }
  if (!config.isProduction) {
    return (
      request.headers.get("x-real-ip") ||
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "127.0.0.1"
    );
  }
  return null;
}
