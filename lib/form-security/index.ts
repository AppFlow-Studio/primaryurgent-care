import "server-only";

export { createDuplicateFingerprint, hashIdentifier, safeTokenMatch } from "./crypto";
export { getFormSecurityConfig } from "./config";
export { processFormSubmission } from "./handler";
export { logFormSecurityEvent } from "./logger";
export { verifyBotAttestation } from "./provider";
export {
  extractTrustedClientIp,
  hasOversizedContentLength,
  hasValidTestBypassToken,
  readJsonWithLimit,
  RequestSecurityError,
  validateContentType,
  validateOrigin,
} from "./request";
export { appointmentLeadSchema, recordsRequestSchema } from "./schemas";
export {
  checkIdentifierRateLimit,
  checkIpRateLimits,
  completeDuplicate,
  releaseDuplicate,
  reserveDuplicate,
} from "./store";
export type { AppointmentLead, RecordsRequest } from "./schemas";
export type { FormSecurityConfig } from "./config";
export type { FormSecurityDecision, SecurityEvent } from "./types";
