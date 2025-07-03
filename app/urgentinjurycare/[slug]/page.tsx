import React from 'react'
import { notFound } from 'next/navigation';
import { conditions, ConditionInfoProp } from '@/components/conditions';
import BookAppointmentForm from '@/components/ui/BookAppointmentForm';
import Image from 'next/image';

export default async function ConditionDetails({
    params,
  }: {
    params: Promise<{ slug : string }>
  }) {
  const conditionSlug = (await params).slug
  const condition_details = conditions.find( (x: ConditionInfoProp) => x.slug === conditionSlug)
  if (!condition_details) {
    return (
      notFound()
    )
  }
  return (
    <main className='w-full flex flex-col items-center justify-center bg-white h-full'>
        {/* Landing */}
        {/* <section className="w-full h-full flex flex-col relative overflow-hidden" >
        <div 
        style={{
        background: 'white',
        filter: 'blur(30px)'
        }}
        className="w-full h-[120px] absolute top-0 z-[1] border border-red-500"
        />
        <Image src={ConditionDetialsLanding} className=" max-h-[945px] h-full absolute top-0 object-cover object-top pt-16 self-end w-full lg:pr-0 lg:pl-[100px]" alt="Doctor Diagnosing a Old Patient"/>

        <div className="z-[1] flex flex-col w-full h-full  text-left relative md:pt-20 lg:pt-40">
            <div className="lg:w-[60%] w-full h-full absolute left-0 top-0"
            style={{
            background : 'linear-gradient(90deg, #5FBBEC 20.16%, rgba(95, 187, 236, 0.26) 90%,  rgba(255,0,0,0) 100%)',
            }}
            />

<div className=' px-6 xl:px-[80px] z-[2]'>
            <div className=' mt-[220px] flex flex-row space-x-[4px] rounded-[62px] w-fit xl:w-[20%] items-center justify-center px-[20px] py-[10px]'
            style={{
                background : 'rgba(255, 255, 255, 0.50)'
            }}
            >
                <h1
                style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontWeight: 400,
                }}
                className="text-[#022968]"
                >
                    Condition
                </h1>
    
                <h1
                style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontWeight: 400,
                }}
                className="text-[#022968]"
                >
                    /
                </h1>
    
                <h1
                style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontWeight: 400,
                }}
                className="text-[#2358AC]"
                >
                    Condition Details
                </h1>
            </div>
        </div>
        <div className="px-6 xl:px-[80px] z-[2] flex flex-row space-x-[20px] items-center justify-start mt-[12px] w-[85%] lg:w-[62%] xl:w-[55%]">
            <h1
              style={{
                  fontFamily: "var(--font-reem-kufi)",
                  fontWeight: 400,
              }}
              className="text-[#022968] text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            >
                {condition_details.title}
            </h1>
        </div>

        <div className="z-[2] px-6 xl:px-[80px] mt-[24px]  lg:w-[55%] pb-8">
            <p
            style={{
                fontWeight: 400,
            }}
            className="text-white text-shadow-sm sm:text-lg text-sm"
            >
                {condition_details.body}
            </p>
        </div>
        </div>
        </section> */}
        <div className="w-full mx-auto flex flex-col items-center mt-20">
            <div className="text-sm mb-2">
            Urgent Injury Care / <span className="text-[#2563eb]">{condition_details?.title}</span>
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
                    
                    {/* Treatment for  */}
                    <div className=' flex flex-col space-y-[16px] '>
                    <h2
                        style={{
                            fontFamily : 'var(--font-reem-kufi)',
                            fontWeight : 500,
                          }}
                        className='text-[#111315] sm:text-4xl text-2xl'
                        >
                        Prevention for {condition_details.title}?
                        </h2>
                        <p
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] sm:text-xl text-sm'
                        >
                            {condition_details?.prevention}
                        </p>
                    </div>
    
                    {/* Does ... Cause Pain? */}
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
  const condition_details = conditions.find((x) => x.slug === params.slug);
  const baseUrl = 'https://wpucc.com';
  const url = `${baseUrl}/urgentinjurycare/${params.slug}`;
  return {
    title: condition_details?.metaTitle || `Urgent Injury Care | Palm Beach County Urgent Care`,
    description: condition_details?.metaDescription || `Walk-in urgent care for injuries in Palm Beach County. Same-day evaluation, imaging, and expert treatment. No appointment needed.`,
    keywords: condition_details?.keywords || [
      'injury care urgent care',
      'walk-in injury clinic',
      'fracture care urgent care',
      'sprain care urgent care',
      'laceration care urgent care',
      'sports injury urgent care',
      'orthopedic injury clinic',
      'immediate injury care Palm Beach',
      'urgent care for broken bone',
      'urgent care for stitches',
      'walk-in fracture clinic',
      'urgent care for burns',
      'STAT X-ray MRI CT urgent care'
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: condition_details?.metaTitle || `Urgent Injury Care | Palm Beach County Urgent Care`,
      description: condition_details?.metaDescription || `Walk-in urgent care for injuries in Palm Beach County. Same-day evaluation, imaging, and expert treatment. No appointment needed.`,
      url,
      type: 'article',
      images: [
        {
          url: condition_details?.img ? `${baseUrl}${condition_details.img}` : `${baseUrl}/urgentcarelanding.jpg`,
          width: 1200,
          height: 630,
          alt: condition_details?.title || 'Urgent Injury Care',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: condition_details?.metaTitle || `Urgent Injury Care | Palm Beach County Urgent Care`,
      description: condition_details?.metaDescription || `Walk-in urgent care for injuries in Palm Beach County. Same-day evaluation, imaging, and expert treatment. No appointment needed.`,
      images: [condition_details?.img ? `${baseUrl}${condition_details.img}` : `${baseUrl}/urgentcarelanding.jpg`],
    },
  };
}