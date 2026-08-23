import "server-only";

import { z } from "zod";

const booleanValue = z
  .enum(["true", "false"])
  .transform((value) => value === "true");
const modeValue = z.enum(["enforce", "observe", "off"]);

export interface FormSecurityConfig {
  isProduction: boolean;
  enabled: boolean;
  mode: "enforce" | "observe" | "off";
  provider: "vercel-botid";
  rateLimitEnabled: boolean;
  duplicateProtectionEnabled: boolean;
  hashSecret: string;
  upstashUrl?: string;
  upstashToken?: string;
  allowedOrigins: Set<string>;
  providerTimeoutMs: number;
  developmentBotIdBypass?: "HUMAN" | "BAD-BOT" | "GOOD-BOT";
  testBypassToken?: string;
}

function readBoolean(name: string, fallback: boolean): boolean {
  const value = process.env[name];
  if (value === undefined || value === "") return fallback;
  const parsed = booleanValue.safeParse(value.toLowerCase());
  if (!parsed.success) throw new Error(`${name} must be true or false`);
  return parsed.data;
}

export function getFormSecurityConfig(): FormSecurityConfig {
  const isProduction = process.env.NODE_ENV === "production";
  const enabled = readBoolean("FORM_BOT_PROTECTION_ENABLED", true);
  const modeResult = modeValue.safeParse(
    process.env.FORM_BOT_PROTECTION_MODE ||
      (isProduction ? "enforce" : "enforce"),
  );
  if (!modeResult.success)
    throw new Error("FORM_BOT_PROTECTION_MODE is invalid");

  const provider = process.env.FORM_BOT_PROVIDER || "vercel-botid";
  if (provider !== "vercel-botid")
    throw new Error("FORM_BOT_PROVIDER must be vercel-botid");
  if (isProduction && (!enabled || modeResult.data === "off")) {
    throw new Error(
      "Bot protection cannot be disabled in production; use observe for emergency rollback",
    );
  }
  if (isProduction && process.env.VERCEL !== "1") {
    throw new Error("Vercel BotID requires production deployment on Vercel");
  }

  const rateLimitEnabled = readBoolean("FORM_RATE_LIMIT_ENABLED", true);
  const duplicateProtectionEnabled = readBoolean(
    "FORM_DUPLICATE_PROTECTION_ENABLED",
    true,
  );
  const hashSecret = process.env.FORM_SECURITY_HASH_SECRET || "";
  if (isProduction && hashSecret.length < 32) {
    throw new Error(
      "FORM_SECURITY_HASH_SECRET must contain at least 32 characters",
    );
  }

  const upstashUrl = process.env.UPSTASH_REDIS_REST_URL;
  const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (
    isProduction &&
    (rateLimitEnabled || duplicateProtectionEnabled) &&
    (!upstashUrl || !upstashToken)
  ) {
    throw new Error(
      "Upstash Redis configuration is required for form protection",
    );
  }

  const configuredOrigins = (process.env.FORM_ALLOWED_ORIGINS || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  const allowVercelPreviews = readBoolean("FORM_ALLOW_VERCEL_PREVIEWS", false);
  const vercelPreviewOrigins = allowVercelPreviews
    ? [process.env.VERCEL_URL, process.env.VERCEL_BRANCH_URL]
        .filter((host): host is string => Boolean(host))
        .map((host) => `https://${host}`)
    : [];
  const providerTimeoutMs = Number(
    process.env.FORM_BOT_PROVIDER_TIMEOUT_MS || 1500,
  );
  if (
    !Number.isFinite(providerTimeoutMs) ||
    providerTimeoutMs < 250 ||
    providerTimeoutMs > 5000
  ) {
    throw new Error(
      "FORM_BOT_PROVIDER_TIMEOUT_MS must be between 250 and 5000",
    );
  }

  const developmentBotIdBypass = process.env.FORM_BOTID_DEV_BYPASS;
  if (
    developmentBotIdBypass &&
    !["HUMAN", "BAD-BOT", "GOOD-BOT"].includes(developmentBotIdBypass)
  ) {
    throw new Error(
      "FORM_BOTID_DEV_BYPASS must be HUMAN, BAD-BOT, or GOOD-BOT",
    );
  }
  if (isProduction && developmentBotIdBypass) {
    throw new Error("FORM_BOTID_DEV_BYPASS is not permitted in production");
  }

  const testBypassToken = process.env.FORM_TEST_BYPASS_TOKEN || undefined;
  if (testBypassToken && testBypassToken.length < 24) {
    throw new Error(
      "FORM_TEST_BYPASS_TOKEN must contain at least 24 characters",
    );
  }

  return {
    isProduction,
    enabled,
    mode: modeResult.data,
    provider,
    rateLimitEnabled,
    duplicateProtectionEnabled,
    hashSecret: hashSecret || "local-form-security-only-not-for-production",
    upstashUrl,
    upstashToken,
    allowedOrigins: new Set([
      "https://primaryuc.com",
      "https://www.primaryuc.com",
      ...configuredOrigins,
      ...vercelPreviewOrigins,
    ]),
    providerTimeoutMs,
    developmentBotIdBypass: developmentBotIdBypass as
      "HUMAN" | "BAD-BOT" | "GOOD-BOT" | undefined,
    testBypassToken,
  };
}
