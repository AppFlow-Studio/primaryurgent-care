import { pricingData } from '@/app/pricing/page'
import BookAppointmentForm from '@/components/ui/BookAppointmentForm'
import { notFound } from 'next/navigation'
import Image from 'next/image'

const PricingPage = async ({params}: {params: Promise<{slug: string}>}) => {
    const slug = (await params).slug
    const pricing = pricingData.find((item) => item.slug === slug)
    if (!pricing) {
        return notFound()
    }
    return (
        <main className='w-full flex flex-col items-center justify-center bg-white h-full'>
        {/* Landing */}
        <div className="w-full mx-auto flex flex-col items-center mt-20">
            <div className="text-sm mb-2">
            Pricing / <span className="text-[#2563eb]">{pricing?.title}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black text-center mb-4">{pricing?.title}</h1>
            <p className="text-lg text-gray-600 text-center mb-8">
            {pricing?.description}
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
                        {pricing.title}
                        </h2>
                        <p
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] sm:text-xl text-sm'
                        >
                            {pricing?.description}
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
                       Symptoms addressed by {pricing.title}
                        </h2>
                        <p
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] sm:text-xl text-sm'
                        >
                            {pricing?.symptomsTreated}
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
                        Conditions addressed by {pricing.title}
                        </h2>
                        <p
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] sm:text-xl text-sm'
                        >
                            {pricing?.conditionsAddressed}
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
                        When to seek a {pricing.title}?
                        </h2>
                        <p
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] sm:text-xl text-sm'
                        >
                            {pricing?.urgentCareAdvantage}
                        </p>
                    </div>

                    {
                        pricing?.img && 
                        <div className='rounded-2xl overflow-hidden w-full h-full aspect-video relative'><Image src={pricing?.img} alt={pricing?.title} fill className='object-cover' /></div>
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
                        Treatment process for {pricing.title}?
                        </h2>
                        <p
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] sm:text-xl text-sm'
                        >
                            {pricing?.treatmentProcess}
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
                        Why choose Primary & Urgent Care Center for {pricing.title}?
                        </h2>
                        <p
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] sm:text-xl text-sm'
                        >
                            {pricing?.urgentCareAdvantage}
                        </p>
                    </div>
                </section>
            </div>
        </section>
    </main>
    )
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const pricing = pricingData.find((x) => x.slug === params.slug);
  const baseUrl = 'https://wpucc.com';
  const url = `${baseUrl}/pricing/${params.slug}`;
  return {
    title: pricing?.metaTitle || 'Urgent Care Pricing & Self-Pay Cost | Affordable Walk-In Clinic Palm Beach County',
    description: pricing?.metaDescription || 'See transparent urgent care pricing for office visits, imaging, physicals, and more. $69.99 self-pay visit. No surprise bills. Most insurance accepted. Serving Royal Palm Beach, Lake Worth, Palm Springs, and Lantana.',
    keywords: pricing?.keywords || [
      'urgent care pricing',
      'urgent care cost',
      'walk-in clinic prices',
      'self-pay urgent care',
      'Palm Beach County urgent care',
      'affordable urgent care',
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pricing?.metaTitle || 'Urgent Care Pricing & Self-Pay Cost | Affordable Walk-In Clinic Palm Beach County',
      description: pricing?.metaDescription || 'See transparent urgent care pricing for office visits, imaging, physicals, and more. $69.99 self-pay visit. No surprise bills. Most insurance accepted. Serving Royal Palm Beach, Lake Worth, Palm Springs, and Lantana.',
      url,
      type: 'article',
      images: [
        {
          url: pricing?.img ? `${baseUrl}${pricing.img}` : `${baseUrl}/insurance.jpg`,
          width: 1200,
          height: 630,
          alt: pricing?.title || 'Urgent Care Pricing',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pricing?.metaTitle || 'Urgent Care Pricing & Self-Pay Cost | Affordable Walk-In Clinic Palm Beach County',
      description: pricing?.metaDescription || 'See transparent urgent care pricing for office visits, imaging, physicals, and more. $69.99 self-pay visit. No surprise bills. Most insurance accepted. Serving Royal Palm Beach, Lake Worth, Palm Springs, and Lantana.',
      images: [pricing?.img ? `${baseUrl}${pricing.img}` : `${baseUrl}/insurance.jpg`],
    },
  };
}

export default PricingPage;