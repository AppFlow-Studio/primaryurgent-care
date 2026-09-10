'use client';
import { useEffect } from 'react';
import { captureGclid } from '@/lib/gclid';
import { useConsent } from '@/components/ConsentProvider';

export default function GclidCapture() {
  // gclid/UTM capture now writes a 90-day cookie instead of sessionStorage, so it has to
  // wait for the same marketing-consent gate the rest of the site already applies to
  // tracking cookies (see hasConsent('marketing') in BookAppointmentForm.tsx,
  // CompactAccidentForm.tsx, LawyerRecordsForm.tsx). Re-runs if consent is granted after
  // mount, so accepting the banner on the landing page still captures the click id as
  // long as the URL params are still present.
  const { isReady, hasConsent } = useConsent();

  useEffect(() => {
    if (!isReady) return;
    if (!hasConsent('marketing')) return;
    captureGclid();
  }, [isReady, hasConsent]);

  return null;
}
