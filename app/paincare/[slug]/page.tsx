import React from 'react'
import { notFound } from 'next/navigation';
import BookAppointmentForm from '@/components/ui/BookAppointmentForm';
import { PainCareWeTreatData } from '@/components/paincarewetreat';
import Image from 'next/image';

export default async function ConditionDetails({
    params,
  }: {
    params: Promise<{ slug : string }>
  }) {
  const conditionSlug = (await params).slug
  const condition_details = PainCareWeTreatData.find( (x: PainCareWeTreatData) => x.slug === conditionSlug)
  if (!condition_details) {
    return (
      notFound()
    )
  }
  return (
    <main className='w-full flex flex-col items-center justify-center bg-white h-full'>
        {/* Landing */}
        <div className="w-full mx-auto flex flex-col items-center mt-20">
            <div className="text-sm mb-2">
            Pain Care / <span className="text-[#2563eb]">{condition_details?.title}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black text-center mb-4">{condition_details?.title}</h1>
            <p className="text-lg text-gray-600 text-center mb-8">
            {condition_details?.description}
            </p>
            <div className="flex flex-wrap gap-4 w-full self-center items-center justify-center">
            </div>
        </div>

        <section className=' max-w-[1440px] w-full h-full flex lg:flex-row flex-col overflow-hidden px-6 xl:px-[80px] xl:py-[50px] space-x-[60px]'>
            <div className='lg:w-[30%] w-full lg:order-1 order-2 bg-white flex flex-col'>
                <div className='h-fit'><BookAppointmentForm title="Request an appointment" bgColor="bg-[#FAFAFA]" textColor="text-black" /></div>
            </div>


            <div className=' w-full lg:w-[70%] lg:order-2 order-1  flex flex-col space-y-[60px] lg:mt-0 mt-6 rounded-[24px] '>
                <section className='bg-[#FAFAFA] space-y-[40px] flex flex-col w-full p-4 md:p-[40px] rounded-[24px]'>
                    {/* Detail */}
                    <div className=' flex flex-col space-y-[16px] '>
                        <h2
                        style={{
                            fontFamily : 'var(--font-reem-kufi)',
                            fontWeight : 500,
                          }}
                        className='text-[#111315] sm:text-5xl text-2xl'
                        >
                        {condition_details.title}
                        </h2>
                        <p
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] sm:text-xl text-sm'
                        >
                            {condition_details?.description}
                        </p>
                    </div>
                    {/* What are symptoms of */}
                    <div className=' flex flex-col space-y-[16px] '>
                        <h2
                        style={{
                            fontFamily : 'var(--font-reem-kufi)',
                            fontWeight : 500,
                          }}
                        className='text-[#111315] sm:text-4xl text-2xl'
                        >
                        What Are the Symptoms of {condition_details.title}?
                        </h2>
                        <p
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] sm:text-xl text-sm'
                        >
                            {condition_details?.symptoms}
                        </p>
                    </div>

                     {/* Treatment for  */}
                     <div className=' flex flex-col space-y-[16px] '>
                    <h2
                        style={{
                            fontFamily : 'var(--font-reem-kufi)',
                            fontWeight : 500,
                          }}
                        className='text-[#111315] sm:text-4xl text-2xl'
                        >
                        Causes for {condition_details.title}?
                        </h2>
                        <p
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] sm:text-xl text-sm'
                        >
                            {condition_details?.causes}
                        </p>
                    </div>
                               
                    {/* Are There Specific Risk Factors  */}
                    <div className=' flex flex-col space-y-[16px] '>
                    <h2
                        style={{
                            fontFamily : 'var(--font-reem-kufi)',
                            fontWeight : 500,
                          }}
                        className='text-[#111315] sm:text-4xl text-2xl'
                        >
                        When to Seek Care for {condition_details.title}?
                        </h2>
                        <p
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] sm:text-xl text-sm'
                        >
                            {condition_details?.whenToSeekCare}
                        </p>
                    </div>

                    {
                    condition_details?.img && 
                    <div className='rounded-2xl overflow-hidden w-full h-full aspect-video relative'><Image src={condition_details?.img} alt={condition_details?.title} fill className='object-cover' /></div>
                    }
                    
                    {/*  Diagnosing */}
                    <div className=' flex flex-col space-y-[16px] '>
                    <h2
                        style={{
                            fontFamily : 'var(--font-reem-kufi)',
                            fontWeight : 500,
                          }}
                        className='text-[#111315] sm:text-4xl text-2xl'
                        >
                        Treatment for {condition_details.title}?
                        </h2>
                        <p
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] sm:text-xl text-sm'
                        >
                            {condition_details?.treatment}
                        </p>
                    </div>
                    
    
                    <div className=' flex flex-col space-y-[16px] '>
                    <h2
                        style={{
                            fontFamily : 'var(--font-reem-kufi)',
                            fontWeight : 500,
                          }}
                        className='text-[#111315] sm:text-4xl text-2xl'
                        >
                        Why Choose Primary & Urgent Care Center for {condition_details.title}?
                        </h2>
                        <p
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] sm:text-xl text-sm'
                        >
                            {condition_details?.urgentCareAdvantage}
                        </p>
                    </div>
                </section>
            </div>
        </section>
    </main>
  )
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const condition_details = PainCareWeTreatData.find((x) => x.slug === params.slug);
  const baseUrl = 'https://wpucc.com';
  const url = `${baseUrl}/paincare/${params.slug}`;
  return {
    title: condition_details?.metaTitle || `Pain & Injury Care | Palm Beach County Urgent Care`,
    description: condition_details?.metaDescription || `Walk-in urgent care for pain and injuries in Palm Beach County. Same-day evaluation, imaging, and expert treatment. No appointment needed.`,
    keywords: condition_details?.keywords || [
      'pain care urgent care',
      'injury treatment Palm Beach',
      'walk-in pain clinic',
      'urgent care for injuries',
      'pain relief Palm Beach County'
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: condition_details?.metaTitle || `Pain & Injury Care | Palm Beach County Urgent Care`,
      description: condition_details?.metaDescription || `Walk-in urgent care for pain and injuries in Palm Beach County. Same-day evaluation, imaging, and expert treatment. No appointment needed.`,
      url,
      type: 'article',
      images: [
        {
          url: condition_details?.img ? `${baseUrl}${condition_details.img}` : `${baseUrl}/paincare.jpg`,
          width: 1200,
          height: 630,
          alt: condition_details?.title || 'Pain Care',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: condition_details?.metaTitle || `Pain & Injury Care | Palm Beach County Urgent Care`,
      description: condition_details?.metaDescription || `Walk-in urgent care for pain and injuries in Palm Beach County. Same-day evaluation, imaging, and expert treatment. No appointment needed.`,
      images: [condition_details?.img ? `${baseUrl}${condition_details.img}` : `${baseUrl}/paincare.jpg`],
    },
  };
}