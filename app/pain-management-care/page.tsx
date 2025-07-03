import Mappin from '@/components/icons/mappin'
import Calendar from '@/components/icons/calendar'
import Pdf from '@/components/icons/pdf'
import Image from 'next/image'
import React from 'react'
import NeckPain from '@/components/icons/neckpain'
import BackPain from '@/components/icons/backpain'
import HandPain from '@/components/icons/handpain'
import ShoulderPain from '@/components/icons/shoulderpain'
import KneePain from '@/components/icons/kneepain'
import Headaches from '@/components/icons/headaches'
import Reviews from '@/components/Reviews'
import GradientImage from '@/components/ui/GradientImage'
import Reveal from '@/components/RevealAnimation'
import SlidingDiv from '@/components/SlidingAnimation'
import PainCareWeTreat  from '@/components/paincarewetreat'
import Testimonials from '@/components/testimonials'

export const metadata = {
  title: "Suboxone Treatment & Pain Management Clinic | MAT & Opioid Detox | Palm Beach County, FL",
  description: "Confidential, same-day Suboxone treatment and holistic pain management. Walk-in MAT clinic for opioid detox, chronic pain, and medication-assisted therapy. Serving Royal Palm Beach, Lake Worth, Palm Springs, and Lantana. Immediate appointments.",
  keywords: [
    "Suboxone treatment Palm Beach", "Suboxone clinic near me", "Suboxone doctor in Palm Beach County", "urgent care Suboxone clinic", "medication-assisted treatment MAT", "opioid detox urgent care", "walk-in Suboxone treatment Royal Palm Beach", "same-day Suboxone appointment Lake Worth", "affordable Suboxone program West Palm Beach", "buprenorphine treatment near me", "outpatient opioid treatment Florida", "pain management clinic Palm Beach", "chronic pain urgent care", "pain management specialist Royal Palm Beach"
  ],
  openGraph: {
    title: "Suboxone Treatment & Pain Management Clinic | MAT & Opioid Detox | Palm Beach County, FL",
    description: "Confidential, same-day Suboxone treatment and holistic pain management. Walk-in MAT clinic for opioid detox, chronic pain, and medication-assisted therapy. Serving Palm Beach County.",
    url: "https://wpucc.com/pain-management-program",
    images: [
      { url: "https://wpucc.com/painmanage.jpg", width: 1200, height: 630, alt: "Suboxone Treatment & Pain Management Clinic" }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Suboxone Treatment & Pain Management Clinic | MAT & Opioid Detox | Palm Beach County, FL",
    description: "Confidential, same-day Suboxone treatment and holistic pain management. Walk-in MAT clinic for opioid detox, chronic pain, and medication-assisted therapy. Serving Palm Beach County.",
    images: [
      { url: "https://wpucc.com/painmanage.jpg", alt: "Suboxone Treatment & Pain Management Clinic" }
    ]
  },
  alternates: {
    canonical: "https://wpucc.com/pain-management-program"
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/apple-icon.png",
    apple: "/apple-icon.png"
  }
};

function PainManagementJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          "name": "Primary & Urgent Care Centers of Palm Beach County",
          "description": "Confidential, same-day Suboxone treatment and holistic pain management. Walk-in MAT clinic for opioid detox, chronic pain, and medication-assisted therapy. Serving Royal Palm Beach, Lake Worth, Palm Springs, and Lantana.",
          "url": "https://wpucc.com/pain-management-program",
          "image": "https://wpucc.com/painmanage.jpg",
          "telephone": "+1-561-204-5111",
          "address": [
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
          "areaServed": [
            "Royal Palm Beach", "Lake Worth", "Palm Springs", "Lantana", "Palm Beach County"
          ],
          "medicalSpecialty": [
            "Pain Management", "Suboxone Treatment", "Medication-Assisted Treatment", "Opioid Detox", "Chronic Pain", "MAT Clinic"
          ],
          "availableService": [
            "Suboxone (buprenorphine/naloxone) treatment",
            "Medication-assisted therapy (MAT)",
            "Opioid detox and withdrawal management",
            "Chronic pain management",
            "Integrative pain therapies",
            "Same-day and walk-in appointments",
            "Confidential addiction treatment"
          ],
          "priceRange": "$299 initial Suboxone visit, most insurance accepted",
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

const PainManagementProgramPage = () => {
    return (
        <main className='w-full bg-[#FAFAFA] xl:py-20 py-10 px-4 lg:px-[60px]'>
            <PainManagementJsonLd />
            
            <div className="max-w-8xl mx-auto rounded-2xl bg-[#F2F6FC] grid grid-cols-1 xl:grid-cols-2 gap-0 md:gap-20 p-4 md:p-12 items-center shadow-sm">
                {/* Left: Text and Buttons */}
                <Reveal className='w-full overflow-hidden'>
                    <div className="flex flex-col justify-center h-full">
                        <p className='text-black text-sm mb-6 font-[500]'>Services/<span className="text-[#2563eb] text-sm mb-6 font-[500]">Pain Management Care</span></p>
                        <h1 className="text-4xl md:text-6xl font-[600] text-black mb-8 ">A Holistic Approach to Pain Management</h1>
                        <p className="text-base md:text-lg text-gray-700 mb-4">
                            Living with pain can hinder your ability to work, care for yourself and your loved ones, and enjoy life. It can significantly diminish your overall well-being. At Primary & Urgent Care Center's Pain Management Program, our goal is to help you alleviate your discomfort so you can return to your daily activities.
                        </p>
                        <p className="text-base md:text-lg text-gray-700 mb-4">
                            We begin by identifying the underlying causes of your pain. We consider your medical history, current health status, and any treatments you have undergone or are currently receiving. From there, we create a personalized plan tailored to your unique requirements.
                        </p>
                        <p className="text-base md:text-lg text-gray-700 mb-4">
                            At Primary & Urgent Care Center's, we address various types of pain, including discomfort in the head and neck, back, arms, hands, and legs. Our advanced services feature techniques like peripheral nerve stimulation, spinal cord stimulation, and interventional pain management guided by imaging.                    </p>
                        <p className="text-base md:text-lg text-gray-700 mb-4">
                            Alongside our conventional therapies, we provide an Integrative Pain Management Program that merges traditional methods with Eastern practices, such as acupuncture. Our aim is to ensure you have access to every safe and effective option available for pain relief.
                        </p>
                        <div className="flex flex-wrap gap-3 mt-2">
                            <button className="bg-[#D52128] text-white font-medium px-5 py-3 rounded-lg flex items-center justify-center text-base hover:bg-[#b81b22] transition gap-2"><Calendar /> Make A Reservation</button>
                            <button className="bg-[#2563eb] text-white font-medium px-5 py-3 rounded-lg flex items-center justify-center text-base hover:bg-[#174ea6] transition gap-2"><Mappin /> Find A Location</button>
                            <button className="border border-gray-400 text-black font-medium px-5 py-3 rounded-lg flex items-center justify-center text-base bg-white hover:bg-gray-100 transition gap-2">
                                <Pdf /> Registration Form
                            </button>
                        </div>
                    </div>
                </Reveal>
                {/* Right: Image */}
                <div className="flex justify-center relative items-center w-full xl:h-full sm:h-200 h-100 mt-8 md:mt-0">
                    <Image
                        src="/painmanage.jpg"
                        alt="Appointment"
                        fill
                        className="rounded-2xl object-cover w-full h-[340px] md:h-[420px]"
                    />
                </div>
            </div>
            <section className="w-full bg-white lg:py-20 py-10 px-4 md:px-[60px]">
                    <div className="max-w-7xl mx-auto flex flex-col items-center">
                        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6">Managing Chronic Pain Effectively</h2>
                        <p className="text-lg text-gray-700 text-center max-w-3xl mb-12">
                            Are you experiencing chronic pain and seeking immediate relief? At Pain Management NYC, our skilled orthopedic specialists provide tailored pain management and injury-specific care to help you find prompt and effective solutions.
                        </p>
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            {/* Left: Text */}
                            <SlidingDiv className='w-full overflow-hidden' position='left'>
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Pain Management & Urgent Care Facility</h2>
                                    <p className="text-base md:text-lg text-gray-800 mb-8">
                                        Our urgent care centers specialize in pain management, offering a variety of treatments such as medications, physical therapy, sports medicine, and primary care. We aim to reduce inflammation and alleviate pain while enhancing mobility. Patients can receive comprehensive care on-site, minimizing the need for multiple visits. Our orthopedic clinic is ready to assist both new and returning patients, and we can easily schedule follow-up appointments.
                                    </p>
                                    <h3 className="text-xl md:text-2xl font-bold mb-2">Further Details</h3>
                                    <p className="text-base md:text-lg text-gray-800">
                                        At our orthopedic urgent care centers, patients receive immediate relief from qualified professionals. We emphasize accurate diagnoses, personalized treatment plans, and patient education, ensuring a holistic approach to pain management that enhances quality of life.
                                    </p>
                                </div>
                            </SlidingDiv>
                            {/* Right: Image with gradient overlay */}
                            <GradientImage
                                src="/painmanage2.jpg"
                                alt="Pain management consultation"
                                className="object-cover w-full h-full rounded-2xl"
                            />
                        </div>
                    </div>
            </section>
            {/* Pain & Injuries We Treat After Accidents Section */}
           <PainCareWeTreat />

            <Testimonials />
        </main>
    )
}

export default PainManagementProgramPage