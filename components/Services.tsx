import React from 'react'
import ServiceCard from '@/components/ui/ServiceCard'
import AppointmentCard from '@/components/ui/AppointmentCard'
import Reveal from './RevealAnimation'
export const services = [
  {
    imageSrc: "/HomeCards/15TMRI.jpg",
    imageSrc2: "/15tmri2.png",
    title: "1.5T MRI",
    description: "High-resolution images for spine, brain & joint injuries—in and out in under 30 min.",
    whatItIs: "A 1.5 Tesla Magnetic Resonance Imaging (MRI) machine represents the gold standard in diagnostic imaging technology, utilizing powerful magnetic fields and sophisticated radio wave technology to create exceptionally detailed, cross-sectional images of internal body structures without any harmful radiation exposure. This advanced imaging modality operates at 1.5 Tesla strength, providing the perfect balance between image quality and patient comfort, making it ideal for comprehensive evaluation of the brain, spine, joints, muscles, and internal organs. Unlike traditional X-rays or CT scans, MRI technology offers superior soft tissue contrast resolution, allowing our board-certified radiologists to detect subtle abnormalities, inflammation, tumors, and structural damage that might be missed by other imaging methods. The 1.5T strength provides optimal signal-to-noise ratio, ensuring crisp, clear images that enable precise diagnosis and treatment planning for a wide range of medical conditions.",
    howItWorks: "The 1.5T MRI machine operates on the principle of nuclear magnetic resonance, creating a sophisticated imaging process that begins when the patient enters the machine's powerful magnetic field. This magnetic field, measured at 1.5 Tesla (approximately 30,000 times stronger than Earth's magnetic field), causes the hydrogen atoms in the body's water molecules to align in a specific direction. Once aligned, the machine sends precisely timed radio frequency pulses through the body, causing these hydrogen atoms to absorb energy and temporarily change their alignment. When the radio waves are turned off, the hydrogen atoms return to their original position, releasing the absorbed energy as radio signals that are detected by specialized receiver coils positioned around the body. These signals are then processed by advanced computer algorithms that convert the data into detailed, high-resolution cross-sectional images that can be viewed in multiple planes.",
    urgentCareAdvantage: "Our urgent care centers are equipped with the same high-quality 1.5T MRI technology found in major hospitals and imaging centers, but with the added advantage of significantly reduced wait times and immediate availability for urgent cases. Unlike traditional hospital settings where MRI appointments can take weeks to schedule and patients often wait 4-6 hours in crowded emergency rooms, our urgent care model provides walk-in access to this advanced diagnostic technology. For patients experiencing acute back pain, suspected disc herniations, sports injuries, or neurological symptoms, our 1.5T MRI offers immediate diagnostic clarity without the lengthy delays associated with hospital-based imaging. Our board-certified radiologists are available on-site to provide STAT interpretations within 3 hours, ensuring that patients receive timely results when minutes matter. The convenience of our urgent care setting means that patients can receive the same diagnostic quality as a hospital MRI department while avoiding the chaos, long waits, and higher costs typically associated with emergency room visits.",
    costs: "The cost advantage of receiving a 1.5T MRI at our urgent care centers is substantial, with typical pricing ranging from $300 compared to hospital costs of $1,200-2,500 for the same diagnostic procedure. This represents a savings of 50-70% compared to traditional hospital-based MRI services, making advanced diagnostic imaging accessible to patients without the financial burden of hospital pricing. Our urgent care centers accept most major insurance plans, and patients typically experience significantly lower copays and deductibles compared to hospital settings. For patients without insurance, we offer transparent, upfront pricing with no hidden fees, and we work with patients to establish affordable payment plans when needed. The cost savings extend beyond the procedure itself, as our urgent care model eliminates the additional emergency room facility fees, physician fees, and other charges that can add hundreds or thousands of dollars to a hospital-based MRI.",
    whyChooseUs: "Choosing our urgent care centers for your 1.5T MRI means accessing hospital-level diagnostic quality with the convenience and efficiency of urgent care. Unlike traditional hospitals where patients often face 4-6 hour wait times in crowded emergency rooms, our streamlined process gets you in and out quickly while providing the same diagnostic accuracy. Our board-certified radiologists are the same specialists who read studies at major hospitals, ensuring you receive expert interpretation of your results. The immediate availability of our 1.5T MRI technology means you can get answers to urgent medical questions without waiting weeks for an appointment or enduring lengthy emergency room visits. For patients experiencing acute back pain, sports injuries, neurological symptoms, or other conditions requiring immediate imaging, our rapid access to high-quality MRI can make the difference between timely treatment and prolonged suffering.",
    // Verbatim Search Console questions for this page. It ranked 10-24 on all of them
    // and earned zero clicks. Most ask about the emergency room, because that is where
    // people assume an urgent MRI has to happen.
    faqs: [
      {
        question: "Can you get an MRI at the emergency room?",
        answer: "Often not quickly. Emergency rooms prioritise life-threatening cases, and a non-critical MRI is frequently scheduled for another day. Our 1.5T MRI is on site and available same day in Palm Beach County, usually in and out in under 30 minutes, without the emergency room wait or facility fees.",
      },
      {
        question: "Where can I get an emergency MRI near me?",
        answer: "Primary & Urgent Care Center offers same-day 1.5T MRI across Palm Beach County, including Lake Worth, Lantana, Palm Springs and Royal Palm Beach. No referral is needed. Call and we will confirm the soonest scan time at your nearest clinic.",
      },
      {
        question: "Can urgent care do an MRI?",
        answer: "Most cannot. Ours can. We operate a 1.5T MRI on site, the same field strength used in hospital imaging departments, read by board-certified radiologists with STAT interpretations available within about three hours.",
      },
      {
        question: "How long does it take to get an MRI?",
        answer: "The scan itself typically takes under 30 minutes. Where hospitals often schedule MRI appointments weeks out, we offer same-day availability, which is why patients with acute back pain, suspected disc injuries or sports injuries come to us instead of waiting.",
      },
      {
        question: "Can I get an MRI after a car accident?",
        answer: "Yes. An MRI shows soft tissue damage that X-rays cannot, which matters for whiplash, disc injuries and joint damage after a crash. We also provide the exam documentation your insurer or attorney may require, and Florida's PIP rules give you 14 days from the accident to be seen.",
      },
    ],
    slug: '1-5t-mri',
    metaTitle: '1.5T MRI | Same-Day MRI Scan Palm Beach County | Urgent Care MRI Near Me',
    metaDescription: 'Get a same-day 1.5T MRI scan at our Palm Beach County urgent care. Walk-in MRI for spine, brain, and joint injuries. No appointment needed. Fast, affordable, and expert imaging. Hospital-quality MRI without the wait or high cost.',
    keywords: [
      'urgent care MRI',
      'MRI scan near me',
      'same day MRI Palm Beach',
      'walk-in MRI Florida',
      '1.5T MRI urgent care',
      'MRI without referral',
      'affordable MRI scan',
      'urgent care with MRI',
      'MRI imaging Palm Beach County'
    ]
  },
  {
    imageSrc: "/HomeCards/CTScan.jpg",
    imageSrc2 : '/ctscan2.png',
    title: "CT Scan",
    description: "Fast, low-dose scans for trauma, chest pain, or abdominal concerns—results same day.",
    whatItIs: "Computed Tomography (CT) scanning represents a revolutionary advancement in medical imaging technology that combines sophisticated X-ray technology with advanced computer processing to create detailed, cross-sectional images of the body. Unlike traditional X-rays that provide only 2D images, CT scans generate comprehensive 3D views that can reveal the intricate details of bones, blood vessels, soft tissues, and internal organs with exceptional clarity. Our multi-slice CT scanner utilizes cutting-edge technology to capture hundreds of images in a single rotation, providing radiologists with unprecedented detail for accurate diagnosis of complex medical conditions. The technology is particularly valuable for evaluating trauma cases, detecting internal bleeding, identifying tumors, assessing cardiovascular conditions, and diagnosing a wide range of acute and chronic medical problems. CT scanning has become an essential diagnostic tool in modern medicine, offering the perfect balance between image quality, speed, and patient safety while providing critical information that guides treatment decisions.",
    howItWorks: "The CT scanning process begins when the patient lies on a motorized table that moves through a circular opening in the CT machine, which houses an X-ray tube and electronic detectors positioned opposite each other. As the table moves through the scanner, the X-ray tube rotates around the patient's body in a continuous spiral motion, emitting narrow beams of X-rays from multiple angles. These X-ray beams pass through the patient's body and are detected by the electronic sensors on the opposite side of the machine. Different tissues in the body absorb X-rays to varying degrees - dense structures like bones absorb more X-rays and appear white on the images, while soft tissues like muscles and organs absorb fewer X-rays and appear in various shades of gray. The electronic detectors collect thousands of measurements of X-ray absorption, which are then processed by sophisticated computer algorithms to create detailed cross-sectional images that can be reconstructed in multiple planes and converted into 3D models.",
    urgentCareAdvantage: "Our urgent care centers feature state-of-the-art multi-slice CT technology that provides the same diagnostic quality as major hospitals, but with the added benefits of immediate availability and significantly reduced wait times. Unlike traditional hospital settings where CT scans often require lengthy appointment scheduling or involve 6-8 hour waits in crowded emergency rooms, our urgent care model provides walk-in access to this critical diagnostic technology. For patients experiencing trauma, chest pain, abdominal emergencies, or other acute conditions requiring immediate imaging, our CT scanner offers rapid diagnostic capabilities without the chaos and delays associated with hospital emergency departments. Our board-certified radiologists are available to provide same-day interpretations, ensuring that patients receive timely results when every minute counts. The convenience of our urgent care setting means that patients can receive hospital-level CT imaging while avoiding the stress, long waits, and higher costs typically associated with emergency room visits.",
    costs: "The cost advantage of receiving a CT scan at our urgent care centers is significant, with typical pricing ranging from $200 compared to hospital costs of $800-1,500 for the same diagnostic procedure. This represents a savings of 50-60% compared to traditional hospital-based CT services, making this essential diagnostic tool accessible to patients without the financial burden of hospital pricing. Our urgent care centers accept most major insurance plans, and patients typically experience lower copays and deductibles compared to hospital settings. For patients without insurance, we offer transparent, upfront pricing with no hidden fees, and we work with patients to establish affordable payment plans when needed. Emergency cases receive priority scheduling at no additional cost, ensuring that urgent medical needs are addressed promptly without financial penalty.",
    whyChooseUs: "Choosing our urgent care centers for your CT scan means accessing hospital-level diagnostic quality with the convenience and efficiency of urgent care. Unlike traditional hospitals where patients often face 6-8 hour wait times in crowded emergency rooms, our streamlined process provides rapid access to advanced CT imaging while maintaining the same diagnostic accuracy. Our CT scans are read by the same board-certified radiologists who work at major hospitals, ensuring you receive expert interpretation of your results. The immediate availability of our multi-slice CT technology means you can get answers to urgent medical questions without waiting for appointments or enduring lengthy emergency room visits. For patients experiencing trauma, chest pain, abdominal emergencies, or other acute conditions, our rapid access to high-quality CT imaging can make the difference between timely treatment and prolonged suffering.",
    // Questions taken verbatim from Search Console for this page, 2026-08-03..08-30.
    // The page ranked 8-15 for all of them and earned zero clicks, because it explains
    // what a CT scan is and never says whether we can do one.
    faqs: [
      {
        question: "Can urgent care do a CT scan?",
        answer: "Yes. Primary & Urgent Care Center has a multi-slice CT scanner on site in Palm Beach County, so you can have a CT scan without an emergency room visit or a separate appointment at an imaging centre. Scans are read by board-certified radiologists, the same specialists who read studies at major hospitals, and results are typically available the same day.",
      },
      {
        question: "Do urgent cares have CT scanners?",
        answer: "Most do not. The majority of urgent care centres offer X-ray only and refer you elsewhere for CT. We are one of the few in Palm Beach County with CT on site, alongside 1.5T MRI, ultrasound and X-ray, which means your scan and your exam happen in one visit.",
      },
      {
        question: "How much does a CT scan cost at urgent care?",
        answer: "Considerably less than a hospital. Hospital CT imaging commonly runs $1,200 to $2,500 once facility and physician fees are added. Our pricing is transparent and quoted upfront, we accept most major insurance, and there are no emergency room facility fees. Call for a quote for your specific scan.",
      },
      {
        question: "Do I need a referral for a CT scan?",
        answer: "No referral is needed. Call us and we will confirm the soonest available scan time at the clinic nearest you.",
      },
      {
        question: "Can I get a CT scan after a car accident?",
        answer: "Yes, and it is often important to be examined promptly. Florida's PIP rules require an initial medical visit within 14 days of a crash to keep your Personal Injury Protection benefits. We provide the exam, the imaging and the documentation your claim may need, in one visit.",
      },
    ],
    slug: 'ct-scan',
    metaTitle: 'CT Scan | Same-Day CT Imaging Palm Beach County | Urgent Care CT Near Me',
    metaDescription: 'Walk in for a same-day CT scan at our Palm Beach County urgent care. Fast, low-dose CT imaging for trauma, chest pain, and emergencies. No appointment needed. Hospital-quality CT with immediate results and affordable pricing.',
    keywords: [
      'urgent care CT scan',
      'CT scan near me',
      'same day CT scan Palm Beach',
      'walk-in CT scan Florida',
      'CT imaging urgent care',
      'emergency CT scan',
      'affordable CT scan',
      'CT scan without referral',
      'CT scan Palm Beach County'
    ]
  },
  {
    imageSrc: "/HomeCards/DigitalXray.jpg",
    imageSrc2 : '/mri2.png',
    title: "Digital X-Ray",
    description: "Walk-in digital X-ray for accident injuries, fractures, and broken bones. Get immediate imaging after a car accident, slip and fall, or work injury. We provide documentation for insurance or legal claims.",
    whatItIs: "Digital X-ray technology is essential for diagnosing injuries after car accidents, falls, or work incidents. Our urgent care centers provide immediate digital X-ray to assess for broken bones, hairline fractures, and spinal alignment after trauma. We specialize in accident-related imaging and provide documentation for insurance or legal claims.",
    urgentCareAdvantage: "Our urgent care centers provide walk-in digital X-ray for accident injuries and fractures, with immediate results and documentation for insurance or legal claims. No appointment needed—just walk in after your accident.",
    costs: "The cost advantage of receiving a digital X-ray at our urgent care centers is substantial, with typical pricing ranging from $70 compared to hospital costs of $200-400 for the same diagnostic procedure. This represents a savings of 60-75% compared to traditional hospital-based X-ray services, making this essential diagnostic tool highly accessible to patients without the financial burden of hospital pricing. Our urgent care centers accept most major insurance plans, and patients typically experience lower copays and deductibles compared to hospital settings. For patients without insurance, we offer transparent, upfront pricing with no hidden fees, and we work with patients to establish affordable payment plans when needed. No appointment is necessary for urgent cases, ensuring that patients with immediate medical needs can receive prompt diagnostic imaging without financial barriers.",
    whyChooseUs: "Choosing our urgent care centers for your digital X-ray means accessing high-quality diagnostic imaging with immediate results and significant cost savings. Unlike traditional hospitals where patients often face lengthy waits in crowded emergency rooms, our streamlined process provides rapid access to advanced digital X-ray technology while maintaining the same diagnostic accuracy. The immediate availability of digital images means that our healthcare providers can make prompt diagnostic and treatment decisions, often within minutes of the X-ray being taken. For patients experiencing fractures, chest pain, respiratory symptoms, or other conditions requiring immediate imaging, our rapid access to high-quality digital X-ray technology can make the difference between timely treatment and prolonged suffering. We provide all necessary documentation for your accident, insurance, or legal claim.",
    slug: 'digital-x-ray',
    metaTitle: 'Walk-In X-Ray for Accident Injuries & Fractures | PrimaryUC',
    metaDescription: 'Walk in for a digital X-ray after a car accident, fall, or work injury in Palm Beach County. Immediate imaging for broken bones and documentation for insurance or legal claims.',
    keywords: [
      'x-ray after car accident florida',
      'x-ray for broken bone',
      'get an x-ray after a fall',
      'walk-in x-ray near me',
      'accident injury x-ray',
      'urgent care x-ray',
      'fracture x-ray urgent care',
      'spinal alignment x-ray accident'
    ]
  },
  {
    imageSrc: "/HomeCards/Ultrasound.jpg",
    imageSrc2: '/ultrasound2.png',
    title: "Ultrasound",
    description: "Real-time imaging for soft-tissue, OB/GYN, and vascular evaluations—performed bedside.",
    whatItIs: "Ultrasound imaging represents a revolutionary non-invasive diagnostic technology that utilizes high-frequency sound waves to create real-time images of internal organs, blood vessels, and developing fetuses without any radiation exposure. This advanced imaging modality operates on the principle of sound wave reflection, using sophisticated transducers to send sound waves into the body and capture the returning echoes to create detailed, moving images of internal structures. Our portable bedside ultrasound equipment provides immediate diagnostic capabilities, allowing healthcare providers to evaluate patients at the point of care without the need for lengthy appointments or transfers to specialized imaging departments. Ultrasound technology is particularly valuable for evaluating soft tissue structures, monitoring pregnancy, assessing cardiovascular function, and diagnosing a wide range of medical conditions. The real-time nature of ultrasound imaging allows healthcare providers to observe organ function, blood flow, and structural movement, providing dynamic information that static imaging modalities cannot capture.",
    howItWorks: "The ultrasound imaging process begins when a specialized transducer, which contains piezoelectric crystals, is placed on the patient's skin with a conductive gel to ensure optimal sound wave transmission. The transducer sends high-frequency sound waves (typically 2-18 MHz) into the patient's body, which travel through tissues and encounter different structures along their path. When these sound waves encounter boundaries between different types of tissue (such as between muscle and bone, or between blood and vessel walls), they are partially reflected back toward the transducer. The transducer then acts as a receiver, capturing these returning echoes and converting them into electrical signals that are processed by sophisticated computer algorithms to create real-time, two-dimensional images of the internal structures being examined. The speed at which sound waves travel through different tissues varies, allowing the system to distinguish between different types of tissue and create detailed images with excellent contrast that show movement, blood flow, and structural details.",
    urgentCareAdvantage: "Our urgent care centers feature portable bedside ultrasound technology that provides immediate diagnostic capabilities without the lengthy appointment scheduling typically associated with hospital-based ultrasound services. Unlike traditional hospital settings where ultrasound examinations often require weeks of advance scheduling or involve lengthy waits in crowded emergency rooms, our portable ultrasound equipment allows for immediate evaluation of patients with urgent medical needs. For patients experiencing abdominal pain, pregnancy concerns, vascular issues, or other conditions requiring immediate imaging, our bedside ultrasound provides rapid diagnostic capabilities without the chaos and delays associated with hospital emergency departments. The portability of our ultrasound equipment means that examinations can be performed at the patient's bedside, eliminating the need for patient transfers and reducing the risk of complications for patients with mobility issues or acute medical conditions. Our healthcare providers are trained to perform and interpret ultrasound examinations, ensuring that patients receive immediate results and prompt treatment decisions.",
    costs: "The cost advantage of receiving an ultrasound at our urgent care centers is significant, with typical pricing ranging from $150 compared to hospital costs of $400-800 for the same diagnostic procedure. This represents a savings of 60-75% compared to traditional hospital-based ultrasound services, making this essential diagnostic tool highly accessible to patients without the financial burden of hospital pricing. Our urgent care centers accept most major insurance plans, and patients typically experience lower copays and deductibles compared to hospital settings. For patients without insurance, we offer transparent, upfront pricing with no hidden fees, and we work with patients to establish affordable payment plans when needed. Emergency evaluations are often covered by insurance with minimal copay, ensuring that patients with urgent medical needs can receive prompt diagnostic imaging without financial barriers.",
    whyChooseUs: "Choosing our urgent care centers for your ultrasound means accessing high-quality diagnostic imaging with immediate results and significant cost savings. Unlike traditional hospitals where patients often face lengthy appointment scheduling or lengthy waits in crowded emergency rooms, our portable bedside ultrasound provides immediate diagnostic capabilities without the delays associated with hospital-based ultrasound services. Our healthcare providers are trained to perform and interpret ultrasound examinations, ensuring that patients receive immediate results and prompt treatment decisions. The real-time nature of ultrasound imaging allows our providers to make immediate diagnostic assessments and treatment recommendations, often within minutes of the examination. For patients experiencing abdominal pain, pregnancy concerns, vascular issues, or other conditions requiring immediate imaging, our rapid access to high-quality ultrasound technology can make the difference between timely treatment and prolonged suffering.",
    // This page ranks 2.6 for "walk in ultrasound near me" and 32-42 for "urgent care
    // ultrasound" and "emergency ultrasound near me". Same page, same intent. The
    // language it uses is the difference, so the questions below use both.
    faqs: [
      {
        question: "Does urgent care do ultrasounds?",
        answer: "Ours does. Primary & Urgent Care Center provides same-day ultrasound on site in Palm Beach County, alongside CT, 1.5T MRI and X-ray. Most urgent care centres do not offer ultrasound and will refer you to a separate imaging centre.",
      },
      {
        question: "Where can I get a walk-in ultrasound near me?",
        answer: "We offer walk-in and same-day ultrasound across Palm Beach County, including Lake Worth, Lantana, Palm Springs and Royal Palm Beach. Calling ahead is quicker, and we will confirm the soonest time at your nearest clinic.",
      },
      {
        question: "Can I get an emergency ultrasound without going to the ER?",
        answer: "Yes. For soft tissue injuries, abdominal pain, blood clot concerns and similar urgent questions, our on-site ultrasound gives you a hospital-grade answer without an emergency room wait or facility fee. Anything genuinely life-threatening should still go to an emergency room.",
      },
      {
        question: "Do I need an appointment or a referral for an ultrasound?",
        answer: "Neither. No referral is required. Call and we will confirm availability, which is usually the same day.",
      },
    ],
    slug: 'ultrasound',
    metaTitle: 'Ultrasound | Walk-In Ultrasound Palm Beach County | Urgent Care Ultrasound Near Me',
    metaDescription: 'Get a same-day ultrasound at our Palm Beach County urgent care. Walk-in ultrasound for soft tissue, OB/GYN, and vascular evaluations. No appointment needed. Fast, affordable, and expert imaging with immediate results.',
    keywords: [
      'urgent care ultrasound',
      'ultrasound near me',
      'walk-in ultrasound Palm Beach',
      'same day ultrasound',
      'ultrasound without appointment',
      'affordable ultrasound',
      'urgent care with ultrasound',
      'diagnostic ultrasound clinic',
      'ultrasound imaging Palm Beach County'
    ]
  },
  {
    imageSrc: "/diagnostic.png",
    imageSrc2: '/diagnostic2.png',
    title: "Diagnostic Imaging",
    description: "Real-time imaging for soft-tissue, OB/GYN, and vascular evaluations—performed bedside.",
   "whatItIs": "Our walk-in clinics offer a wide range of diagnostic medical tests and lab services. These services are designed to help you feel prepared for various health concerns. Tests include, but are not limited to: Audio and vision tests, COVID-19/flu combo tests, COVID-19 PCR testing, COVID-19 rapid antigen testing, Cholesterol screening, Comprehensive blood testing, Diabetes screening, Digital X-Ray services, Drug screens, Electrocardiograms, General lab testing, Human immunodeficiency virus (HIV) testing, Mask fit testing, Purified protein derivative (PPD) tests, Pregnancy tests, Respiratory syncytial virus (RSV) tests, Rapid flu, strep throat and mono testing, Sexually transmitted infection (STI) testing, Urinalysis, Vaccinations, Vision acuity testing, and Wound and urine cultures.",
  "howItWorks": "Our lab services begin with an evaluation of your medical condition. If necessary, we then perform one or more of the relevant tests from our comprehensive list. After testing, you can easily access your lab results and other medical information directly from your personal computer, smartphone, or tablet.",
  "urgentCareAdvantage": "We provide urgent care for high blood pressure (HBP or hypertension), a condition affecting nearly half of American adults, often without noticeable symptoms. It's crucial to be aware of emergency symptoms such as Aortic dissection, Chest pain, Difficulty concentrating, irritability or loss of consciousness, Heart attack, Impaired pumping of the heart, Memory loss, Personality changes, Pregnancy complications (like preeclampsia or eclampsia), Stroke, and Sudden loss of kidney function. We recommend regular blood pressure screenings to monitor the effectiveness of lifestyle and diet modifications (e.g., increased exercise, reduced alcohol consumption), which may help eliminate or reduce the need for medication. Our care team can also advise you on blood pressure monitors.",
  "costs": "The cost advantage of receiving diagnostic testing at our urgent care centers is substantial, with typical pricing ranging from $550 compared to hospital costs of $1,500-3,000 for the same diagnostic procedures. This represents a savings of 60-70% compared to traditional hospital-based diagnostic services, making this advanced diagnostic technology accessible to patients without the financial burden of hospital pricing. Our urgent care centers accept most major insurance plans, and patients typically experience lower copays and deductibles compared to hospital settings. For patients without insurance, we offer transparent, upfront pricing with no hidden fees, and we work with patients to establish affordable payment plans when needed. Most insurance plans are accepted with lower deductibles, ensuring that patients can access this advanced diagnostic technology without facing prohibitive out-of-pocket costs.",
  "whyChooseUs": "Choose us for our comprehensive diagnostic services and convenient walk-in access. We offer a broad spectrum of medical tests, from routine screenings to specialized diagnostics. Our streamlined process allows for easy access to your lab results and other medical information via your personal devices, ensuring you stay informed and prepared about your health.",
  slug: 'diagnostic-imaging',
    metaTitle: 'Diagnostic Testing | Walk-In Lab Tests Palm Beach County | Urgent Care Lab Services Near Me',
    metaDescription: 'Get comprehensive diagnostic testing at our Palm Beach County urgent care. Walk-in lab tests including blood work, COVID-19 testing, STI screening, and more. No appointment needed. Fast, affordable, and expert lab services with same-day results.',
    keywords: [
      'urgent care lab tests',
      'diagnostic testing near me',
      'walk-in lab services Palm Beach',
      'same day blood work',
      'lab testing without appointment',
      'affordable diagnostic testing',
      'urgent care with lab services',
      'comprehensive lab testing clinic',
      'diagnostic testing Palm Beach County'
    ]
  },
  {
    imageSrc: "/HomeCards/NuclearMedicine.jpg",
    imageSrc2 : '/nuclear2.png',
    title: "Nuclear Medicine",
    description: "Functional imaging to detect thyroid, bone, and cardiac issues—hospital-level tech without the hospital bill.",
    whatItIs: "Nuclear medicine represents the cutting edge of functional imaging technology, utilizing small amounts of radioactive materials called tracers to evaluate organ function and detect diseases at the cellular level, providing information that other imaging modalities cannot capture. This advanced imaging technology operates on the principle of molecular imaging, allowing healthcare providers to observe how organs and tissues function rather than just their anatomical structure. Our nuclear medicine suite features state-of-the-art gamma cameras and PET-CT technology that can detect metabolic changes, blood flow patterns, and cellular activity long before structural changes become apparent on other imaging studies. Nuclear medicine is particularly valuable for evaluating thyroid function, detecting bone metastases, assessing cardiac perfusion, identifying inflammatory processes, and diagnosing a wide range of oncological and neurological conditions. Unlike traditional imaging modalities that primarily show anatomy, nuclear medicine provides functional information that can reveal disease processes at their earliest stages, often before symptoms develop or structural changes occur.",
    howItWorks: "The nuclear medicine imaging process begins with the administration of a small amount of radioactive tracer, which can be injected intravenously, inhaled as a gas, or swallowed as a capsule, depending on the specific examination being performed. These tracers are designed to target specific organs, tissues, or cellular processes, allowing for precise evaluation of particular body systems. Once administered, the tracer travels through the body and accumulates in the target area based on the organ's function, blood flow, or metabolic activity - for example, a bone scan tracer will accumulate in areas of increased bone turnover, while a cardiac perfusion tracer will show areas of the heart muscle that receive adequate blood flow. As the radioactive tracer decays, it emits gamma rays that are detected by specialized gamma cameras positioned around the patient, which capture the radiation emissions and create detailed images that show the distribution and concentration of the tracer throughout the body. Advanced computer processing converts this data into high-resolution images that reveal functional information about the organs being examined, and the images can be displayed as static pictures, dynamic sequences showing tracer movement over time, or 3D reconstructions.",
    urgentCareAdvantage: "Our urgent care centers provide access to the same advanced nuclear medicine technology found in major hospitals, but with the added benefits of immediate availability and significantly reduced wait times. Unlike traditional hospital settings where nuclear medicine studies often require weeks of advance scheduling or involve lengthy waits in crowded imaging departments, our urgent care model provides prompt access to this cutting-edge diagnostic technology. For patients requiring thyroid evaluations, bone scans, cardiac perfusion studies, or other nuclear medicine examinations, our immediate availability ensures that critical diagnostic information is obtained without unnecessary delays. Our nuclear medicine suite is staffed by experienced technologists and interpreted by board-certified nuclear medicine specialists who provide same-day results for urgent cases. The convenience of our urgent care setting means that patients can receive hospital-level nuclear medicine imaging while avoiding the lengthy appointment scheduling and higher costs typically associated with hospital-based nuclear medicine services.",
    costs: "The cost advantage of receiving nuclear medicine studies at our urgent care centers is substantial, with typical pricing ranging from $550 compared to hospital costs of $1,500-3,000 for the same diagnostic procedures. This represents a savings of 60-70% compared to traditional hospital-based nuclear medicine services, making this advanced diagnostic technology accessible to patients without the financial burden of hospital pricing. Our urgent care centers accept most major insurance plans, and patients typically experience lower copays and deductibles compared to hospital settings. For patients without insurance, we offer transparent, upfront pricing with no hidden fees, and we work with patients to establish affordable payment plans when needed. Most insurance plans are accepted with lower deductibles, ensuring that patients can access this advanced diagnostic technology without facing prohibitive out-of-pocket costs.",
    whyChooseUs: "Choosing our urgent care centers for your nuclear medicine studies means accessing cutting-edge functional imaging technology with immediate availability and significant cost savings. Unlike traditional hospitals where nuclear medicine studies often require weeks of advance scheduling or involve lengthy waits in crowded imaging departments, our urgent care model provides prompt access to this sophisticated diagnostic technology. Our nuclear medicine suite features the same advanced equipment and technology found in major hospitals, ensuring that you receive the highest quality diagnostic imaging available. Our board-certified nuclear medicine specialists provide same-day interpretations for urgent cases, ensuring that critical diagnostic information is available when you need it most. For patients requiring thyroid evaluations, bone scans, cardiac perfusion studies, or other nuclear medicine examinations, our immediate availability ensures that you receive timely diagnostic information without the delays associated with hospital-based nuclear medicine services.",
    slug: 'nuclear-medicine',
    metaTitle: 'Nuclear Medicine | Functional Imaging Palm Beach County | Urgent Care Nuclear Scan',
    metaDescription: 'Access advanced nuclear medicine imaging at our Palm Beach County urgent care. Walk-in for thyroid, bone, and cardiac scans. No appointment needed. Hospital-level technology, immediate results, and affordable pricing.',
    keywords: [
      'nuclear medicine scan Palm Beach',
      'nuclear medicine urgent care',
      'walk-in nuclear medicine',
      'same day nuclear scan',
      'nuclear imaging clinic',
      'bone scan urgent care',
      'thyroid scan urgent care',
      'affordable nuclear medicine',
      'nuclear medicine Palm Beach County'
         ]
   }
 ];
const Services = ({ header = "Hospital-Level Diagnostic & Imaging Services", description = "Skip the crowded emergency room and get hospital-grade imaging right inside our urgent care center. With a 1.5 T MRI, multi-slice CT scanner, digital X-ray, ultrasound, and nuclear medicine suite all under one roof, we deliver STAT reads within 3 hours and same-day scan results for STAT most studies. Walk in anytime or book a same-day appointment—our board-certified providers give you fast, accurate answers when minutes matter." }: { header?: string, description?: string }) => {
  return (
    <section className="py-20 xl:px-[60px] px-6">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-6 items-center mb-16">
          <h2 className="text-5xl font-bold text-black leading-tight">
            {header.split('br').map((item, index) => (
              <span key={index}>
                {item}
                {index < header.split('br').length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className="text-[#494647] lg:text-xl text-base lg:px-5">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 pb-20">
          {services.map((service, index) => (
              <ServiceCard
                key={index}
                imageSrc={service.imageSrc}
                title={service.title}
                description={service.description}
                slug={service.slug}
              />
          ))}  
        </div>
        <div className="w-full ">
            <AppointmentCard />
        </div>
      </div>
    </section>
  )
}

export default Services