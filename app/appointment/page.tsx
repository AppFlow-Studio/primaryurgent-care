import React from 'react'
import Image from 'next/image';
import { FileText, IdCard, FileCheck2, Users } from 'lucide-react';
import Ambulance from '@/components/icons/ambulance';
import Id from '@/components/icons/id';
import UserGroup from '@/components/icons/user-group';
import Aidkit from '@/components/icons/aidkit';
import Document from '@/components/icons/document';
import Pdf from '@/components/icons/pdf';
import Mappin from '@/components/icons/mappin';
import Calendar from '@/components/icons/calendar';
import FAQSection from '@/components/ui/FAQSection';
import Reveal from '@/components/RevealAnimation';
import Link from 'next/link';
import BookAnAppointmentPopup from '@/components/BookAnAppointmentPopup';

export const metadata = {
  title: 'Book Urgent Care Appointment Palm Beach | Same Day & Walk-In Visits',
  description: 'Schedule a same-day urgent care appointment or walk in to any of our Palm Beach County clinics. Fast check-in, short wait times, most insurance accepted, $69 self-pay.',
  keywords: [
    'urgent care appointment',
    'book urgent care',
    'same day doctor',
    'walk-in clinic Palm Beach',
    'urgent care near me',
    'fast check-in urgent care',
    'Palm Beach urgent care',
    'affordable urgent care',
    'insurance urgent care',
    '$69 urgent care',
    'same day urgent care',
    'online urgent care booking'
  ].join(', '),
  openGraph: {
    title: 'Book Urgent Care Appointment Palm Beach | Same Day & Walk-In Visits',
    description: 'Schedule a same-day urgent care appointment or walk in to any of our Palm Beach County clinics. Fast check-in, short wait times, most insurance accepted, $69 self-pay.',
    url: 'https://wpucc.com/appointment',
    siteName: 'Primary & Urgent Care Centers',
    images: [
      {
        url: '/appointment.png',
        width: 1200,
        height: 630,
        alt: 'Book Urgent Care Appointment Palm Beach',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Urgent Care Appointment Palm Beach | Same Day & Walk-In Visits',
    description: 'Schedule a same-day urgent care appointment or walk in to any of our Palm Beach County clinics. Fast check-in, short wait times, most insurance accepted, $69 self-pay.',
    images: ['/appointment.png'],
  },
  alternates: {
    canonical: 'https://wpucc.com/appointment',
  },
};

const AppointmentPage = () => {
    return (
        <main className="w-full bg-[#FAFAFA] lg:py-20 py-10 px-4 lg:px-[60px] min-h-screen">
            <div className="max-w-8xl mx-auto rounded-2xl bg-[#F2F6FC] grid grid-cols-1 xl:grid-cols-2 gap-0 md:gap-20 p-8 md:p-12 items-center shadow-sm">
                {/* Left: Text and Buttons */}
                <Reveal className="w-full overflow-hidden">
                    <div className="flex flex-col justify-center h-full">
                        <span className="text-[#2563eb] text-sm mb-6 font-[500]">Appointment</span>
                        <h1 className="text-4xl md:text-6xl font-[600] text-black mb-8 ">Same Day Appointments & Guaranteed Walk-Ins</h1>
                        <p className="text-base md:text-lg text-gray-700 mb-4">
                            At Primary & Urgent Care Centers, we're here for you Monday–Friday, 9am-6pm, Saturday 9am-4pm. Choose a same-day appointment or simply walk in—either way, you'll be welcomed into clean, comfortable surroundings that deliver emergency-level care without the hospital wait. Appointments are preferred but never required.
                        </p>
                        <p className="text-base md:text-lg text-gray-700 mb-4">
                            Most visitors are seen in 15 minutes or less by our board-certified team. With on-site digital X-ray, 1.5 T MRI, CT, ultrasound, and lab analyzers, we deliver hospital-level care using true emergency-room equipment. Expect STAT imaging reads within three hours and same-day scan results for most studies; if you need specialty follow-up or admission, we'll arrange a prompt referral through our trusted consultant network.
                        </p>
                        <p className="text-base md:text-lg text-gray-700 mb-4">
                            We accept most insurance plans, and our co-pays are far below typical emergency-room fees. No coverage? Our transparent self-pay pricing keeps quality care within reach, and our staff will help you navigate any billing questions.
                        </p>
                        <p className="text-base md:text-lg text-gray-700 mb-4">
                            Every clinic is fully staffed by experienced physicians, all led by a Clinical Director so you get fast answers, compassionate attention, and a walk-in guaranteed appointment whenever you need us.
                        </p>
                        <div className="flex flex-wrap gap-3 mt-2">
                            <BookAnAppointmentPopup>
                                <button className="bg-[#D52128] text-white font-medium px-5 py-3 rounded-lg flex items-center justify-center text-base hover:bg-[#b81b22] transition gap-2"><Calendar /> Make A Reservation</button>
                            </BookAnAppointmentPopup>
                            <Link href={`/locations`} className="bg-[#2563eb] text-white font-medium px-5 py-3 rounded-lg flex items-center justify-center text-base hover:bg-[#174ea6] transition gap-2"><Mappin /> Find A Location</Link>
                            <a
                                href="/primaryurgentcareform.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-gray-400 text-black font-medium px-5 py-3 rounded-lg flex items-center justify-center text-base bg-white hover:bg-gray-100 transition gap-2"
                            >
                                <Pdf /> Registration Form
                            </a>
                        </div>
                    </div>
                </Reveal>
                {/* Right: Image */}
                <div className="flex justify-center relative items-center w-full xl:h-full mt-8 md:mt-0 lg:h-200 h-100">
                    <Image
                        src="/appointment.png"
                        alt="Appointment"
                        fill
                        className="rounded-2xl object-cover w-full xl:h-[420px]"
                    />
                </div>
            </div>

            {/* Prepare for Your Visit Section */}
            <section className="w-full bg-[#FAFAFA] py-24 px-4 lg:px-[60px]">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <h2 className="text-6xl font-bold text-black text-center mb-4">Prepare for Your Visit</h2>
                    <p className="text-lg text-gray-500 text-center lg:mb-20 mb-10">What to Bring to Ensure a Smooth and Efficient Check in</p>

                    <div className="grid xl:grid-cols-3 grid-cols-1 xl:gap-x-10 gap-y-10 xl:gap-y-0 w-full items-center">
                        {/* Left: Image */}
                        <div className="xl:col-span-1 xl:order-1 order-2 w-full  lg:h-200 h-100 xl:h-full flex items-stretch justify-center">
                            <div className="w-full h-full relative">
                                <Image
                                    src="/prepareforvisit.png"
                                    alt="Prepare for visit"
                                    fill
                                    className="rounded-2xl object-cover object-center w-full h-full"
                                />
                            </div>
                        </div>
                        {/* Right: 2x2 grid of cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 col-span-2 gap-0 w-full h-full rounded-2xl overflow-hidden border border-[#eee]">
                            {/* Card 1 */}
                            <div className="bg-[#F2F6FC] p-8 border-b border-r rounded-br-2xl border-[#E67A7E] relative flex flex-col min-h-[220px]">
                                <div className="absolute top-6 right-6 bg-white rounded-full p-3 shadow-sm">
                                    <Id />
                                </div>
                                <Reveal className='w-full overflow-hidden'>
                                    <div className='flex flex-col'>
                                        <h3 className="text-2xl font-bold text-black mb-6">Photo Identification</h3>
                                        <p className="text-gray-700 font-[500] text-lg">Bring one government-issued photo ID for every adult patient or the adult escorting a minor. We accept driver's licenses, passports, military IDs, student IDs, or work badges.</p>
                                    </div>
                                </Reveal>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-[#FDF4F4] p-8 border-b border-l rounded-bl-2xl border-[#E67A7E] relative flex flex-col min-h-[220px]">
                                <div className="absolute top-6 right-6 bg-white rounded-full p-3 shadow-sm">
                                    <Document />
                                </div>
                                <Reveal className='w-full overflow-hidden'>
                                    <div className='flex flex-col'>
                                        <h3 className="text-2xl font-bold text-black mb-6">Proof of Insurance</h3>
                                        <p className="text-gray-700 font-[500] text-lg">For non-work injuries and minor illnesses, present your current insurance card or digital proof. Early verification speeds up urgent-care insurance processing and keeps your out-of-pocket costs low.</p>
                                    </div>
                                </Reveal>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-[#FDF4F4] p-8 border-r rounded-tr-2xl border-t border-[#E67A7E] relative flex flex-col min-h-[220px]">
                                <div className="absolute top-6 right-6 bg-white rounded-full p-3 shadow-sm">
                                    <UserGroup />
                                </div>
                                <Reveal className='w-full overflow-hidden'>
                                    <div className='flex flex-col'>
                                        <h3 className="text-2xl font-bold text-black mb-6">Proof of Gurdionship</h3>
                                        <p className="text-gray-700 font-[500] text-lg">Adults accompanying patients under 18 must show legal guardianship. If you're not the parent/legal guardian, bring a notarized consent form signed by a parent or guardian so our team can treat your child without delay.</p>
                                    </div>
                                </Reveal>
                            </div>
                            {/* Card 4 */}
                            <div className="bg-[#F2F6FC] p-8 rounded-tl-2xl border-l border-t border-[#E67A7E] relative flex flex-col min-h-[220px]">
                                <div className="absolute top-6 right-6 bg-white rounded-full p-3 shadow-sm">
                                    <Aidkit />
                                </div>
                                <Reveal className='w-full overflow-hidden'>
                                    <div className=''>
                                        <h3 className="text-2xl font-bold text-black mb-6">Medical History</h3>
                                        <p className="text-gray-700 font-[500] text-lg">List any allergies, prescription or OTC meds, chronic conditions, and past surgeries. Complete medical history lets our clinicians deliver safe, hospital-level care on your first visit and ensures same-day urgent-care treatment plans.</p>
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection />
        </main>
    )
}

export default AppointmentPage