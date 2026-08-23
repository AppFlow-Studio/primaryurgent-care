"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useId, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { trackFormSubmission, pushEnhancedConversion } from "../../lib/gtag";
import { getAttributionData } from "@/lib/gclid";
import { useConsent } from "@/components/ConsentProvider";
import { getFormTestBypassHeaders } from "@/lib/form-security/client-test-bypass";
import {
  getValidatedPhoneNumber,
  formatUSPhoneNumber,
  hasAtMostTenPhoneDigits,
  isValidUSPhoneNumber,
  PHONE_VALIDATION_ERROR,
} from "@/lib/validation/phone";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().refine(isValidUSPhoneNumber, PHONE_VALIDATION_ERROR),
  postalCode: z.string().optional(),
  type: z.string(),
  message: z.string(),
  companyWebsite: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const BookAppointmentForm = ({
  title = "Book An Appointment",
  bgColor = "bg-[#F2F6FC]",
  textColor = "text-black",
  initialFirstName = "",
  initialLastName = "",
  initialPhone = "",
  initialType = "",
}: {
  title?: string;
  bgColor?: string;
  textColor?: string;
  initialFirstName?: string;
  initialLastName?: string;
  initialPhone?: string;
  initialType?: string;
}) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: initialFirstName,
      lastName: initialLastName,
      email: "",
      phone: initialPhone,
      postalCode: "",
      type: initialType,
      message: "",
      companyWebsite: "",
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [submissionNotice, setSubmissionNotice] = useState("");
  const [isHydrated, setIsHydrated] = useState(false);
  const errorRef = useRef<HTMLDivElement>(null);
  const honeypotId = useId();
  const { hasConsent } = useConsent();
  useEffect(() => setIsHydrated(true), []);
  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setSubmissionError("");
    setSubmissionNotice("");
    try {
      const normalizedPhone = getValidatedPhoneNumber(data.phone);
      const fullName = `${data.firstName} ${data.lastName}`.trim();
      const attribution = getAttributionData();
      const response = await fetch("/api/forms/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...getFormTestBypassHeaders(),
        },
        body: JSON.stringify({
          fullName,
          email: data.email,
          phone: normalizedPhone,
          postalCode: data.postalCode || "",
          accidentType: data.type || "",
          message: data.message || "",
          preferredTime: "",
          formSource: "book-appointment",
          companyWebsite: data.companyWebsite || "",
          attribution: {
            ...attribution,
            referrer: document.referrer || "",
          },
        }),
      });
      const result = (await response.json().catch(() => null)) as {
        ok?: boolean;
        message?: string;
        redirect?: string;
        duplicate?: boolean;
      } | null;
      if (!response.ok || !result?.ok) {
        throw new Error(result?.message || "Submission failed");
      }

      if (result.duplicate) {
        setSubmissionNotice(
          "We already received this request. You do not need to submit it again.",
        );
        return;
      }

      form.reset();

      // Push enhanced conversion data to dataLayer only with marketing consent
      // (contains PII for Google Ads enhanced conversions - GTM handles hashing)
      if (hasConsent("marketing")) {
        pushEnhancedConversion({
          email: data.email,
          phone: normalizedPhone,
          firstName: data.firstName,
          lastName: data.lastName,
          postalCode: data.postalCode,
        });
      }

      // Track form submission for Google Analytics
      trackFormSubmission({
        formName: "BookAppointmentForm",
        value: 1,
      });

      window.location.assign(result.redirect || "/thank-you");
    } catch {
      setSubmissionError(
        "We could not submit the form yet. Please wait a moment and try again, or call us at (561) 355-2651 for immediate assistance.",
      );
      window.setTimeout(() => errorRef.current?.focus(), 0);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`${bgColor} rounded-2xl p-8 w-full h-full max-w-xl mx-auto flex flex-col gap-6`}
    >
      <h2 className={`text-3xl font-bold ${textColor}`}>{title}</h2>

      <Form {...form}>
        <form
          data-testid="book-appointment-form"
          data-hydrated={isHydrated ? "true" : "false"}
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 h-full w-full "
        >
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className={`font-semibold ${textColor} text-base`}>
                    First Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="First name"
                      autoComplete="given-name"
                      className="w-full rounded-lg px-5 py-3 bg-white text-black text-base outline-none border-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className={`font-semibold ${textColor} text-base`}>
                    Last Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Last name"
                      autoComplete="family-name"
                      className="w-full rounded-lg px-5 py-3 bg-white text-black text-base outline-none border-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={`font-semibold ${textColor} text-base`}>
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email address"
                    className="w-full rounded-lg px-5 py-3 bg-white text-black text-base outline-none border-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={`font-semibold ${textColor} text-base`}>
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="(___) ___-____"
                    className="w-full rounded-lg px-5 py-3 bg-white text-black text-base outline-none border-none"
                    {...field}
                    onChange={(event) => {
                      if (hasAtMostTenPhoneDigits(event.target.value)) {
                        field.onChange(formatUSPhoneNumber(event.target.value));
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="postalCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={`font-semibold ${textColor} text-base`}>
                  ZIP Code
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    autoComplete="postal-code"
                    placeholder="Enter your ZIP code"
                    className="w-full rounded-lg px-5 py-3 bg-white text-black text-base outline-none border-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="w-full h-full overflow-hidden pb-5">
                <FormLabel className={`font-semibold ${textColor} text-base`}>
                  Type of Accident{" "}
                  <span className="text-xs text-gray-200">(If Applicable)</span>
                </FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full rounded-lg px-5 py-3 bg-white text-black text-base outline-none border-none">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Workplace Accident">
                          Workplace Accident
                        </SelectItem>
                        <SelectItem value="Car Accident">
                          Car Accident
                        </SelectItem>
                        <SelectItem value="Personal Injury">
                          Personal Injury
                        </SelectItem>
                        <SelectItem value="Truck Accident">
                          Truck Accident
                        </SelectItem>
                        <SelectItem value="Motorcycle Accident">
                          Motorcycle Accident
                        </SelectItem>
                        <SelectItem value="Slip and Fall">
                          Slip and Fall Accident
                        </SelectItem>
                        <SelectItem value="Pedestrian Accident">
                          Pedestrian Accident
                        </SelectItem>
                        {/* <SelectItem value="Workers Compensation">Workers Compensation</SelectItem> */}
                        <SelectItem value="No Accident">No Accident</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={`font-semibold ${textColor} text-base`}>
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write your message"
                    className="w-full rounded-lg px-5 py-3 bg-white text-black text-base outline-none border-none min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div
            aria-hidden="true"
            className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
          >
            <label htmlFor={honeypotId}>Company website</label>
            <input
              id={honeypotId}
              type="text"
              tabIndex={-1}
              autoComplete="off"
              data-1p-ignore="true"
              data-lpignore="true"
              {...form.register("companyWebsite")}
            />
          </div>

          {submissionError && (
            <div
              ref={errorRef}
              role="alert"
              tabIndex={-1}
              className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 outline-none"
            >
              {submissionError}
            </div>
          )}

          {submissionNotice && (
            <div
              role="status"
              className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800"
            >
              {submissionNotice}
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-[#D52128] hover:bg-[#b81b22] text-white font-bold py-3 px-4 rounded-xl text-lg transition duration-300 mt-2"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
            {isLoading && <Loader2 className="w-4 h-4 ml-2 animate-spin" />}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default BookAppointmentForm;
