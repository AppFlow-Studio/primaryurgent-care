import React from 'react'
import Image from 'next/image'
import { MapPin, Phone } from 'lucide-react'
import LocationFeatureCard from '@/components/ui/LocationFeatureCard'
import Ambulance from '@/components/icons/ambulance'
import Waittimes from '@/components/icons/waittimes'
import ShieldUser from '@/components/icons/shielduser'
import { LocationsScreens } from '@/components/locationsscreens'
import Link from 'next/link'
import ClinicsMap from '@/components/clinicsmap'

export const metadata = {
  title: "Urgent Care Locations Near You | Palm Beach County Walk-In Clinics | Primary & Urgent Care Centers",
  description: "Find a Primary & Urgent Care Center near you in Palm Beach County. Walk-in clinics in Royal Palm Beach, Lake Worth, Palm Springs, and Lantana. Short wait times, most insurance accepted, and hospital-level care.",
  keywords: [
    "urgent care Palm Beach County", "Palm Beach County walk-in clinic", "urgent care near me Palm Beach", "Palm Beach urgent care locations", "walk-in clinic in Palm Beach County open now", "closest urgent care in Royal Palm Beach area", "urgent care locations in West Palm Beach area", "best urgent care in Palm Beach", "urgent care Royal Palm Beach", "urgent care Lake Worth", "urgent care Palm Springs", "urgent care Lantana", "local urgent care directory"
  ],
  openGraph: {
    title: "Urgent Care Locations Near You | Palm Beach County Walk-In Clinics | Primary & Urgent Care Centers",
    description: "Find a Primary & Urgent Care Center near you in Palm Beach County. Walk-in clinics in Royal Palm Beach, Lake Worth, Palm Springs, and Lantana. Short wait times, most insurance accepted, and hospital-level care.",
    url: "https://wpucc.com/locations",
    images: [
      { url: "https://wpucc.com/servicelanding.jpg", width: 1200, height: 630, alt: "Urgent Care Locations Palm Beach County" }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Urgent Care Locations Near You | Palm Beach County Walk-In Clinics | Primary & Urgent Care Centers",
    description: "Find a Primary & Urgent Care Center near you in Palm Beach County. Walk-in clinics in Royal Palm Beach, Lake Worth, Palm Springs, and Lantana. Short wait times, most insurance accepted, and hospital-level care.",
    images: [
      { url: "https://wpucc.com/servicelanding.jpg", alt: "Urgent Care Locations Palm Beach County" }
    ]
  },
  alternates: {
    canonical: "https://wpucc.com/locations"
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/apple-icon.png",
    apple: "/apple-icon.png"
  }
};

function LocationsJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          "name": "Primary & Urgent Care Centers of Palm Beach County",
          "description": "Walk-in urgent care clinics in Royal Palm Beach, Lake Worth, Palm Springs, and Lantana. Short wait times, most insurance accepted, and hospital-level care.",
          "url": "https://primaryurgentcare.com/locations",
          "image": "https://primaryurgentcare.com/servicelanding.jpg",
          "areaServed": [
            "Royal Palm Beach", "Lake Worth", "Palm Springs", "Lantana", "Palm Beach County"
          ],
          "department": [
            {
              "@type": "MedicalClinic",
              "name": "Royal Palm Beach Primary & Urgent Care Center",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "11476 Okeechobee Blvd.",
                "addressLocality": "Royal Palm Beach",
                "addressRegion": "FL",
                "postalCode": "33411",
                "addressCountry": "US"
              },
              "telephone": "+1-561-204-5111"
            },
            {
              "@type": "MedicalClinic",
              "name": "Lake Worth Primary & Urgent Care Center",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "6447 Lake Worth Road",
                "addressLocality": "Lake Worth",
                "addressRegion": "FL",
                "postalCode": "33463",
                "addressCountry": "US"
              },
              "telephone": "+1-561-433-1700"
            },
            {
              "@type": "MedicalClinic",
              "name": "Palm Springs Primary & Urgent Care Center",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3696 S. Congress Ave.",
                "addressLocality": "Palm Springs",
                "addressRegion": "FL",
                "postalCode": "33461",
                "addressCountry": "US"
              },
              "telephone": "+1-561-969-1595"
            },
            {
              "@type": "MedicalClinic",
              "name": "Lantana Primary & Urgent Care Center",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "6169 S Jog Road, Unit 4B",
                "addressLocality": "Lantana",
                "addressRegion": "FL",
                "postalCode": "33467",
                "addressCountry": "US"
              },
              "telephone": "+1-561-249-6959"
            }
          ],
          "medicalSpecialty": [
            "Urgent Care", "Primary Care", "Walk-In Clinic", "Injury Care", "Diagnostics"
          ],
          "availableService": [
            "Walk-in urgent care",
            "Injury and illness treatment",
            "On-site X-ray, MRI, CT",
            "Physicals and preventive care",
            "Short wait times",
            "Most insurance accepted"
          ],
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
              ],
              "opens": "08:00",
              "closes": "20:00"
            }
          ]
        })
      }}
    />
  );
}

const LocationsPage = () => {
  return (
    <main className="w-full bg-[#FAFAFA] min-h-screen lg:py-20 py-10 max-w-8xl mx-auto lg:px-[60px] px-6">
      <LocationsJsonLd />
      <div className="w-full mx-auto flex flex-col items-center mb-12">
        <div className="text-sm mb-2">
          <span className="text-[#2563eb]">Locations</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-black text-center mb-4">Find a Location Near You</h1>
        <p className="text-lg text-gray-600 text-center mb-8">We're just around the corner—drop by and experience our service in person.</p>
      </div>
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {LocationsScreens.map((loc, i) => (
          <ClinicsMap key={i} startingClinic={loc} />
        ))}
      </div>

        {/* Feature cards section */}
        <div className="max-w-8xl items-stretch   mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:py-20 py-10">
        <LocationFeatureCard
          icon={<Ambulance />}
          title="Urgent Care"
          description="Primary and Urgent Care Centers provide local and personal care for a variety of general health-care needs."
        />
        <LocationFeatureCard
          icon={<Waittimes />}
          title="Short Wait Times"
          description={"Nobody likes sitting in a doctor's waiting room, not knowing when you'll be called, so we don't make you wait. Our system allows people to be seen quickly so you'll start feeling better sooner."}
        />
        <LocationFeatureCard
          icon={<ShieldUser />}
          title="Most Insurance Accepted"
          description={"Our co-pays are less than hospital emergency room fees and we will work with you to process your insurance"}
        />
      </div>
    </main>
  )
}

export default LocationsPage