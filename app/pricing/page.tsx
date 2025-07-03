import React from 'react'
import Image from 'next/image'
import Document from '@/components/icons/document'
import Threedots from '@/components/icons/threedots'
import PricingCard from '@/components/ui/PricingCard'
import AppointmentCard from '@/components/ui/AppointmentCard'
import Polestar from '@/components/icons/polestar'
import Reveal from '@/components/RevealAnimation'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Urgent Care Pricing & Self-Pay Cost | Affordable Walk-In Clinic Palm Beach County',
  description: 'See transparent urgent care pricing for office visits, imaging, physicals, and more. $69.99 self-pay visit. No surprise bills. Most insurance accepted. Serving Royal Palm Beach, Lake Worth, Palm Springs, and Lantana. Compare urgent care vs ER cost and save.',
  keywords: [
    'urgent care pricing',
    'urgent care cost',
    'urgent care cost near me',
    'urgent care without insurance',
    'walk-in clinic prices',
    'urgent care self-pay price',
    'urgent care insurance accepted',
    'urgent care vs ER cost',
    'affordable urgent care cost near me',
    'transparent urgent care pricing Palm Beach',
    'how much is urgent care in Florida without insurance',
    'urgent care $69 visit Palm Beach County',
    'cheap urgent care for uninsured in Palm Beach',
    'urgent care copay vs ER',
    'urgent care pricing Palm Beach',
    'no surprise bills urgent care',
    'Palm Beach County urgent care',
    'Royal Palm Beach',
    'Lake Worth',
    'Palm Springs',
    'Lantana'
  ],
  openGraph: {
    title: 'Urgent Care Pricing & Self-Pay Cost | Affordable Walk-In Clinic Palm Beach County',
    description: 'See transparent urgent care pricing for office visits, imaging, physicals, and more. $69.99 self-pay visit. No surprise bills. Most insurance accepted. Serving Royal Palm Beach, Lake Worth, Palm Springs, and Lantana. Compare urgent care vs ER cost and save.',
    url: 'https://wpucc.com/pricing',
    type: 'website',
    images: [
      {
        url: 'https://wpucc.com/insurance.jpg',
        width: 1200,
        height: 630,
        alt: 'Urgent Care Pricing & Self-Pay Cost | Affordable Walk-In Clinic Palm Beach County',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Urgent Care Pricing & Self-Pay Cost | Affordable Walk-In Clinic Palm Beach County',
    description: 'See transparent urgent care pricing for office visits, imaging, physicals, and more. $69.99 self-pay visit. No surprise bills. Most insurance accepted. Serving Royal Palm Beach, Lake Worth, Palm Springs, and Lantana. Compare urgent care vs ER cost and save.',
    images: ['https://wpucc.com/insurance.jpg'],
  },
  alternates: {
    canonical: 'https://wpucc.com/pricing',
  },
};

export function PricingJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MedicalClinic',
          name: 'Primary & Urgent Care Centers of Palm Beach County',
          url: 'https://wpucc.com/pricing',
          image: 'https://wpucc.com/insurance.jpg',
          description:
            'Transparent urgent care pricing for office visits, imaging, physicals, and more. $69.99 self-pay visit. No surprise bills. Most insurance accepted. Serving Royal Palm Beach, Lake Worth, Palm Springs, and Lantana.',
          areaServed: [
            'Royal Palm Beach FL',
            'Lake Worth FL',
            'Palm Springs FL',
            'Lantana FL',
            'Palm Beach County FL',
          ],
          availableService: [
            'Office Visit',
            'MRI',
            'CT Scan',
            'Digital X-ray',
            'Ultrasound',
            'School Physical',
            'Immigration Physical',
            'Suboxone Treatment',
          ],
          openingHours: 'Mo-Su 08:00-20:00',
          priceRange: '$$',
          telephone: '+1-561-555-1234', // Update to real phone if available
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Urgent Care Pricing',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: 'Office Visit',
                price: '69.99',
                priceCurrency: 'USD',
              },
              {
                '@type': 'Offer',
                itemOffered: 'Ultrasound',
                price: '100.00',
                priceCurrency: 'USD',
              },
              {
                '@type': 'Offer',
                itemOffered: 'X Ray',
                price: '50.00',
                priceCurrency: 'USD',
              },
              {
                '@type': 'Offer',
                itemOffered: 'School Physical',
                price: '9.99',
                priceCurrency: 'USD',
              },
              {
                '@type': 'Offer',
                itemOffered: 'Immigration Physical',
                price: '400.00',
                priceCurrency: 'USD',
              },
              {
                '@type': 'Offer',
                itemOffered: 'MRI',
                price: '200.00',
                priceCurrency: 'USD',
              },
              {
                '@type': 'Offer',
                itemOffered: 'Suboxone (Initial Visit)',
                price: '299.00',
                priceCurrency: 'USD',
              },
            ],
          },
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

export const pricingData = [
    {
        title: 'Office Visit',
        subtitle: 'for most visits',
        description: 'Comprehensive medical evaluation and treatment for acute and chronic conditions with same-day care and extended hours.',
        features: [
            'General health check-ups and consultations',
            'Assessment of acute or chronic symptoms',
            'Personalized treatment plans and follow-ups',
        ],
        price: '$69.99',
        priceNote: '/ one time payment',
        icon: <Polestar />,
        whatItIs: "Office visits at our urgent care centers provide comprehensive medical evaluations for a wide range of acute and chronic health conditions. These visits are conducted by board-certified healthcare providers who can diagnose, treat, and manage various medical issues without the need for appointments or lengthy waits. Our office visits include thorough physical examinations, diagnostic testing when needed, and personalized treatment plans tailored to each patient's specific health needs. We offer same-day care for most conditions, ensuring patients receive prompt medical attention when they need it most.",
        symptomsTreated: "Our office visits address a comprehensive range of symptoms including fever, cough, sore throat, ear pain, sinus congestion, abdominal pain, nausea, vomiting, diarrhea, skin rashes, allergic reactions, minor injuries, sprains, strains, cuts, burns, and various other acute medical conditions. We also evaluate chronic symptoms such as persistent pain, fatigue, headaches, dizziness, and other ongoing health concerns. Our providers can assess symptoms related to respiratory infections, gastrointestinal issues, musculoskeletal problems, dermatological conditions, and many other medical concerns that require prompt attention.",
        conditionsAddressed: "Office visits can address numerous medical conditions including upper respiratory infections, influenza, strep throat, ear infections, sinusitis, urinary tract infections, gastroenteritis, food poisoning, allergic reactions, asthma exacerbations, hypertension, diabetes management, minor trauma, sports injuries, work-related injuries, and various other acute and chronic health conditions. We also provide care for preventive health needs, medication management, and follow-up care for ongoing medical conditions. Our comprehensive approach ensures that most non-emergency medical needs can be addressed in a single office visit.",
        treatmentProcess: "The treatment process begins with a comprehensive patient history and physical examination to assess the presenting symptoms and overall health status. Our providers may order diagnostic tests such as laboratory work, X-rays, or other imaging studies when needed to confirm diagnoses. Treatment may include prescription medications, over-the-counter recommendations, therapeutic interventions, lifestyle modifications, and referrals to specialists when appropriate. We provide detailed discharge instructions, follow-up recommendations, and ensure patients understand their treatment plan and when to seek additional care if needed.",
        urgentCareAdvantage: "Our urgent care centers provide immediate access to office visits without the need for appointments or lengthy waits typically associated with primary care offices. We offer extended hours, including evenings and weekends, making it convenient for patients to receive care when they need it. Our board-certified providers can handle most medical conditions that would otherwise require a primary care visit, and we can perform on-site diagnostic testing for rapid results. The convenience of urgent care means patients can receive prompt medical attention without disrupting their daily schedules or waiting days for an appointment.",
        costAdvantage: "Office visits at our urgent care centers offer significant cost savings compared to emergency room visits, with typical costs of $69.99 compared to $500-1,500 for emergency room evaluations. Our transparent pricing includes the consultation, basic examination, and most diagnostic tests, with no hidden fees or surprise charges. We accept most major insurance plans with lower copays and deductibles compared to emergency room visits, and we offer affordable self-pay options for patients without insurance. The comprehensive nature of our office visits means patients can often avoid multiple appointments and associated costs while receiving complete care in a single visit.",
        slug: "office-visit",
        img: '/officevisit.png',
        metaTitle: 'Office Visit Cost | Urgent Care Self-Pay Price Palm Beach County',
        metaDescription: 'Transparent $69.99 office visit at our Palm Beach County urgent care. No insurance needed. Walk-in for same-day care, extended hours, and no surprise bills. Serving Royal Palm Beach, Lake Worth, Palm Springs, and Lantana.',
        keywords: [
          'urgent care office visit',
          'office visit cost',
          'walk-in clinic price',
          'self-pay urgent care',
          'urgent care without insurance',
          'Palm Beach County urgent care',
          'same day doctor visit',
          'affordable urgent care',
        ]
    },
    {
        title: 'Ultrasound',
        subtitle: 'Diagnostic Imaging',
        description: 'Safe, non-invasive imaging using sound waves to evaluate internal organs, blood vessels, and pregnancy without radiation exposure.',
        features: [
            'Safe and non-invasive internal imaging',
            'Ideal for pregnancy and organ health assessments',
            'Real-time imaging for accurate diagnostics',
        ],
        price: '$100.00',
        priceNote: '/ one time payment',
        icon: <Polestar />,
        whatItIs: "Ultrasound imaging is a safe, non-invasive diagnostic technology that uses high-frequency sound waves to create real-time images of internal organs, blood vessels, and developing fetuses without any radiation exposure. This advanced imaging modality provides detailed views of soft tissues, organs, and blood flow patterns that cannot be captured by other imaging methods. Our urgent care centers feature portable bedside ultrasound equipment that allows for immediate diagnostic evaluation without the need for lengthy appointments or transfers to specialized imaging departments. Ultrasound technology is particularly valuable for evaluating abdominal pain, pregnancy concerns, vascular issues, and various other medical conditions.",
        symptomsTreated: "Ultrasound can evaluate symptoms including abdominal pain, pelvic pain, pregnancy-related concerns, chest pain, shortness of breath, swelling in the extremities, and various other acute medical symptoms. We use ultrasound to assess conditions such as gallstones, kidney stones, appendicitis, ectopic pregnancy, deep vein thrombosis, heart function, and many other medical concerns. The real-time nature of ultrasound allows our providers to immediately assess organ function, blood flow, and structural abnormalities, providing rapid diagnostic information that guides treatment decisions. Ultrasound is also valuable for evaluating trauma patients and assessing internal injuries without radiation exposure.",
        conditionsAddressed: "Ultrasound can diagnose and evaluate numerous medical conditions including gallbladder disease, kidney stones, liver disease, pancreatic disorders, abdominal aortic aneurysms, deep vein thrombosis, pulmonary embolism, heart conditions, pregnancy complications, gynecological issues, and various other acute and chronic medical conditions. We also use ultrasound for procedural guidance, such as placing IV lines or performing certain medical procedures. The versatility of ultrasound technology makes it an essential diagnostic tool for evaluating a wide range of medical conditions in our urgent care setting.",
        treatmentProcess: "The ultrasound examination process begins with a thorough patient history and physical examination to determine the most appropriate imaging approach. Our trained ultrasound technicians or providers apply a conductive gel to the skin and use a specialized transducer to capture images of the area of interest. The examination typically takes 15-30 minutes, depending on the complexity of the study and the areas being evaluated. Images are immediately available for review, and our providers can interpret results in real-time, often providing diagnostic information and treatment recommendations within minutes of completing the examination.",
        urgentCareAdvantage: "Our urgent care centers provide immediate access to ultrasound imaging without the lengthy appointment scheduling typically associated with hospital-based ultrasound services. We can perform bedside ultrasound examinations that provide real-time diagnostic information, allowing for immediate treatment decisions. Our portable ultrasound equipment means examinations can be performed at the patient's bedside, eliminating the need for patient transfers and reducing the risk of complications for patients with mobility issues or acute medical conditions. The immediate availability of ultrasound technology in our urgent care setting represents a significant advancement in patient care.",
        costAdvantage: "Ultrasound services at our urgent care centers offer significant cost savings compared to hospital-based ultrasound services, with typical costs of $100.00 compared to $400-800 at hospitals. Our transparent pricing includes the examination, interpretation, and immediate results, with no additional facility fees or hidden charges. We accept most major insurance plans with lower copays and deductibles compared to hospital settings, and we offer affordable self-pay options for patients without insurance. The immediate availability and faster turnaround times mean patients can avoid taking time off work or arranging childcare for extended hospital visits.",
        slug: "ultrasound",
        img: '/ultrasound.png',
        metaTitle: 'Ultrasound Cost | Walk-In Ultrasound Palm Beach County',
        metaDescription: 'Get a same-day ultrasound for $100 at our Palm Beach County urgent care. No appointment needed. Fast, affordable imaging for pregnancy, abdominal pain, and more. Serving Royal Palm Beach, Lake Worth, Palm Springs, and Lantana.',
        keywords: [
          'ultrasound cost',
          'walk-in ultrasound',
          'urgent care ultrasound',
          'ultrasound near me',
          'affordable ultrasound',
          'Palm Beach County urgent care',
          'same day ultrasound',
        ]
    },
    {
        title: 'X Ray',
        subtitle: 'Diagnostic Imaging',
        description: 'Quick digital imaging for bones, chest, and injuries with immediate results and minimal radiation exposure.',
        features: [
            'Quick and efficient bone imaging',
            'Detects fractures, infections, and abnormalities',
            'Used for chest, limbs, and injury assessment',
        ],
        price: '$50.00',
        priceNote: '/ one time payment',
        icon: <Polestar />,
        whatItIs: "X-ray imaging is a fundamental diagnostic tool that uses controlled radiation to create detailed images of bones, chest, and other internal structures. Our urgent care centers feature advanced digital X-ray technology that provides immediate, high-resolution images with minimal radiation exposure. Digital X-ray systems offer superior image quality compared to traditional film X-rays, with the ability to enhance and manipulate images for optimal visualization of specific anatomical structures and pathological conditions. This technology is essential for evaluating fractures, detecting pneumonia, assessing chest conditions, and diagnosing various other medical conditions that require immediate imaging.",
        symptomsTreated: "X-ray imaging can evaluate symptoms including bone pain, joint pain, chest pain, shortness of breath, cough, suspected fractures, sprains, strains, and various other acute medical symptoms. We use X-rays to assess conditions such as broken bones, dislocations, pneumonia, chest infections, heart conditions, arthritis, and many other medical concerns. X-ray imaging is particularly valuable for trauma patients, allowing rapid assessment of injuries and immediate treatment planning. The immediate availability of digital X-ray images means our providers can make prompt diagnostic and treatment decisions, often within minutes of the examination.",
        conditionsAddressed: "X-ray imaging can diagnose and evaluate numerous medical conditions including fractures, dislocations, arthritis, osteoporosis, pneumonia, pleural effusion, heart enlargement, lung cancer, chest trauma, abdominal conditions, and various other acute and chronic medical conditions. We also use X-rays for procedural guidance, such as placing central lines or performing certain medical procedures. The versatility and immediate availability of X-ray technology make it an essential diagnostic tool for evaluating a wide range of medical conditions in our urgent care setting, particularly for trauma and respiratory conditions.",
        treatmentProcess: "The X-ray examination process begins with a thorough patient history and physical examination to determine the most appropriate imaging approach. Our trained X-ray technicians position the patient and use specialized equipment to capture images of the area of interest. The examination typically takes 5-15 minutes, depending on the complexity of the study and the areas being evaluated. Digital X-ray images are immediately available for review, and our providers can interpret results in real-time, often providing diagnostic information and treatment recommendations within minutes of completing the examination.",
        urgentCareAdvantage: "Our urgent care centers provide immediate access to X-ray imaging without the lengthy appointment scheduling typically associated with hospital-based X-ray services. We can perform X-ray examinations that provide immediate diagnostic information, allowing for prompt treatment decisions. Our digital X-ray technology provides superior image quality and immediate results, eliminating the need for film processing and reducing wait times. The immediate availability of X-ray technology in our urgent care setting ensures that patients with suspected fractures, chest conditions, or other urgent imaging needs can receive prompt evaluation and treatment.",
        costAdvantage: "X-ray services at our urgent care centers offer significant cost savings compared to hospital-based X-ray services, with typical costs of $50.00 compared to $200-400 at hospitals. Our transparent pricing includes the examination, interpretation, and immediate results, with no additional facility fees or hidden charges. We accept most major insurance plans with lower copays and deductibles compared to hospital settings, and we offer affordable self-pay options for patients without insurance. The immediate availability and faster turnaround times mean patients can avoid taking time off work or arranging childcare for extended hospital visits.",
        slug: "x-ray",
        img: '/x-ray.png',
        metaTitle: 'X-Ray Cost | Walk-In X-Ray Palm Beach County',
        metaDescription: 'Walk in for a digital X-ray for $50 at our Palm Beach County urgent care. Immediate results for fractures, chest pain, and injuries. No appointment needed. Serving Royal Palm Beach, Lake Worth, Palm Springs, and Lantana.',
        keywords: [
          'x-ray cost',
          'walk-in x-ray',
          'urgent care x-ray',
          'x-ray near me',
          'affordable x-ray',
          'Palm Beach County urgent care',
          'same day x-ray',
        ]
    },
    {
        title: 'School Physical',
        subtitle: 'Required for school enrollment',
        description: 'Comprehensive health evaluation for students including vision, hearing, and immunization review with same-day completion.',
        features: [
            'Comprehensive health evaluation for students',
            'Vision, hearing, and developmental screening',
            'Required documentation for school records',
        ],
        price: '$9.99',
        priceNote: '/ one time payment',
        icon: <Polestar />,
        whatItIs: "School physicals are comprehensive health evaluations required for students entering or returning to school, designed to ensure students are healthy and ready to participate in educational activities. These examinations include thorough physical assessments, vision and hearing screenings, developmental evaluations, and immunization reviews. Our urgent care centers provide convenient, same-day school physicals that meet all state and school district requirements. We offer flexible scheduling, including evenings and weekends, making it easy for families to complete this important requirement without disrupting their busy schedules.",
        symptomsTreated: "School physicals evaluate overall health and development, including vision problems, hearing issues, growth and development concerns, and various other health conditions that may affect a student's ability to participate in school activities. We assess for conditions such as asthma, allergies, chronic medical conditions, and developmental delays that may require special accommodations or medical management during the school year. The comprehensive nature of school physicals allows us to identify potential health issues early and provide appropriate recommendations for school accommodations or medical follow-up.",
        conditionsAddressed: "School physicals can identify and address numerous health conditions including vision and hearing problems, growth and development issues, chronic medical conditions such as asthma, diabetes, or heart conditions, behavioral health concerns, and various other health issues that may affect school performance or participation. We also review immunization records and provide necessary vaccinations to ensure students meet school requirements. The examination includes assessment of physical fitness, coordination, and overall health status to ensure students are ready for school activities.",
        treatmentProcess: "The school physical process begins with a comprehensive health history review, including family medical history, current medications, allergies, and any existing medical conditions. Our providers conduct thorough physical examinations, including vision and hearing screenings, growth measurements, and developmental assessments. We review immunization records and provide necessary vaccinations or referrals for missing immunizations. The examination includes assessment of cardiovascular health, respiratory function, musculoskeletal system, and overall physical fitness. We complete all required documentation and provide families with copies for school records.",
        urgentCareAdvantage: "Our urgent care centers provide immediate access to school physicals without the lengthy appointment scheduling typically associated with primary care offices. We offer flexible scheduling, including evenings and weekends, making it convenient for families to complete this requirement. Our comprehensive examinations meet all state and school district requirements, and we provide same-day completion of all necessary documentation. The convenience of urgent care means families can avoid lengthy waits and scheduling conflicts while ensuring their children meet all school health requirements.",
        costAdvantage: "School physicals at our urgent care centers offer exceptional value at just $9.99, significantly less than typical primary care office visit costs of $50-150. Our transparent pricing includes the complete examination, all required screenings, and documentation, with no hidden fees or additional charges. We accept most major insurance plans, and many plans cover school physicals at no cost to families. The affordable pricing and immediate availability make it easy for families to complete this important requirement without financial burden or scheduling difficulties.",
        slug: "school-physical",
        img: '/schoolphysical.png',
        metaTitle: 'School Physical Cost | Walk-In School Physical Palm Beach County',
        metaDescription: 'School physicals for $9.99 at our Palm Beach County urgent care. Same-day exams, vision and hearing screening, and required forms. Walk in or book online. Serving Royal Palm Beach, Lake Worth, Palm Springs, and Lantana.',
        keywords: [
          'school physical cost',
          'walk-in school physical',
          'urgent care school physical',
          'school physical near me',
          'affordable school physical',
          'Palm Beach County urgent care',
          'same day school physical',
        ]
    },
    {
        title: 'Immigration Physical',
        subtitle: 'USCIS-certified exams',
        description: 'Comprehensive medical examination by USCIS-certified civil surgeons with required testing and documentation for immigration.',
        features: [
            'Exam by a certified civil surgeon',
            'Includes blood tests, vaccines, and documentation',
            'All required forms completed for immigration',
        ],
        price: '$400.00',
        priceNote: '/ one time payment',
        icon: <Polestar />,
        whatItIs: "Immigration physicals are comprehensive medical examinations required by the United States Citizenship and Immigration Services (USCIS) for individuals applying for permanent residency or certain types of visas. These examinations must be performed by USCIS-certified civil surgeons and include thorough medical evaluations, required laboratory testing, and specific vaccinations. Our urgent care centers provide convenient, same-day immigration physicals that meet all USCIS requirements. We offer flexible scheduling and ensure all required documentation is completed accurately and promptly to support immigration applications.",
        symptomsTreated: "Immigration physicals evaluate overall health status and screen for specific medical conditions that may affect immigration eligibility, including communicable diseases, mental health conditions, and substance abuse disorders. We assess for conditions such as tuberculosis, syphilis, gonorrhea, and other communicable diseases that may require treatment or affect immigration status. The examination also evaluates general health status, including cardiovascular health, respiratory function, and overall physical condition. We provide appropriate medical clearance or recommendations for conditions that may require follow-up care.",
        conditionsAddressed: "Immigration physicals can identify and address numerous health conditions including communicable diseases, mental health conditions, substance abuse disorders, chronic medical conditions, and various other health issues that may affect immigration eligibility. We also review immunization records and provide necessary vaccinations to meet USCIS requirements. The examination includes assessment of physical and mental health status to ensure applicants meet health-related immigration criteria. We provide appropriate medical documentation and recommendations for conditions that may require treatment or follow-up care.",
        treatmentProcess: "The immigration physical process begins with a comprehensive health history review, including family medical history, current medications, allergies, and any existing medical conditions. Our USCIS-certified civil surgeons conduct thorough physical examinations, including cardiovascular, respiratory, musculoskeletal, and neurological assessments. We perform required laboratory testing, including blood tests for communicable diseases, and review immunization records. The examination includes mental health assessment and substance abuse screening. We complete all required USCIS forms and provide applicants with sealed documentation for their immigration applications.",
        urgentCareAdvantage: "Our urgent care centers provide immediate access to immigration physicals without the lengthy appointment scheduling typically associated with specialized medical offices. We offer flexible scheduling, including evenings and weekends, making it convenient for applicants to complete this requirement. Our USCIS-certified civil surgeons ensure all examinations meet federal requirements, and we provide same-day completion of all necessary documentation. The convenience of urgent care means applicants can avoid lengthy waits and scheduling conflicts while ensuring their immigration applications are properly supported.",
        costAdvantage: "Immigration physicals at our urgent care centers offer competitive pricing at $400.00, which includes the complete examination, all required laboratory testing, vaccinations, and documentation. Our transparent pricing includes all USCIS-required services, with no hidden fees or additional charges. We accept most major insurance plans, and many plans provide coverage for immigration physicals. The comprehensive nature of our service ensures applicants receive all required medical evaluations and documentation in a single visit, avoiding multiple appointments and associated costs.",
        slug: "immigration-physical",
        img: '/immigrationphysical.png',
        metaTitle: 'Immigration Physical Cost | USCIS Exam Palm Beach County',
        metaDescription: 'USCIS-certified immigration physicals for $400 at our Palm Beach County urgent care. Same-day exams, all forms, and required testing. Walk in or book online. Serving Royal Palm Beach, Lake Worth, Palm Springs, and Lantana.',
        keywords: [
          'immigration physical cost',
          'USCIS physical',
          'immigration exam near me',
          'urgent care immigration physical',
          'Palm Beach County urgent care',
          'same day immigration physical',
        ]
    },
    {
        title: 'MRI',
        subtitle: 'Magnetic Resonance Imaging',
        description: 'Advanced imaging using magnetic fields for detailed evaluation of brain, spine, joints, and soft tissues without radiation.',
        features: [
            'Detailed imaging of soft tissues and organs',
            'Non-invasive and radiation-free',
            'Used for brain, spine, and joint diagnostics',
        ],
        price: '$400.00',
        priceNote: '/ one time payment',
        icon: <Polestar />,
        whatItIs: "Magnetic Resonance Imaging (MRI) is an advanced diagnostic technology that uses powerful magnetic fields and radio waves to create detailed, cross-sectional images of internal body structures without any radiation exposure. Our urgent care centers feature state-of-the-art 1.5 Tesla MRI technology that provides exceptional image quality for comprehensive evaluation of the brain, spine, joints, muscles, and internal organs. MRI technology offers superior soft tissue contrast resolution, allowing our board-certified radiologists to detect subtle abnormalities, inflammation, tumors, and structural damage that might be missed by other imaging methods.",
        symptomsTreated: "MRI can evaluate symptoms including persistent pain, neurological symptoms, joint problems, muscle weakness, numbness, tingling, and various other acute and chronic medical symptoms. We use MRI to assess conditions such as brain injuries, spinal cord problems, joint injuries, muscle tears, ligament damage, and many other medical concerns. MRI is particularly valuable for evaluating soft tissue injuries, neurological conditions, and complex musculoskeletal problems that require detailed imaging for accurate diagnosis and treatment planning. The comprehensive nature of MRI imaging provides essential diagnostic information for many medical conditions.",
        conditionsAddressed: "MRI can diagnose and evaluate numerous medical conditions including brain tumors, stroke, multiple sclerosis, spinal cord injuries, herniated discs, joint injuries, muscle tears, ligament damage, tendon problems, and various other acute and chronic medical conditions. We also use MRI for cancer staging, treatment planning, and monitoring treatment response. The versatility and detailed imaging capabilities of MRI technology make it an essential diagnostic tool for evaluating a wide range of medical conditions in our urgent care setting, particularly for complex neurological and musculoskeletal conditions.",
        treatmentProcess: "The MRI examination process begins with a comprehensive patient history and physical examination to determine the most appropriate imaging approach. Our trained MRI technicians position the patient and use specialized equipment to capture detailed images of the area of interest. The examination typically takes 30-60 minutes, depending on the complexity of the study and the areas being evaluated. MRI images are processed and reviewed by our board-certified radiologists, who provide detailed interpretations and treatment recommendations. Results are typically available within hours, allowing for prompt treatment planning.",
        urgentCareAdvantage: "Our urgent care centers provide immediate access to MRI imaging without the lengthy appointment scheduling typically associated with hospital-based MRI services. We can perform MRI examinations that provide detailed diagnostic information, allowing for comprehensive treatment planning. Our 1.5 Tesla MRI technology provides exceptional image quality and detailed diagnostic information, ensuring accurate diagnosis and treatment recommendations. The immediate availability of MRI technology in our urgent care setting ensures that patients with complex medical conditions can receive prompt evaluation and treatment.",
        costAdvantage: "MRI services at our urgent care centers offer significant cost savings compared to hospital-based MRI services, with typical costs of $200.00 compared to $1,200-2,500 at hospitals. Our transparent pricing includes the examination, interpretation, and detailed results, with no additional facility fees or hidden charges. We accept most major insurance plans with lower copays and deductibles compared to hospital settings, and we offer affordable self-pay options for patients without insurance. The immediate availability and faster turnaround times mean patients can avoid taking time off work or arranging childcare for extended hospital visits.",
        slug: "mri",
        img: '/mri.png',
        metaTitle: 'MRI Cost | Same-Day MRI Scan Palm Beach County',
        metaDescription: 'Get a same-day MRI for $200 at our Palm Beach County urgent care. Walk-in MRI for spine, brain, and joint injuries. No appointment needed. Fast, affordable, and expert imaging. Serving Royal Palm Beach, Lake Worth, Palm Springs, and Lantana.',
        keywords: [
          'MRI cost',
          'urgent care MRI',
          'MRI scan near me',
          'same day MRI',
          'walk-in MRI',
          'affordable MRI',
          'Palm Beach County urgent care',
        ]
    },
    {
        title: 'DOT Physical',
        subtitle: 'Federal DOT Physical Exam',
        description: 'Federal DOT physical examinations for commercial drivers to ensure safety compliance and maintain CDL requirements.',
        features: [
            'Federal DOT-certified examinations',
            'Complete medical evaluation for CDL',
            'Drug and alcohol testing available',
        ],
        price: '$150.00',
        priceNote: '/ one time payment',
        icon: <Polestar />,
        whatItIs: "DOT physicals are federally mandated medical examinations required by the Federal Motor Carrier Safety Administration (FMCSA) for individuals operating commercial motor vehicles (CMVs) and maintaining commercial driver's licenses (CDL). These comprehensive examinations ensure that drivers meet the physical and mental health standards necessary for safely operating commercial vehicles. Our urgent care centers provide DOT-certified physical examinations that meet all federal requirements, including thorough medical evaluations, vision and hearing assessments, and drug and alcohol testing. We ensure all examinations comply with current DOT regulations and provide proper documentation for CDL maintenance.",
        symptomsTreated: "DOT physicals evaluate overall health status and identify medical conditions that may affect commercial driving safety, including cardiovascular conditions, respiratory problems, vision and hearing impairments, neurological disorders, and musculoskeletal conditions. We assess for conditions such as high blood pressure, diabetes, sleep apnea, and other medical conditions that may require monitoring or treatment for safe commercial driving. The examination also evaluates mental health status and cognitive function to ensure drivers can safely operate commercial vehicles. We provide appropriate medical clearance or recommendations for conditions that may require follow-up care.",
        conditionsAddressed: "DOT physicals can identify and address numerous health conditions including cardiovascular disease, respiratory disorders, vision and hearing problems, neurological conditions, musculoskeletal issues, and various other medical conditions that may affect commercial driving safety. We also evaluate for conditions such as diabetes, sleep disorders, and mental health conditions that may require monitoring or treatment. The examination includes assessment of physical and mental fitness to ensure drivers meet federal safety standards for commercial vehicle operation. We provide appropriate medical documentation and recommendations for conditions that may require treatment or follow-up care.",
        treatmentProcess: "The DOT physical process begins with a comprehensive health history review, including current medications, allergies, existing medical conditions, and family medical history. Our DOT-certified medical examiners conduct thorough physical examinations, including cardiovascular, respiratory, musculoskeletal, and neurological assessments. We perform vision and hearing tests, and conduct drug and alcohol testing as required. The examination includes mental health assessment and evaluation of cognitive function. We complete all required DOT forms and provide drivers with proper documentation for CDL maintenance and compliance with federal regulations.",
        urgentCareAdvantage: "Our urgent care centers provide immediate access to DOT physicals without the lengthy appointment scheduling typically associated with specialized medical offices. We offer flexible scheduling, including evenings and weekends, making it convenient for commercial drivers to complete this federal requirement. Our DOT-certified medical examiners ensure all examinations meet federal requirements, and we provide same-day completion of all necessary documentation. The convenience of urgent care means drivers can avoid lengthy waits and scheduling conflicts while ensuring their CDL compliance is maintained.",
        costAdvantage: "DOT physicals at our urgent care centers offer competitive pricing at $150.00, which includes the complete examination, all required testing, and documentation. Our transparent pricing includes all DOT-required services, with no hidden fees or additional charges. We accept most major insurance plans, and many plans provide coverage for DOT physicals. The comprehensive nature of our service ensures drivers receive all required medical evaluations and documentation in a single visit, avoiding multiple appointments and associated costs.",
        slug: "dot-physical",
        img: '/dotphysical.png',
        metaTitle: 'DOT Physical Cost | CDL Medical Exam Palm Beach County',
        metaDescription: 'DOT physical for CDL drivers for $150 at our Palm Beach County urgent care. Federal-certified exams, same-day results. Walk in or book online. Serving Royal Palm Beach, Lake Worth, Palm Springs, and Lantana.',
        keywords: [
          'DOT physical cost',
          'CDL medical exam',
          'DOT physical near me',
          'urgent care DOT physical',
          'Palm Beach County urgent care',
          'same day DOT physical',
        ]
    },
    {
        title: 'Suboxone',
        subtitle: 'Initial visit only.',
        description: 'Medication-assisted treatment for opioid dependence with confidential, compassionate care and personalized recovery plans.',
        features: [
            'Medication-assisted treatment for opioid dependence',
            'Evaluation and personalized recovery plan',
            'Confidential, compassionate care',
        ],
        price: '$299.00',
        priceNote: '/ one time payment',
        icon: <Polestar />,
        whatItIs: "Suboxone treatment is a medication-assisted therapy (MAT) program designed to help individuals overcome opioid dependence and achieve long-term recovery. Suboxone combines buprenorphine and naloxone to reduce withdrawal symptoms and cravings while preventing misuse. Our urgent care centers provide confidential, compassionate Suboxone treatment in a supportive environment that prioritizes patient privacy and dignity. Our board-certified providers are experienced in addiction medicine and can develop personalized treatment plans that address both the physical and psychological aspects of opioid dependence.",
        symptomsTreated: "Suboxone treatment addresses symptoms of opioid withdrawal including muscle aches, nausea, vomiting, diarrhea, anxiety, insomnia, and intense cravings for opioids. We also treat the underlying condition of opioid dependence and provide support for co-occurring mental health conditions such as depression, anxiety, and post-traumatic stress disorder. Our comprehensive approach addresses both the physical symptoms of withdrawal and the psychological aspects of addiction, providing patients with the tools and support needed for successful recovery. We also provide education and support for family members affected by addiction.",
        conditionsAddressed: "Suboxone treatment can address various forms of opioid dependence including prescription opioid addiction, heroin addiction, and other opioid-related substance use disorders. We also address co-occurring conditions such as chronic pain, mental health disorders, and other medical conditions that may contribute to or result from opioid dependence. Our treatment approach includes comprehensive medical evaluation, mental health assessment, and development of long-term recovery strategies. We provide referrals to counseling, support groups, and other recovery resources as needed.",
        treatmentProcess: "The Suboxone treatment process begins with a comprehensive medical and psychiatric evaluation to assess the patient's opioid dependence, withdrawal symptoms, and overall health status. Our providers determine the appropriate Suboxone dosage and develop a personalized treatment plan that includes medication management, counseling referrals, and long-term recovery strategies. We provide education about Suboxone treatment, potential side effects, and strategies for successful recovery. The initial visit includes medication prescription, follow-up scheduling, and connection to additional recovery resources. We maintain ongoing support and monitoring throughout the recovery process.",
        urgentCareAdvantage: "Our urgent care centers provide immediate access to Suboxone treatment without the lengthy appointment scheduling typically associated with specialized addiction treatment programs. We offer confidential, compassionate care in a supportive environment that prioritizes patient privacy and dignity. Our board-certified providers are experienced in addiction medicine and can provide same-day evaluation and treatment initiation. The convenience of urgent care means patients can receive prompt access to life-saving treatment without lengthy waits or scheduling conflicts.",
        costAdvantage: "Suboxone treatment at our urgent care centers offers competitive pricing at $299.00 for the initial visit, which includes comprehensive evaluation, treatment planning, and medication prescription. Our transparent pricing includes all necessary medical services, with no hidden fees or additional charges. We accept most major insurance plans, and many plans provide coverage for addiction treatment services. The comprehensive nature of our service ensures patients receive all necessary medical evaluations and treatment planning in a single visit, avoiding multiple appointments and associated costs.",
        slug: "suboxone",
        img: '/suboxone.png',
        metaTitle: 'Suboxone Treatment Cost | Opioid Detox Palm Beach County',
        metaDescription: 'Suboxone treatment for opioid dependence for $299 at our Palm Beach County urgent care. Confidential, compassionate care. Walk in or book online. Serving Royal Palm Beach, Lake Worth, Palm Springs, and Lantana.',
        keywords: [
          'suboxone cost',
          'suboxone doctor near me',
          'opioid detox Palm Beach',
          'urgent care suboxone',
          'Palm Beach County urgent care',
          'same day suboxone treatment',
        ]
    },
]

const insuranceData = [
    "Motor Vehicle Accidents",
    "Workers Compensation",
    "Aetna",
    "Cigna",
    "BlueCross Blue Shield",
    "Florida Medicare",
    "Florida Medicaid",
    "UnitedHealthcare",
    "Kaiser Permanente",
    "Anthem",
    "Molina Healthcare",
    "Ambetter",
    "Bright Health",
    "Oscar Health",
    "Florida Blue",
    "AvMed",
    "Tricare",
    "VA Health Benefits",
    "PIP (Personal Injury Protection)",
    "No-Fault Insurance",
    "Commercial Insurance",
    "Group Health Plans",
    "Individual Health Plans",
    "Marketplace Plans",
    "Medicare Advantage",
    "Medicare Supplement",
    "Medicaid Managed Care",
    "Children's Health Insurance Program (CHIP)",
    "Short-term Health Plans"
];

const PricingPage = () => {
    return (
        <main className="w-full bg-[#FAFAFA] lg:space-y-20 space-y-10  flex flex-col items-center px-4 lg:px-[60px] min-h-screen">
            <PricingJsonLd />
            <section className='w-full h-full lg:py-20 py-10'>
                <div className="max-w-8xl mx-auto  rounded-2xl bg-[#F2F6FC] grid grid-cols-1 xl:grid-cols-2 gap-0 md:gap-20 p-8 md:p-12 items-center shadow-sm">
                    {/* Left: Text and Buttons */}
                    <Reveal className='w-full overflow-hidden'>
                        <div className="flex flex-col gap-6 justify-center h-full w-full">
                            <p className='text-black text-sm'>Home/<span className="text-[#2563eb] text-sm mb-1 font-[500]"> Pricing</span></p>
                            <h1 className="text-4xl md:text-6xl font-[600] text-black mb-2 ">Payment &<br />Insurance Information</h1>
                            <p className="text-base md:text-xl font-[500] text-[#494647]">
                                Need hospital-level urgent care in Palm Beach County minus ER pricing? Primary & Urgent Care Centers accepts most insurance (Aetna, BCBS, Cigna, Medicare, Medicaid, workers' comp, PIP) and quotes every cost up front. No coverage? A flat $69 self-pay urgent care visit keeps care affordable, with low, posted rates for X-ray, labs, CT, MRI, and ultrasound. Book a same-day appointment or walk in and be seen in under 15 minutes. Honest, transparent pricing and no-surprise bills that's why patients searching "urgent care cost near me" choose us.
                            </p>

                            <div className="grid grid-cols-2 gap-3 mt-2">
                                {insuranceData.slice(0, 6).map((item, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <Document fill="#0445BF" width={20} height={20} />
                                        <p className="text-base md:text-lg text-[#0445BF]">{item}</p>
                                    </div>
                                ))}
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <button
                                            className="flex items-center gap-2 cursor-pointer col-span-1 hover:opacity-80 transition-opacity"
                                        >
                                            <Threedots />
                                            <p className="text-base md:text-lg text-[#D52128]">And More</p>
                                        </button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-8xl w-full max-h-[80vh] overflow-y-auto">
                                        <DialogHeader>
                                            <DialogTitle className="text-2xl font-bold text-black">Accepted Insurance Plans</DialogTitle>
                                        </DialogHeader>
                                        <div className="grid gap-4 py-4">
                                            <p className="text-sm text-gray-600 mb-4">
                                                We accept most major insurance plans and work with patients to ensure affordable care. Contact us to verify your specific plan coverage.
                                            </p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {insuranceData.map((item, index) => (
                                                    <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-gray-50">
                                                        <Document fill="#0445BF" width={16} height={16} />
                                                        <p className="text-sm font-medium text-gray-800">{item}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                                                <p className="text-sm text-blue-800">
                                                    <strong>Don't see your insurance?</strong> We work with many additional plans.
                                                    Call us at (561) 204-5111 to verify your coverage or discuss our affordable self-pay options.
                                                </p>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>
                    </Reveal>
                    {/* Right: Image */}
                    <div className="flex justify-center relative xl:h-full lg:h-200 h-100 items-center w-full  mt-8 md:mt-0">
                        <Image
                            src="/insurance.jpg"
                            alt="Insurance"
                            fill
                            className="rounded-2xl object-cover w-full object-center h-full"
                        />
                    </div>
                </div>
            </section>
            <div className="max-w-8xl mx-auto grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-8 pb-8">
                {/* Top row */}
                <PricingCard {...pricingData[0]} />
                <PricingCard {...pricingData[1]} />
                <PricingCard {...pricingData[2]} />
                {/* Second row */}
                <PricingCard {...pricingData[3]} />
                <AppointmentCard height='auto' />
                <PricingCard {...pricingData[4]} />
                {/* Third row */}
                <PricingCard {...pricingData[5]} />
                <PricingCard {...pricingData[6]} />
                <PricingCard {...pricingData[7]} />
            </div>
        </main>
    )
}

export default PricingPage  