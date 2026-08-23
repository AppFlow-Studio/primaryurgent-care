import "server-only";

import { createHash, createHmac, timingSafeEqual } from "node:crypto";

export function hashIdentifier(
  secret: string,
  namespace: string,
  value: string,
): string {
  return createHmac("sha256", secret)
    .update(`${namespace}\0${value.trim().toLowerCase()}`)
    .digest("hex");
}

export function createDuplicateFingerprint(
  secret: string,
  data: {
    email?: string;
    phone: string;
    formSource: string;
    accidentType?: string;
    message?: string;
    additionalParts?: string[];
  },
): string {
  const canonical = [
    data.email?.trim().toLowerCase() || "",
    data.phone.replace(/\D/g, ""),
    data.formSource.trim().toLowerCase(),
    data.accidentType?.trim().toLowerCase() || "",
    data.message?.trim().replace(/\s+/g, " ").toLowerCase() || "",
    ...(data.additionalParts || []).map((part) =>
      part.trim().replace(/\s+/g, " ").toLowerCase(),
    ),
  ].join("\0");
  return hashIdentifier(secret, "duplicate", canonical);
}

// Compares fixed-length digests instead of the raw strings so a mismatched
// candidate length can't be inferred from response timing.
export function safeTokenMatch(secret: string, candidate: string): boolean {
  if (!secret || !candidate) return false;
  const expected = createHash("sha256").update(secret).digest();
  const actual = createHash("sha256").update(candidate).digest();
  return timingSafeEqual(expected, actual);
}
