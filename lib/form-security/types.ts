export type FormSecurityDecision =
  | { decision: "allowed"; verificationDegraded: false }
  | { decision: "verification_degraded"; verificationDegraded: true }
  | { decision: "blocked_bot" }
  | { decision: "blocked_honeypot" }
  | {
      decision: "blocked_rate_limit";
      retryAfter: number;
      bucket: "ip" | "email" | "phone";
    }
  | { decision: "blocked_origin" }
  | { decision: "duplicate" }
  | { decision: "configuration_error" }
  | { decision: "test_bypass" };

export type SecurityEventDecision =
  | FormSecurityDecision["decision"]
  | "schema_failure"
  | "payload_too_large"
  | "invalid_request"
  | "provider_failure"
  | "delivery_failure";

export interface SecurityEvent {
  requestId: string;
  formSource: string;
  endpoint: string;
  decision: SecurityEventDecision;
  provider: "vercel-botid";
  providerResult?:
    "human" | "bot" | "missing_attestation" | "failure" | "observed_bot";
  rateLimitBucket?: "ip" | "email" | "phone";
  duplicate?: boolean;
  responseStatus: number;
  verificationLatencyMs?: number;
  accepted: boolean;
}
