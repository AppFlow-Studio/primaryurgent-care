import Phone from "@/components/icons/phone";
import SlidingDiv from "@/components/SlidingAnimation";
import Accordion from "@/components/ui/Accordion";
import BookAppointmentForm from "@/components/ui/BookAppointmentForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const accordionSections = [
  {
    title: 'PATIENT SERVICES',
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Hospital-Level Urgent Care (walk-in, &lt; 15 min wait)</li>
        <li>Auto-Accident / PIP Injury Care</li>
        <li>Workers' Comp & Occupational Medicine</li>
        <li>Pediatric Urgent Care</li>
        <li>Primary & Family Care</li>
        <li>Advanced Imaging — Digital X-ray • CT • MRI • Ultrasound</li>
        <li>On-Site Lab Testing & Rapid Panels</li>
        <li>Annual, School/Sports, DOT & Immigration Physicals</li>
        <li>Vaccinations & Travel Medicine (flu, tetanus, yellow-fever)</li>
        <li>Allergy & Asthma Treatments</li>
        <li>Women's & Men's Health Visits</li>
        <li>Tele-Follow-Ups & Prescription Refills</li>
      </ul>
    ),
  },
  {
    title: 'COVID-19 SERVICES',
    content: <div>COVID-19 testing, treatment, and information.</div>,
  },
  {
    title: 'TELECARE',
    content: <div>Telemedicine and virtual care options.</div>,
  },
  {
    title: 'EMPLOYER RESOURCES',
    content: <div>Workplace health, OSHA notes, and return-to-work paperwork.</div>,
  },
  {
    title: 'PATIENT RESOURCES',
    content: <div>Patient forms, insurance info, and FAQs.</div>,
  },
  {
    title: 'ABOUT US',
    content: <div>Learn more about our team and mission.</div>,
  },
];

export const metadata = {
  title: "Hospital-Level Emergency Room Services | Walk-In ER Alternative Palm Beach County | Primary & Urgent Care Centers",
  description:
    "Skip the crowded ER. Get hospital-level emergency care, advanced imaging (MRI, CT, X-ray), and board-certified doctors at Primary & Urgent Care Centers. Walk-in, less than 15 min wait, affordable pricing, and direct insurance/PIP billing in Palm Beach County.",
  keywords: [
    "emergency room alternative",
    "walk-in ER Palm Beach County",
    "hospital-level urgent care",
    "urgent care ER",
    "emergency care clinic",
    "ER wait times Palm Beach",
    "urgent care with MRI CT X-ray",
    "affordable emergency care",
    "no wait ER Palm Beach",
    "emergency doctor urgent care",
    "PIP injury care ER alternative",
    "auto accident emergency care",
    "board-certified ER doctors urgent care"
  ],
  openGraph: {
    title: "Hospital-Level Emergency Room Services | Walk-In ER Alternative Palm Beach County | Primary & Urgent Care Centers",
    description:
      "Skip the crowded ER. Get hospital-level emergency care, advanced imaging (MRI, CT, X-ray), and board-certified doctors at Primary & Urgent Care Centers. Walk-in, less than 15 min wait, affordable pricing, and direct insurance/PIP billing in Palm Beach County.",
    url: "https://wpucc.com/emergencyroom",
    type: "website",
    images: [
      {
        url: "https://wpucc.com/hospitalcare.jpg",
        width: 1200,
        height: 630,
        alt: "Hospital-level emergency care urgent care Palm Beach County"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospital-Level Emergency Room Services | Walk-In ER Alternative Palm Beach County | Primary & Urgent Care Centers",
    description:
      "Skip the crowded ER. Get hospital-level emergency care, advanced imaging (MRI, CT, X-ray), and board-certified doctors at Primary & Urgent Care Centers. Walk-in, less than 15 min wait, affordable pricing, and direct insurance/PIP billing in Palm Beach County.",
    images: [
      "https://wpucc.com/hospitalcare.jpg"
    ]
  },
  alternates: {
    canonical: "https://wpucc.com/emergencyroom"
  }
};

// Structured data for hospital-level emergency care
const EmergencyRoomJsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MedicalClinic',
        name: 'Primary & Urgent Care Centers of Palm Beach County',
        url: 'https://wpucc.com/emergencyroom',
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Palm Beach County, FL'
        },
        medicalSpecialty: [
          'EmergencyCare',
          'UrgentCare',
          'DiagnosticImaging',
          'InjuryCare',
          'PediatricCare'
        ],
        availableService: [
          'Hospital-Level Urgent Care',
          'Walk-In Emergency Room Alternative',
          'Auto Accident & PIP Injury Care',
          'Advanced Imaging (MRI, CT, X-ray, Ultrasound)',
          'On-Site Lab Testing',
          'Board-Certified Emergency Doctors',
          'Workers\' Comp & Occupational Medicine',
          'Pediatric & Family Care',
          'Telemedicine',
          'Vaccinations',
          'Physicals',
          'IV Fluids',
          'Stitches & Wound Care',
          'Same-Day Appointments',
          'Direct Insurance & PIP Billing'
        ],
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
        telephone: '+1-561-555-5555',
        description: 'Hospital-level emergency care and walk-in ER alternative with advanced imaging, board-certified doctors, and affordable pricing. Less than 15 min wait. Serving Palm Beach County.'
      })
    }}
  />
);

const EmergencyRoomPage = () => {
  return (
    <main>
      <EmergencyRoomJsonLd />
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
              <span className="bg-[rgba(255,255,255,0.20)] text-white font-semibold px-6 py-2 rounded-[12px] text-lg shadow-md backdrop-blur-[8.5px]">Hospital Level Care</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-600 mb-6 leading-tight text-center">Emergency Room Services</h1>
            <p className="text-lg mb-8 max-w-2xl text-center">
              Skip the crowded ER and get the same MRI, CT, digital X-ray, ultrasound, and QUICK lab work right inside our urgent-care clinic. Average wait: less then 15 min. Flat $69 self-pay, direct insurance & PIP billing, detailed records for your doctor or attorney.
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
      <section className='grid lg:grid-cols-2 xl:gap-14 gap-8 h-full xl:px-[60px] px-4 lg:py-20 py-10'>
        <SlidingDiv position='left' className="w-full overflow-hidden">
          <div className=' flex items-start justify-center xl:py-14 py-10 space-y-6 flex-col'>
            <p className='lg:text-6xl text-5xl font-600'>Hospital-Level Care, Minus the Hospital Headache</p>
            <p className='text-lg text-[#494647]'>
              Looking for an urgent care center with hospital-level equipment and ER-caliber care near you? Primary Urgent Care delivers exactly that  providing advanced, hospital-quality urgent care services with on-site X-ray, MRI, lab testing and more in a convenient, patient-friendly clinic setting. We combine the technology and expertise you'd find in an emergency room with faster service, lower costs, and none of the hassle.
            </p>
            <Link href={`/locations`} className="bg-[#D52128] text-white font-semibold px-8 py-4 flex items-center justify-center xl:w-[40%] w-full rounded-xl xl:text-lg text-base shadow hover:bg-[#b81b22] transition">Locate Our Clinics</Link>

          </div>
        </SlidingDiv>
        <div className='w-full h-full relative rounded-2xl overflow-hidden sm:h-100 lg:h-full '><Image src="/hospitalcare.jpg" alt="Urgent Injury Care" fill className='object-cover aspect-square' /></div>
      </section>

      <section className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-3 lg:gap-12 gap-y-8 items-start xl:px-[60px] px-4 lg:py-20 py-10">
        {/* Left: Post */}
        <div className="md:col-span-2 flex flex-col gap-10 w-full">
          <div className="flex flex-col gap-10 w-full">
            <h2 className="text-5xl font-bold mb-4">Emergency-Trained Doctors, Ready for Serious Injuries</h2>
            <p className="text-lg text-[#494647] mb-8">
              Unlike many walk-in clinics, Primary Urgent Care is staffed by board-certified physicians and highly trained nurses – led by an emergency medicine specialist. Having an ER-experienced doctor always on-site means we can handle serious (but non-life-threatening) conditions that other clinics might send to the ER. From broken bones and severe sprains to deep cuts that need stitches, our team provides the expert care you need on the spot. We also offer services like IV fluids, on-site medications, and pediatric care, delivering the same breadth of treatment you'd expect from a hospital emergency department, but in a more accessible setting.
            </p>
            <div className="w-full rounded-2xl overflow-hidden mb-10 relative h-120 ">
              <Image src="/traineddoc.jpg" alt="Emergency Doctor" fill className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div>
              <h2 className="text-5xl font-bold mb-4">Faster Service & Lower Costs than an ER</h2>
              <p className="text-lg text-[#494647] mb-4">
                At Primary Urgent Care, you won't spend hours in a waiting room. In fact, most patients are seen by a provider within 15 minutes of arrival—a huge relief compared to hospital ERs, where wait times can often stretch to several hours. Getting care faster means you start feeling better sooner, instead of sitting in pain or discomfort.
              </p>
              <p className="text-lg text-[#494647]">
                Urgent care is also much easier on your wallet. Our visits typically cost only a fraction of an ER bill—primaryuc.com. For example, a standard visit at Primary Urgent Care is just $69.99, with X-rays around $50, and even MRI imaging for about $200 (self-pay)—all while delivering the same high-quality care. We accept most major insurance plans, but even if you're uninsured, you're welcome here. The bottom line: you get top-tier medical care without the sky-high ER expense.
              </p>
            </div>
            <div>
              <h2 className="text-5xl font-bold mb-4">Convenient, Patient-Focused Access</h2>
              <p className="text-lg text-[#494647] mb-4">
                Everything at Primary Urgent Care is designed for your convenience. We welcome walk-ins, offer easy online reservations, and have multiple locations across Palm Beach County making it simple to find "ER-level urgent care near me". Our clinics are open beyond typical doctors' office hours (Monday through Friday, 9am–6pm) so it's easier to get care after work or school when your regular doctor is unavailable. Inside, you'll find a clean, comfortable environment (no crowded, chaotic hospital hallways) and a friendly staff focused on your needs. The result is a stress-free urgent care experience that puts patients first from the moment you walk in.
              </p>
              <p className="text-lg text-[#494647]">
                When an unexpected injury or illness needs attention fast, trust Primary Urgent Care to deliver hospital-level care without the hospital wait or cost – it's the faster, more affordable way to get you feeling better.
              </p>
            </div>
            <div>
              <h2 className="lg:text-5xl text-4xl font-bold mb-4 leading-tight">Visit Primary & Urgent Care Centers for Accessible, Affordable, Hospital-Level Care</h2>
              <p className="text-lg text-[#494647] mb-4 font-400">
                Primary & Urgent Care Centers deliver high-quality urgent care with hospital-grade technology all in a calm, walk-in setting. Our mission is simple: give every patient fast answers, compassionate treatment, and transparent pricing.
              </p>
              <p className="text-lg text-[#494647] font-500 mb-10 sm:px-0 px-8">
                What Makes Us Different<br />
                <li>Board-certified physicians & ER-trained teams</li>
                <li>On-site digital X-ray, CT, MRI & ultrasound for same-day answers</li>
                <li>STAT in-house lab testing CBC, CMP, D-dimer, and more</li>
                <li>$69 self-pay visits & direct insurance / PIP billing</li>
                <li>Friendly bilingual staff who keep your wait under 15 minutes</li>
              </p>
              <p className="text-lg text-[#494647] font-500">By merging hospital-level diagnostics with neighborly care and pricing you can trust Primary & Urgent Care Centers set a new standard for walk-in medicine in Palm Beach County.</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold mb-4">Special Care for Claustrophobic Patients</h2>
              <p className="text-lg text-[#494647] mb-4">
                We understand that MRI scans can be challenging for patients with claustrophobia. At Primary Urgent Care, we go above and beyond to ensure your comfort and peace of mind during imaging procedures. Our compassionate team provides extra care and attention to make your experience as stress-free as possible.
              </p>
              <p className="text-lg text-[#494647] mb-4">
                <strong>Extended MRI Times:</strong> We schedule longer appointment slots for claustrophobic patients, allowing extra time for preparation, breaks, and recovery. There's no rush—we work at your pace to ensure you feel comfortable and secure throughout the entire process.
              </p>
              <p className="text-lg text-[#494647] mb-4">
                <strong>Complimentary Anti-Anxiety Medication:</strong> For patients who need additional support, we offer complimentary anti-anxiety medication to help ease the process. Our board-certified physicians can prescribe appropriate medication to help you relax during your MRI scan, ensuring you receive the diagnostic imaging you need without unnecessary stress.
              </p>
              <p className="text-lg text-[#494647]">
                <strong>Comfort-Focused Environment:</strong> Our imaging suite is designed with patient comfort in mind. We provide calming music, comfortable positioning, and constant communication throughout the procedure. Our experienced technologists are specially trained to work with anxious patients and will guide you through every step of the process with patience and understanding.
              </p>
            </div>


          </div>
        </div>
        {/* Right: Accordion */}
        <div className="w-full lg:max-w-md mx-auto lg:col-span-1 col-span-3">
          <h2 className="text-2xl font-bold mb-2">How Can We Assist You?</h2>
          <p className="text-base text-gray-600 mb-4">Get answers to frequently asked questions regarding account management and services.</p>
          <Accordion sections={accordionSections} defaultOpen={0} />
        </div>
      </section>

      <section className="relative w-full lg:py-52 py-10 flex items-center justify-center ">
        <Image
          src="/car-accident.jpg"
          alt="Immediate care for injuries"
          fill
          className="object-cover w-full object-center h-full -z-10"
          priority
        />
        <div className="absolute inset-0 bg-[#570000]/50 -z-10" />
        <div className="flex flex-col items-center justify-center h-full text-center self-center lg:w-[50%] w-[70%]">
          <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold text-white mb-6">Walk-In Hospital-Level Urgent Care Palm Beach County</h2>
          <div className="md:text-lg text-base text-white max-w-2xl mx-auto">
            On-site MRI, CT, digital X-ray, and STAT labs. Board-certified providers see you in {'<'} 15 minutes—no appointment, no ER prices.
          </div>
        </div>
      </section>
    </main>
  );
};

export default EmergencyRoomPage;