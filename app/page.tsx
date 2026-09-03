import Image from "next/image";
import { ChevronDown } from "lucide-react";
import homeLanding from "@/public/homelanding.png";
import GradientImage from '@/components/ui/GradientImage';
import CareCard from '@/components/ui/CareCard';
import ReviewCard from '@/components/ui/ReviewCard';
import Ambulance from "@/components/icons/ambulance";
import Waittimes from "@/components/icons/waittimes";
import ShieldUser from "@/components/icons/shielduser";
import LocationCard from '@/components/ui/LocationCard';
import Services from "@/components/Services";
import LocationsRow from "@/components/LocationsRow";
import ClinicsMap from "@/components/DynamicClinicsMap";
import { LocationsScreens } from "@/components/locationsscreens";
import SlidingDiv from "@/components/SlidingAnimation";
import Reveal from "@/components/RevealAnimation";
import Testimonials from "@/components/testimonials";
import Reviews from "@/components/Reviews";
import { LanguageSwitcher } from "@/components/language-switcher";
import Link from "next/link";
import HomepageMobileHeroForm from "@/components/ui/HomepageMobileHeroForm";
export const metadata = {
  title: 'Palm Beach Urgent Care & Car Accident Doctor | PrimaryUC',
  description: 'Walk-in urgent care and car accident doctor in Palm Beach County. On-site X-ray, CT and MRI. No referral needed. 4 locations, seen in under 15 minutes.',
  keywords: [
    'car accident doctor west palm beach',
    'personal injury clinic',
    'urgent injury care',
    'florida pip doctor',
    'slip and fall doctor palm beach county',
    'walk-in injury clinic',
    'urgent care Palm Beach',
    'Royal Palm Beach urgent care',
    'Lake Worth urgent care',
    'Palm Springs urgent care',
    'Lantana / Jog Rd urgent care',
    'no wait urgent care',
    'X-ray urgent care',
    'MRI urgent care'
  ].join(', '),
  openGraph: {
    title: 'Palm Beach Urgent Care & Car Accident Doctor | PrimaryUC',
    description: 'Walk-in urgent care and car accident doctor in Palm Beach County. On-site X-ray, CT and MRI. No referral needed. 4 locations, seen in under 15 minutes.',
    url: 'https://primaryuc.com/',
    siteName: 'Primary & Urgent Care Centers',
    images: [
      {
        url: '/Homepage25.png',
        width: 1200,
        height: 630,
        alt: 'Urgent Care Palm Beach County',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Palm Beach Urgent Care & Car Accident Doctor | PrimaryUC',
    description: 'Walk-in urgent care and car accident doctor in Palm Beach County. On-site X-ray, CT and MRI. No referral needed. 4 locations, seen in under 15 minutes.',
    images: ['/Homepage25.png'],
  },
  alternates: {
    canonical: 'https://primaryuc.com/',
  },
};

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col text-white">
      <LanguageSwitcher />
      <section className="flex items-center w-full h-full justify-center relative lg:py-20 py-10">
        <Image
          src={'/primary-uc-nurse-care.jpg'}
          alt="Hero background"
          priority
          fill
          className="-z-10 w-full h-full absolute object-cover object-top"
        />
        <div className="absolute inset-0 bg-[#1B1819]/60 -z-10 "></div>
        <div className="flex flex-col xl:flex-row xl:space-y-0 space-y-10 justify-between sm:max-w-8xl w-full xl:px-[60px] px-6">
          <div className="flex flex-col justify-center space-y-6 w-fit">
            <div className="backdrop-blur-3xl bg-white/20 text-white text-sm px-4 py-2 rounded-full self-start">
              Call for any emergency: 561-355-2651

            </div>
            <h1 className="lg:text-6xl text-4xl font-bold ">
              Welcome To Primary & Urgent Care Centers
            </h1>
            <div className="w-fit">
              <span className="inline-block bg-[#D52128] text-white font-semibold rounded-full px-5 py-2.5 text-base sm:px-6 sm:py-3 sm:text-lg shadow-lg ring-2 ring-white/30 backdrop-blur-sm">
                Office visits are $89.99
              </span>
            </div>
            <p className="text-lg w-full ">
              Fast, reliable urgent care for all your health needs. From routine check-ups and primary care to accident and injury care—our expert medical team provides comprehensive healthcare services with same-day appointments and walk-ins welcome.
            </p>
          </div>

          <div className="w-full h-full">
            <HomepageMobileHeroForm />
          </div>

        </div>
      </section>

      <Services />

      {/* State of the Art Technology Section */}
      <section className="w-full sm:max-w-8xl bg-white mx-auto md:py-10 grid grid-cols-1 lg:gap-12 px-6 lg:px-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-8">

          <div className="w-full  sm:block hidden">
            <GradientImage
              src="/stateoftheart.png"
              alt="Doctor with MRI and X-ray"
              className="w-full "
              priority
            />
          </div>

          <SlidingDiv className="w-full overflow-hidden" position="right">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                State of the Art Technology,<br className="hidden lg:block" />Right Inside Our Urgent Care
              </h2>
              <p className="text-gray-700 text-base lg:text-lg">
                Healthcare has entered the fast lane—and so have we. Primary & Urgent Care Centers pairs hospital-level care with true emergency-room equipment: 1.5 T MRI, multi-slice CT, high-definition digital X-ray, ultrasound, and lab analyzers. Every image is read STAT—often within three hours—so you leave with same-day answers and a clear plan, not more questions.
              </p>
            </div>
          </SlidingDiv>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <SlidingDiv className="w-full overflow-hidden" position="left">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Seen in 15 minutes or less!
              </h2>
              <p className="text-gray-700 text-base lg:text-lg">
                No cold, unfriendly waiting rooms and interminable wait times to be seen are a nightmare of the past! Come to a Primary and Urgent Care Center and step into the new age of health care, where you will feel welcome while also knowing you will be seen by a knowledgeable medical professional IN LESS THAN 15 MINUTES.
              </p>
            </div>
          </SlidingDiv>
          <div className="w-full sm:block hidden">
            <GradientImage
              src="/doctorwithpatient.jpg"
              alt="Doctor with patient"
              className="w-full "
              direction="left"
              priority={false}
            />
          </div>
        </div>
      </section>

      {/* Urgent, Accident, Emergency Room Care Section */}
      <section className="w-full bg-white py-20 px-4 lg:px-[60px]">
        <div className="sm:max-w-8xl mx-auto grid grid-cols-1 gap-8">
          {/* Top row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 items-stretch">
            <div className=" col-span-1">
              <CareCard
                imageSrc="/urgent.jpg"
                title="Injury Care"
                description="From sprains, strains, and simple fractures to minor burns and cuts, our clinicians deliver rapid treatment using hospital-grade splints and on-site X-ray—no referral, no delay. Specializing in accident and injury care for car accidents, slip & falls, and work injuries."
                buttonText="Explore Urgent Care"
                buttonLink="/urgentinjurycare"
              />
            </div>
            <div className="lg:col-span-2 col-span-1">
              <CareCard
                imageSrc="/accident.jpg"
                title="Comprehensive Accident & Pain Care"
                description="Car crash? Sports mishap? We evaluate whiplash, neck and back pain, headaches, migraines and more. On-site imaging plus pain-management therapy speed your recovery—without an ER wait. Get your injury documented for insurance or legal claims."
                buttonText="Explore Pain care"
                buttonLink="/car-accident-injury-clinic"
              />
            </div>
          </div>
          {/* Bottom row */}
          <CareCard
            imageSrc="/emergencyroomlevelcare.jpg"
            title="Emergency Room Level Care"
            description="Why battle long waits at a hospital ER? Our urgent care centers deliver true hospital-level care with emergency-room equipment from on-site imaging so you get the right treatment fast. For non-life- or limb-threatening emergencies, simply walk in or book a same-day appointment and be seen in 15 minutes or less. Enjoy STAT imaging reads within 3 hours and same-day scan results. We work with your auto insurance or attorney to provide all necessary documentation."
            buttonText="Explore Emergency Care"
            horizontal
            className=""
            buttonLink="/emergencyroom"
          />
        </div>
      </section>

      {/* Reviews Section */}
      <Testimonials />

      {/* Accessible Urgent Care Section */}
      <section className="w-full bg-[#FAFAFA] lg:py-24 py-10 px-6 lg:px-[60px]">
        <div className="sm:max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left: Text and Cards */}
          <div className="lg:col-span-3 flex flex-col gap-10">
            <div>
              <h2 className="lg:text-6xl text-4xl font-bold text-black mb-6 leading-tight">Accessible Urgent Care Across Palm Beach County</h2>
              <p className="text-md text-gray-700 mb-10">
                With four walk-in urgent care clinics—Royal Palm Beach, Lake Worth, Palm Springs, and Lantana / Jog Rd—we make it easy to see a provider close to home, on your schedule. Enjoy short wait times, hospital-level diagnostics, and broad insurance acceptance at every location. If you’ve been in an accident, it’s critical to seek care within 14 days to comply with Florida’s PIP rule and protect your right to insurance benefits.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-16 gap-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2 col-span-1 ">
                {/* Top left card */}
                <div className="w-full overflow-hidden bg-[#F2F6FC] rounded-tl-2xl lg:p-8 p-6 flex flex-col space-y-20 py-10 relative pb-20">
                  <div className="absolute top-6 right-6 bg-white rounded-full p-3 ">
                    <Ambulance />
                  </div>
                  <Reveal className="w-full overflow-hidden">
                    <div className="w-full overflow-hidden">
                      <h3 className="lg:text-4xl text-3xl font-bold text-black mb-8">Urgent Care</h3>
                      <p className="text-gray-700 text-lg">Primary & Urgent Care Centers deliver local, personal treatment for everything from colds to fractures—no referral needed.</p>
                    </div>
                  </Reveal>
                </div>
                {/* Top right card */}
                <div className="w-full overflow-hidden bg-[#FDF4F4] rounded-tr-2xl lg:p-8 p-6 flex flex-col space-y-20 py-10 relative pb-20">
                  <div className="absolute top-6 right-6 bg-white rounded-full p-3 ">
                    <Waittimes />
                  </div>
                  <Reveal className="w-full overflow-hidden">
                    <div className="w-full overflow-hidden">
                      <h3 className="lg:text-4xl text-3xl font-bold text-black mb-8">Short Wait Times</h3>
                      <p className="text-gray-700 text-lg">Our digital queue guarantees you'll be seen in 15 minutes or less. Book a same-day appointment or walk in anytime.</p>
                    </div>
                  </Reveal>
                </div>
                {/* Bottom card (spans both columns) */}
                <div className="bg-white rounded-b-2xl lg:p-8 p-6 flex flex-col space-y-20 md:col-span-2 justify-between  relative">
                  <div className="absolute top-6 right-6 bg-white rounded-full p-3 ">
                    <ShieldUser />
                  </div>
                  <Reveal className="w-full overflow-hidden">
                    <div className="w-full overflow-hidden">
                      <h3 className="lg:text-4xl text-3xl font-bold text-black mb-8 md:w-full w-[80%]">Most Insurance Accepted</h3>
                      <p className="text-gray-700 text-lg">Our co-pays are less than hospital emergency room fees and we will work with you to process your insurance</p>
                    </div>
                  </Reveal>
                </div>
              </div>
              {/* Right: Map Placeholder */}
              <div className="w-full h-full col-span-2 bg-gray-200 rounded-2xl flex items-center justify-center">
                <ClinicsMap zoom={11} />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Locations Row Section */}
      <LocationsRow />
    </main>
  );
}
