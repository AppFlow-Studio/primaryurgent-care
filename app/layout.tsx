import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/Footer";
import BookAppointmentSection from "@/components/BookAppointmentSection";
import Script from "next/script";
import { buildConsentDefaultScript } from "@/lib/consent";
import GclidCapture from "@/components/GclidCapture";
import { ConsentProvider } from "@/components/ConsentProvider";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import CookiePreferencesModal from "@/components/CookiePreferencesModal";
import ConsentAwareScripts from "@/components/ConsentAwareScripts";

export const metadata: Metadata = {
  metadataBase: new URL('https://primaryuc.com'),
  title: "Primary and Urgent Care Centers of Florida",
  description: "Walk-in urgent care, injury, and pain management clinics in Palm Beach County. Hospital-level diagnostics, short wait times, and same-day appointments.",
  keywords: [
    'urgent care Palm Beach County',
    'walk-in clinic Palm Beach',
    'emergency care Palm Beach',
    'injury care Palm Beach',
    'pain management Palm Beach',
    'hospital-level urgent care',
    'same-day appointments',
    'board-certified doctors',
    'advanced imaging',
    'MRI CT X-ray Palm Beach'
  ].join(', '),
  openGraph: {
    title: "Primary and Urgent Care Centers of Florida",
    description: "Walk-in urgent care, injury, and pain management clinics in Palm Beach County. Hospital-level diagnostics, short wait times, and same-day appointments.",
    url: "https://primaryuc.com",
    siteName: "Primary & Urgent Care Centers",
    images: [
      {
        url: "https://primaryuc.com/websitelogo.png",
        width: 512,
        height: 512,
        alt: "Primary & Urgent Care Centers Logo"
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Primary and Urgent Care Centers of Florida",
    description: "Walk-in urgent care, injury, and pain management clinics in Palm Beach County. Hospital-level diagnostics, short wait times, and same-day appointments.",
    images: ['https://primaryuc.com/websitelogo.png'],
    site: '@primaryurgentcare',
  },
  alternates: {
    canonical: "https://primaryuc.com"
  },
  verification: {
    google: 'Idh-hqSzlxK9HgbSvASoNLMQXq70-x_ZhWaqfDFCs6g',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icon1.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon0.svg', type: 'image/svg+xml' },
      { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: '500'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={interTight.className} suppressHydrationWarning={true}>
      <head>
        {/* Google Consent Mode v2 - default state, must run before GTM/gtag load.
            Opt-in countries default to denied, everywhere else to granted.
            A returning visitor's stored choice is applied by ConsentProvider on
            mount; wait_for_update holds the opening hits until it lands. This is
            deliberately static: reading the consent cookie here would opt the
            whole route tree out of static rendering. */}
        <Script
          id="consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: buildConsentDefaultScript(),
          }}
        />
        {/* Google tag (gtag.js) - GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2BKMKZM043"
          strategy="afterInteractive"
        />
        <Script
          id="ga4-base"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2BKMKZM043');
            `,
          }}
        />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Organization + MedicalClinic Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://primaryuc.com/#organization',
                  name: 'Primary & Urgent Care Centers of Palm Beach County',
                  url: 'https://primaryuc.com',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://primaryuc.com/logo.png',
                    width: 512,
                    height: 512
                  },
                  description: 'Walk-in urgent care, injury, and pain management clinics in Palm Beach County. Hospital-level diagnostics, short wait times, and same-day appointments.',
                  areaServed: {
                    '@type': 'AdministrativeArea',
                    name: 'Palm Beach County, FL'
                  },
                  telephone: '+1-561-355-2651',
                  sameAs: [
                    'https://www.facebook.com/primaryurgentcare',
                    'https://www.instagram.com/primaryurgentcare'
                  ]
                },
                {
                  '@type': 'MedicalClinic',
                  '@id': 'https://primaryuc.com/#clinic',
                  name: 'Primary & Urgent Care Centers of Palm Beach County',
                  url: 'https://primaryuc.com',
                  telephone: '+1-561-355-2651',
                  image: {
                    '@type': 'ImageObject',
                    url: 'https://primaryuc.com/websitelogo.png',
                    width: 1200,
                    height: 630
                  },
                  description: 'Walk-in urgent care, injury, and pain management clinics in Palm Beach County. Hospital-level diagnostics, short wait times, and same-day appointments.',
                  areaServed: {
                    '@type': 'AdministrativeArea',
                    name: 'Palm Beach County, FL'
                  },
                  medicalSpecialty: [
                    'UrgentCare',
                    'PrimaryCare',
                    'Emergency',
                    'Pediatric'
                  ],
                  availableService: [
                    'Walk-in Urgent Care',
                    'Same-day Appointments',
                    'Hospital-level Imaging (MRI, CT, X-ray, Ultrasound)',
                    'On-site Lab Testing',
                    'Board-certified Doctors',
                    'Pediatric Care',
                    'Primary Care',
                    'Physicals & Screenings',
                    'Vaccinations',
                    'Chronic Disease Management',
                    "Women's & Men's Health",
                    'Telemedicine',
                    'Insurance & Self-pay Options'
                  ],
                  openingHours: [
                    'Mo-Fr 09:00-18:00',
                    'Sa 09:00-16:00'
                  ],
                  priceRange: '$$',
                  parentOrganization: { '@id': 'https://primaryuc.com/#organization' }
                }
              ]
            })
          }}
        />
        {/* Google Tag Manager */}
        <Script
          id="gtm-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TQFNQD3Z');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Ahrefs Analytics and Google Translate load only after consent via
            ConsentAwareScripts (rendered in body, gated by analytics/functional consent) */}
      </head>

      <body
        className={`${interTight.variable} antialiased overscroll-none`}
        suppressHydrationWarning
      >
        <ConsentProvider>
          <GclidCapture />
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-TQFNQD3Z"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          {/* End Google Tag Manager (noscript) */}
          <ConsentAwareScripts />
          <NavBar />
          <div className="mt-[74px] lg:mt-14">
            {children}
          </div>
          <BookAppointmentSection />
          <Footer />
          <CookieConsentBanner />
          <CookiePreferencesModal />
        </ConsentProvider>
      </body>
    </html>
  );
}
