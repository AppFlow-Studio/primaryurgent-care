import type { Metadata } from "next";
import Link from "next/link";
import AccidentAppointmentForm from "@/components/accident/AccidentAppointmentForm";
import AccidentFAQ from "@/components/accident/AccidentFAQ";
import HeroWithForm from "@/components/accident/HeroWithForm";
import ImmediateCareBanner from "@/components/accident/ImmediateCareBanner";
import RelatedTopics from "@/components/accident/RelatedTopics";
import FourteenDayBanner from "@/components/accident/FourteenDayBanner";
import TrustBadges from "@/components/accident/TrustBadges";
import AttorneyFriendlySection from "@/components/accident/AttorneyFriendlySection";
import AccidentInternalLinks from "@/components/accident/AccidentInternalLinks";
import { toJsonLd, buildBreadcrumb, buildServiceSchema, buildGraphSchema } from "@/lib/seo";

const baseUrl = "https://primaryuc.com";

// Single source of truth for visible FAQ + JSON-LD FAQPage schema.
const pipFaqs = [
  {
    question: "What is PIP insurance in Florida?",
    answer:
      "PIP — Personal Injury Protection — is the mandatory no-fault auto insurance coverage required of all Florida drivers under Fla. Stat. § 627.736. It pays for your medical evaluation and treatment after a car accident regardless of who was at fault. Florida PIP provides up to $10,000 in medical and disability benefits per accident — but only if you receive your initial medical evaluation within 14 days of the crash and a qualifying provider certifies an emergency medical condition. Without that certification, PIP medical benefits cap at $2,500.",
  },
  {
    question: "What is the Florida PIP 14-day rule?",
    answer:
      "The Florida PIP 14-day rule requires you to receive initial medical services within 14 days of your motor vehicle accident to be eligible for PIP medical benefits. The 14 days are counted from the date of the accident — not from the day your symptoms appeared. If you wait beyond day 14, your PIP carrier can deny the medical portion of your claim, leaving you responsible for the medical costs out of pocket. The same rule applies whether your injuries were serious, mild, or initially asymptomatic.",
  },
  {
    question: "What is an Emergency Medical Condition (EMC) and why does it matter?",
    answer:
      "An Emergency Medical Condition (EMC) is a clinical determination — drawn from Fla. Stat. § 395.002(8) and applied through Florida's PIP statute — that your injuries manifest as acute symptoms severe enough that, without immediate medical attention, they could reasonably result in serious jeopardy to your health, serious impairment of bodily functions, or serious dysfunction of any bodily organ or part. Under Florida PIP statute § 627.736(1)(a), only a medical doctor (MD), osteopathic physician (DO), dentist, physician assistant (PA), or advanced practice registered nurse (APRN) can certify an EMC. The certification matters financially: with an EMC, your PIP medical benefit is $10,000; without one, it caps at $2,500. Chiropractors and physical therapists cannot certify an EMC under Florida law.",
  },
  {
    question: "What does PIP insurance cover in Florida?",
    answer:
      "Florida PIP covers 80% of reasonable and necessary medical expenses (up to the PIP limit), 60% of lost wages, and 100% of replacement services (household help, childcare you'd otherwise do). It also provides a $5,000 death benefit. Covered medical services include emergency room visits, urgent care, hospital stays, surgery, X-ray and other imaging, rehabilitation, and prescription medications — provided they're documented as reasonable and medically necessary. PIP does not cover pain and suffering, vehicle damage, or third-party liability — those fall under other coverages.",
  },
  {
    question: "How much is PIP insurance in Florida?",
    answer:
      "PIP premiums vary by driver, vehicle, location, and carrier, but the statutory minimum coverage every Florida driver must carry is $10,000 in PIP medical/disability and $10,000 in PDL (Property Damage Liability). Many drivers choose higher PIP limits if available from their carrier. We don't sell insurance — for current PIP premium quotes, contact a Florida-licensed insurance agent. Our role is on the medical side: we provide the same-day exam, imaging, and PIP-compliant documentation your carrier requires once a claim is opened.",
  },
  {
    question: "Do I need an attorney before I come in for a PIP exam?",
    answer:
      "No. You can come in for an exam and documentation whether or not you have an attorney. Many patients see us first, get the medical workup and PIP documentation in order, and then decide whether to retain a personal injury attorney later. If you decide to work with one, we can share your records once you sign a release. Florida PIP benefits are available to you regardless of whether you have legal representation.",
  },
  {
    question: "Can PrimaryUC update my documentation over time?",
    answer:
      "Yes. Follow-up visits generate updated records that show how your symptoms and function change over weeks or months. These ongoing records can be important for both medical recovery tracking and any insurance or legal claims. If your PIP carrier or attorney needs additional documentation, we can typically generate a supplemental note from your visit records.",
  },
];

export const metadata: Metadata = {
  title: "Does Florida PIP Cover X-Rays? 14-Day Rule + EMC | PrimaryUC",
  description:
    "Florida's 14-day PIP rule, EMC certification, and what PIP covers after a crash. Same-day exam, onsite X-ray, and the paperwork your claim needs.",
  alternates: { canonical: `${baseUrl}/car-accident/documentation-pip` },
  openGraph: {
    title: "Does Florida PIP Cover X-Rays? 14-Day Rule + EMC | PrimaryUC",
    description:
      "Florida's 14-day PIP rule, EMC certification, and what PIP covers after a crash. Same-day exam, onsite X-ray, and the paperwork your claim needs.",
    url: `${baseUrl}/car-accident/documentation-pip`,
    type: 'article',
    siteName: "Primary & Urgent Care Centers",
    images: [
      {
        url: `${baseUrl}/man-on-phone-next-to-open-hood.jpg`,
        width: 1200,
        height: 630,
        alt: "Florida PIP 14-day rule documentation and emergency medical condition exam after car accident in Palm Beach County",
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Does Florida PIP Cover X-Rays? 14-Day Rule + EMC | PrimaryUC",
    description: "Florida's 14-day PIP rule, EMC certification, and what PIP covers after a crash. Same-day exam, onsite X-ray, and the paperwork your claim needs.",
    images: [`${baseUrl}/man-on-phone-next-to-open-hood.jpg`],
    site: '@primaryurgentcare',
  },
  robots: { index: true, follow: true }
};

export default function Page() {
  const pageUrl = `${baseUrl}/car-accident/documentation-pip`;
  const breadcrumb = buildBreadcrumb([
    { name: "Home", url: baseUrl },
    { name: "Car Accident Urgent Care", url: `${baseUrl}/car-accident-injury-clinic` },
    { name: "Documentation & PIP", url: pageUrl }
  ]);

  const serviceSchema = buildServiceSchema({
    name: "Car accident PIP exam and documentation",
    description: "Same-day medical records, visit summaries, insurance paperwork for PIP claims. Florida 14-day rule compliant.",
    provider: "https://primaryuc.com/#clinic",
    areaServed: ["Palm Beach County", "Royal Palm Beach", "Lake Worth", "Palm Springs", "Lantana"],
    url: pageUrl
  });

  // FAQPage schema derived from the pipFaqs const — schema cannot drift from visible content.
  const faqObj = {
    "@type": "FAQPage",
    mainEntity: pipFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const webPageSchema = {
    "@type": "MedicalWebPage",
    name: "Car Accident PIP Exam & Documentation | Urgent Care + Palm Beach | PrimaryUC",
    url: pageUrl,
    description: "Car accident PIP exam & documentation at Palm Beach County urgent care. Same-day records, visit summaries & insurance paperwork. Florida 14-day compliant.",
    about: {
      "@type": "Service",
      name: "PIP Documentation Service"
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${baseUrl}/man-on-phone-next-to-open-hood.jpg`,
      width: 1200,
      height: 630
    }
  };

  const graphSchema = buildGraphSchema([
    breadcrumb,
    webPageSchema,
    serviceSchema,
    faqObj
  ]);

  return (
    <main className="w-full min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={toJsonLd(graphSchema)} />
      
      {/* 14-Day Rule Warning Banner */}
      <FourteenDayBanner />

      {/* Hero Section */}
      <HeroWithForm
        title="Florida PIP 14-Day Rule & Car Accident Documentation"
        subtitle={
          <p>
            Florida&apos;s PIP 14-day rule requires a qualifying medical visit within 14 days of your crash to access PIP benefits. Our car accident doctors complete the same-day exam, certify the emergency medical condition needed to unlock the full $10,000 PIP cap, and generate the documentation your insurer and any attorney will require.
          </p>
        }
        checklist={[
          "Full exam + EMC certification (MD/PA/APRN) for the $10,000 PIP cap",
          "Same-day visit summary and PIP-compliant records",
          "Help coordinating paperwork with your insurer or attorney",
        ]}
        banner={<ImmediateCareBanner />}
        form={<AccidentAppointmentForm title="Book Your PIP Documentation Exam" noWrapper={true} showHeader={false} compact={true} />}
        backgroundImage="/man-on-phone-next-to-open-hood.jpg"
      />

      {/* Trust Badges */}
      <TrustBadges />

      <div className="bg-[#FAFAFA] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-[60px]">
        <div className="max-w-4xl mx-auto">

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-3">What Is Florida PIP Insurance, and How Does the 14-Day Rule Work?</h2>
          <p className="text-base md:text-lg text-gray-700 mb-4">
            Florida Personal Injury Protection (PIP) is the no-fault auto insurance coverage every Florida driver is required to carry under <strong>Fla. Stat. § 627.736</strong>. It pays for your medical care after a car accident regardless of who was at fault. The headline benefit is <strong>up to $10,000 in medical and disability coverage per accident</strong> — but that headline number comes with two conditions that catch many patients off guard.
          </p>
          <p className="text-base md:text-lg text-gray-700 mb-4">
            <strong>Condition 1 — the 14-day rule.</strong> You must receive an initial medical evaluation within 14 days of the date of the accident. The clock counts from the crash date, not the day your symptoms appeared. If you wait beyond day 14, your PIP carrier can deny the entire medical portion of your claim.
          </p>
          <p className="text-base md:text-lg text-gray-700 mb-4">
            <strong>Condition 2 — the Emergency Medical Condition (EMC) determination.</strong> The full $10,000 cap is only available when a qualifying provider certifies that you have an emergency medical condition. Without an EMC determination, PIP medical benefits are capped at <strong>$2,500</strong>. We cover the EMC requirement in detail below.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-3">Emergency Medical Condition (EMC) — The $10,000 vs $2,500 Question</h2>
          <p className="text-base md:text-lg text-gray-700 mb-4">
            An Emergency Medical Condition is a clinical determination that your injuries manifest as acute symptoms severe enough that, without immediate medical attention, they could reasonably result in serious jeopardy to your health, serious impairment of bodily functions, or serious dysfunction of any bodily organ or part. This is the definition Florida PIP law adopts from <strong>Fla. Stat. § 395.002(8)</strong>. Under <strong>Fla. Stat. § 627.736(1)(a)</strong>, only a limited list of providers can certify an EMC:
          </p>
          <ul className="list-disc ml-6 space-y-2 mb-6">
            <li>Medical doctor (MD)</li>
            <li>Osteopathic physician (DO)</li>
            <li>Dentist</li>
            <li>Physician assistant (PA)</li>
            <li>Advanced practice registered nurse (APRN)</li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 mb-4">
            <strong>Chiropractors and physical therapists cannot certify an EMC under Florida law</strong> — they can satisfy the 14-day rule for initial services, but they cannot make the determination that unlocks the full $10,000 PIP medical cap. If your initial visit after a crash is with a chiropractor or PT only, your PIP medical benefit is limited to $2,500 unless and until a qualifying provider (MD, DO, PA, APRN, or dentist) certifies an emergency medical condition — which a qualifying provider can do at a later visit or through records review.
          </p>
          <p className="text-base md:text-lg text-gray-700 mb-4">
            At PrimaryUC, your visit is with a qualifying medical provider. If the EMC determination is appropriate based on your examination findings, we make it at the time of your visit and document it in the medical record your PIP carrier will receive.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-3">What Your PIP Exam Includes</h2>
          <p className="text-base md:text-lg text-gray-700 mb-4">
            A comprehensive PIP exam involves several key components designed to document your injuries and create a clear medical record:
          </p>
          <div className="space-y-4 mb-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial History & Injury Description</h3>
              <p className="text-gray-700">We document the collision details, how your injuries occurred, and when symptoms began. This creates a clear timeline linking the accident to your medical condition.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Physical Exam Details</h3>
              <p className="text-gray-700">Comprehensive examination findings including range of motion, neurologic testing, palpation findings, and any visible injuries. All findings are documented in detail for your records.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Imaging When Indicated</h3>
              <p className="text-gray-700">If imaging is needed, we perform onsite X-rays or arrange MRI/CT referrals. All imaging results are included in your documentation package.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Treatment Discussion & Follow-Up</h3>
              <p className="text-gray-700">We discuss treatment options, medications, activity modifications, and follow-up care. All recommendations are documented for your insurance claim.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-3">What to Bring to Your PIP Documentation Visit</h2>
          <ul className="list-disc ml-6 space-y-2 mb-6">
            <li>Photo ID and insurance card</li>
            <li>Auto insurance claim number, if available</li>
            <li>Police report or crash report number, if you have it</li>
            <li>
              Any prior medical records or imaging related to this accident
            </li>
            <li>
              Contact information for your attorney or law office, if applicable
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-3">Types of Documentation We Commonly Prepare</h2>
          <p className="text-base md:text-lg text-gray-700 mb-3">
            After your exam, we generate records that are structured for insurance and legal review, including:
          </p>
          <ul className="list-disc ml-6 space-y-2 mb-6">
            <li>
              Initial visit summary with detailed history of the crash and symptoms
            </li>
            <li>
              Physical exam findings, including neurologic and orthopedic testing
            </li>
            <li>
              Imaging reports and interpretations from X-ray or other studies
            </li>
            <li>
              Diagnoses, treatment recommendations, and medication list
            </li>
            <li>
              Work status and activity limitations, when applicable
            </li>
            <li>
              Follow-up plans and referrals for specialist care or therapy
            </li>
          </ul>
        </section>

        {/* Documentation Example Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-3">Examples of Documentation We Provide</h2>
          <div className="bg-white rounded-xl border-2 border-[#2563eb]/20 p-6 shadow-lg">
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Visit Summary Example</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• Chief Complaint: Motor vehicle collision with neck and back pain</p>
                  <p>• History of Present Illness: Patient reports [detailed injury description]</p>
                  <p>• Physical Examination: [Comprehensive findings documented]</p>
                  <p>• Assessment: [Diagnosis with ICD-10 codes]</p>
                  <p>• Plan: [Treatment recommendations and follow-up]</p>
                </div>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Imaging Report</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• X-ray interpretations with detailed findings</p>
                  <p>• MRI/CT reports when applicable</p>
                  <p>• Comparison with prior studies if available</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Treatment Documentation</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• Medications prescribed with dosages</p>
                  <p>• Activity restrictions and work limitations</p>
                  <p>• Physical therapy referrals and exercise instructions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-3">Why Documentation Timing Matters</h2>
          <p className="text-base md:text-lg text-gray-700 mb-3">
            The closer your exam is to the date of the collision, the stronger your documentation usually is. Early notes create a clear timeline: when symptoms started, how severe they were, and how they changed over time. This can influence how insurers view your claim and helps your care team track your recovery.
          </p>
        </section>

        {/* Attorney-Friendly Section */}
        <AttorneyFriendlySection />

        <RelatedTopics 
          topics={[
            { title: "Car Accident Urgent Care", href: "/car-accident-injury-clinic" },
            { title: "Urgent Care vs ER After a Crash", href: "/car-accident/urgent-care-vs-er" },
            { title: "Whiplash", href: "/car-accident/whiplash" }
          ]}
        />

        <AccidentFAQ
          title="Florida PIP, the 14-Day Rule & EMC — Frequently Asked Questions"
          faqs={pipFaqs}
        />

        {/* Internal Links Section */}
        <AccidentInternalLinks />

        {/* Attorney Referral Cross-Link */}
        <section className="py-10 bg-white border-t border-gray-100 text-center px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Are You a Personal Injury Attorney?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We provide timely, detailed medical evaluations and reports for PI attorneys in Florida. We work on a letter of protection (LOP) / medical lien basis.
          </p>
          <Link
            href="/lawyers"
            className="inline-block bg-[#2563eb] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[#1d4ed8] transition"
          >
            Request Medical Records — Attorney Portal
          </Link>
        </section>
        </div>
      </div>
    </main>
  );
}
