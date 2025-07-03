import Services from "@/components/Services";
import Image from "next/image";
import Reveal from "@/components/RevealAnimation";
import AccidentTypesTabs from "@/components/ui/AccidentTypesTabs";
import PricingGrid from "@/components/PricingGrid";

export const metadata = {
  title: 'Hospital-Grade Imaging & Diagnostic Services | Urgent Care Palm Beach County',
  description: 'Get same-day MRI, CT scan, digital X-ray, ultrasound, and nuclear medicine at our urgent care centers in Palm Beach County. Walk in or book an appointment for hospital-level diagnostics—no ER wait, affordable pricing, and fast results. Serving Royal Palm Beach, Lake Worth, Palm Springs, and Lantana.',
  keywords: [
    'urgent care imaging',
    'hospital-grade diagnostics',
    'MRI urgent care',
    'CT scan urgent care',
    'digital X-ray',
    'ultrasound urgent care',
    'nuclear medicine urgent care',
    'walk-in imaging Palm Beach',
    'same-day diagnostic services',
    'advanced imaging urgent care',
    'urgent care with MRI',
    'urgent care with CT',
    'urgent care with X-ray',
    'urgent care with ultrasound',
    'urgent care with nuclear medicine',
    'Palm Beach County urgent care',
    'Royal Palm Beach',
    'Lake Worth',
    'Palm Springs',
    'Lantana'
  ],
  openGraph: {
    title: 'Hospital-Grade Imaging & Diagnostic Services | Urgent Care Palm Beach County',
    description: 'Get same-day MRI, CT scan, digital X-ray, ultrasound, and nuclear medicine at our urgent care centers in Palm Beach County. Walk in or book an appointment for hospital-level diagnostics—no ER wait, affordable pricing, and fast results.',
    url: 'https://wpucc.com/service',
    type: 'website',
    images: [
      {
        url: 'https://wpucc.com/servicelanding.jpg',
        width: 1200,
        height: 630,
        alt: 'Hospital-Grade Imaging & Diagnostic Services | Urgent Care Palm Beach County',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hospital-Grade Imaging & Diagnostic Services | Urgent Care Palm Beach County',
    description: 'Get same-day MRI, CT scan, digital X-ray, ultrasound, and nuclear medicine at our urgent care centers in Palm Beach County. Walk in or book an appointment for hospital-level diagnostics—no ER wait, affordable pricing, and fast results.',
    images: ['https://wpucc.com/servicelanding.jpg'],
  },
  alternates: {
    canonical: 'https://wpucc.com/service',
  },
};

// Add JSON-LD structured data for MedicalClinic
export function ServiceJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MedicalClinic',
          name: 'Primary & Urgent Care Centers of Palm Beach County',
          url: 'https://wpucc.com/service',
          image: 'https://wpucc.com/servicelanding.jpg',
          description:
            'Hospital-grade imaging and diagnostic services including MRI, CT scan, digital X-ray, ultrasound, and nuclear medicine. Walk-in or book same-day appointments at our urgent care centers in Royal Palm Beach, Lake Worth, Palm Springs, and Lantana.',
          areaServed: [
            'Royal Palm Beach FL',
            'Lake Worth FL',
            'Palm Springs FL',
            'Lantana FL',
            'Palm Beach County FL',
          ],
          availableService: [
            'MRI',
            'CT Scan',
            'Digital X-ray',
            'Ultrasound',
            'Nuclear Medicine',
          ],
          openingHours: 'Mo-Su 08:00-20:00',
          priceRange: '$$',
          telephone: '+1-561-555-1234', // Update to real phone if available
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
        }),
      }}
    />
  );
}

const ServicePage = () => {
    return (
        <main className="w-full h-full">
            <section className="relative h-fullw-full items-center justify-center flex">
                {/* Background image */}
                <div className="absolute inset-0 w-full h-full -z-10">
                    <Image
                        src="/servicelanding.jpg"
                        alt="Services Landing Background"
                        fill
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>
                {/* Blurred overlay card */}
                <div className="relative flex justify-center items-center h-full lg:py-16 py-10 w-full lg:px-[60px] px-6">
                    <div className="backdrop-blur-[10.550000190734863px] bg-[rgba(242,246,252,0.10)] rounded-2xl max-w-8xl w-full mx-auto lg:p-10 sm:p-6 p-2 flex flex-col lg:flex-row gap-10 border border-white/30 h-full">
                        {/* Left: Text content */}
                        <Reveal className='flex-1 overflow-hidden'>
                            <div className=" flex flex-col gap-6 justify-center">
                                <div className="text-sm mb-2">
                                    <span className="text-gray-500">Home/</span>
                                    <span className="text-[#2563eb] ml-1">Services</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold text-black mb-2 ">Integrated Primary Care in Palm Beach County</h1>
                                <p className="text-gray-700 text-lg mb-2">
                                    Having Primary Care services available to you is a very powerful combination with our Urgent Care. Why? Because this combination affords you the highest level of communication and continuity of treatment for you between your entire Primary UC "Care Team". Your Care Team communicates with each other before, after and, if needed, during your visit in order to provide you with the safest and highest quality care.
                                </p>
                                <p className="text-gray-700 text-lg mb-2">
                                    Our team of board certified Family Doctors, Emergency Medicine Specialist, and Pediatricians work with you and each other to provide evaluation and treatment of common ailments and other medical problems for an affordable fee of $69.99 for the initial medical consultation.
                                </p>
                                <p className="text-gray-700 text-lg mb-2">
                                    If you already have a primary care physician, we communicate your case information to them (with your approval, of course) quickly and easily. In addition, we also have a multitude of connections to some of the finest Primary Care doctors in Palm Beach County, so if you need a referral we are happy to provide you with one to a highly-qualified physician outside of our offices.
                                </p>
                            </div>
                        </Reveal>
                        {/* Right: Image and bullet points */}
                        <div className="flex-1 flex flex-col gap-6 justify-center">
                            <div className="w-full mb-4 relative h-100" >
                                <Image
                                    src="/primarycaredoc.png"
                                    alt="Doctor Group"
                                    fill
                                    className="rounded-2xl object-cover w-full "
                                />
                            </div>
                            <Reveal className='w-full overflow-hidden'>
                                <div className="text-gray-700 text-lg">
                                    <p className="mb-2">
                                        Your regular primary care doctor at Primary & Urgent Care Centers is the head of your Care Team and works with our highly-qualified nurses to manage your overall health. Your Care Team provides you with increased access to all of our services including:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Follow-up routine visits for chronic conditions such as asthma, arthritis, diabetes, high blood pressure, high cholesterol and many others</li>
                                        <li>Follow-up appointments after visits to Urgent Care or Emergency Room visits</li>
                                        <li>Same-day appointments for infections and many other significant illnesses</li>
                                        <li>Annual physicals</li>
                                    </ul>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>
            <Services header="Expert Diagnostic &br Imaging Services" description="From advanced MRI and CT scans to expert X-rays and ultrasounds, our urgent care services are designed to deliver fast, accurate results when you need them most — all under one roof, with a compassionate touch."/>
        <section className="w-full bg-white lg:py-20 py-10 px-4 lg:px-[60px] relative">
            <div className="max-w-8xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Content */}
                    <Reveal className="">
                        <div className="flex flex-col gap-6">
                          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                              Seamless Care Coordination
                          </h2>
                          <p className="text-lg text-gray-700 leading-relaxed">
                              If you already have a primary care physician, we communicate your case information to them (with your approval, of course) quickly and easily. In addition, we also have a multitude of connections to some of the finest Primary Care doctors in Palm Beach County, so if you need a referral we are happy to provide you with one to a highly-qualified physician outside of our offices.
                          </p>
                          <div className="flex flex-col gap-4 mt-4">
                              <div className="flex items-center gap-3">
                                  <div className="w-2 h-2 bg-[#D52128] rounded-full"></div>
                                  <span className="text-gray-700">Secure patient information sharing</span>
                              </div>
                              <div className="flex items-center gap-3">
                                  <div className="w-2 h-2 bg-[#D52128] rounded-full"></div>
                                  <span className="text-gray-700">Network of top Palm Beach County physicians</span>
                              </div>
                              <div className="flex items-center gap-3">
                                  <div className="w-2 h-2 bg-[#D52128] rounded-full"></div>
                                  <span className="text-gray-700">Personalized referral recommendations</span>
                              </div>
                          </div>
                        </div>
                    </Reveal>
                    
                    {/* Right: Image */}
                    <div className="relative h-96 lg:h-[500px] w-full">
                        <Image
                            src="/carecoordination.png"
                            alt="Care Coordination and Referrals"
                            fill
                            className="rounded-2xl object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                    </div>
                </div>
            </div>
        </section>
        <AccidentTypesTabs />
        <div className="w-full bg-white lg:py-20 py-10 px-4 lg:px-[60px] relative"><PricingGrid /></div>
        </main>
    )
}

export default ServicePage