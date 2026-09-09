import type { Metadata } from "next";
import Link from "next/link";
import AccidentCTA from "@/components/accident/AccidentCTA";
import AccidentHero from "@/components/accident/AccidentHero";
import AccidentCard from "@/components/accident/AccidentCard";
import AccidentInfoSection from "@/components/accident/AccidentInfoSection";
import AccidentAppointmentForm from "@/components/accident/AccidentAppointmentForm";
import HeroWithForm from "@/components/accident/HeroWithForm";
import ImmediateCareBanner from "@/components/accident/ImmediateCareBanner";
import LinkCardGrid from "@/components/accident/LinkCardGrid";
import AccidentSEOContent from "@/components/accident/AccidentSEOContent";
import AccidentFAQ from "@/components/accident/AccidentFAQ";
import AccidentTypesTabs from "@/components/ui/AccidentTypesTabs";
import AccidentInjuryTypes from "@/components/car-accident/AccidentInjuryTypes";
import TrustBadges from "@/components/accident/TrustBadges";
import FourteenDayUrgencyBlock from "@/components/accident/FourteenDayUrgencyBlock";
import AttorneyFriendlySection from "@/components/accident/AttorneyFriendlySection";
import ComparisonTable from "@/components/accident/ComparisonTable";
import AccidentInternalLinks from "@/components/accident/AccidentInternalLinks";
import FourteenDayBanner from "@/components/accident/FourteenDayBanner";
import { toJsonLd, buildBreadcrumb, buildServiceSchema, buildGraphSchema } from "@/lib/seo";
import { MapPin, Phone, FileText, Shield, Clock, Users, Stethoscope, X, Dot } from "lucide-react";
import Image from "next/image";
import SlidingDiv from "@/components/SlidingAnimation";

const baseUrl = "https://primaryuc.com";

// Single source of truth for the visible FAQ + JSON-LD FAQPage schema.
// Audit Round 2 (Feb 2026) flagged schema/visible-content mismatch as the FAQ rich-results blocker;
// keeping the array referenced by both the component and the schema prevents the issue from returning.
const accidentFaqs = [
  {
    question: "Should I see a doctor after a car accident, even if I feel fine?",
    answer:
      "Yes. Adrenaline at the scene of a crash typically suppresses pain for several hours, and inflammation from soft-tissue injury builds over the following 24 to 72 hours. Many patients who walked away from their accident feeling fine wake up the next morning with neck pain, back pain, headache, or stiffness that wasn't there before. In Florida, getting an early medical evaluation also matters legally — Personal Injury Protection benefits require a qualifying medical visit within 14 days of the crash, and a medical doctor's exam is what can certify the emergency medical condition needed to access the full $10,000 PIP cap.",
  },
  {
    question: "Should I go to urgent care or the ER after a car accident?",
    answer:
      "For most non-life-threatening symptoms — whiplash, neck pain, back pain, headache, bruising, soft-tissue injury — urgent care is the appropriate setting. We handle examination, on-site digital X-ray, and PIP documentation in a single visit. Go directly to the ER for severe chest pain, loss of consciousness, signs of internal bleeding, neurological deficits, or any symptom that suggests a life-threatening injury. See our urgent care vs ER guide for the full breakdown.",
  },
  {
    question: "How do I find a car accident doctor in Palm Beach County?",
    answer:
      "PrimaryUC operates four car accident urgent care locations in Palm Beach County: Royal Palm Beach, Lake Worth, Palm Springs, and Lantana. All four locations are walk-in — no appointment needed — and prioritize accident-related visits so you can be seen, imaged, and documented in a single visit. Choose the location closest to your home, work, or the crash scene.",
  },
  {
    question: "Doctor or chiropractor after a car accident — which should I see first?",
    answer:
      "See a medical doctor first. A car accident doctor at an urgent care can order on-site X-rays, refer for CT or MRI when indicated, manage acute pain medically, and generate the PIP documentation your insurance carrier requires. A medical doctor can also certify the emergency medical condition needed to access the full $10,000 PIP cap — a chiropractor cannot, under Florida law. Chiropractic care can be a valuable follow-up for soft-tissue and musculoskeletal complaints once more serious injuries have been ruled out by imaging.",
  },
  {
    question: "Can I go to urgent care after a car accident in Florida?",
    answer:
      "Yes. Urgent care is an appropriate setting for the majority of car accident injuries, including whiplash, back and neck pain, soft-tissue injury, minor fractures, and post-accident headache. PrimaryUC's urgent care visits satisfy Florida's 14-day PIP rule for initial services, and our medical doctors can certify the emergency medical condition needed to access the full $10,000 PIP medical cap.",
  },
  {
    question: "What documentation does PIP insurance require after a car accident?",
    answer:
      "Your PIP carrier will require an initial medical evaluation note within 14 days of the accident, detailing the mechanism of injury, exam findings, any imaging performed, diagnoses, treatment plan, and recommendations for follow-up. PrimaryUC generates this documentation as part of every car accident visit and can coordinate directly with your insurer or any attorney you retain. See our PIP documentation guide for the full requirements.",
  },
  {
    question: "How quickly can I be seen for a car accident injury at PrimaryUC?",
    answer:
      "Same day. We accept walk-ins at all four Palm Beach County locations and prioritize accident-related visits. Most patients are checked in, examined, imaged where appropriate, and documented in a single visit on the day they walk in. No appointment is required.",
  },
];

export const metadata: Metadata = {
  title: "Car Accident & PIP Doctor Near Me | Direct PIP Billing",
  description:
    "Car accident injury clinic in Palm Beach County that bills Florida PIP directly. Same-day exam, onsite X-ray $70, walk in. 14-day rule compliant. 4 locations.",
  alternates: { canonical: `${baseUrl}/car-accident-injury-clinic` },
  openGraph: {
    title: "Car Accident & PIP Doctor Near Me | Direct PIP Billing",
    description:
      "Car accident injury clinic in Palm Beach County that bills Florida PIP directly. Same-day exam, onsite X-ray $70, walk in. 14-day rule compliant. 4 locations.",
    url: `${baseUrl}/car-accident-injury-clinic`,
    siteName: "Primary & Urgent Care Centers",
    images: [
      {
        url: `${baseUrl}/websitelogo.png`,
        width: 1200,
        height: 630,
        alt: "Car accident doctor at PrimaryUC Palm Beach County car accident injury clinic with onsite X-ray",
      },
    ],
    locale: 'en_US',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Car Accident & PIP Doctor Near Me | Direct PIP Billing",
    description: "Car accident injury clinic in Palm Beach County that bills Florida PIP directly. Same-day exam, onsite X-ray $70, walk in. 14-day rule compliant.",
    images: [`${baseUrl}/websitelogo.png`],
    site: '@primaryurgentcare',
  },
  robots: { index: true, follow: true }
};

export default function Page() {
  const pageUrl = `${baseUrl}/car-accident-injury-clinic`;

  const serviceSchema = buildServiceSchema({
    name: "Same-day car accident injury exam",
    description: "Urgent care accident evaluation with onsite X-ray and PIP documentation",
    provider: "https://primaryuc.com/#clinic",
    areaServed: ["Palm Beach County", "Royal Palm Beach", "Lake Worth", "Palm Springs", "Lantana"],
    url: pageUrl
  });

  // FAQPage schema derived from the same accidentFaqs const that drives the visible <AccidentFAQ /> component.
  // This guarantees schema/visible-content parity — the issue Audit Round 2 (Feb 2026) had to fix.
  const faqSchemaObj = {
    "@type": "FAQPage",
    mainEntity: accidentFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const breadcrumb = buildBreadcrumb([
    { name: "Home", url: baseUrl },
    { name: "Car Accident Urgent Care", url: pageUrl }
  ]);

  const webPageSchema = {
    "@type": "MedicalWebPage",
    name: "Car Accident Urgent Care Palm Beach | Same-Day Exam + PIP | PrimaryUC",
    url: pageUrl,
    description: "Car accident urgent care in Palm Beach County. Same-day eval, PIP documentation & onsite X-ray. 4 walk-in locations. Florida 14-day rule compliant.",
    about: {
      "@type": "MedicalCondition",
      name: "Motor Vehicle Collision Injuries"
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${baseUrl}/websitelogo.png`,
      width: 1200,
      height: 630
    }
  };

  const graphSchema = buildGraphSchema([
    breadcrumb,
    webPageSchema,
    serviceSchema,
    faqSchemaObj
  ]);

  return (
    <main className="w-full min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={toJsonLd(graphSchema)} />
      
      {/* 14-Day Rule Warning Banner */}
      <FourteenDayBanner />

      {/* Hero Section */}
      <HeroWithForm
        title="Car Accident Doctor & Urgent Care Clinic in Palm Beach County"
        subtitle={
          <p>
            Just had a crash? Our car accident doctors at PrimaryUC&apos;s Palm Beach County car accident injury clinic provide same-day exams, onsite X-ray, and PIP documentation that insurers and attorneys request.
          </p>
        }
        checklist={[
          "Seen today — walk-ins welcome",
          "Onsite X-ray; rapid MRI/CT referrals",
          "Visit summary & PIP documentation for insurers",
        ]}
        banner={<ImmediateCareBanner />}
        form={<AccidentAppointmentForm title="Check Car Accident Exam Availability" noWrapper={true} showHeader={false} compact={true} />}
      />

      {/* Trust & Urgency Strip */}
      <TrustBadges />

      {/* Why You Must Be Seen Within 14 Days */}
      <FourteenDayUrgencyBlock />

      {/* When to See a Car Accident Doctor in Florida */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-[60px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              When to See a Car Accident Doctor in Florida
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                The most common question patients ask us after a Florida crash is simple: <strong>&quot;Do I really need to see a doctor if I feel fine?&quot;</strong> The clinical answer is yes, and the legal answer in Florida is unambiguous — if you want your PIP benefits, you must be evaluated within 14 days of the accident.
              </p>
              <p>
                The reason a doctor&apos;s visit matters even when symptoms are minimal comes down to two physiological facts: adrenaline at the scene masks pain for hours after a crash, and inflammation from soft-tissue injury typically builds over the following 24 to 72 hours. Patients who felt fine in the moments after their accident often wake up the next morning with stiffness, headache, neck pain, or back pain that wasn&apos;t there before. Our walk-in <a className="text-[#2563eb] underline hover:text-[#1d4ed8]" href="/blog/headache-after-car-accident">headache evaluation after a car accident</a> and <a className="text-[#2563eb] underline hover:text-[#1d4ed8]" href="/blog/hip-pain-after-car-accident">hip pain after a car accident</a> guides walk through the most commonly delayed symptoms we see.
              </p>
              <p>
                For most non-life-threatening post-accident symptoms — whiplash, neck pain, back pain, headache, soft-tissue injury, joint pain — <strong>urgent care is the appropriate setting</strong>. We handle the imaging, examination, and PIP-compliant documentation in a single visit. The exceptions that require an emergency room — severe chest pain, loss of consciousness, neurological deficit, signs of internal bleeding — are detailed in our <a className="text-[#2563eb] underline hover:text-[#1d4ed8]" href="/car-accident/urgent-care-vs-er">urgent care vs ER guide</a>.
              </p>
              <p>
                If you&apos;re wondering what doctor to see after a car accident in Florida, the practical answer is: a medical doctor who can perform a physical exam, order on-site imaging, and generate the PIP documentation your insurance carrier and any attorney you retain will require. Walk in to any PrimaryUC location — no appointment needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Florida's 14-Day PIP Rule Section */}
      <section className='grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-14 h-full px-4 sm:px-6 lg:px-8 xl:px-[60px] py-8 sm:py-12 lg:py-16 xl:py-20'>
        <div className='w-full h-full relative rounded-2xl overflow-hidden'>
          <Image 
            src="/piprule.jpg" 
            alt="Florida PIP 14-day rule documentation for car accident insurance claims in Palm Beach County" 
            fill 
            className='object-cover aspect-square'
            loading="lazy"
          />
        </div>
        <SlidingDiv position='right' className='flex flex-col gap-2'>
          <div className='flex items-start justify-center xl:py-14 py-10 space-y-6 flex-col'>
            <p className='lg:text-6xl text-5xl font-600'>Florida's 14-Day PIP Rule — See a Doctor Fast to Protect Your Claim</p>
            <div className='text-lg text-[#494647]'>
              <p>
                Under Florida's Personal Injury Protection (PIP) law, you must receive medical care within 14 days of your car accident to unlock PIP benefits no matter who was at fault. Miss this window and the insurance carrier can deny payment for treatment, imaging, prescriptions, and lost wages.<br /><br />
                Our car accident urgent care offers same-day evaluation and PIP documentation for your claim. Even "minor" aches can mask whiplash, internal bleeding, or herniated discs, so book a same-day auto-injury visit or walk in today:
              </p>
              <br />
              <p className='flex flex-row space-x-2 items-center justify-start'>
                <Dot className='w-8 h-8' /> On-site digital X-ray, CT & MRI with STAT reads (≤ 3 hrs)
              </p>
              <p className='flex flex-row space-x-2 items-center justify-start'>
                <Dot className='w-8 h-8' /> Detailed injury documentation for attorneys & insurers
              </p>
              <p className='flex flex-row space-x-2 items-center justify-start'>
                <Dot className='w-8 h-8' /> Direct PIP billing—no out-of-pocket surprise bills
              </p>
              <p className='flex flex-row space-x-2 items-center justify-start'>
                <Dot className='w-8 h-8' /> Open extended hours across Palm Beach County
              </p>
            </div>
          </div>
        </SlidingDiv>
      </section>

      {/* Types of Car Accident Injuries We Treat */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-[60px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Car Accident Injuries Our Doctors Treat
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our experienced team evaluates and treats a wide range of injuries commonly seen after motor vehicle collisions
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#F2F6FC] to-[#E8F2FF] rounded-xl p-6 border-2 border-[#2563eb]/20">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Neck & Whiplash Injuries</h3>
              <p className="text-gray-700">Neck pain, stiffness, headaches, and reduced range of motion after rear-end or side-impact collisions. Symptoms may develop hours or days after the crash.</p>
            </div>
            <div className="bg-gradient-to-br from-[#F2F6FC] to-[#E8F2FF] rounded-xl p-6 border-2 border-[#2563eb]/20">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Back & Spinal Injuries</h3>
              <p className="text-gray-700">Lower back pain, upper back pain, muscle strains, disc injuries, and facet joint irritation. We evaluate the full spine and check for nerve involvement.</p>
            </div>
            <div className="bg-gradient-to-br from-[#F2F6FC] to-[#E8F2FF] rounded-xl p-6 border-2 border-[#2563eb]/20">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Headaches & Concussion Symptoms</h3>
              <p className="text-gray-700">Post-accident headaches, dizziness, confusion, and concussion-like symptoms. We screen for more serious head injuries and provide appropriate care.</p>
            </div>
            <div className="bg-gradient-to-br from-[#F2F6FC] to-[#E8F2FF] rounded-xl p-6 border-2 border-[#2563eb]/20">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Soft Tissue Injuries</h3>
              <p className="text-gray-700">Muscle strains, ligament sprains, contusions, and seatbelt-related injuries. These injuries can cause significant pain and may worsen over time.</p>
            </div>
            <div className="bg-gradient-to-br from-[#F2F6FC] to-[#E8F2FF] rounded-xl p-6 border-2 border-[#2563eb]/20">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Joint & Extremity Injuries</h3>
              <p className="text-gray-700">Shoulder, knee, wrist, and ankle injuries from impact or bracing during the collision. We evaluate joint stability and range of motion.</p>
            </div>
            <div className="bg-gradient-to-br from-[#F2F6FC] to-[#E8F2FF] rounded-xl p-6 border-2 border-[#2563eb]/20">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Minor Fractures</h3>
              <p className="text-gray-700">Simple fractures that don't require emergency surgery. We have onsite X-ray to diagnose and can refer for orthopedic care when needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Early Evaluation Matters */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-[60px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Early Evaluation Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Getting evaluated soon after a car accident benefits both your health and your insurance claim
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 border-2 border-[#2563eb]/20">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Clinical Benefits</h3>
              <p className="text-gray-700 mb-4">Many injuries, especially whiplash and soft-tissue trauma, may not cause immediate symptoms. Early evaluation helps identify hidden injuries before they worsen, allowing for prompt treatment and better recovery outcomes.</p>
              <p className="text-gray-700">Early intervention can also prevent chronic pain conditions and reduce the risk of long-term complications from untreated injuries.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-[#2563eb]/20">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">PIP Timing Requirements</h3>
              <p className="text-gray-700 mb-4">Florida's PIP law requires medical care within 14 days of your accident to unlock up to $10,000 in PIP benefits. Missing this deadline can result in denial of coverage for medical bills, lost wages, and related benefits.</p>
              <p className="text-gray-700">Early documentation also creates a clear timeline that links your symptoms to the collision, which is important for both insurance claims and any potential legal proceedings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Accident Types We See */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-[60px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Accident Types We See
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              We treat patients after various types of motor vehicle collisions. Even minor fender-benders can cause significant injuries.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-[#FEF2F2] to-[#FEE2E2] rounded-xl p-6 border-2 border-[#D52128]/20">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rear-End Collisions</h3>
              <p className="text-sm text-gray-700">Common cause of whiplash and neck injuries. Even low-speed impacts can cause significant trauma.</p>
            </div>
            <div className="bg-gradient-to-br from-[#FEF2F2] to-[#FEE2E2] rounded-xl p-6 border-2 border-[#D52128]/20">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Side-Impact Crashes</h3>
              <p className="text-sm text-gray-700">Often cause back pain, shoulder injuries, and head trauma from lateral forces.</p>
            </div>
            <div className="bg-gradient-to-br from-[#FEF2F2] to-[#FEE2E2] rounded-xl p-6 border-2 border-[#D52128]/20">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Head-On Collisions</h3>
              <p className="text-sm text-gray-700">Higher-energy impacts that may cause multiple injuries including spinal trauma.</p>
            </div>
            <div className="bg-gradient-to-br from-[#FEF2F2] to-[#FEE2E2] rounded-xl p-6 border-2 border-[#D52128]/20">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Low-Speed Accidents</h3>
              <p className="text-sm text-gray-700">Parking lot fender-benders and minor collisions can still cause whiplash and soft-tissue injuries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accident Types We Treat Section */}
      <AccidentTypesTabs />

      {/* Car Accident Injuries We Treat Section */}
      <AccidentInjuryTypes />

      {/* Urgent Care vs ER Comparison */}
      <ComparisonTable />

      {/* Attorney-Friendly Documentation Section */}
      <AttorneyFriendlySection />

      {/* SEO Content Section */}
      <AccidentSEOContent
        content="After a car accident, immediate medical evaluation is crucial for both your health and your insurance claim. Florida's PIP 14-day rule requires you to be seen by a qualifying medical provider within 14 days of your crash to access Personal Injury Protection (PIP) benefits. The full $10,000 PIP medical cap is only available when a medical doctor, osteopathic physician, dentist, physician assistant, or advanced practice registered nurse determines you have an emergency medical condition; without that determination, PIP medical benefits are capped at $2,500. PrimaryUC operates four car accident injury clinics across Palm Beach County, with same-day evaluation, onsite digital X-ray, and rapid CT/MRI referrals when indicated. Our urgent care team handles the full range of car accident injuries — whiplash, back pain, neck pain, soft-tissue injury, minor fractures, and post-accident headache evaluation — and we generate the medical documentation that PIP insurers and personal injury attorneys require. If you're searching for a car accident clinic near me, a car accident urgent care, or a car accident doctor near me in Palm Beach County, walk in to any of our four locations: Royal Palm Beach, Lake Worth, Palm Springs, or Lantana. No appointment needed; we prioritize accident-related visits so you can be seen, imaged, and documented in a single visit."
      />

      {/* Location Cards - Made Bigger and More Prominent */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 xl:px-[60px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find a Car Accident Clinic Near You — 4 Palm Beach Locations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Searching for a car accident clinic near me in Palm Beach County? PrimaryUC operates four car accident urgent care locations, each open daily for walk-in evaluation, same-day PIP documentation, and onsite digital X-ray. Find the location closest to your home, work, or the scene of your accident:
            </p>
          </div>
          <LinkCardGrid
            items={[
              { href: "/car-accident/royal-palm-beach", title: "Car Accident Urgent Care — Royal Palm Beach", desc: "11476 Okeechobee Blvd, Royal Palm Beach, FL 33411 • Same-day appointments available" },
              { href: "/car-accident/lake-worth", title: "Car Accident Urgent Care — Lake Worth", desc: "6447 Lake Worth Rd, Lake Worth Beach, FL 33463 • Onsite X-ray and imaging" },
              { href: "/car-accident/palm-springs", title: "Car Accident Urgent Care — Palm Springs", desc: "3460 S Congress Ave, Palm Springs, FL 33461 • PIP documentation and insurance coordination" },
              { href: "/car-accident/lantana", title: "Car Accident Urgent Care — Lantana / Jog Rd", desc: "6169 Jog Rd Unit 4B, Lake Worth Beach, FL 33463 • Walk-ins welcome, no appointment needed" },
            ]}
          />
        </div>
      </section>

      {/* Immediate Medical Care After a Crash */}
      <AccidentInfoSection
        title="Immediate Medical Care After a Crash"
        items={[
          {
            icon: <Stethoscope className="w-6 h-6" />,
            title: "Comprehensive Injury Evaluation",
            description: "Thorough assessment of head, neck, back, joints, and soft tissue injuries",
            type: 'primary'
          },
          {
            icon: <X className="w-6 h-6" />,
            title: "Onsite Imaging Services",
            description: "Digital X-ray available; rapid MRI/CT referrals when indicated",
            type: 'secondary'
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Pain Management",
            description: "Immediate pain relief and return-to-activity guidance",
            type: 'primary'
          },
          {
            icon: <FileText className="w-6 h-6" />,
            title: "Complete Documentation",
            description: "Detailed visit summaries for insurance and legal purposes",
            type: 'secondary'
          },
          {
            icon: <Clock className="w-6 h-6" />,
            title: "Same-Day Service",
            description: "Walk-ins welcome or book online appointments",
            type: 'primary'
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Expert Team",
            description: "Board-certified physicians and experienced medical staff",
            type: 'secondary'
          }
        ]}
        className="bg-white"
      />

      {/* Doctor or Chiropractor After a Car Accident? */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-[60px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Doctor or Chiropractor After a Car Accident?
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Another question that comes up almost daily at our car accident injury clinic: <strong>after a crash, should I see a medical doctor or a chiropractor first?</strong>
              </p>
              <p>
                The short answer: <strong>see a medical doctor first</strong>, and let the exam findings and imaging guide whether chiropractic care belongs in your recovery plan.
              </p>
              <p>
                There are practical reasons this order matters. A car accident doctor at an urgent care can do things a chiropractor typically cannot: order and read on-site digital X-rays to rule out fracture, refer for CT or MRI imaging when soft-tissue injury or possible head injury is suspected, manage acute pain medically, and generate the kind of evaluation note your PIP carrier and any personal injury attorney will require. Both medical doctors and chiropractors can satisfy Florida&apos;s 14-day PIP rule for initial services, but only a medical doctor, osteopathic physician, dentist, physician assistant, or advanced practice registered nurse can certify the emergency medical condition needed to access the full $10,000 PIP benefit. Without that certification, PIP medical benefits are capped at $2,500 — which is the practical reason most patients are better served starting with a medical evaluation. See our <a className="text-[#2563eb] underline hover:text-[#1d4ed8]" href="/car-accident/documentation-pip">PIP documentation guide</a> for what specifically must be in the record.
              </p>
              <p>
                Chiropractic care can be a valuable follow-up for soft-tissue injury, post-whiplash neck and back stiffness, and certain musculoskeletal complaints once a fracture or more serious injury has been ruled out. Many of our patients combine an initial urgent care visit (medical evaluation, imaging, PIP documentation) with later chiropractic care for ongoing soft-tissue treatment. The order — medical first, chiropractic as appropriate — protects both your health and your insurance claim.
              </p>
              <p>
                If you&apos;re unsure where to start, walk in to a PrimaryUC car accident urgent care for the initial medical evaluation. We&apos;ll examine you, image where indicated, document the visit for your PIP claim, and discuss whether chiropractic follow-up makes sense for your specific injuries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <AccidentFAQ
        title="Frequently Asked Questions About Car Accident Injury Care"
        faqs={accidentFaqs}
      />

      {/* Internal Links Section */}
      <AccidentInternalLinks />

    </main>
  );
}
