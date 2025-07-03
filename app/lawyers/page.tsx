import Image from 'next/image'
import React from 'react'
import LawyerRecordsForm from '@/components/ui/LawyerRecordsForm'

export const metadata = {
  title: "Legal Records Request for Attorneys | Auto Accident & Personal Injury Medical Records Palm Beach County",
  description:
    "Request urgent care medical records for auto accident, PIP, and personal injury cases. Fast, HIPAA-compliant legal records for attorneys and law firms in Palm Beach County. Immediate access to documentation for car accident, whiplash, and injury claims.",
  keywords: [
    "legal records request",
    "attorney medical records",
    "auto accident medical records",
    "PIP records urgent care",
    "personal injury documentation",
    "car accident doctor records",
    "lawyer urgent care records",
    "Palm Beach County legal records",
    "HIPAA compliant medical records",
    "urgent care for attorneys",
    "medical records for law firms",
    "whiplash injury documentation",
    "accident injury records Palm Beach"
  ],
  openGraph: {
    title: "Legal Records Request for Attorneys | Auto Accident & Personal Injury Medical Records Palm Beach County",
    description:
      "Request urgent care medical records for auto accident, PIP, and personal injury cases. Fast, HIPAA-compliant legal records for attorneys and law firms in Palm Beach County.",
    url: "https://wpucc.com/lawyers",
    type: "website",
    images: [
      {
        url: "https://wpucc.com/lawyers.jpg",
        width: 1200,
        height: 630,
        alt: "Lawyers requesting urgent care medical records Palm Beach County"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Records Request for Attorneys | Auto Accident & Personal Injury Medical Records Palm Beach County",
    description:
      "Request urgent care medical records for auto accident, PIP, and personal injury cases. Fast, HIPAA-compliant legal records for attorneys and law firms in Palm Beach County.",
    images: [
      "https://wpucc.com/lawyers.jpg"
    ]
  },
  alternates: {
    canonical: "https://wpucc.com/lawyers"
  }
};

// Structured data for legal/medical records request
const LawyersJsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        name: 'Primary & Urgent Care Centers of Palm Beach County - Legal Records Department',
        url: 'https://wpucc.com/lawyers',
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Palm Beach County, FL'
        },
        serviceType: [
          'Medical Records Request',
          'Personal Injury Documentation',
          'Auto Accident Medical Records',
          'PIP 14-Day Rule Records',
          'HIPAA-Compliant Legal Records'
        ],
        provider: {
          '@type': 'MedicalClinic',
          name: 'Primary & Urgent Care Centers of Palm Beach County',
          url: 'https://wpucc.com',
          address: [
            {
              '@type': 'PostalAddress',
              streetAddress: '11476 Okeechobee Blvd.',
              addressLocality: 'Royal Palm Beach',
              addressRegion: 'FL',
              postalCode: '33411',
              addressCountry: 'US',
              name: 'Royal Palm Beach Primary & Urgent Care Center'
            },
            {
              '@type': 'PostalAddress',
              streetAddress: '6447 Lake Worth Road',
              addressLocality: 'Lake Worth',
              addressRegion: 'FL',
              postalCode: '33463',
              addressCountry: 'US',
              name: 'Lake Worth Primary & Urgent Care Center'
            },
            {
              '@type': 'PostalAddress',
              streetAddress: '3696 S. Congress Ave.',
              addressLocality: 'Palm Springs',
              addressRegion: 'FL',
              postalCode: '33461',
              addressCountry: 'US',
              name: 'Palm Springs Primary & Urgent Care Center'
            },
            {
              '@type': 'PostalAddress',
              streetAddress: '6169 S Jog Road, Unit 4B',
              addressLocality: 'Lantana',
              addressRegion: 'FL',
              postalCode: '33467',
              addressCountry: 'US',
              name: 'Lantana Primary & Urgent Care Center'
            }
          ],
          telephone: '+1-561-555-5555'
        },
        audience: [
          {
            '@type': 'Audience',
            audienceType: 'Personal Injury Attorneys'
          },
          {
            '@type': 'Audience',
            audienceType: 'Law Firms'
          }
        ],
        description: 'Request urgent care medical records for auto accident, PIP, and personal injury cases. Fast, HIPAA-compliant legal records for attorneys and law firms in Palm Beach County.'
      })
    }}
  />
);

const LawyersPage = () => {
    return (
        <main>
            <LawyersJsonLd />
            <LawyerRecordsForm />
            <section className="relative w-full items-center justify-center flex h-full">
                {/* Background image */}
                <div className="absolute inset-0 w-full h-full -z-10">
                    <Image
                        src="/lawyers.jpg"
                        alt="lawyers"
                        fill
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>
                <div className='absolute inset-0 w-full h-full -z-10'
                    style={{
                        background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%)'
                    }} />
                {/* Blurred overlay card */}
                <div className="relative flex h-full xl:py-16 py-10 w-full xl:px-[60px] px-4 max-w-8xl mx-auto">
                    <div className="backdrop-blur-[10.550000190734863px] bg-[rgba(242,246,252,0.10)] rounded-2xl max-w-8xl w-full mx-auto md:p-10 p-4 grid grid-cols-1 lg:grid-cols-2 gap-10 border border-white/30 h-full">
                        {/* Left: Text content */}
                        <div className="flex-1 flex flex-col gap-6">
                            <div className="text-sm mb-2">
                                <span className="text-[#1B1819]">Services/</span>
                                <span className="text-white ml-1">Lawyers</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 ">Legal Records Request for Attorneys</h1>
                            <p className="text-white lg:text-lg text-base mb-2">
                                If you are a legal representative seeking patient medical records, please complete the secure form below. This form allows our urgent care staff to connect with your law firm and process your request in compliance with HIPAA regulations. Please provide accurate details regarding the patient, date of service, and the type of records required. For your request to be processed, ensure that all necessary authorizations or subpoenas are uploaded and that the legal acknowledgement is accepted. We are committed to maintaining the confidentiality and security of all Protected Health Information (PHI) throughout the process.
                            </p>
                            <p className="text-white lg:text-lg text-base mb-2">
                                To help us process your request without delays, please fill in all required information, including your firm or attorney name, contact details, and the patient's full name and date of birth. Indicate the approximate date of service and specify which records are needed—whether the full chart, imaging only, or billing only—using the dropdown provided. Additionally, upload a secure file containing the signed authorization or subpoena relevant to the case.
                            </p>
                            <p className="text-white lg:text-lg text-base mb-2">
                                Before submitting, you must confirm that you are legally authorized to request the patient's medical records. By checking the HIPAA acknowledgement box, you affirm that you understand no Protected Health Information (PHI) will be transmitted through unsecured email and that your request complies with all applicable privacy laws.
                            </p>
                        </div>
                        {/* Right: Image and bullet points */}
                        <div className="flex-1 flex flex-col gap-6 justify-center">
                            <div className="w-full mb-4 relative lg:h-full h-100">
                                <Image
                                    src="/lawyer2.jpg"
                                    alt="Doctor Group"
                                    fill
                                    className="rounded-2xl object-cover object-top w-full "
                                />
                            </div>
                            <div className="text-white lg:text-lg text-base">
                                <p className="mb-2">
                                    We value the sensitivity of medical data and take every measure to protect the confidentiality and security of the information being requested. Our team is here to support legal professionals in obtaining timely and accurate records while upholding the highest standards of patient privacy.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default LawyersPage