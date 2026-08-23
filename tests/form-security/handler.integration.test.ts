import { beforeEach, describe, expect, it, vi } from "vitest";

import type { FormSecurityConfig } from "@/lib/form-security/config";
import {
  processFormSubmission,
  type FormHandlerDependencies,
} from "@/lib/form-security/handler";
import {
  appointmentLeadSchema,
  type AppointmentLead,
} from "@/lib/form-security/schemas";
import type { ProviderResult } from "@/lib/form-security/provider";
import type { SecurityEvent } from "@/lib/form-security/types";

const config: FormSecurityConfig = {
  isProduction: false,
  enabled: true,
  mode: "enforce",
  provider: "vercel-botid",
  rateLimitEnabled: true,
  duplicateProtectionEnabled: true,
  hashSecret: "x".repeat(32),
  allowedOrigins: new Set([
    "https://primaryuc.com",
    "https://www.primaryuc.com",
  ]),
  providerTimeoutMs: 1500,
};

const validBody = {
  fullName: "Test Patient",
  email: "patient@example.test",
  phone: "(561) 355-2651",
  postalCode: "",
  accidentType: "car-accident",
  message: "",
  preferredTime: "asap",
  formSource: "book-appointment",
  companyWebsite: "",
  attribution: {
    gclid: "test-gclid",
    gbraid: "test-gbraid",
    wbraid: "test-wbraid",
    utm_source: "google",
    utm_medium: "cpc",
    utm_campaign: "test-campaign",
    utm_term: "test-term",
    utm_content: "test-content",
  },
};

function makeRequest(
  body: unknown = validBody,
  headers: Record<string, string> = {},
): Request {
  return new Request("https://primaryuc.com/api/forms/submit", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      origin: "https://primaryuc.com",
      ...headers,
    },
    body: JSON.stringify(body),
  });
}

function buildDependencies(
  overrides: Partial<FormHandlerDependencies<AppointmentLead>> = {},
) {
  const delivered: AppointmentLead[] = [];
  const events: SecurityEvent[] = [];
  const reservations = new Set<string>();
  const dependencies: FormHandlerDependencies<AppointmentLead> = {
    getConfig: () => config,
    verify: vi.fn(async (): Promise<ProviderResult> => ({
      status: "human",
      latencyMs: 2,
    })),
    checkIp: vi.fn(async () => ({
      allowed: true,
      available: true,
      retryAfter: 1,
    })),
    checkIdentifier: vi.fn(async () => ({
      allowed: true,
      available: true,
      retryAfter: 1,
    })),
    reserve: vi.fn(async (_securityConfig, fingerprint) => {
      if (reservations.has(fingerprint))
        return { duplicate: true, available: true };
      reservations.add(fingerprint);
      return { duplicate: false, available: true };
    }),
    complete: vi.fn(async () => undefined),
    release: vi.fn(async (_securityConfig, fingerprint) => {
      reservations.delete(fingerprint);
    }),
    deliver: vi.fn(async (lead) => {
      delivered.push(lead);
    }),
    log: vi.fn((event) => events.push(event)),
    ...overrides,
  };
  return { dependencies, delivered, events };
}

function submit(
  request: Request,
  dependencies: FormHandlerDependencies<AppointmentLead>,
) {
  return processFormSubmission(request, {
    endpoint: "/api/forms/submit",
    maximumBytes: 32 * 1024,
    schema: appointmentLeadSchema,
    duplicateParts: (lead) => ({
      accidentType: lead.accidentType,
      message: lead.message || lead.preferredTime,
    }),
    getFullName: (lead) => lead.fullName,
    successRedirect: "/thank-you",
    dependencies,
  });
}

describe("protected appointment handler", () => {
  beforeEach(() => vi.clearAllMocks());

  it("accepts a valid submission and preserves attribution", async () => {
    const { dependencies, delivered, events } = buildDependencies();
    const response = await submit(makeRequest(), dependencies);
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true, redirect: "/thank-you" });
    expect(delivered).toHaveLength(1);
    expect(delivered[0]?.attribution).toMatchObject({
      gclid: "test-gclid",
      utm_campaign: "test-campaign",
    });
    expect(events.at(-1)?.decision).toBe("allowed");
  });

  it("blocks a confirmed bot with zero side effects", async () => {
    const { dependencies, delivered } = buildDependencies({
      verify: vi.fn(async (): Promise<ProviderResult> => ({
        status: "bot",
        latencyMs: 3,
      })),
    });
    expect((await submit(makeRequest(), dependencies)).status).toBe(403);
    expect(delivered).toHaveLength(0);
  });

  it("blocks a populated honeypot with zero side effects", async () => {
    const { dependencies, delivered } = buildDependencies();
    expect(
      (
        await submit(
          makeRequest({ ...validBody, companyWebsite: "https://spam.example" }),
          dependencies,
        )
      ).status,
    ).toBe(403);
    expect(delivered).toHaveLength(0);
    expect(dependencies.verify).not.toHaveBeenCalled();
  });

  it("blocks an explicit invalid origin with zero side effects", async () => {
    const { dependencies, delivered } = buildDependencies();
    const response = await submit(
      makeRequest(validBody, { origin: "https://attacker.example" }),
      dependencies,
    );
    expect(response.status).toBe(403);
    expect(delivered).toHaveLength(0);
  });

  it("rate limits rapid submissions before provider verification", async () => {
    const { dependencies, delivered } = buildDependencies({
      checkIp: vi.fn(async () => ({
        allowed: false,
        available: true,
        retryAfter: 60,
      })),
    });
    const response = await submit(makeRequest(), dependencies);
    expect(response.status).toBe(429);
    expect(response.headers.get("retry-after")).toBe("60");
    expect(delivered).toHaveLength(0);
    expect(dependencies.verify).not.toHaveBeenCalled();
  });

  it("returns idempotent success and performs side effects only once", async () => {
    const { dependencies, delivered } = buildDependencies();
    expect((await submit(makeRequest(), dependencies)).status).toBe(200);
    const duplicateResponse = await submit(makeRequest(), dependencies);
    expect(duplicateResponse.status).toBe(200);
    expect(await duplicateResponse.json()).toEqual({
      ok: true,
      duplicate: true,
      redirect: null,
    });
    expect(delivered).toHaveLength(1);
  });

  it.each(["email", "phone"] as const)(
    "rate limits the %s identifier before reservation and delivery",
    async (blockedBucket) => {
      const { dependencies, delivered } = buildDependencies({
        checkIdentifier: vi.fn(async (_config, bucket) => ({
          allowed: bucket !== blockedBucket,
          available: true,
          retryAfter: 90,
        })),
      });
      const response = await submit(makeRequest(), dependencies);
      expect(response.status).toBe(429);
      expect(response.headers.get("retry-after")).toBe("90");
      expect(dependencies.reserve).not.toHaveBeenCalled();
      expect(delivered).toHaveLength(0);
    },
  );

  it("allows a BotID-confirmed human when Redis is temporarily unavailable", async () => {
    const { dependencies, delivered, events } = buildDependencies({
      checkIp: vi.fn(async () => ({
        allowed: true,
        available: false,
        retryAfter: 1,
      })),
      checkIdentifier: vi.fn(async () => ({
        allowed: true,
        available: false,
        retryAfter: 1,
      })),
      reserve: vi.fn(async () => ({ duplicate: false, available: false })),
    });
    expect((await submit(makeRequest(), dependencies)).status).toBe(200);
    expect(delivered).toHaveLength(1);
    expect(events.at(-1)?.decision).toBe("allowed");
  });

  it("accepts a missing Origin only after the remaining controls pass", async () => {
    const { dependencies, delivered } = buildDependencies();
    const request = new Request("https://primaryuc.com/api/forms/submit", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(validBody),
    });
    expect((await submit(request, dependencies)).status).toBe(200);
    expect(dependencies.verify).toHaveBeenCalledOnce();
    expect(delivered).toHaveLength(1);
  });

  it("allows a tightly rate-limited degraded submission on provider failure", async () => {
    const { dependencies, delivered, events } = buildDependencies({
      verify: vi.fn(async (): Promise<ProviderResult> => ({
        status: "failure",
        latencyMs: 1500,
      })),
    });
    expect((await submit(makeRequest(), dependencies)).status).toBe(200);
    expect(delivered).toHaveLength(1);
    expect(events.at(-1)?.decision).toBe("verification_degraded");
  });

  it("fails closed when both provider verification and the rate-limit store are unavailable", async () => {
    const { dependencies, delivered } = buildDependencies({
      verify: vi.fn(async (): Promise<ProviderResult> => ({
        status: "failure",
        latencyMs: 1500,
      })),
      checkIp: vi.fn(async () => ({
        allowed: true,
        available: false,
        retryAfter: 1,
      })),
    });
    expect((await submit(makeRequest(), dependencies)).status).toBe(503);
    expect(delivered).toHaveLength(0);
  });

  it("blocks direct production-style requests with missing attestation", async () => {
    const { dependencies, delivered } = buildDependencies({
      verify: vi.fn(async (): Promise<ProviderResult> => ({
        status: "missing_attestation",
        latencyMs: 0,
      })),
    });
    expect((await submit(makeRequest(), dependencies)).status).toBe(403);
    expect(delivered).toHaveLength(0);
  });

  it("rejects the observed bot payload pattern when attestation is absent", async () => {
    const { dependencies, delivered } = buildDependencies({
      verify: vi.fn(async (): Promise<ProviderResult> => ({
        status: "missing_attestation",
        latencyMs: 0,
      })),
    });
    const observedPattern = {
      ...validBody,
      fullName: "Random Alpha",
      phone: "(561) 355-2678",
      postalCode: "",
      message: "",
      accidentType: "car-accident",
      attribution: {},
    };
    expect(
      (await submit(makeRequest(observedPattern), dependencies)).status,
    ).toBe(403);
    expect(delivered).toHaveLength(0);
  });

  it("rejects an oversized request before parsing or delivery", async () => {
    const { dependencies, delivered } = buildDependencies();
    const request = makeRequest(validBody, {
      "content-length": String(33 * 1024),
    });
    expect((await submit(request, dependencies)).status).toBe(413);
    expect(delivered).toHaveLength(0);
  });

  it("lets a valid test bypass token skip verification, rate limits, and duplicate protection", async () => {
    const bypassConfig: FormSecurityConfig = {
      ...config,
      testBypassToken: "gtm-conversion-tester-token-value",
    };
    const { dependencies, delivered, events } = buildDependencies({
      getConfig: () => bypassConfig,
      checkIp: vi.fn(async () => ({
        allowed: false,
        available: true,
        retryAfter: 60,
      })),
    });
    const request = makeRequest(validBody, {
      "x-form-test-token": "gtm-conversion-tester-token-value",
    });
    const first = await submit(request, dependencies);
    expect(first.status).toBe(200);
    expect(await first.json()).toEqual({ ok: true, redirect: "/thank-you" });

    const second = await submit(
      makeRequest(validBody, {
        "x-form-test-token": "gtm-conversion-tester-token-value",
      }),
      dependencies,
    );
    expect(second.status).toBe(200);
    expect(await second.json()).toEqual({ ok: true, redirect: "/thank-you" });

    expect(delivered).toHaveLength(2);
    expect(dependencies.verify).not.toHaveBeenCalled();
    expect(dependencies.checkIdentifier).not.toHaveBeenCalled();
    expect(dependencies.reserve).not.toHaveBeenCalled();
    expect(events.map((event) => event.decision)).toEqual([
      "test_bypass",
      "test_bypass",
    ]);
  });

  it("ignores an incorrect test bypass token and enforces normal checks", async () => {
    const bypassConfig: FormSecurityConfig = {
      ...config,
      testBypassToken: "gtm-conversion-tester-token-value",
    };
    const { dependencies, delivered } = buildDependencies({
      getConfig: () => bypassConfig,
      checkIp: vi.fn(async () => ({
        allowed: false,
        available: true,
        retryAfter: 60,
      })),
    });
    const request = makeRequest(validBody, {
      "x-form-test-token": "wrong-token",
    });
    const response = await submit(request, dependencies);
    expect(response.status).toBe(429);
    expect(delivered).toHaveLength(0);
  });

  it("lets the 'Bill Testing' name skip BotID and duplicate protection but keeps IP rate limiting", async () => {
    const { dependencies, delivered, events } = buildDependencies();
    const billBody = { ...validBody, fullName: "Bill Testing" };

    const first = await submit(makeRequest(billBody), dependencies);
    expect(first.status).toBe(200);
    expect(await first.json()).toEqual({ ok: true, redirect: "/thank-you" });

    const second = await submit(makeRequest(billBody), dependencies);
    expect(second.status).toBe(200);
    expect(await second.json()).toEqual({ ok: true, redirect: "/thank-you" });

    expect(delivered).toHaveLength(2);
    expect(dependencies.verify).not.toHaveBeenCalled();
    expect(dependencies.checkIdentifier).not.toHaveBeenCalled();
    expect(dependencies.reserve).not.toHaveBeenCalled();
    expect(dependencies.checkIp).toHaveBeenCalledTimes(2);
    expect(events.map((event) => event.decision)).toEqual([
      "test_bypass",
      "test_bypass",
    ]);
  });

  it("matches the bypass name case-insensitively and with extra whitespace", async () => {
    const { dependencies, delivered } = buildDependencies();
    const billBody = { ...validBody, fullName: "  bill   TESTING  " };
    expect((await submit(makeRequest(billBody), dependencies)).status).toBe(
      200,
    );
    expect(delivered).toHaveLength(1);
  });

  it("still enforces the IP rate limit for the bypass name", async () => {
    const { dependencies, delivered } = buildDependencies({
      checkIp: vi.fn(async () => ({
        allowed: false,
        available: true,
        retryAfter: 60,
      })),
    });
    const billBody = { ...validBody, fullName: "Bill Testing" };
    const response = await submit(makeRequest(billBody), dependencies);
    expect(response.status).toBe(429);
    expect(delivered).toHaveLength(0);
  });

  it("does not treat a similar but non-matching name as a bypass", async () => {
    const { dependencies, delivered } = buildDependencies({
      verify: vi.fn(async (): Promise<ProviderResult> => ({
        status: "bot",
        latencyMs: 1,
      })),
    });
    const almostBody = { ...validBody, fullName: "Bill Testingg" };
    expect((await submit(makeRequest(almostBody), dependencies)).status).toBe(
      403,
    );
    expect(delivered).toHaveLength(0);
  });

  it("releases the idempotency reservation after delivery failure", async () => {
    const deliver = vi
      .fn()
      .mockRejectedValueOnce(new Error("temporary failure"))
      .mockResolvedValueOnce(undefined);
    const { dependencies } = buildDependencies({ deliver });
    expect((await submit(makeRequest(), dependencies)).status).toBe(502);
    expect((await submit(makeRequest(), dependencies)).status).toBe(200);
    expect(deliver).toHaveBeenCalledTimes(2);
  });
});
