import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Reveal from '@/components/RevealAnimation';
import Polestar from '@/components/icons/polestar';
import Link from 'next/link';
import BookAppointmentForm from '@/components/ui/BookAppointmentForm';
import { notFound } from 'next/navigation';

const primaryCareServices = [
    {
        "title": "Sick Visits",
        "slug": "sick-visits",
        "description": "Prompt care for colds, flu, sore throat, earaches, and minor illnesses—walk in or book online. Our providers diagnose and treat most common illnesses quickly, so you can get back to feeling your best.",
        "icon": <Polestar />,
        "image": "/sickvisit.png",
        "whatItIs": "A sick visit at our urgent care clinic is a dedicated appointment for patients experiencing new or sudden symptoms, such as persistent fever, severe sore throat, nagging cough, or acute stomach pain. We specialize in the rapid evaluation and precise diagnosis of a wide range of acute illnesses, ensuring you receive timely and effective care. Our board-certified providers leverage on-site labs and advanced testing capabilities to swiftly identify the root cause of your symptoms, ensuring you receive the correct treatment without unnecessary delays. These essential sick visits are conveniently available for both adults and children, making it effortless for entire families to access comprehensive medical attention in one accessible location.",
        "symptoms": "You should consider a sick visit if you're experiencing concerning symptoms like a high fever that won't break, a persistent cough that worsens, a debilitating sore throat, or uncomfortable ear pain. Other indicators include significant nasal congestion, body aches, nausea, vomiting, diarrhea, unexplained fatigue, or any sudden, noticeable changes in your overall health. Our clinic is fully equipped to expertly handle a diverse array of acute illnesses, ranging from common respiratory infections and disruptive stomach bugs to minor injuries requiring immediate attention. Seeking early evaluation can significantly help in preventing potential complications and accelerating your recovery process, getting you back to feeling well sooner.",
        "whenToSeekCare": "You should promptly schedule a sick visit if your symptoms are severe, persistent, or show no signs of improvement after several days of diligent home care. Critical signs such as very high fevers, significant difficulty breathing, sharp chest pain, or symptoms of dehydration warrant immediate medical evaluation. If you have any underlying health conditions, including but not limited to asthma or diabetes, it is especially crucial to seek professional care early to prevent complications. Our dedicated urgent care team is readily available for both convenient walk-ins and same-day appointments, ensuring you receive the timely help you need without enduring long, frustrating waits. Please do not hesitate to visit us if you are at all unsure about your condition—our compassionate providers are always here to offer expert assistance and guidance.",
        "treatment": "During your sick visit, our highly skilled providers will conduct a thorough physical examination to accurately assess your condition and may order rapid diagnostic tests, such as flu, strep, or COVID-19 swabs, for quick results. Based on a comprehensive evaluation of your symptoms and the precise outcomes of your tests, we will meticulously develop a personalized treatment plan tailored specifically to your needs. This plan may encompass prescription medications, essential supportive care to alleviate discomfort, or recommendations for further specialized diagnostic testing if required. Our primary focus is on providing swift and safe relief from your symptoms, while simultaneously addressing any underlying causes to ensure a complete recovery. For your added convenience, our clinic also offers on-site pharmacy services, and comprehensive follow-up instructions, along with return-to-work or school notes, are provided as needed.",
        "prevention": "To significantly reduce your risk of contracting illnesses, it is vital to practice excellent hand hygiene consistently, diligently avoid close contact with individuals who are unwell, and keep your vaccinations fully up to date. Maintaining a healthy lifestyle, which includes balanced nutrition, regular physical exercise, and adequate restful sleep, can profoundly strengthen your immune system's ability to fight off infections. If you find yourself exposed to someone with a contagious illness, it is important to vigilantly monitor your own symptoms and seek professional care if any develop. Our clinic is also proud to offer a range of essential preventive services, such as annual flu shots and comprehensive wellness exams, designed to help keep you and your entire family healthy throughout the year. Early intervention and continuous education are fundamental pillars in preventing the widespread transmission of illness within our community.",
        "urgentCareAdvantage": "Choosing our urgent care for your sick visit offers unparalleled benefits, including fast, accessible, and truly comprehensive medical care. We provide extended operating hours, convenient walk-in availability, and consistently minimal wait times, ensuring you never have to delay getting the help you urgently need. Our advanced on-site labs and cutting-edge diagnostic tools facilitate immediate results, enabling swift and accurate treatment decisions. With a steadfast focus on patient comfort and convenience, our friendly and efficient staff guarantees a stress-free experience from the moment you check-in until your discharge. We are pleased to accept most major insurance plans and offer transparent, straightforward pricing for self-pay patients, eliminating any financial surprises. Trust us implicitly to deliver expert, compassionate care precisely when you need it most, without compromise.",
        "features": [
            "Rapid diagnosis and treatment for acute illnesses",
            "Comprehensive on-site lab testing for quick results",
            "Convenient same-day appointments and walk-in availability",
            "Personalized, compassionate care for patients of all ages"
        ],
        "metaTitle": "Sick Visits | Prompt Care for Colds, Flu, & Minor Illnesses | Palm Beach County",
        "metaDescription": "Get prompt care for colds, flu, sore throat, and minor illnesses at our Palm Beach County urgent care. Walk in or book online for same-day sick visits and expert diagnosis.",
        "keywords": ["sick visit", "urgent care Palm Beach", "fever treatment", "cough relief", "minor illness care", "walk-in clinic", "sore throat urgent care", "flu testing"]
    },
    {
        "title": "Fever & Cough",
        "slug": "fever-cough",
        "description": "Expert evaluation and treatment for fever, cough, and respiratory symptoms in adults and children. We offer fast relief and thorough care for your peace of mind.",
        "icon": <Polestar />,
        "image": "/fevercough.png",
        "whatItIs": "Our clinics provide expert evaluation and comprehensive care for fevers, persistent coughs, and a wide array of respiratory symptoms affecting both adults and children. We utilize advanced diagnostic methods to accurately identify the underlying cause of your symptoms, ensuring targeted and effective treatment. Our goal is to provide rapid relief and a clear understanding of your condition. We are committed to helping you and your family recover comfortably and quickly.",
        "symptoms": "Key symptoms that warrant a visit include a high or prolonged fever, chills, a persistent cough that may or may not produce mucus, and uncomfortable chest discomfort. Other concerning signs are shortness of breath, general fatigue, and body aches. These symptoms can indicate various respiratory illnesses, from common colds to more serious infections. Prompt evaluation helps in early diagnosis and prevents potential complications, ensuring a faster path to recovery.",
        "whenToSeekCare": "You should seek immediate medical care if your fever is exceptionally high, lasts more than three days, or is accompanied by alarming symptoms such as significant difficulty breathing, severe chest pain, or a persistent, worsening cough. If you experience sudden confusion, dizziness, or a stiff neck along with a fever, urgent care is crucial. Our clinics offer accessible care for these symptoms, ensuring you receive timely and professional attention. Don't delay seeking help if your symptoms are severe or concerning.",
        "treatment": "During your visit, our medical team will perform a thorough physical exam and may conduct rapid diagnostic tests for common infections like flu, strep throat, and COVID-19. If indicated by your symptoms, a chest X-ray may be performed on-site to assess for pneumonia or other respiratory complications. Based on the diagnosis, we will prescribe appropriate medications for symptom relief, such as fever reducers or cough suppressants, and antibiotics if a bacterial infection is confirmed. Our comprehensive approach ensures you receive effective treatment tailored to your specific needs.",
        "prevention": "Practicing frequent and thorough handwashing is one of the most effective ways to prevent the spread of respiratory illnesses. It is also advisable to avoid close contact with individuals who are sick, especially during peak cold and flu seasons. Staying current on all recommended vaccinations, including annual flu shots, significantly boosts your immunity against common respiratory pathogens. Maintaining a healthy lifestyle with adequate rest and nutrition further supports your immune system. These preventive measures are crucial for protecting yourself and your community from illness.",
        "urgentCareAdvantage": "Choosing our urgent care for fever and cough symptoms provides immediate access to essential testing and on-site X-rays, ensuring a quick and accurate diagnosis. We offer fast, effective treatment options for both adults and children, eliminating the need for a prior appointment. Our streamlined process means minimal wait times, allowing you to receive compassionate care and begin your recovery without unnecessary delays. Trust our experienced team to provide the expert attention you need for peace of mind and a swift return to health.",
        "features": [
            "Rapid flu and strep testing available on-site",
            "Convenient chest X-rays performed directly at our clinic",
            "Specialized pediatric and adult care for all ages",
            "Immediate treatment options for symptom relief and recovery"
        ],
        "metaTitle": "Fever & Cough Treatment | Urgent Care Palm Beach County | Fast Relief",
        "metaDescription": "Get expert evaluation and fast treatment for fever, cough, and respiratory symptoms in Palm Beach County. Walk in or book online for adults and children.",
        "keywords": ["fever urgent care", "cough treatment", "respiratory symptoms", "flu testing Palm Beach", "strep throat testing", "chest X-ray urgent care", "pediatric fever", "adult cough"]
    },
    {
        "title": "Preventive Care",
        "slug": "preventive-care",
        "description": "Annual checkups, screenings, and wellness visits to keep you healthy year-round. Prevention is the best medicine—let us help you stay on track.",
        "icon": <Polestar />,
        "image": "/preventativecare.png",
        "whatItIs": "Preventive care encompasses a proactive approach to maintaining your health through regular checkups, comprehensive screenings, and personalized health counseling. These services are designed to help you stay healthy by identifying potential health issues early, often before symptoms even appear. By focusing on prevention, we empower you to take control of your well-being and reduce the risk of developing serious conditions. Our dedicated team is committed to supporting your long-term health goals.",
        "symptoms": "The primary focus of preventive care is on preventing illness and detecting health issues in their earliest stages, meaning there are often no noticeable symptoms. Instead, preventive care is about proactive health management and risk assessment. We conduct screenings and tests to look for subtle indicators of potential problems, such as elevated blood pressure or cholesterol levels, or early signs of certain cancers. These early detections allow for timely intervention and more effective treatment outcomes.",
        "whenToSeekCare": "You should diligently schedule annual wellness visits and adhere to recommended screenings based on your age, gender, family history, and individual risk factors. These routine appointments are crucial even when you feel perfectly healthy, as they serve as a cornerstone of long-term health maintenance. Regular preventive care helps in the early detection of potential health issues, allowing for timely intervention and more effective management. Consult with our care team to determine the most appropriate screening schedule for your specific needs.",
        "treatment": "Preventive care treatments primarily involve comprehensive physical exams, meticulous blood pressure and cholesterol checks, and crucial cancer screenings tailored to your age and risk profile. Our services also include personalized lifestyle counseling, offering guidance on nutrition, exercise, and stress management to promote overall well-being. We provide immunizations and discuss appropriate vaccination schedules to protect against various diseases. The 'treatment' in preventive care is about proactive measures and education to maintain optimal health.",
        "prevention": "Effective prevention hinges on adopting a healthy diet rich in fruits, vegetables, and lean proteins, coupled with engaging in regular physical exercise. It is crucial to avoid smoking and limit alcohol consumption, as these habits significantly impact long-term health. Diligently following recommended screening guidelines for conditions like cancer, diabetes, and heart disease is also key to early detection and intervention. Our team provides personalized guidance and support to help you integrate these essential habits into your daily life, fostering a proactive approach to your health.",
        "urgentCareAdvantage": "Our urgent care clinics offer a distinct advantage for preventive care through convenient scheduling options, including walk-in availability, making it easier than ever to prioritize your health. We provide comprehensive preventive services all in one accessible location, saving you time and effort. Our efficient process ensures minimal wait times, allowing you to complete your annual checkups and screenings without disrupting your busy schedule. This accessibility makes it simple to stay on track with your wellness goals, ensuring you receive the proactive care needed to maintain optimal health year-round.",
        "features": [
            "Comprehensive annual wellness exams for all ages",
            "Essential blood pressure and cholesterol checks",
            "Crucial cancer screenings tailored to your needs",
            "Personalized lifestyle and nutrition counseling"
        ],
        "metaTitle": "Preventive Care | Annual Checkups & Screenings | Palm Beach County Urgent Care",
        "metaDescription": "Get annual checkups, screenings, and wellness visits for all ages at our Palm Beach County urgent care. Stay healthy with comprehensive preventive care.",
        "keywords": ["preventive care Palm Beach", "wellness exams", "health screenings", "primary care prevention", "annual checkup", "cholesterol screening", "blood pressure check", "cancer screening urgent care"]
    },
    {
        "title": "Annual Physicals",
        "slug": "annual-physicals",
        "description": "Comprehensive physical exams for school, work, sports, or peace of mind. We provide all required forms and documentation on the spot.",
        "icon": <Polestar />,
        "image": "/physicals.png",
        "whatItIs": "An annual physical is a thorough medical examination designed to assess your overall health and well-being. These comprehensive exams are often required for various purposes, including school enrollment, employment, sports participation, or simply for your personal peace of mind regarding your health status. Our clinics provide a detailed evaluation, covering all essential health indicators. We ensure that all necessary forms and documentation are completed accurately and provided to you on the spot, streamlining the process.",
        "symptoms": "Annual physicals are primarily for assessment and prevention, meaning that patients typically do not present with specific symptoms. The purpose of these exams is to proactively identify any underlying health issues or potential risk factors before they manifest as noticeable symptoms. Our providers conduct a systematic review of your body systems and health history to catch subtle changes. This proactive approach is crucial for maintaining long-term health and addressing concerns early.",
        "whenToSeekCare": "You should diligently schedule an annual physical exam every year, or as frequently as required for specific purposes such as school enrollment, employment clearance, or participation in sports activities. These routine visits are crucial for maintaining a comprehensive overview of your health, even if you feel perfectly well. Regular physicals allow for early detection of potential health issues, enabling timely intervention and more effective management. Our clinics offer convenient scheduling options to accommodate your needs.",
        "treatment": "During a comprehensive annual physical, our providers will conduct a thorough examination, which typically includes checking your vital signs, assessing your cardiovascular and respiratory systems, and performing vision and hearing tests. We also complete all required forms and documentation on the spot, ensuring a seamless process for school, work, or sports requirements. While primarily preventive, if any health concerns are identified, we will discuss appropriate next steps, which may include further diagnostic testing or specialist referrals. Our goal is to provide a complete health overview and address any immediate needs.",
        "prevention": "Annual physicals play a critical role in preventive healthcare by helping to identify and address potential health issues in their earliest stages. These regular check-ups allow our providers to monitor your overall health trends, update vaccinations, and offer personalized advice on maintaining a healthy lifestyle. By consistently engaging in annual physicals, you stay proactively informed about your health status and remain on track with essential preventive care. This consistent oversight is key to preventing the progression of health concerns and promoting long-term well-being.",
        "urgentCareAdvantage": "Choosing our urgent care for your annual physical offers unmatched convenience with same-day appointments and minimal wait times, fitting seamlessly into your busy schedule. We pride ourselves on providing quick and efficient completion of all necessary paperwork and documentation directly on-site, saving you valuable time and hassle. Our clinics warmly welcome patients of all ages, ensuring that every family member can receive their required physical exam in one convenient location. This streamlined approach makes getting your annual physical stress-free and accessible, without the long waits typically associated with traditional primary care offices.",
        "features": [
            "Comprehensive school and sports physicals",
            "Thorough work and Department of Transportation (DOT) exams",
            "Accurate vision and hearing tests performed on-site",
            "Efficient same-day paperwork completion for your convenience"
        ],
        "metaTitle": "Annual Physicals | School, Work & Sports Exams | Palm Beach County Urgent Care",
        "metaDescription": "Get comprehensive physical exams for school, work, and sports at our Palm Beach County urgent care. Walk in or book online for annual physicals and quick paperwork.",
        "keywords": ["annual physical Palm Beach", "sports physicals", "work physicals", "DOT exams", "school physicals", "urgent care physical", "health checkup", "same-day physical"]
    },
    {
        "title": "Chronic Disease Management",
        "slug": "chronic-disease",
        "description": "Ongoing care for diabetes, high blood pressure, asthma, and other chronic conditions. We help you manage your health with regular check-ins and personalized plans.",
        "icon": <Polestar />,
        "image": "/chronic.png",
        "whatItIs": "Chronic disease management involves the long-term, continuous care of persistent health conditions such as diabetes, hypertension (high blood pressure), and asthma. Our comprehensive approach is designed to help you effectively manage your specific condition, aiming to maintain your health and prevent the onset or progression of complications. We focus on empowering you with the knowledge and tools necessary to live a full and healthy life despite your diagnosis. Our dedicated team provides ongoing support and personalized strategies to ensure optimal health outcomes.",
        "symptoms": "Symptoms for chronic conditions vary widely depending on the specific disease, but commonly include elevated blood pressure readings, persistently high blood sugar levels, or recurrent shortness of breath and wheezing. Patients may also experience chronic fatigue, unexplained weight changes, or persistent pain. Regular monitoring and open communication with your care team are essential to track these symptoms and adjust your management plan as needed. Early recognition of symptom changes can prevent serious health events.",
        "whenToSeekCare": "You should adhere to a schedule of regular follow-up appointments as recommended by your care team to effectively manage your chronic condition. Additionally, it is crucial to seek immediate care whenever you notice any significant changes in your symptoms, experience new or worsening health concerns, or find that your current control over the condition is diminishing. Prompt communication and evaluation are key to preventing complications and ensuring your treatment plan remains effective. Do not hesitate to reach out if you have any questions or concerns about your chronic disease management.",
        "treatment": "Our treatment approach for chronic diseases includes meticulous medication management, ensuring you are on the most effective and appropriate dosages. We provide routine monitoring through regular lab tests and physical assessments to track your condition's progress and identify any potential issues early. Personalized lifestyle counseling is a cornerstone of our care, offering practical advice on diet, exercise, and stress reduction tailored to your specific needs. When necessary, we facilitate seamless specialist referrals to ensure you receive comprehensive, integrated care from a network of experts.",
        "prevention": "Adhering strictly to your prescribed care plan and consistently taking all medications as directed are fundamental to preventing complications from chronic diseases. Regular check-ins with your healthcare provider are crucial for monitoring your condition, making necessary adjustments to your treatment, and addressing any new concerns. Beyond medication, adopting a healthy lifestyle, including a balanced diet and regular exercise, significantly contributes to disease prevention and overall well-being. Proactive management and consistent follow-up are key to living a healthier life with a chronic condition.",
        "urgentCareAdvantage": "Our urgent care clinics offer unparalleled convenience for ongoing chronic disease management, providing easy access to necessary care without the long waits of specialist offices. You can readily obtain medication refills and receive routine monitoring, ensuring continuity of your treatment plan. This accessibility means you don't have to delay essential check-ups or wait for a specialist appointment to manage your condition effectively. Our integrated approach ensures that you receive consistent, high-quality care, helping you maintain stability and prevent acute exacerbations of your chronic disease with minimal disruption to your daily life.",
        "features": [
            "Comprehensive diabetes and hypertension care",
            "Expert medication management and adjustments",
            "Consistent routine monitoring of your condition",
            "Seamless specialist referrals as needed for integrated care"
        ],
        "metaTitle": "Chronic Disease Management | Diabetes, Hypertension, Asthma Care | Palm Beach County Urgent Care",
        "metaDescription": "Get ongoing care for diabetes, high blood pressure, and asthma at our Palm Beach County urgent care. Manage your chronic health conditions with personalized plans and easy access.",
        "keywords": ["chronic disease management Palm Beach", "diabetes care", "hypertension treatment", "asthma management", "urgent care chronic conditions", "medication refills", "blood pressure monitoring", "long-term health"]
    },
    {
        "title": "Women's & Men's Health",
        "slug": "womens-mens-health",
        "description": "Routine exams, screenings, and care for women and men unique health needs. We offer confidential, compassionate care for every stage of life.",
        "icon": <Polestar />,
        "image": "/menwomenshealth.png",
        "whatItIs": "Our clinics provide comprehensive healthcare specifically tailored to the unique needs of both women and men across all stages of life. This includes a full spectrum of services ranging from essential reproductive health care and vital preventative screenings to personalized wellness counseling. We are committed to offering a confidential and compassionate environment where patients feel comfortable discussing their health concerns openly. Our goal is to support your well-being through every life transition with expert medical guidance and care.",
        "symptoms": "Symptoms that may prompt a visit include, but are not limited to, pelvic or testicular pain, noticeable changes in menstrual cycles, or any concerns related to sexual health. Many routine care visits, such as annual check-ups, may not involve specific symptoms but are crucial for preventive screening. We encourage open communication about any changes or concerns you may have, ensuring we address your unique health needs comprehensively. Early detection and proactive management are key to maintaining long-term health.",
        "whenToSeekCare": "You should schedule an appointment for annual exams as part of your routine preventive care, even if you feel healthy. Additionally, seek care promptly if you experience any new or concerning symptoms related to your reproductive or sexual health. It is also advisable to visit us if you have questions about family planning, contraception, or general wellness tailored to your gender. Our team is here to provide confidential and supportive care, addressing your specific needs at every stage of life. Prioritizing these visits ensures proactive health management.",
        "treatment": "Our comprehensive services include essential screenings such as Pap smears for women and prostate checks for men, vital for early detection of potential health issues. We also offer confidential STD testing and treatment, ensuring your sexual health is prioritized. Family planning services, including various birth control options, are available to support your reproductive choices. Furthermore, our providers offer personalized hormone and wellness counseling, guiding you towards optimal health and well-being. Our integrated approach addresses both immediate concerns and long-term health goals.",
        "prevention": "Regular screenings are a cornerstone of preventive health for both women and men, allowing for early detection and intervention for various conditions. Practicing safe sexual health habits is crucial for preventing sexually transmitted infections and ensuring overall well-being. Maintaining open and honest communication with your healthcare provider about all aspects of your health is vital for personalized and effective care. Our team emphasizes education and proactive measures to empower you in maintaining excellent health throughout your life. We are committed to supporting your journey towards lasting wellness.",
        "urgentCareAdvantage": "Our urgent care clinics offer confidential and judgment-free care, ensuring a comfortable and supportive environment for all your health needs. With the convenience of same-day appointments, you can address sensitive health concerns promptly without long waiting periods. We prioritize your comfort and privacy, making sure your visit is as stress-free as possible. Our experienced providers are dedicated to delivering compassionate and expert care, focusing on your specific health requirements at every stage of life. This accessible approach ensures you receive the personalized attention you deserve.",
        "features": [
            "Essential Pap smears and prostate checks for comprehensive health screening",
            "Supportive birth control and family planning services",
            "Confidential STD testing and effective treatment options",
            "Personalized hormone and wellness counseling for optimal health"
        ],
        "metaTitle": "Women's & Men's Health | Routine Exams & Screenings | Palm Beach County Urgent Care",
        "metaDescription": "Get routine exams, screenings, and confidential care for women and men at our Palm Beach County urgent care. Walk in or book online for comprehensive health services.",
        "keywords": ["women's health Palm Beach", "men's health Palm Beach", "STD testing urgent care", "Pap smear clinic", "prostate check", "birth control services", "sexual health urgent care", "wellness counseling"]
    },
    {
        "title": "Pediatric Care",
        "slug": "pediatric-care",
        "description": "Gentle, family-friendly care for children of all ages, from newborns to teens. Our providers make visits easy and stress-free for kids and parents alike.",
        "icon": <Polestar />,
        "image": "/pediatric.png",
        "whatItIs": "Our clinics provide gentle, comprehensive primary care specifically designed for children of all ages, spanning from newborns through their teenage years. This includes essential well-child visits, crucial immunizations to protect against serious diseases, and expert care for common childhood illnesses and minor injuries. Our dedicated providers are committed to creating a family-friendly environment where both kids and parents feel comfortable and at ease. We strive to make every visit easy and stress-free, ensuring your child receives the best possible care.",
        "symptoms": "Children may exhibit a variety of symptoms that warrant a visit, including fever, persistent cough, unexplained rashes, or signs of ear infections. Parents might also notice developmental concerns, changes in behavior, or general signs of discomfort. Our experienced pediatric team is adept at diagnosing and treating a wide range of childhood ailments, from common colds to more specific conditions. Prompt evaluation helps ensure your child receives timely and appropriate care, supporting their healthy growth and development.",
        "whenToSeekCare": "You should bring your child in for regular checkups and immunizations as recommended by pediatric guidelines to ensure their healthy development and protection against diseases. Additionally, seek care whenever your child exhibits any new or concerning symptoms, such as a high fever, persistent vomiting, difficulty breathing, or unusual pain. Our clinics offer convenient walk-in and same-day appointments, ensuring your child receives prompt attention without unnecessary delays. We are here to support your child's health journey every step of the way.",
        "treatment": "During a pediatric visit, our providers will perform a thorough physical exam tailored to your child's age and symptoms. We administer essential vaccinations according to recommended schedules, safeguarding your child's health. Developmental screenings are conducted to monitor their growth and milestones, ensuring they are progressing as expected. We also provide effective treatment for acute illnesses, offering relief for common conditions like ear infections, strep throat, and the flu. Our compassionate approach focuses on your child's comfort and well-being throughout their care.",
        "prevention": "Routine checkups and maintaining an up-to-date immunization schedule are paramount for preventing many childhood illnesses and ensuring healthy development. Encouraging healthy habits, such as balanced nutrition, regular physical activity, and adequate sleep, significantly boosts a child's immune system. Teaching good hand hygiene and avoiding close contact with sick individuals also play a crucial role in preventing the spread of infections. Our clinic actively supports these preventive measures, helping to keep your children healthy and thriving year-round.",
        "urgentCareAdvantage": "Our urgent care clinics offer a truly kid-friendly environment, designed to put both children and parents at ease during medical visits. We prioritize fast visits with minimal wait times, understanding the unique needs of busy families. Our team comprises experienced pediatric providers who are adept at handling a wide range of childhood illnesses and minor injuries. The best part is that no appointment is needed, ensuring immediate access to quality care when your child needs it most. Trust us to provide compassionate and efficient care for your little ones.",
        "features": [
            "Comprehensive well-child visits for healthy development",
            "All routine childhood vaccinations available on-site",
            "Thorough developmental screenings to monitor milestones",
            "Immediate sick and urgent care for acute childhood illnesses"
        ],
        "metaTitle": "Pediatric Care | Urgent Care for Kids & Teens | Palm Beach County",
        "metaDescription": "Get gentle, family-friendly pediatric care for children of all ages in Palm Beach County. Walk in or book online for well-child visits, immunizations, and sick care.",
        "keywords": ["pediatric care Palm Beach", "child doctor urgent care", "well-child visit", "kid's urgent care", "child immunizations", "sick child care", "teen health", "pediatrician walk-in"]
    },
    {
        "title": "Vaccinations",
        "slug": "vaccinations",
        "description": "Flu shots, school vaccines, travel immunizations, and more—no appointment needed. Protect yourself and your family year-round.",
        "icon": <Polestar />,
        "image": "/placeholder-vaccine.jpg",
        "whatItIs": "Vaccinations are a cornerstone of preventive health, offering crucial protection for you and your family against a wide array of serious and potentially life-threatening diseases. At our clinics, we proudly offer all routine and recommended travel vaccines, catering to both children and adults. These immunizations work by stimulating your body's immune system to build defenses against specific pathogens, significantly reducing your risk of infection and severe illness. Staying up-to-date on your vaccinations is one of the most effective ways to safeguard public health and personal well-being.",
        "symptoms": "While most vaccines are primarily preventive, designed to build immunity before exposure, we also offer specific vaccines for immediate needs such as travel to certain regions or after certain exposures. For instance, you might seek a tetanus shot after an injury or specific immunizations required for international travel. Our team can assess your individual needs based on your health history, travel plans, or recent exposures. We provide comprehensive counseling to ensure you receive the most appropriate vaccinations for your circumstances.",
        "whenToSeekCare": "You should seek vaccination for routine immunizations as recommended by public health guidelines for your age and health status. Additionally, vaccinations are often required for school or work enrollment, ensuring compliance with institutional health policies. It is also crucial to get necessary immunizations before international travel, protecting you from diseases prevalent in other regions. Our clinics offer flexible scheduling and walk-in options, making it convenient to receive your essential vaccines without delay. Prioritizing vaccinations is key to maintaining personal and community health.",
        "treatment": "Our vaccination services involve the safe and efficient administration of various vaccines by our trained medical staff. We provide comprehensive vaccine counseling, discussing the benefits, potential side effects, and importance of each immunization. For your convenience and future reference, detailed vaccine records are provided immediately after administration. Our process is designed to be quick and gentle, ensuring a comfortable experience for both adults and children. We prioritize patient education, empowering you to make informed decisions about your immunization schedule.",
        "prevention": "Staying consistently up to date on your vaccines is unequivocally one of the most effective and scientifically proven methods to prevent a multitude of serious illnesses. Immunizations work by preparing your immune system to recognize and fight off specific pathogens, thereby reducing your risk of infection and severe disease. Beyond individual protection, high vaccination rates contribute significantly to community immunity, safeguarding vulnerable populations. Our clinics are committed to promoting vaccination as a vital public health measure, helping to create a healthier and safer environment for everyone.",
        "urgentCareAdvantage": "Our urgent care clinics offer unparalleled convenience for vaccinations with walk-in availability, eliminating the need for prior appointments and long waits. We ensure that all major vaccines are consistently in stock, allowing you to receive your necessary immunizations without delay. Our trained medical staff provides quick, gentle, and efficient administration, making the vaccination process as comfortable as possible for both adults and children. This accessibility ensures you can protect yourself and your family year-round with ease. Trust us for a hassle-free vaccination experience that prioritizes your health and safety.",
        "features": [
            "Comprehensive range of flu, tetanus, and travel vaccines",
            "All essential childhood immunizations readily available",
            "Convenient walk-in availability for immediate vaccination needs",
            "Official vaccine records provided for your convenience and documentation"
        ],
        "metaTitle": "Vaccinations | Flu Shots & Immunizations | Palm Beach County Urgent Care",
        "metaDescription": "Get flu shots, school vaccines, and travel immunizations in Palm Beach County. Walk in or book online for vaccinations at our urgent care and protect your family.",
        "keywords": ["vaccination Palm Beach", "immunization clinic", "flu shot urgent care", "travel vaccine", "childhood immunizations", "tetanus shot", "walk-in vaccines", "vaccine records"]
    },
    {
        "title": "Same-Day Appointments",
        "slug": "same-day",
        "description": "Get seen today—walk in or reserve your spot online for fast, convenient care. We make it easy to get the help you need, when you need it.",
        "icon": <Polestar />,
        "image": "/sameappointment.png",
        "whatItIs": "Same-day appointments at our urgent care clinics mean you can receive prompt and essential medical care precisely when you need it most, without the inconvenience of waiting days for an opening. This service is designed for acute, non-life-threatening conditions that require timely attention but do not warrant an emergency room visit. Whether you're dealing with a sudden illness, a minor injury, or an unexpected health concern, our clinics are ready to provide immediate evaluation and treatment. We prioritize your health and convenience, ensuring you get seen today.",
        "symptoms": "You should consider a same-day appointment for any urgent or new health concern that cannot reasonably wait for a routine primary care appointment. This includes symptoms of common illnesses like colds, flu, strep throat, or ear infections, as well as minor injuries such as sprains, cuts, or minor burns. If you experience sudden onset of pain, fever, or other acute symptoms that are not life-threatening but require prompt medical attention, our same-day service is ideal. We are here to address your immediate health needs efficiently.",
        "whenToSeekCare": "You should seek a same-day appointment if you require prompt attention for a new illness, an unexpected injury, or any acute health concern that arises suddenly. This service is ideal when your condition is not life-threatening but requires medical evaluation sooner rather than later. Examples include sudden onset of fever, persistent cough, minor fractures, or allergic reactions without severe symptoms. Our clinics are designed to provide immediate access to care, ensuring you get the help you need without delay, preventing conditions from worsening.",
        "treatment": "During your same-day appointment, our experienced medical team will conduct a quick yet thorough evaluation of your condition, including a physical exam and any necessary on-site diagnostic tests. Based on the assessment, we will provide an accurate diagnosis and initiate an effective treatment plan for a wide range of conditions. This may include prescribing medications, performing minor procedures like wound care, or offering supportive care to alleviate your symptoms. Our goal is to provide comprehensive care efficiently, ensuring you receive the immediate attention required for your recovery.",
        "prevention": "While same-day appointments primarily address acute issues, seeking early care can significantly prevent complications and help you recover faster from illnesses or injuries. Prompt medical attention can stop minor issues from escalating into more serious conditions, reducing the need for more intensive interventions later. By utilizing our accessible services, you proactively manage your health, minimizing downtime and ensuring a quicker return to your daily activities. Early intervention is a cornerstone of effective preventive health, even in urgent care settings.",
        "urgentCareAdvantage": "Our urgent care clinics offer a distinct advantage with minimal wait times, ensuring you receive prompt medical attention without unnecessary delays. We provide convenient walk-in access, allowing you to visit us whenever a health concern arises, without the need for a prior appointment. For added flexibility, you can also reserve your spot online, further streamlining your visit. Our friendly and highly efficient staff are dedicated to providing a stress-free experience, making it easy and convenient to get the expert help you need, precisely when you need it most. We prioritize your time and health.",
        "features": [
            "Walk-ins are always welcome, no appointment necessary",
            "Convenient online booking to reserve your spot in advance",
            "Consistently minimal wait times for efficient care",
            "Friendly, compassionate, and highly efficient staff"
        ],
        "metaTitle": "Same-Day Appointments | Urgent Care Palm Beach County | Get Seen Today",
        "metaDescription": "Get seen today at our Palm Beach County urgent care clinics. Walk in or reserve your spot online for fast, convenient same-day appointments for all your urgent health needs.",
        "keywords": ["same-day appointment Palm Beach", "walk-in clinic", "urgent care fast", "get seen today", "convenient care", "no appointment needed", "quick medical care", "online booking urgent care"]
    }
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const service = primaryCareServices.find(s => s.slug === params.slug);
    if (!service) return {};
    const baseUrl = 'https://wpucc.com';
    const url = `${baseUrl}/primary-care-doctor/${service.slug}`;
    return {
        title: service.metaTitle || `${service.title} | Primary Care Services`,
        description: service.metaDescription || service.description,
        keywords: service.keywords || [],
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: service.metaTitle || `${service.title} | Primary Care Services`,
            description: service.metaDescription || service.description,
            url,
            type: 'article',
            images: [
                {
                    url: service.image ? `${baseUrl}${service.image}` : `${baseUrl}/doctorwithpatient.jpg`,
                    width: 1200,
                    height: 630,
                    alt: service.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: service.metaTitle || `${service.title} | Primary Care Services`,
            description: service.metaDescription || service.description,
            images: [service.image ? `${baseUrl}${service.image}` : `${baseUrl}/doctorwithpatient.jpg`],
        },
    };
}

export default function PrimaryCareServicePage({ params }: { params: { slug: string } }) {
    const service = primaryCareServices.find(s => s.slug === params.slug);
    if (!service) {
        return (
            notFound()
        );
    }
    return (
        <main className="bg-[#F7FAFF] min-h-screen py-10">
            {/* JSON-LD Structured Data for LocalBusiness and Service */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "MedicalClinic",
                    "name": "Primary Urgent Care - Family Medicine & Walk-In Clinic",
                    "image": `https://wpucc.com${service.image}`,
                    "@id": `https://wpucc.com/primary-care-doctor/${service.slug}`,
                    "url": `https://wpucc.com/primary-care-doctor/${service.slug}`,
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
                    ],
                    "makesOffer": {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": service.title,
                        "description": service.metaDescription || service.description,
                        "url": `https://wpucc.com/primary-care-doctor/${service.slug}`
                      }
                    }
                  })
                }}
            />
            {/* Hero Section */}
            <section className="w-full flex flex-col items-center justify-center py-10 px-4">
                <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-10 items-start">
                    {/* Appointment Form */}
                    <div className="lg:w-[32%] w-full lg:order-first order-last">
                        <Reveal className="w-full">
                            <BookAppointmentForm title="Request an Appointment" bgColor="bg-[#FAFAFA]" textColor="text-black" />
                        </Reveal>
                    </div>
                    {/* Main Info */}
                    <div className="lg:w-[68%] w-full flex flex-col gap-8">
                        <Reveal className="w-full">
                            <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center border border-[#F4F3F3] mb-4">
                                <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">{service.title}</h1>
                                <p className="text-lg text-[#494647] mb-2">{service.description}</p>
                                <div className="relative w-full h-48 lg:h-80 mt-4 mb-2">
                                    <Image src={service.image} alt={service.title} fill className="rounded-2xl object-cover border-2 border-[#A7E3F7]" />
                                </div>
                            </div>
                        </Reveal>
                        {/* Info Sections */}
                        <Reveal className="w-full">
                            <div className="bg-[#FAFAFA] rounded-2xl shadow p-6 mb-4">
                                <h2 className="text-2xl font-bold mb-2 text-[#2563eb]">What is it?</h2>
                                <p className="text-lg text-[#494647]">{service.whatItIs}</p>
                            </div>
                        </Reveal>
                        <Reveal className="w-full">
                            <div className="bg-[#FAFAFA] rounded-2xl shadow p-6 mb-4">
                                <h2 className="text-2xl font-bold mb-2 text-[#2563eb]">Common Symptoms</h2>
                                <p className="text-lg text-[#494647]">{service.symptoms}</p>
                            </div>
                        </Reveal>
                        <Reveal className="w-full">
                            <div className="bg-[#FAFAFA] rounded-2xl shadow p-6 mb-4">
                                <h2 className="text-2xl font-bold mb-2 text-[#2563eb]">When to Seek Care</h2>
                                <p className="text-lg text-[#494647]">{service.whenToSeekCare}</p>
                            </div>
                        </Reveal>
                        <Reveal className="w-full">
                            <div className="bg-[#FAFAFA] rounded-2xl shadow p-6 mb-4">
                                <h2 className="text-2xl font-bold mb-2 text-[#2563eb]">Treatment</h2>
                                <p className="text-lg text-[#494647]">{service.treatment}</p>
                            </div>
                        </Reveal>
                        <Reveal className="w-full">
                            <div className="bg-[#FAFAFA] rounded-2xl shadow p-6 mb-4">
                                <h2 className="text-2xl font-bold mb-2 text-[#2563eb]">Prevention</h2>
                                <p className="text-lg text-[#494647]">{service.prevention}</p>
                            </div>
                        </Reveal>
                        <Reveal className="w-full">
                            <div className="bg-[#FAFAFA] rounded-2xl shadow p-6 mb-4">
                                <h2 className="text-2xl font-bold mb-2 text-[#2563eb]">Why Choose Us?</h2>
                                <p className="text-lg text-[#494647]">{service.urgentCareAdvantage}</p>
                            </div>
                        </Reveal>
                        {/* Features Section */}
                        <Reveal className="w-full">
                            <div className="bg-white rounded-2xl shadow p-6 mt-6">
                                <h2 className="text-2xl font-bold mb-6 text-[#2563eb] text-center">What's Included</h2>
                                <ul className="grid lg:grid-cols-2 gap-6">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="bg-[#F7FAFF] rounded-xl shadow p-6 flex items-center gap-4 border border-[#F4F3F3] animate-fade-in-up">
                                            <span className="text-[#D52128] text-2xl"><Polestar /></span>
                                            <span className="text-lg text-gray-800">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                        {/* Back Link */}
                        <Reveal className="w-full">
                            <div className="flex justify-center mt-8">
                                <Link href="/primary-care-doctor" className="text-[#2563eb] font-semibold underline text-lg hover:text-[#D52128] transition">
                                    ← Back to All Primary Care Services
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </main>
    );
}
