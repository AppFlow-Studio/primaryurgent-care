import React from 'react'
import { services } from '@/components/Services'
import Image from 'next/image'
import Reveal from '@/components/RevealAnimation'

const EmergencyRoomPage = async ({params}: {params: Promise<{slug: string}>}) => {
  const {slug} = await params
  const service = services.find(service => service.slug === slug)
  return (
    <main className="w-full bg-[#FAFAFA] min-h-screen lg:py-20 py-10 max-w-8xl mx-auto lg:px-[60px] px-6">
      <div className="w-full mx-auto flex flex-col items-center mb-12">
        <div className="text-sm mb-2">
          Emergency Room / <span className="text-[#2563eb]">{service?.title}</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-black text-center mb-4">{service?.title}</h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          {service?.description}
        </p>
        <div className="flex flex-wrap gap-4 w-full self-center items-center justify-center">
          <a href="tel:5612045111" className="bg-white text-[black] font-semibold px-8 py-4 rounded-xl xl:text-lg text-base shadow flex lg:w-[40%] sm:w-fit w-full justify-center items-center gap-3 hover:bg-gray-100 transition">
            Contact Us
          </a>
        </div>
      </div>
      <div className="w-full mx-auto h-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <Reveal className='w-full'>
          <div className="flex flex-col gap-4 col-span-1">
            <h2 className="text-xl md:text-2xl font-bold text-black">What is a {service?.title}?</h2>
            <p className="md:text-lg text-md text-gray-600">{service?.whatItIs}</p>
          </div>
        </Reveal>
        <div className='w-full relative rounded-2xl overflow-hidden col-span-1'><Image src={service?.imageSrc || ''} alt={service?.title || ''} fill className='object-cover' /></div>
        <Reveal className='w-full col-span-2'>
          <div className="flex flex-col gap-4  ">
            <h2 className="text-xl md:text-2xl font-bold text-black">Why choose an {service?.title}?</h2>
            <p className="md:text-lg text-md text-gray-600">{service?.whyChooseUs}</p>
          </div>
        </Reveal>
      </div>

      <div className="w-full mx-auto grid grid-cols-1 h-full md:grid-cols-2 gap-8 mt-4">
        <Reveal className='w-full'>
          <div className="flex flex-col gap-4 col-span-1 w-full">
            <h2 className="text-xl md:text-2xl font-bold text-black">How does a {service?.title} work?</h2>
            <p className="md:text-lg text-md text-gray-600">{service?.howItWorks}</p>
          </div>
        </Reveal>
        <Reveal className='w-full'>
          <div className="flex flex-col gap-4 col-span-1 w-full">
            <h2 className="text-xl md:text-2xl font-bold text-black">Why choose Primary & Urgent Care Center for a {service?.title}?</h2>
            <p className="md:text-lg text-md text-gray-600">{service?.urgentCareAdvantage}</p>
          </div>
        </Reveal>
        <div className='w-full relative rounded-2xl overflow-hidden col-span-1 '><Image src={service?.imageSrc2 || ''} alt={service?.title || ''} fill className='object-cover' /></div>
        <Reveal className='w-full'>
          <div className='sm:col-span-1 col-span-1 flex flex-col gap-4'>
            <h2 className='text-xl md:text-2xl font-bold text-black'>Costs at a Primary & Urgent Care Center</h2>
            <p className='md:text-lg text-md text-gray-600'>{service?.costs}</p>
          </div>
        </Reveal>
       </div>
      </main>
  )
}

export default EmergencyRoomPage

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const erService = services.find((x) => x.slug === params.slug);
  const baseUrl = 'https://wpucc.com';
  const url = `${baseUrl}/emergencyroom/${params.slug}`;
  return {
    title: erService?.metaTitle || 'Emergency Room Level Care | Palm Beach County Urgent Care',
    description: erService?.metaDescription || 'Get emergency room level care for injuries and illnesses at our Palm Beach County urgent care clinics. Fast, affordable, and expert care. No appointment needed.',
    keywords: erService?.keywords || [
      'emergency room care',
      'urgent care',
      'walk-in clinic',
      'Palm Beach County',
      'emergency care',
      'ER alternative',
      'injury treatment',
      'illness treatment',
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: erService?.metaTitle || 'Emergency Room Level Care | Palm Beach County Urgent Care',
      description: erService?.metaDescription || 'Get emergency room level care for injuries and illnesses at our Palm Beach County urgent care clinics. Fast, affordable, and expert care. No appointment needed.',
      url,
      type: 'article',
      images: [
        {
          url: erService?.image ? `${baseUrl}${erService.image}` : `${baseUrl}/emergencyroomlevelcare.jpg`,
          width: 1200,
          height: 630,
          alt: erService?.title || 'Emergency Room Service',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: erService?.metaTitle || 'Emergency Room Level Care | Palm Beach County Urgent Care',
      description: erService?.metaDescription || 'Get emergency room level care for injuries and illnesses at our Palm Beach County urgent care clinics. Fast, affordable, and expert care. No appointment needed.',
      images: [erService?.image ? `${baseUrl}${erService.image}` : `${baseUrl}/emergencyroomlevelcare.jpg`],
    },
  };
}