"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { pushEnhancedConversion } from "@/lib/gtag";
import { getAttributionData } from "@/lib/gclid";
import { getFormTestBypassHeaders } from "@/lib/form-security/client-test-bypass";
import { useConsent } from "@/components/ConsentProvider";
import { Shield, Clock, FileText, Lock } from "lucide-react";
import {
  getValidatedPhoneNumber,
  formatUSPhoneNumber,
  hasAtMostTenPhoneDigits,
  isValidUSPhoneNumber,
  PHONE_VALIDATION_ERROR,
} from "@/lib/validation/phone";

interface CompactAccidentFormProps {
  title: string;
  city?: string; // city name for GTM tracking
}

const CompactAccidentForm: React.FC<CompactAccidentFormProps> = ({
  title,
  city,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    preferredTime: "",
    companyWebsite: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [submissionError, setSubmissionError] = useState("");
  const [submissionNotice, setSubmissionNotice] = useState("");
  const [isHydrated, setIsHydrated] = useState(false);
  const errorRef = useRef<HTMLDivElement>(null);
  const honeypotId = useId();
  const { hasConsent } = useConsent();
  useEffect(() => setIsHydrated(true), []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidUSPhoneNumber(formData.phone)) {
      setPhoneError(PHONE_VALIDATION_ERROR);
      return;
    }

    setPhoneError("");
    setSubmissionError("");
    setSubmissionNotice("");
    setIsLoading(true);

    try {
      const attribution = getAttributionData();
      const normalizedPhone = getValidatedPhoneNumber(formData.phone);

      const response = await fetch("/api/forms/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...getFormTestBypassHeaders(),
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: normalizedPhone,
          postalCode: "",
          accidentType: "car-accident",
          message: "",
          preferredTime: formData.preferredTime,
          formSource: "compact-accident",
          companyWebsite: formData.companyWebsite,
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

      // Fire lead events only after the protected server path accepts the request.
      try {
        const analyticsWindow = window as Window & {
          gtag?: (...args: unknown[]) => void;
        };
        analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
        analyticsWindow.dataLayer.push({
          event: "car_accident_form_submit",
          form_location: "hero",
          city: city || "",
          page_type: "car_accident_city",
        });
        // Also fire gtag generate_lead
        if (typeof analyticsWindow.gtag === "function") {
          analyticsWindow.gtag("event", "generate_lead", {
            event_category: "car_accident",
            event_label: city || "",
          });
        }
      } catch {}

      // Push enhanced conversion data only with marketing consent (contains PII)
      if (hasConsent("marketing")) {
        const nameParts = formData.fullName.trim().split(" ");
        pushEnhancedConversion({
          email: formData.email,
          phone: normalizedPhone,
          firstName: nameParts[0] || "",
          lastName: nameParts.slice(1).join(" ") || "",
          postalCode: "",
        });
      }

      setFormData({
        fullName: "",
        phone: "",
        email: "",
        preferredTime: "",
        companyWebsite: "",
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

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-gray-900 mb-1">{title}</h2>
      <p className="text-sm text-gray-600 mb-3">
        Most patients are seen in under 15 minutes.
      </p>

      {/* Micro trust badges */}
      <div className="flex flex-col gap-1.5 mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
        <div className="flex items-center gap-2 text-xs text-gray-700">
          <Shield className="w-3.5 h-3.5 text-[#2563eb] flex-shrink-0" />
          <span>PIP &amp; Auto Insurance Accepted</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-700">
          <Clock className="w-3.5 h-3.5 text-[#16A34A] flex-shrink-0" />
          <span>Seen in Under 15 Minutes</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-700">
          <FileText className="w-3.5 h-3.5 text-[#D52128] flex-shrink-0" />
          <span>Documentation Provided</span>
        </div>
      </div>

      <form
        data-testid="compact-accident-form"
        data-hydrated={isHydrated ? "true" : "false"}
        onSubmit={handleSubmit}
        className="space-y-3"
      >
        {/* Field 1: Full Name */}
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">
            Full Name
          </label>
          <Input
            name="fullName"
            type="text"
            placeholder="Your full name"
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            className="w-full h-11 text-sm px-3"
            autoComplete="name"
            required
          />
        </div>

        {/* Field 2: Phone */}
        <div>
          <label
            htmlFor="compact-accident-phone"
            className="text-sm font-medium text-gray-700 block mb-1"
          >
            Phone Number
          </label>
          <Input
            id="compact-accident-phone"
            name="phone"
            type="tel"
            placeholder="(___) ___-____"
            value={formData.phone}
            onChange={(e) => {
              if (hasAtMostTenPhoneDigits(e.target.value)) {
                handleChange("phone", formatUSPhoneNumber(e.target.value));
                if (phoneError) {
                  setPhoneError("");
                }
              }
            }}
            onBlur={() => {
              if (formData.phone && !isValidUSPhoneNumber(formData.phone)) {
                setPhoneError(PHONE_VALIDATION_ERROR);
              }
            }}
            className="w-full h-11 text-sm px-3"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={Boolean(phoneError)}
            aria-describedby={
              phoneError ? "compact-accident-phone-error" : undefined
            }
            required
          />
          {phoneError && (
            <p
              id="compact-accident-phone-error"
              className="mt-1 text-sm text-red-600"
            >
              {phoneError}
            </p>
          )}
        </div>

        {/* Field 3: Email (optional) */}
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">
            Email{" "}
            <span className="text-gray-400 font-normal">
              (optional — for confirmation)
            </span>
          </label>
          <Input
            name="email"
            type="email"
            placeholder="you@email.com"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full h-11 text-sm px-3"
            autoComplete="email"
          />
        </div>

        {/* Field 4: Preferred Time */}
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">
            Preferred Visit Time
          </label>
          <Select
            value={formData.preferredTime}
            onValueChange={(value) => handleChange("preferredTime", value)}
          >
            <SelectTrigger className="w-full h-11 text-sm">
              <SelectValue placeholder="When works best?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asap">ASAP / Today</SelectItem>
              <SelectItem value="this-week">This Week</SelectItem>
              <SelectItem value="weekend">Weekend</SelectItem>
              <SelectItem value="morning">Morning (9am–12pm)</SelectItem>
              <SelectItem value="afternoon">Afternoon (12pm–4pm)</SelectItem>
              <SelectItem value="evening">Evening (4pm–6pm)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div
          aria-hidden="true"
          className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
        >
          <label htmlFor={honeypotId}>Company website</label>
          <input
            id={honeypotId}
            name="companyWebsite"
            type="text"
            value={formData.companyWebsite}
            onChange={(event) =>
              handleChange("companyWebsite", event.target.value)
            }
            tabIndex={-1}
            autoComplete="off"
            data-1p-ignore="true"
            data-lpignore="true"
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

        {/* Privacy microcopy */}
        <p className="text-xs text-gray-500 flex items-center gap-1">
          <Lock className="w-3 h-3 flex-shrink-0" />
          No spam. We&apos;ll only contact you to confirm your visit.
        </p>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 bg-[#D52128] hover:bg-[#b81b22] active:bg-[#9a1520] text-white text-base font-bold rounded-xl shadow-lg touch-manipulation"
        >
          {isLoading ? "Submitting..." : "Request Same-Day Accident Exam"}
        </Button>
      </form>
    </div>
  );
};

export default CompactAccidentForm;
