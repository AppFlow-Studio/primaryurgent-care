import { deliverRecordsRequest } from "@/components/email/SendEmail";
import { processFormSubmission } from "@/lib/form-security/handler";
import { recordsRequestSchema } from "@/lib/form-security/schemas";

export const runtime = "nodejs";
export const maxDuration = 20;

export async function POST(request: Request): Promise<Response> {
  return processFormSubmission(request, {
    endpoint: "/api/forms/records",
    maximumBytes: 7 * 1024 * 1024,
    schema: recordsRequestSchema,
    duplicateParts: (recordsRequest) => ({
      additionalParts: [
        recordsRequest.patientFullName,
        recordsRequest.dob,
        recordsRequest.dos,
        recordsRequest.records.join("|"),
      ],
    }),
    getFullName: (recordsRequest) => recordsRequest.patientFullName,
    dependencies: { deliver: deliverRecordsRequest },
  });
}
