import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Reveal from '@/components/RevealAnimation';
import Polestar from '@/components/icons/polestar';
import { Marquee } from '@/components/magicui/marquee';
import Link from 'next/link';

export const primaryCareServices = [
    {
        title: 'Sick Visits',
        slug: 'sick-visits',
        description: 'Prompt care for colds, flu, sore throat, earaches, and minor illnesses—walk in or book online.',
        icon: <Polestar />,
        image: '/placeholder-sick.jpg',
    },
    {
        title: 'Fever & Cough',
        slug: 'fever-cough',
        description: 'Expert evaluation and treatment for fever, cough, and respiratory symptoms in adults and children.',
        icon: <Polestar />,
        image: '/placeholder-fever.jpg',
    },
    {
        title: 'Preventive Care',
        slug: 'preventive-care',
        description: 'Annual checkups, screenings, and wellness visits to keep you healthy year-round.',
        icon: <Polestar />,
        image: '/placeholder-preventive.jpg',
    },
    {
        title: 'Annual Physicals',
        slug: 'annual-physicals',
        description: 'Comprehensive physical exams for school, work, sports, or peace of mind.',
        icon: <Polestar />,
        image: '/placeholder-physical.jpg',
    },
    {
        title: 'Chronic Disease Management',
        slug: 'chronic-disease',
        description: 'Ongoing care for diabetes, high blood pressure, asthma, and other chronic conditions.',
        icon: <Polestar />,
        image: '/placeholder-chronic.jpg',
    },
    {
        title: "Women's & Men's Health",
        slug: 'womens-mens-health',
        description: 'Routine exams, screenings, and care for women and men unique health needs.',
        icon: <Polestar />,
        image: '/placeholder-women-men.jpg',
    },
    {
        title: 'Pediatric Care',
        slug: 'pediatric-care',
        description: 'Gentle, family-friendly care for children of all ages, from newborns to teens.',
        icon: <Polestar />,
        image: '/placeholder-pediatric.jpg',
    },
    {
        title: 'Vaccinations',
        slug: 'vaccinations',
        description: 'Flu shots, school vaccines, travel immunizations, and more—no appointment needed.',
        icon: <Polestar />,
        image: '/placeholder-vaccine.jpg',
    },
    {
        title: 'Same-Day Appointments',
        slug: 'same-day',
        description: 'Get seen today—walk in or reserve your spot online for fast, convenient care.',
        icon: <Polestar />,
        image: '/placeholder-sameday.jpg',
    },
];

const visitSteps = [
    {
        step: '1',
        title: 'Check In',
        desc: 'Walk in or check in online. Our friendly staff greets you and gets you settled.'
    },
    {
        step: '2',
        title: 'Meet Your Doctor',
        desc: 'See a board-certified provider who listens and tailors care to your needs.'
    },
    {
        step: '3',
        title: 'Feel Better',
        desc: 'Get treatment, prescriptions, and follow-up—all in one place.'
    },

];

export const metadata = {
  title: "Primary Care Doctor | Family Medicine & Walk-In Clinic Palm Beach County",
  description: "See a primary care doctor for sick visits, checkups, physicals, and preventive care. Walk in or book online at our Palm Beach County urgent care and family medicine clinic.",
  keywords: [
    "primary care doctor",
    "family medicine",
    "walk-in clinic",
    "sick visit",
    "annual physical",
    "preventive care",
    "Palm Beach County",
    "urgent care"
  ],
  alternates: {
    canonical: "https://wpucc.com/primary-care-doctor"
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Primary Care Doctor | Family Medicine & Walk-In Clinic Palm Beach County",
    description: "See a primary care doctor for sick visits, checkups, physicals, and preventive care. Walk in or book online at our Palm Beach County urgent care and family medicine clinic.",
    url: "https://wpucc.com/primary-care-doctor",
    type: "website",
    images: [
      "https://wpucc.com/doctorwithpatient.jpg"
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Primary Care Doctor | Family Medicine & Walk-In Clinic Palm Beach County",
    description: "See a primary care doctor for sick visits, checkups, physicals, and preventive care. Walk in or book online at our Palm Beach County urgent care and family medicine clinic.",
    images: ["https://wpucc.com/doctorwithpatient.jpg"],
    site: "@wpucc"
  }
};

export default function PrimaryCareDoctorPage() {
    return (
        <main className="bg-[#F7FAFF] min-h-screen">
            {/* JSON-LD Structured Data for LocalBusiness */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "MedicalClinic",
                    "name": "Primary Urgent Care - Family Medicine & Walk-In Clinic",
                    "image": "https://wpucc.com/doctorwithpatient.jpg",
                    "@id": "https://wpucc.com/primary-care-doctor",
                    "url": "https://wpucc.com/primary-care-doctor",
                    "telephone": "+1-561-204-5111",
                    "address": [
                      {
                        "@type": "PostalAddress",
                        "streetAddress": "11476 Okeechobee Blvd.",
                        "addressLocality": "Royal Palm Beach",
                        "addressRegion": "FL",
                        "postalCode": "33411",
                        "addressCountry": "US",
                        "name": "Royal Palm Beach Primary & Urgent Care Center"
                      },
                      {
                        "@type": "PostalAddress",
                        "streetAddress": "6447 Lake Worth Road",
                        "addressLocality": "Lake Worth",
                        "addressRegion": "FL",
                        "postalCode": "33463",
                        "addressCountry": "US",
                        "name": "Lake Worth Primary & Urgent Care Center"
                      },
                      {
                        "@type": "PostalAddress",
                        "streetAddress": "3696 S. Congress Ave.",
                        "addressLocality": "Palm Springs",
                        "addressRegion": "FL",
                        "postalCode": "33461",
                        "addressCountry": "US",
                        "name": "Palm Springs Primary & Urgent Care Center"
                      },
                      {
                        "@type": "PostalAddress",
                        "streetAddress": "6169 S Jog Road, Unit 4B",
                        "addressLocality": "Lantana",
                        "addressRegion": "FL",
                        "postalCode": "33467",
                        "addressCountry": "US",
                        "name": "Lantana Primary & Urgent Care Center"
                      }
                    ],
                    "geo": {
                      "@type": "GeoCoordinates",
                      "latitude": 26.7153,
                      "longitude": -80.0534
                    },
                    "openingHoursSpecification": [{
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday"
                      ],
                      "opens": "08:00",
                      "closes": "20:00"
                    }],
                    "sameAs": [
                      "https://www.facebook.com/wpucc",
                      "https://www.instagram.com/wpucc"
                    ]
                  })
                }}
            />
            {/* Split Hero Section with Overlapping Card */}
            <section className="relative w-full flex flex-col md:flex-row items-center justify-center gap-40 py-16 px-4 bg-gradient-to-br from-[#D52128]/90 via-[#F7FAFF]/60 to-[#A7E3F7]/60 overflow-hidden
            [mask-composite:intersect] [mask-image:linear-gradient(to_top,transparent,black_6rem)]
            ">
                <div className="flex-1 flex flex-col items-start z-10 max-w-xl">
                    <span className="inline-flex items-center gap-2 bg-white/90 px-6 py-2 rounded-xl shadow text-[#D52128] font-semibold text-lg mb-4"><Polestar /> Primary Care for All Ages</span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">Your Family's Health Starts Here</h1>
                    <p className="text-lg md:text-xl text-[#494647] mb-8">From sniffles to checkups, our caring doctors are here for every stage of life. Walk in, book online, or bring the whole family—no appointment needed!</p>
                    <div className="flex flex-col md:flex-row gap-4 w-full">
                        <a href="/appointment" className="bg-[#2563eb] text-white font-semibold px-8 py-4 rounded-xl text-lg shadow hover:bg-[#174ea6] transition">Book a Visit</a>
                        <a href="tel:5612045111" className="bg-white text-[#2563eb] font-semibold px-8 py-4 rounded-xl text-lg shadow flex items-center gap-3 hover:bg-blue-100 transition border border-[#2563eb]">Call (561) 204-5111</a>
                    </div>
                </div>
                <div className="justify-center items-center relative mt-10 md:mt-0">
                    <div className="relative w-[340px] h-[380px] md:w-[420px] md:h-[480px]">
                        <Image
                            src="/doctorwithpatient.jpg"
                            alt="Primary Care Doctor with Patient"
                            fill
                            className="rounded-3xl shadow-2xl object-cover border-4 border-white"
                            priority
                        />
                        {/* Overlapping Card */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-[#A7E3F7] z-20 animate-fade-in-up">
                            <span className="text-[#2563eb] font-bold text-lg mb-1">Same-Day Appointments</span>
                            <span className="text-gray-700 text-base">Walk-ins always welcome!</span>
                        </div>
                    </div>
                </div>
                <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('/primarycare-bg.svg')] bg-no-repeat bg-right bg-contain opacity-10 pointer-events-none" />
            </section>

            {/* Testimonial Section */}
            <section className="max-w-3xl mx-auto py-10 px-4 flex flex-col items-center text-center ">
                <Reveal className="w-full">
                    <div>
                        <blockquote className="text-2xl md:text-3xl font-semibold text-[#2563eb] mb-4">"We bring our whole family here. The doctors listen, the staff is so kind, and we always leave feeling better!"</blockquote>
                        <span className="text-lg text-gray-700">— The Martinez Family, Palm Beach County</span>
                    </div>
                </Reveal>
            </section>

            {/* Animated Horizontal Scroll Services Section */}
            <section className=" mx-auto py-20 bg-gradient-to-r from-[#A7E3F7]/30 via-[#F7FAFF]/80 to-[#F7FAFF]/100 [mask-composite:intersect] [mask-image:linear-gradient(to_bottom,transparent,black_6rem)]">
                <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">Primary Care Services</h2>
                <div className="overflow-x-auto w-full max-w-[1440px] px-40 mx-auto">
                    <Marquee pauseOnHover className="flex gap-8 lg:px-40 md:min-w-full [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_6rem),linear-gradient(to_left,transparent,black_6rem)]">
                        {primaryCareServices.slice(0, primaryCareServices.length / 2).map((service, idx) => (
                            <Reveal key={service.title} className="min-w-[280px] max-w-xs w-full h-full flex-shrink-0 py-2 items-center justify-center" delay={0.15 + idx * 0.1}>
                                <Link href={`/primary-care-doctor/${service.slug}`} className=" h-full items-center justify-center">
                                    <div className={`bg-white rounded-3xl shadow-sm h-64 p-0 flex flex-col items-center justify-center text-center border border-[#F4F3F3] hover:shadow-md transition-all duration-300 overflow-hidden`}>
                                        <div className="mb-2">{service.icon}</div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-1 hover:text-[#2563eb] transition-colors">{service.title}</h3>
                                        <p className="text-base text-[#494647] px-2">{service.description}</p>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </Marquee>
                    <Marquee pauseOnHover reverse className="flex gap-8 lg:px-40 md:min-w-full [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_6rem),linear-gradient(to_left,transparent,black_6rem)]">
                        {primaryCareServices.slice(primaryCareServices.length / 2).map((service, idx) => (
                            <Reveal key={service.title} className="min-w-[280px] max-w-xs  w-full h-full flex-shrink-0 py-2" delay={0.15 + idx * 0.1}>
                                <Link href={`/primary-care-doctor/${service.slug}`} className=" block h-full">
                                    <div className="bg-white rounded-3xl shadow-sm h-64 p-0 flex flex-col items-center  justify-center  text-center border border-[#F4F3F3] hover:shadow-md transition-all duration-300 overflow-hidden">
                                        <div className="mb-2">{service.icon}</div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-1 transition-colors">{service.title}</h3>
                                        <p className="text-base text-[#494647] px-2">{service.description}</p>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </Marquee>
                    {/* <div className='grid grid-cols-3 gap-4 w-full self-center'>
                        {primaryCareServices.map((service, idx) => (
                            <Reveal key={service.title} className="min-w-[280px] max-w-xs  w-full h-full flex-shrink-0 py-2" delay={0.15 + idx * 0.1}>
                            <Link href={`/primary-care-doctor/${service.slug}`} className=" block h-full">
                                <div className="bg-white rounded-3xl shadow-sm h-64 p-0 flex flex-col items-center  justify-center  text-center border border-[#F4F3F3] hover:shadow-md transition-all duration-300 overflow-hidden">
                                    <div className="mb-2">{service.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1 transition-colors">{service.title}</h3>
                                    <p className="text-base text-[#494647] px-2">{service.description}</p>
                                </div>
                            </Link>
                        </Reveal>
                        ))}
                    </div> */}
                </div>
            </section>

            {/* How Your Visit Works Timeline Section */}
            <section className="max-w-5xl mx-auto py-16 px-4">
                <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">How Your Visit Works</h2>
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    {visitSteps.map((step, idx) => (
                        <Reveal key={step.step} className="flex-1 flex flex-col items-center justify-center text-center px-4" delay={0.2 + idx * 0.15}>
                            <div className='flex flex-col items-center justify-center'>
                                <div className="w-14 h-14 rounded-full bg-[#2563eb] text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-lg ">{step.step}</div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h4>
                                <p className="text-base text-[#494647]">{step.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* What is Primary Care Section */}
            <section className="max-w-4xl mx-auto py-10 px-4">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">What is Primary Care?</h2>
                <p className="text-lg text-[#494647] mb-4">Primary care is your first stop for everyday health needs—whether you're sick, need a checkup, or want to stay on top of chronic conditions. Our board-certified doctors provide comprehensive care for all ages, focusing on prevention, early diagnosis, and long-term wellness. We're here for you and your family, year after year.</p>
                <h3 className="text-2xl font-semibold mt-8 mb-2 text-gray-900">Why Choose Us for Primary Care?</h3>
                <ul className="list-disc pl-6 text-lg text-[#494647] mb-4">
                    <li>Walk-in and same-day appointments—no long waits</li>
                    <li>Board-certified, compassionate providers</li>
                    <li>Modern, comfortable clinic environment</li>
                    <li>Care for all ages, from children to seniors</li>
                    <li>On-site lab, X-ray, and pharmacy services</li>
                    <li>Transparent pricing and insurance accepted</li>
                </ul>
            </section>

            {/* Communication & Referral Section */}
            <section className="max-w-3xl mx-auto py-10 px-4">
                <div className="bg-[#E6F4FF] border border-[#A7E3F7] rounded-2xl shadow-md p-8 flex flex-col items-center text-center">
                    <h3 className="text-2xl font-bold text-[#2563eb] mb-4">Coordinated Care & Trusted Referrals</h3>
                    <p className="text-lg text-[#494647] mb-2">If you already have a primary care physician, we communicate your case information to them (with your approval, of course) quickly and easily.</p>
                    <p className="text-lg text-[#494647]">In addition, we also have a multitude of connections to some of the finest Primary Care doctors in Palm Beach County. If you need a referral, we are happy to provide you with one to a highly-qualified physician outside of our offices.</p>
                </div>
            </section>
        </main>
    );
} 