import React from 'react'
import Image from 'next/image';
import BookAppointmentForm from '@/components/ui/BookAppointmentForm';
import { Phone } from 'lucide-react';
import Star2 from '@/components/icons/star2';
import LocationsRow from '@/components/LocationsRow';
import Link from 'next/link';
import { conditions } from '@/components/conditions';
import Reveal from '@/components/RevealAnimation';
import SlidingDiv from '@/components/SlidingAnimation';

export const metadata = {
  title: "Urgent Injury Care | Walk-In Fracture, Sprain, Laceration & Sports Injury Clinic Palm Beach County | Primary & Urgent Care Centers",
  description:
    "Walk in for rapid injury care: sprains, fractures, cuts, burns, and sports injuries. On-site X-ray, MRI, CT, and STAT results. Board-certified providers, less than 15 min wait, $69 self-pay, most insurance accepted. Serving Palm Beach County.",
  keywords: [
    "urgent injury care",
    "walk-in injury clinic",
    "fracture care urgent care",
    "sprain care urgent care",
    "laceration care urgent care",
    "sports injury urgent care",
    "orthopedic injury clinic",
    "immediate injury care Palm Beach",
    "urgent care for broken bone",
    "urgent care for stitches",
    "walk-in fracture clinic",
    "urgent care for burns",
    "STAT X-ray MRI CT urgent care"
  ],
  openGraph: {
    title: "Urgent Injury Care | Walk-In Fracture, Sprain, Laceration & Sports Injury Clinic Palm Beach County | Primary & Urgent Care Centers",
    description:
      "Walk in for rapid injury care: sprains, fractures, cuts, burns, and sports injuries. On-site X-ray, MRI, CT, and STAT results. Board-certified providers, less than 15 min wait, $69 self-pay, most insurance accepted. Serving Palm Beach County.",
    url: "https://wpucc.com/urgentinjurycare",
    type: "website",
    images: [
      {
        url: "https://wpucc.com/urgentcarelanding.jpg",
        width: 1200,
        height: 630,
        alt: "Urgent injury care walk-in clinic Palm Beach County"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Urgent Injury Care | Walk-In Fracture, Sprain, Laceration & Sports Injury Clinic Palm Beach County | Primary & Urgent Care Centers",
    description:
      "Walk in for rapid injury care: sprains, fractures, cuts, burns, and sports injuries. On-site X-ray, MRI, CT, and STAT results. Board-certified providers, less than 15 min wait, $69 self-pay, most insurance accepted. Serving Palm Beach County.",
    images: [
      "https://wpucc.com/urgentcarelanding.jpg"
    ]
  },
  alternates: {
    canonical: "https://wpucc.com/urgentinjurycare"
  }
};

// Structured data for urgent injury care
const UrgentInjuryCareJsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MedicalClinic',
        name: 'Primary & Urgent Care Centers of Palm Beach County',
        url: 'https://wpucc.com/urgentinjurycare',
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Palm Beach County, FL'
        },
        medicalSpecialty: [
          'UrgentCare',
          'OrthopedicCare',
          'SportsMedicine',
          'InjuryCare',
          'DiagnosticImaging',
          'WoundCare'
        ],
        availableService: [
          'Sprain & Fracture Care',
          'Laceration & Stitches',
          'Burn Treatment',
          'Sports Injury Care',
          'Splinting & Bracing',
          'On-Site X-ray, MRI, CT, Ultrasound',
          'STAT Imaging Reads',
          'Same-Day Appointments',
          'Walk-In Visits',
          'Pain Management',
          'Wound Cleaning & Debridement',
          'Tetanus Shots',
          'Antibiotics',
          'Insurance & Self-Pay Accepted'
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
        description: 'Walk-in urgent injury care for sprains, fractures, lacerations, burns, and sports injuries. On-site X-ray, MRI, CT, and STAT results. Board-certified providers, less than 15 min wait, $69 self-pay, most insurance accepted. Serving Palm Beach County.'
      })
    }}
  />
);

const UrgentInjuryCarePage = () => {
    return (
        <main className=''>
            <UrgentInjuryCareJsonLd />
            <section className="relative h-full w-full xl:px-[60px] px-4">
                {/* Background image */}
                <div className="absolute inset-0 w-full h-full -z-10">
                    <Image
                        src="/urgentcarelanding.jpg"
                        alt="Urgent Injury Care Landing Background"
                        fill
                        className="object-cover w-full h-full"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#222]/80 via-[#222]/60 to-[#222]/40" />
                </div>
                <div className="relative flex flex-col md:flex-row items-center justify-between py-20 max-w-8xl mx-auto px-4 md:px-12 gap-10">
                    {/* Left: Content */}
                    <div className="flex-1 flex flex-col justify-center items-center text-white max-w-2xl">
                        <div className="mb-6">
                            <span className="bg-[rgba(255,255,255,0.20)] text-white font-semibold px-6 py-2 rounded-[12px] text-lg shadow-md backdrop-blur-[8.5px]">Urgent Injury Care</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-600 mb-6 leading-tight text-center">Fast Injury Care<br />Walk In or Book Now</h1>
                        <p className="text-lg mb-8 max-w-2xl text-center">
                            Sprain, fracture, cut, or burn? Skip the ER. Walk in or book a same-day slot and see a board-certified provider in less then 15 min. On-site X-ray, CT, MRI, and labs with STAT reads (less then 3 hrs), same-day results, splints, stitches, and pain relief at a fraction of ER cost. Most insurance accepted; $69 self-pay.
                        </p>
                        <div className="flex xl:flex-wrap xl:flex-row flex-col gap-4 w-full justify-center">
                            <button className="bg-[#D52128] text-white font-semibold px-8 py-4 xl:w-[40%] w-full justify-center rounded-xl xl:text-lg text-base shadow hover:bg-[#b81b22] transition">Find a Clinic</button>
                            <a href="tel:5612045111" className="bg-white text-[#D52128] font-semibold px-8 py-4 rounded-xl xl:text-lg text-base shadow flex xl:w-[40%] w-full justify-center items-center gap-3 hover:bg-gray-100 transition">
                                <Phone className="w-6 h-6" /> (561) 204-5111
                            </a>
                        </div>
                    </div>
                    {/* Right: Form in blurred card */}
                    <div className="flex-1 flex justify-center items-center w-full max-w-xl">
                        <BookAppointmentForm title="Request an appointment" bgColor="bg-[rgba(255,255,255,0.22)] backdrop-blur-[7.150000095367432px]" textColor="text-white" />
                    </div>
                </div>
            </section>
            <section className='grid xl:grid-cols-2 xl:gap-14 gap-10 h-full xl:px-[60px] px-4 lg:py-20 py-10'>
                <div className='w-full xl:h-full overflow-hidden h-100 relative rounded-2xl sm:block hidden  '><Image src="/rapidinjurycare.jpg" alt="Urgent Injury Care" fill className='object-cover aspect-square w-full h-full' /></div>
               <SlidingDiv position='right' className='w-full overflow-hidden'>
                    <div className=' flex items-start justify-center xl:py-32 py-10 space-y-6 flex-col'>
                        <p className='text-6xl font-600'>Walk in NOW for Rapid Injury Care</p>
                        <p className='text-2xl font-600'>Sprains, Strains, Fractures & More</p>
                        <p className='text-lg text-[#494647]'>Twisted ankle? Possible fracture? Cut that needs stitches? Skip the ER line and head straight to Primary & Urgent Care Centers for hospital-level injury treatment in under 15 minutes. Our board-certified team splints sprains, reduces dislocations, repairs lacerations, and delivers on-the-spot digital X-ray, CT, and ultrasound—with STAT reads in three hours and same-day results. Book a same-day urgent care appointment or simply walk in; most insurance accepted and $69 self-pay visits keep costs predictable. Get moving again—fast, safe, affordable.</p>
                    </div>
               </SlidingDiv>
            </section>
            {/* Our Specialities Section */}
            <section className="w-full xl:py-20 py-10 px-4 xl:px-[60px]">
                <h2 className="text-5xl font-bold text-center mb-14">Our specialities</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {conditions.slice(0, 7).map((item, i) => (
                        <Link href={`/urgentinjurycare/${item.slug}`}
                            key={i}
                            className="bg-[#FDF4F4] rounded-3xl lg:px-10 px-4 lg:py-8 py-4 lg:text-2xl text-xl font-600 text-black text-center cursor-pointer transition-transform duration-200 hover:scale-105"
                            style={{ minWidth: '280px', flex: i === 5 ? '1 1 420px' : undefined }}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            </section>
            {/* Injury Types We Address Section */}
            <section className="w-full py-20 px-4 md:px-[60px] bg-[#FAFAFA]">
                <h2 className="text-6xl font-600 mb-6">Injury Types We Address</h2>
                <div className="text-lg text-black">On-Site 1.5 T MRI, Digital X-Ray, CT & Ultrasound</div>
                <div className="text-lg text-black mb-6">Walk in or book a same-day appointment our board-certified team delivers STAT MRI reads within 3 hours and same-day results, so treatment starts now, not next week.</div>
                <div className="text-base text-black mb-12">Our specialists provide care for a variety of minor injuries, including:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {conditions.slice(7, 20).map((item, i) => (
                        <Link href={`/urgentinjurycare/${item.slug}`} key={i} className="flex group items-center bg-[#F7F7F7] rounded-[20px] px-8 py-5 text-2xl font-bold text-black gap-4">
                            <span className="flex-shrink-0 group-hover:scale-120 transition-all duration-300"><Star2 /></span>
                            <span className='group-hover:text-[#D52128] transition-all duration-300'>{item.title}</span>
                        </Link>
                    ))}
                </div>
            </section>
            {/* Immediate care for injuries Section */}
            <section className="relative w-full py-52 flex items-center justify-center ">
                <Image
                    src="/immediatecare.jpg"
                    alt="Immediate care for injuries"
                    fill
                    className="object-cover w-full object-center h-full -z-10"
                    priority
                />
                <div className="absolute inset-0 bg-black/60 -z-10" />
                <div className="flex flex-col items-center justify-center w-full h-full text-center">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Immediate care for injuries</h2>
                    <div className="text-lg md:text-xl text-white max-w-2xl mx-auto">
                        On-Site 1.5 T MRI, Digital X-Ray, CT & Ultrasound<br />
                        Walk in or book a same-day appointment our board-certified team delivers STAT MRI reads within 3 hours and same-day results, so treatment starts now, not next week.
                    </div>
                </div>
            </section>

            {/* Cuts, Scrapes & Open Wounds Section */}
            <section className='w-full bg-[#FAFAFA]'>
                <section className="w-full max-w-4xl mx-auto py-24 px-4">
                    <h2 className="text-5xl font-bold mb-2">Cuts, Scrapes & Open Wounds</h2>
                    <h3 className="text-2xl font-semibold mb-6">When to Head Straight to Urgent Care</h3>
                    <p className="text-lg text-[#494647] mb-4">Open wounds occur when the skin is broken, often due to accidents like falls or cuts from sharp objects.</p>
                    <p className="text-lg text-[#494647] mb-6">Certain wounds require medical attention to prevent complications such as excessive bleeding or infection. Seek treatment if:</p>
                    <ul className="list-disc pl-8 mb-6 text-lg text-[#494647] space-y-2">
                        <li>Bleeding doesn't stop after 20 minutes of firm pressure</li>
                        <li>The cut is deep, gaping, or exposes fat/muscle</li>
                        <li>It was caused by a rusty/dirty object or animal bite</li>
                        <li>The wound sits over a joint, face, or other sensitive area</li>
                        <li>Debris is embedded (glass, gravel, metal)</li>
                        <li>You notice numbness, loss of movement, or signs of infection (redness, swelling, pus)</li>
                    </ul>
                    <p className="text-lg text-[#494647] mb-10">Our board-certified providers clean, numb, and close wounds with stitches, skin glue, or staples, give tetanus boosters, and prescribe antibiotics when needed all in one visit.</p>
                    <div className="w-full rounded-2xl relative overflow-hidden mb-10">
                        <Image src="/cutsscrapres.jpg" alt="Cuts, Scrapes & Open Wounds" width={900} height={350} className="w-full h-[370px] object-cover rounded-2xl" />
                    </div>
                    <p className="text-lg text-[#494647] mb-6">We provide comprehensive wound care services, including sutures and medications, to avoid infections. With 43 locations in Florida and extended hours, we ensure convenient access to care.</p>
                    <p className="text-lg text-[#494647] mb-10">Our team will develop a tailored treatment plan based on your injury's specifics.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Link href={`/urgentinjurycare/abrasions-road-rash`} className="bg-white hover:bg-[#FAFAFA] transition-all duration-300 rounded-2xl p-6">
                            <div className="text-xl font-bold mb-2">Abrasions / Road Rash</div>
                            <div className="text-base text-[#494647]">Surface scrapes need deep cleaning to prevent infection and scarring.</div>
                        </Link>
                        <Link href={`/urgentinjurycare/avulsions-crush-injuries`} className="bg-white hover:bg-[#FAFAFA] transition-all duration-300 rounded-2xl p-6">
                            <div className="text-xl font-bold mb-2">Avulsions & Crush Injuries</div>
                            <div className="text-base text-[#494647]">Skin or tissue torn away; rapid closure controls bleeding and preserves tissue.</div>
                        </Link>
                        <Link href={`/urgentinjurycare/chronic-pain-issues`} className="bg-white hover:bg-[#FAFAFA] transition-all duration-300 rounded-2xl p-6">
                            <div className="text-xl font-bold mb-2">Chronic wounds</div>
                            <div className="text-base text-[#494647]">Individuals with conditions like diabetes may experience slow healing and require specialized care, including debridement and advanced treatments.</div>
                        </Link>
                        <Link href={`/urgentinjurycare/cuts-lacerations-stitches`} className="bg-white hover:bg-[#FAFAFA] transition-all duration-300 rounded-2xl p-6">
                            <div className="text-xl font-bold mb-2">Lacerations</div>
                            <div className="text-base text-[#494647]">Jagged or straight cuts often need stitches or staples for proper healing.</div>
                        </Link>
                        <Link href={`/urgentinjurycare/wounds-abrasions-burns`} className="bg-white hover:bg-[#FAFAFA] transition-all duration-300 rounded-2xl p-6">
                            <div className="text-xl font-bold mb-2">Burns & Scalds</div>
                            <div className="text-base text-[#494647]">Minor to moderate thermal injuries; debride, dress, and manage pain.</div>
                        </Link>
                        <Link href={`/urgentinjurycare/bites-domestic-animals`} className="bg-white hover:bg-[#FAFAFA] transition-all duration-300 rounded-2xl p-6">
                            <div className="text-xl font-bold mb-2">Animal & Human Bites</div>
                            <div className="text-base text-[#494647]">High-infection wounds; thorough irrigation and preventive antibiotics.</div>
                        </Link>
                    </div>
                </section>
            </section>
            {/* Orthopedic & Sports Injuries We Treat Section */}
            <section className="w-full bg-[#FAFAFA]  px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl font-bold mb-2">Orthopedic & Sports Injuries We Treat</h2>
                    <h3 className="text-lg text-[#494647] mb-8">Identifying orthopedic injury symptoms and seeking timely treatment can expedite recovery.</h3>
                    <div className="w-full rounded-2xl overflow-hidden mb-10">
                        <Image src="/orthoandsport.jpg" alt="Orthopedic & Sports Injuries" width={900} height={350} className="w-full h-[370px] object-cover rounded-2xl" />
                    </div>
                    <p className="text-lg text-[#494647] mb-2">We offer a variety of wound care services, including sutures and medications, to prevent infections. With 43 locations in Florida and extended hours, we provide convenient access to care.</p>
                    <p className="text-lg text-[#494647] mb-10">Our team will create a personalized treatment plan based on your injury.</p>
                    <div className="flex flex-col gap-6">
                        <Link href={`/urgentinjurycare/simple-stress-fractures`} className="bg-white hover:bg-[#FAFAFA] transition-all duration-300 rounded-2xl p-6">
                            <div className="text-xl font-bold mb-2">Simple & Stress Fractures</div>
                            <div className="text-base text-[#494647]">Digital X-ray on site; splinting and STAT radiology reads in less then 4 3 hrs. Referral for casting or surgery when needed.</div>
                        </Link>
                        <Link href={`/urgentinjurycare/fractures-dislocations`} className="bg-white hover:bg-[#FAFAFA] transition-all duration-300 rounded-2xl p-6">
                            <div className="text-xl font-bold mb-2">Shoulder Dislocation / Subluxation</div>
                            <div className="text-base text-[#494647]">We reduce the joint, numb pain, immobilize, and order follow-up MRI if labrum or rotator cuff damage is suspected.</div>
                        </Link>
                        <Link href={`/urgentinjurycare/sprains-strains-fractures`} className="bg-white hover:bg-[#FAFAFA] transition-all duration-300 rounded-2xl p-6">
                            <div className="text-xl font-bold mb-2">Ankle & Wrist Sprains / Strains</div>
                            <div className="text-base text-[#494647]">Rapid swelling or inability to bear weight? Rule out fracture, apply supportive brace, RICE, and anti-inflammatory meds</div>
                        </Link>
                        <Link href={`/urgentinjurycare/tendon-ligament-tears`} className="bg-white hover:bg-[#FAFAFA] transition-all duration-300 rounded-2xl p-6">
                            <div className="text-xl font-bold mb-2">Tendon & Ligament Tears (ACL, MCL, Achilles)</div>
                            <div className="text-base text-[#494647]">Point-of-care ultrasound screens major tears; 1.5 T MRI confirms extent so ortho referral is seamless.</div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Walk-In Urgent Care Services Section */}
            <section className="w-full bg-[#FAFAFA] py-14 px-4">
                <div className="max-w-5xl mx-auto flex flex-col ">
                    <h2 className="text-5xl font-600 text-left mb-6">Walk-In Urgent Care Services</h2>
                    <div className="text-lg font-500 text-[#494647] text-left mb-10">Our specialists provide various services for minor injuries, including:</div>
                    <div className="w-full rounded-[32px] overflow-hidden mb-10">
                        <Image src="/walkininjury.jpg" alt="Walk-In Injury" width={900} height={350} className="w-full h-[340px] object-cover rounded-[32px]" />
                    </div>
                    <ul className="list-disc pl-8 mb-8 text-lg text-black w-full space-y-2">
                        <li>Stitches & Laceration Repair – walk in for numbing, sutures, staples, or skin-glue</li>
                        <li>Splinting, Bracing & Digital X-Ray – sprains, strains, simple fractures; STAT reads less then 3 hrs</li>
                        <li>Burn Treatment & Dressing Changes – minor and moderate thermal or chemical burns</li>
                        <li>Foreign-Body / Fishhook Removal – with on-site X-ray to confirm nothing's left behind</li>
                        <li>Workers' Comp & Workplace Injury Care – OSHA notes and return-to-work paperwork</li>
                        <li>Weekend Sports Injuries – sideline assessment, rapid imaging, PT / ortho referral</li>
                    </ul>
                    <div className="text-base text-gray-500 text-left mt-4">Most insurance accepted • $69 self-pay visit • seen in &lt; 15 minutes — book a same-day appointment or walk in now.</div>
                </div>
            </section>

            {/* Locations Row Section */}
            <LocationsRow />
        </main>
    )
}

export default UrgentInjuryCarePage;
