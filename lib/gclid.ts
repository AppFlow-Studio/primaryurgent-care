'use client';

// Attribution data (gclid, gbraid, wbraid, UTMs, landing page, device) is stored in a
// first-party cookie rather than sessionStorage. sessionStorage only lives for one
// browser tab/session, so a visitor who clicks an ad and submits the form later (a new
// tab, the next day, after closing the browser) loses the click id entirely before the
// form can attach it. 90 days matches Google's own recommended cookie window for GCLID
// capture: https://support.google.com/google-ads/answer/3285060
const ATTRIBUTION_COOKIE_MAX_AGE_DAYS = 90;

function setCookie(name: string, value: string, days: number): void {
  if (typeof document === 'undefined') return;
  const maxAge = days * 24 * 60 * 60;
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax${secure}`;
}

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const escaped = name.replace(/[.$?*|{}()[\]\\/+^]/g, '\\$&');
  const match = document.cookie.match(new RegExp('(?:^|; )' + escaped + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : null;
}

export function captureGclid(): void {
  if (typeof window === 'undefined') return;
  const params = new URLSearchParams(window.location.search);
  const keys = [
    'gclid',
    'gbraid',
    'wbraid',
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_adgroup',
    'utm_keyword',
    'utm_term',
    'utm_content'
  ] as const;
  for (const key of keys) {
    const value = params.get(key);
    if (value) {
      setCookie(key, value, ATTRIBUTION_COOKIE_MAX_AGE_DAYS);
    }
  }
  if (!getCookie('landing_page_url')) {
    setCookie('landing_page_url', window.location.href, ATTRIBUTION_COOKIE_MAX_AGE_DAYS);
  }
  // First-touch, same as landing_page_url. Once the cookie survives across visits, a
  // return visit on a different device must not overwrite the device that produced the
  // original ad click, or the attribution record no longer matches what actually happened.
  if (!getCookie('device')) {
    setCookie('device', getDeviceType(), ATTRIBUTION_COOKIE_MAX_AGE_DAYS);
  }
}

export function getAttributionData(): {
  gclid: string;
  gbraid: string;
  wbraid: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_adgroup: string;
  utm_keyword: string;
  utm_term: string;
  utm_content: string;
  landing_page_url: string;
  device: string;
} {
  if (typeof window === 'undefined') {
    return {
      gclid: '',
      gbraid: '',
      wbraid: '',
      utm_source: '',
      utm_medium: '',
      utm_campaign: '',
      utm_adgroup: '',
      utm_keyword: '',
      utm_term: '',
      utm_content: '',
      landing_page_url: '',
      device: '',
    };
  }
  return {
    gclid: getCookie('gclid') || '',
    gbraid: getCookie('gbraid') || '',
    wbraid: getCookie('wbraid') || '',
    utm_source: getCookie('utm_source') || '',
    utm_medium: getCookie('utm_medium') || '',
    utm_campaign: getCookie('utm_campaign') || '',
    utm_adgroup: getCookie('utm_adgroup') || '',
    utm_keyword: getCookie('utm_keyword') || '',
    utm_term: getCookie('utm_term') || '',
    utm_content: getCookie('utm_content') || '',
    landing_page_url: getCookie('landing_page_url') || '',
    device: getCookie('device') || getDeviceType(),
  };
}

function getDeviceType(): string {
  if (typeof window === 'undefined') return '';
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}
