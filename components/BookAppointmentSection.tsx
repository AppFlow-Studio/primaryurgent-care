"use client";

import BookAppointmentForm from "./ui/BookAppointmentForm";
import Image from "next/image";
import { usePathname } from "next/navigation";

const BookAppointmentSection = () => {
  const pathname = usePathname();
  const isAccidentPage = pathname?.startsWith('/car-accident') || pathname === '/car-accident-injury-clinic';
  // Imaging pages carry paid traffic for scans. Most of those visitors are not
  // accident patients, but the ones who are only become visible if they answer
  // the accident field, so it gets asked as a question rather than a category.
  const isImagingPage =
    pathname?.startsWith('/emergency-room') ||
    pathname === '/service/ct-scan' ||
    pathname === '/service/nuclear-scans';
  const title = isAccidentPage
    ? 'Book Your Same-Day Car Accident Exam'
    : 'Your Health Matters — Book an Appointment Today';
  const description = isAccidentPage
    ? 'If you were recently in a crash, PrimaryUC can evaluate neck pain, back pain, headaches, soreness, and other accident-related symptoms. Request a same-day visit and our team will contact you to confirm availability.'
    : 'Secure hospital-level urgent care in minutes. Complete the form and our board-certified team will contact you to confirm same-day or walk-in availability at the location closest to you. Expect STAT imaging reads within 3 hours and same-day scan results, plus transparent pricing and most insurance accepted.';

  return (
    <section className="w-full lg:py-20 py-10 px-6 lg:px-[60px] relative"
      style={{
        background: 'white',
      }}
    >
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
          {/* Left: Heading, subheading, image */}
          <div className="flex flex-col gap-4 justify-start">
            <h2 className="text-5xl font-bold text-black leading-tight mb-2">{title}</h2>
            <p className="text-lg text-gray-700 mb-4">
              {description}
            </p>
            <div className="relative w-full aspect-[4096/2731] rounded-2xl overflow-hidden mt-4">
              <Image
                src="https://mountainspineortho.b-cdn.net/PrimaryUC-images/form.jpg"
                alt="Doctors talking"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
          {/* Right: Form */}
          <div className="flex justify-center items-start w-full h-full">
            <BookAppointmentForm
              title={isAccidentPage ? 'Request Same-Day Accident Exam' : 'Book An Appointment'}
              accidentFieldLabel={isImagingPage ? 'Was this after an accident?' : undefined}
            />
          </div>
        </div>
      </section>    
  )
};

export default BookAppointmentSection;
