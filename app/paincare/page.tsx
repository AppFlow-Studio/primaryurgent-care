import BookAppointmentForm from '@/components/ui/BookAppointmentForm'
import Phone from '@/components/icons/phone'
import Image from 'next/image'
import React from 'react'
import AccidentTypesTabs from '@/components/ui/AccidentTypesTabs'
import NeckPain from '@/components/icons/neckpain';
import BackPain from '@/components/icons/backpain';
import HandPain from '@/components/icons/handpain';
import ShoulderPain from '@/components/icons/shoulderpain';
import KneePain from '@/components/icons/kneepain';
import Headaches from '@/components/icons/headaches';
import Reveal from '@/components/RevealAnimation'
import SlidingDiv from '@/components/SlidingAnimation'
import PainCareWeTreat from '@/components/paincarewetreat'

export const metadata = {
  title: "Auto Accident & Personal Injury Urgent Care | PIP 14-Day Rule | Palm Beach County, FL",
  description: "Get immediate care for car accident injuries, whiplash, back or neck pain, and personal injury. Seen in under 15 min. On-site X-ray, MRI, and direct PIP billing. Serving Royal Palm Beach, Lake Worth, Palm Springs, and Lantana. $69 self-pay. Free records to your attorney.",
  keywords: [
    "auto accident urgent care", "car accident clinic", "whiplash treatment urgent care", "PIP urgent care Florida 14-day rule", "personal injury urgent care", "car accident doctor near me", "accident injury clinic", "urgent care for whiplash", "urgent care for car accident injuries Palm Beach", "after accident medical care without ER", "urgent care for back pain", "urgent care for neck pain", "Palm Beach County urgent care", "walk-in accident doctor", "PIP doctor near me", "no-fault injury clinic", "urgent care for seat belt injury"
  ],
  openGraph: {
    title: "Auto Accident & Personal Injury Urgent Care | PIP 14-Day Rule | Palm Beach County, FL",
    description: "Immediate care for car accident injuries, whiplash, and back pain. On-site imaging, PIP paperwork, and fast appointments. Serving Palm Beach County.",
    url: "https://wpucc.com/paincare",
    images: [
      { url: "https://wpucc.com/paincare.jpg", width: 1200, height: 630, alt: "Auto Accident & Personal Injury Urgent Care" }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Accident & Personal Injury Urgent Care | PIP 14-Day Rule | Palm Beach County, FL",
    description: "Immediate care for car accident injuries, whiplash, and back pain. On-site imaging, PIP paperwork, and fast appointments. Serving Palm Beach County.",
    images: [
      { url: "https://wpucc.com/paincare.jpg", alt: "Auto Accident & Personal Injury Urgent Care" }
    ]
  },
  alternates: {
    canonical: "https://wpucc.com/paincare"
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/apple-icon.png",
    apple: "/apple-icon.png"
  }
};

function PainCareJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          "name": "Primary & Urgent Care Centers of Palm Beach County",
          "description": "Immediate care for auto accident injuries, whiplash, back and neck pain, and personal injury. On-site X-ray, MRI, and direct PIP billing. Serving Royal Palm Beach, Lake Worth, Palm Springs, and Lantana.",
          "url": "https://wpucc.com/paincare",
          "image": "https://wpucc.com/paincare.jpg",
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
            "Accident & Injury Care", "Whiplash Treatment", "Personal Injury", "PIP 14-Day Rule", "Urgent Care", "Back Pain", "Neck Pain"
          ],
          "availableService": [
            "Auto accident injury treatment",
            "Whiplash evaluation",
            "On-site X-ray, CT, MRI",
            "PIP paperwork & direct billing",
            "Attorney documentation",
            "Same-day appointments",
            "Walk-in care for accident injuries"
          ],
          "priceRange": "$69+ self-pay, most insurance accepted",
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

const PainCare = () => {
    return (
        <main>
            <PainCareJsonLd />
            <section className="relative h-full w-full xl:px-[60px] px-4">
                {/* Background image */}
                <div className="absolute inset-0 w-full h-full -z-10">
                    <Image
                        src="/paincare.jpg"
                        alt="Pain Care Landing Background"
                        fill
                        className="object-cover w-full h-full"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#222]/80 via-[#222]/60 to-[#222]/40" />
                </div>
                <div className="relative flex flex-col lg:flex-row items-center justify-between xl:py-20 py-10 max-w-8xl mx-auto px-4 md:px-12 gap-10">
                    {/* Left: Content */}
                    <div className="flex-1 flex flex-col justify-center items-center text-white max-w-2xl">
                        <div className="mb-6">
                            <span className="bg-[rgba(255,255,255,0.20)] text-white font-semibold px-6 py-2 rounded-[12px] text-lg shadow-md backdrop-blur-[8.5px]">Pain Care</span>
                        </div>
                        <h1 className="md:text-5xl xl:text-6xl text-4xl font-600 mb-6 leading-tight text-center">Auto-Accident & Personal-Injury Urgent Care Book Same-Day</h1>
                        <p className="text-lg mb-8 max-w-2xl text-center">
                            Whiplash, back or neck pain, headaches, seat-belt bruises? Get hospital-level imaging, doctor documentation. Seen in less then 15 min, on-site X-ray & MRI with STAT reads (less then 3 hrs), most insurance accepted, $69 self-pay.<br /><br />Free medical records & bills sent to your attorney within 24 hrs.
                        </p>
                        <div className="flex xl:flex-wrap xl:flex-row flex-col gap-4 w-full justify-center">
                            <button className="bg-[#D52128] text-white font-semibold px-8 py-4 xl:w-[40%] w-full justify-center rounded-xl xl:text-lg text-base shadow hover:bg-[#b81b22] transition">Find a Clinic</button>
                            <a href="tel:5612045111" className="bg-white text-[#D52128] font-semibold px-8 py-4 rounded-xl xl:text-lg text-base shadow flex xl:w-[40%] w-full justify-center items-center gap-3 hover:bg-gray-100 transition">
                                <Phone /> (561) 204-5111
                            </a>
                        </div>
                    </div>
                    {/* Right: Form in blurred card */}
                    <div className="flex-1 flex justify-center items-center w-full max-w-xl">
                        <BookAppointmentForm title="Request Same-Day Visit" bgColor="bg-[rgba(255,255,255,0.22)] backdrop-blur-[7.150000095367432px]" textColor="text-white" />
                    </div>
                </div>
            </section>

            <section className='grid lg:grid-cols-2 gap-14 h-full xl:px-[60px] px-4 lg:py-20 py-2'>
                <div className='w-full h-full relative rounded-2xl overflow-hidden '><Image src="/piprule.jpg" alt="Urgent Injury Care" fill className='object-cover aspect-square' /></div>
                <SlidingDiv position='right' className='flex flex-col gap-2'>
                    <div className=' flex items-start justify-center xl:py-14 py-10 space-y-6 flex-col'>
                        <p className='lg:text-6xl text-5xl font-600'>Florida's 14-Day PIP Rule  See a Doctor Fast to Protect Your Claim</p>
                        <p className='text-lg text-[#494647]'>
                            Under Florida's Personal Injury Protection (PIP) law, you must receive medical care within 14 days of your car accident to unlock PIP benefits no matter who was at fault. Miss this window and the insurance carrier can deny payment for treatment, imaging, prescriptions, and lost wages.<br /><br />
                            Even "minor" aches can mask whiplash, internal bleeding, or herniated discs, so book a same-day auto-injury visit or walk in today:
                            <br />
                            <li>On-site digital X-ray, CT & MRI with STAT reads (≤ 3 hrs)</li>
                            <li>Detailed injury documentation for attorneys & insurers</li>
                            <li>Direct PIP billing—no out-of-pocket surprise bills</li>
                            <li>Open extended hours across Palm Beach County</li>
                        </p>
                    </div>
                </SlidingDiv>
            </section>
            <AccidentTypesTabs />
            <section className="relative w-full xl:py-52 py-10 flex items-center justify-center ">
                <Image
                    src="/car-accident.jpg"
                    alt="Immediate care for injuries"
                    fill
                    className="object-cover w-full object-center h-full -z-10"
                    priority
                />
                <div className="absolute inset-0 bg-[#570000]/50 -z-10" />
                <div className="flex flex-col items-center justify-center h-full text-center self-center xl:w-[50%] w-full">
                    <h2 className="lg:text-5xl md:text-6xl text-4xl font-bold text-white mb-6">Car-Accident Injury Care  Palm Beach County, FL</h2>
                    <div className="text-lg md:text-xl text-white max-w-2xl mx-auto">
                        Seen in less then 15 min by a car-accident doctor for whiplash, back or neck pain, and seat-belt injuries. On-site X-ray, CT, MRI with STAT reads (less then 3 hrs) and PIP paperwork filed within Florida's 14-day rule no out-of-pocket surprise.
                    </div>
                </div>
            </section>
            {/* Pain & Injuries We Treat After Accidents Section */}
            <PainCareWeTreat />
            
        </main>
    )
}

export default PainCare