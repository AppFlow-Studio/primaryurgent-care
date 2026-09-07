// TypeScript declarations for dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Google Analytics event tracking utility
// Uses dataLayer.push() for GTM compatibility
// Event naming: Analytics-only events should use 'ui_' or 'form_' prefix
export function trackEvent({
  action,
  category,
  label,
  value
}: {
  action: string;
  category?: string;
  label?: string;
  value?: string | number;
}) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: action,
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

// Form submission tracking for GA4 analytics only
//
// Note on Google Ads conversions, corrected 2026-09-05. This comment previously said
// they were handled by GTM on the /thank-you page and that React must never push a
// 'conversion' event. GTM was not in fact firing one: a live check found only a
// gtag.config ping on /thank-you, and the "PUC | Lake Worth | Accident Form Lead"
// action had recorded zero conversions since it was created. That action is configured
// in Google Ads as a "Manual event" under "Set up with a Google tag", so the page-load
// event snippet now lives in app/thank-you/page.tsx.
//
// The rule that still holds: fire the Ads conversion in exactly ONE place, on the
// confirmation page. Do not add a second 'conversion' push from an individual form, and
// if a GTM tag for this action is ever added, remove the one in app/thank-you/page.tsx
// first or the lead will be counted twice.
//
// The same now applies to the GA4 lead event, added 2026-09-07. 'generate_lead' fires
// once in app/thank-you/page.tsx and nowhere else. The form_submit event below goes to
// dataLayer only and GTM does not relay it to GA4, which is why GA4 key events read
// zero for months; it is kept for its context, not as the lead signal. Do not re-add a
// 'generate_lead' call to an individual form.
export function trackFormSubmission({
  formName,
  value
}: {
  formName: string;
  value?: number;
}) {
  // Track analytics event only (GTM handles conversions)
  trackEvent({
    action: 'form_submit',
    category: 'engagement',
    label: formName,
    value: value
  });
}

// Google Ads Enhanced Conversions data push
// Pushes enhanced conversion data to dataLayer for GTM to hash and send to Google Ads
// GTM handles hashing automatically - do NOT hash in client code
// Reference: https://support.google.com/google-ads/answer/13258081
export function pushEnhancedConversion({
  email,
  phone,
  firstName,
  lastName,
  postalCode
}: {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  postalCode?: string;
}) {
  if (typeof window === 'undefined') {
    return;
  }

  window.dataLayer = window.dataLayer || [];

  // Sanitize phone to digits only
  const sanitizedPhone = phone?.replace(/\D/g, '');
  // Only include phone if it has at least 10 digits
  const validPhone = sanitizedPhone && sanitizedPhone.length >= 10 ? sanitizedPhone : undefined;

  // Build dataLayer object - only include fields with actual values
  const enhancedData: {
    event: string;
    user_email?: string;
    user_phone?: string;
    user_first_name?: string;
    user_last_name?: string;
    user_postal_code?: string;
    user_country: string;
  } = {
    event: 'enhanced_conversion_form_submit',
    user_country: 'US' // Always include country
  };

  // Only add fields that have values
  if (email?.trim()) {
    enhancedData.user_email = email.trim();
  }
  if (validPhone) {
    enhancedData.user_phone = validPhone;
  }
  if (firstName?.trim()) {
    enhancedData.user_first_name = firstName.trim();
  }
  if (lastName?.trim()) {
    enhancedData.user_last_name = lastName.trim();
  }
  if (postalCode?.trim()) {
    enhancedData.user_postal_code = postalCode.trim();
  }

  window.dataLayer.push(enhancedData);
} 