import { deliverAppointmentLead } from "@/components/email/SendEmail";
import { processFormSubmission } from "@/lib/form-security/handler";
import { appointmentLeadSchema } from "@/lib/form-security/schemas";

export const runtime = "nodejs";
export const maxDuration = 15;

export async function POST(request: Request): Promise<Response> {
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
    dependencies: { deliver: deliverAppointmentLead },
  });
}
