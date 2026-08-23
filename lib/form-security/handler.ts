import "server-only";

import { randomUUID } from "node:crypto";

import type { SafeParseReturnType } from "zod";

import { createDuplicateFingerprint, hashIdentifier } from "./crypto";
import { getFormSecurityConfig, type FormSecurityConfig } from "./config";
import { logFormSecurityEvent } from "./logger";
import { verifyBotAttestation, type ProviderResult } from "./provider";
import {
  extractTrustedClientIp,
  hasValidTestBypassToken,
  readJsonWithLimit,
  RequestSecurityError,
  validateContentType,
  validateOrigin,
} from "./request";
import {
  checkIdentifierRateLimit,
  checkIpRateLimits,
  completeDuplicate,
  releaseDuplicate,
  reserveDuplicate,
  type RateLimitCheck,
} from "./store";
import type { SecurityEvent } from "./types";

type SecuredForm = {
  email?: string;
  phone: string;
  formSource: string;
  companyWebsite: string;
};

type DuplicateReservation = { duplicate: boolean; available: boolean };

export interface FormHandlerDependencies<T extends SecuredForm> {
  getConfig: () => FormSecurityConfig;
  verify: (
    request: Request,
    config: FormSecurityConfig,
  ) => Promise<ProviderResult>;
  checkIp: (
    config: FormSecurityConfig,
    identifier: string,
  ) => Promise<RateLimitCheck>;
  checkIdentifier: (
    config: FormSecurityConfig,
    bucket: "email" | "phone",
    identifier: string,
    duplicateFingerprint?: string,
  ) => Promise<RateLimitCheck>;
  reserve: (
    config: FormSecurityConfig,
    fingerprint: string,
    reservationId: string,
  ) => Promise<DuplicateReservation>;
  complete: (config: FormSecurityConfig, fingerprint: string) => Promise<void>;
  release: (
    config: FormSecurityConfig,
    fingerprint: string,
    reservationId: string,
  ) => Promise<void>;
  deliver: (data: T) => Promise<void>;
  log: (event: SecurityEvent) => void;
}

export interface FormHandlerOptions<T extends SecuredForm> {
  endpoint: string;
  maximumBytes: number;
  schema: { safeParse: (data: unknown) => SafeParseReturnType<unknown, T> };
  duplicateParts: (data: T) => {
    accidentType?: string;
    message?: string;
    additionalParts?: string[];
  };
  // Field the "Bill Testing" name bypass reads to identify a self-test
  // submission (e.g. lead.fullName, request.patientFullName).
  getFullName?: (data: T) => string;
  successRedirect?: string;
  dependencies: Pick<FormHandlerDependencies<T>, "deliver"> &
    Partial<Omit<FormHandlerDependencies<T>, "deliver">>;
}

// A fixed name is a weak, un-rotatable secret (guessable, and permanent once
// known), so this bypass only skips BotID + duplicate protection -- the IP
// rate limit below still applies as a backstop if it's ever discovered.
const TEST_BYPASS_FULL_NAMES = new Set(["bill testing"]);

function isTestBypassName(fullName: string): boolean {
  return TEST_BYPASS_FULL_NAMES.has(
    fullName.trim().toLowerCase().replace(/\s+/g, " "),
  );
}

const genericFailure =
  "We could not submit the form yet. Please wait a moment and try again, or call us for immediate assistance.";

function json(
  body: Record<string, unknown>,
  status: number,
  headers?: Record<string, string>,
): Response {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "https://primaryuc.com",
      Vary: "Origin",
      ...headers,
    },
  });
}

function defaults<T extends SecuredForm>(
  dependencies: FormHandlerOptions<T>["dependencies"],
): FormHandlerDependencies<T> {
  return {
    getConfig: dependencies.getConfig || getFormSecurityConfig,
    verify: dependencies.verify || verifyBotAttestation,
    checkIp: dependencies.checkIp || checkIpRateLimits,
    checkIdentifier: dependencies.checkIdentifier || checkIdentifierRateLimit,
    reserve: dependencies.reserve || reserveDuplicate,
    complete: dependencies.complete || completeDuplicate,
    release: dependencies.release || releaseDuplicate,
    deliver: dependencies.deliver,
    log: dependencies.log || logFormSecurityEvent,
  };
}

export async function processFormSubmission<T extends SecuredForm>(
  request: Request,
  options: FormHandlerOptions<T>,
): Promise<Response> {
  const requestId = randomUUID();
  const dependencies = defaults(options.dependencies);
  let config: FormSecurityConfig;
  let formSource = "unknown";

  const record = (
    decision: SecurityEvent["decision"],
    responseStatus: number,
    details: Partial<SecurityEvent> = {},
  ) => {
    dependencies.log({
      requestId,
      formSource,
      endpoint: options.endpoint,
      decision,
      provider: "vercel-botid",
      responseStatus,
      accepted: responseStatus >= 200 && responseStatus < 300,
      ...details,
    });
  };

  try {
    config = dependencies.getConfig();
  } catch {
    record("configuration_error", 503);
    return json({ ok: false, message: genericFailure }, 503);
  }

  if (!validateContentType(request, "json")) {
    record("invalid_request", 415);
    return json({ ok: false, message: genericFailure }, 415);
  }

  let body: unknown;
  try {
    body = await readJsonWithLimit(request, options.maximumBytes);
  } catch (error) {
    const decision =
      error instanceof RequestSecurityError &&
      error.kind === "payload_too_large"
        ? "payload_too_large"
        : "invalid_request";
    const status = decision === "payload_too_large" ? 413 : 400;
    record(decision, status);
    return json({ ok: false, message: genericFailure }, status);
  }

  const parsed = options.schema.safeParse(body);
  if (!parsed.success) {
    record("schema_failure", 400);
    return json({ ok: false, message: genericFailure }, 400);
  }
  const data = parsed.data;
  formSource = data.formSource;

  if (!validateOrigin(request, config)) {
    record("blocked_origin", 403);
    return json({ ok: false, message: genericFailure }, 403);
  }

  if (data.companyWebsite.trim()) {
    record("blocked_honeypot", 403);
    return json({ ok: false, message: genericFailure }, 403);
  }

  if (hasValidTestBypassToken(request, config)) {
    try {
      await dependencies.deliver(data);
    } catch {
      record("delivery_failure", 502);
      return json({ ok: false, message: genericFailure }, 502);
    }
    record("test_bypass", 200);
    return json({ ok: true, redirect: options.successRedirect || null }, 200);
  }

  const nameBypass = Boolean(
    options.getFullName && isTestBypassName(options.getFullName(data)),
  );

  const clientIp = extractTrustedClientIp(request, config);
  if (config.isProduction && !clientIp) {
    record("configuration_error", 503);
    return json({ ok: false, message: genericFailure }, 503);
  }
  const ipIdentifier = hashIdentifier(
    config.hashSecret,
    "ip",
    clientIp || requestId,
  );
  const ipLimit = await dependencies.checkIp(config, ipIdentifier);
  if (!ipLimit.allowed) {
    record("blocked_rate_limit", 429, { rateLimitBucket: "ip" });
    return json({ ok: false, message: genericFailure }, 429, {
      "Retry-After": String(ipLimit.retryAfter),
    });
  }

  let verificationDegraded = false;
  let providerResult: SecurityEvent["providerResult"] = "human";
  let verificationLatencyMs = 0;
  if (!nameBypass && config.enabled && config.mode !== "off") {
    const verification = await dependencies.verify(request, config);
    verificationLatencyMs = verification.latencyMs;
    providerResult = verification.status;
    if (
      verification.status === "bot" ||
      verification.status === "missing_attestation"
    ) {
      if (config.mode === "enforce") {
        record("blocked_bot", 403, { providerResult, verificationLatencyMs });
        return json({ ok: false, message: genericFailure }, 403);
      }
      providerResult = "observed_bot";
    } else if (verification.status === "failure") {
      if (
        config.mode === "enforce" &&
        (!config.rateLimitEnabled || !ipLimit.available)
      ) {
        record("provider_failure", 503, {
          providerResult,
          verificationLatencyMs,
        });
        return json({ ok: false, message: genericFailure }, 503);
      }
      verificationDegraded = true;
    }
  }

  const duplicateDetails = options.duplicateParts(data);
  const fingerprint = createDuplicateFingerprint(config.hashSecret, {
    email: data.email,
    phone: data.phone,
    formSource: data.formSource,
    ...duplicateDetails,
  });

  if (!nameBypass) {
    const identifierChecks: Array<
      Promise<{ bucket: "email" | "phone"; result: RateLimitCheck }>
    > = [];
    if (data.email) {
      identifierChecks.push(
        dependencies
          .checkIdentifier(
            config,
            "email",
            hashIdentifier(config.hashSecret, "email", data.email),
            fingerprint,
          )
          .then((result) => ({ bucket: "email" as const, result })),
      );
    }
    identifierChecks.push(
      dependencies
        .checkIdentifier(
          config,
          "phone",
          hashIdentifier(config.hashSecret, "phone", data.phone),
          fingerprint,
        )
        .then((result) => ({ bucket: "phone" as const, result })),
    );

    for (const { bucket, result } of await Promise.all(identifierChecks)) {
      if (!result.allowed) {
        record("blocked_rate_limit", 429, {
          providerResult,
          rateLimitBucket: bucket,
          verificationLatencyMs,
        });
        return json({ ok: false, message: genericFailure }, 429, {
          "Retry-After": String(result.retryAfter),
        });
      }
    }

    const reservation = await dependencies.reserve(
      config,
      fingerprint,
      requestId,
    );
    if (reservation.duplicate) {
      record("duplicate", 200, {
        providerResult,
        duplicate: true,
        verificationLatencyMs,
        accepted: false,
      });
      return json({ ok: true, duplicate: true, redirect: null }, 200);
    }
  }

  try {
    await dependencies.deliver(data);
    if (!nameBypass) await dependencies.complete(config, fingerprint);
  } catch {
    if (!nameBypass) await dependencies.release(config, fingerprint, requestId);
    record("delivery_failure", 502, { providerResult, verificationLatencyMs });
    return json({ ok: false, message: genericFailure }, 502);
  }

  const decision = nameBypass
    ? "test_bypass"
    : verificationDegraded
      ? "verification_degraded"
      : "allowed";
  record(decision, 200, { providerResult, verificationLatencyMs });
  return json({ ok: true, redirect: options.successRedirect || null }, 200);
}
