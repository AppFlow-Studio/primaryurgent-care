"use client"
import { CheckCircle, Mail, Users, Share2, Instagram, Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { PRIMARY_PHONE_HREF, PRIMARY_PHONE_DISPLAY } from "@/lib/constants/phone"

// Google Ads conversion label for "PUC | Lake Worth | Accident Form Lead"
// (conversion type ID 7731281883). This is the page-load event snippet Google Ads
// generates for that action under "Set up with a Google tag".
const ADS_FORM_LEAD_SEND_TO = "AW-17373488028/yNapCNv_x-YcEJzHqdxA"

export default function ThankYouPage() {
    // Fire the Google Ads conversion on load of this confirmation page.
    //
    // This page previously carried a comment saying GTM fired the conversion when the
    // page path contained /thank-you. That was not true in practice: a live check on
    // 2026-09-05 found only a gtag.config ping on this URL and no conversion event, and
    // the conversion action had recorded zero conversions since it was created on
    // 2026-08-23. The action is configured in Google Ads as a "Manual event" under
    // "Set up with a Google tag", which requires this snippet on the page.
    //
    // Consent is handled upstream by Google Consent Mode, which the site already
    // configures, so gtag decides for itself whether the hit may be sent.
    const hasFiredConversion = useRef(false)

    useEffect(() => {
        if (hasFiredConversion.current) return
        hasFiredConversion.current = true

        const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
        if (typeof gtag === "function") {
            gtag("event", "conversion", { send_to: ADS_FORM_LEAD_SEND_TO })
        }
    }, [])

    return (
        <div className="lg:py-[80px] py-[40px] w-full bg-gradient-to-br from-red-50 to-slate-50">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Text Content */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 mb-6">
                                <CheckCircle className="h-12 w-12 text-[#D52128]" />
                                <div>
                                    <h1 className="text-3xl md:text-5xl font-bold text-[#1B1819]">Thank You!</h1>
                                    <p className="text-lg text-gray-600">Appointment Request Received</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold text-[#1B1819] mb-4">
                                        Thank you for choosing Primary & Urgent Care Centers
                                    </h2>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        We appreciate your trust in our care and expertise. Your appointment request has been successfully
                                        submitted and our team is reviewing your information.
                                    </p>
                                </div>

                                <Card className="border-l-[#D52128] bg-[#D52128]/10">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-3">
                                            <Mail className="h-12 w-12 text-[#D52128] mt-1" />
                                            <div>
                                                <h3 className="font-semibold text-[#1B1819] mb-2">What's Next?</h3>
                                                <p className="text-gray-700">
                                                    Please look out for a confirmation email in your inbox with your appointment details. Our care team
                                                    will contact you soon to confirm your appointment time and answer any questions.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-l-[#1B1819] bg-[#1B1819]/10">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-3">
                                            <Users className="h-12 w-12 text-[#1B1819] mt-1" />
                                            <div>
                                                <h3 className="font-semibold text-[#1B1819] mb-2">Spread the Word</h3>
                                                <p className="text-gray-700 mb-4">
                                                    If you're satisfied with our service, please refer us to your friends and family. Your
                                                    referrals help us continue providing excellent urgent care and primary care to our community.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Quick Access Section */}
                                <Card className="border-l-[#D52128] bg-gradient-to-r from-[#D52128]/5 to-[#1B1819]/5">
                                    <CardContent className="p-6">
                                        <h3 className="font-semibold text-[#1B1819] mb-4">Need Care Right Away?</h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <Phone className="h-5 w-5 text-[#D52128]" />
                                                <span className="text-gray-700">Call us at <a href={PRIMARY_PHONE_HREF} className="text-[#D52128] font-semibold hover:underline">{PRIMARY_PHONE_DISPLAY}
                                                </a></span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <MapPin className="h-5 w-5 text-[#D52128]" />
                                                <span className="text-gray-700">Walk-ins welcome at all locations</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Clock className="h-5 w-5 text-[#D52128]" />
                                                <span className="text-gray-700">Open Monday - Saturday, 9am - 6pm</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-[#1B1819]">Stay Connected</h3>
                                    <p className="text-gray-700">
                                        Follow us on social media for health tips, updates, and community events.
                                    </p>
                                    <div className="flex gap-4">
                                        <Link
                                            href="#"
                                            className="flex items-center justify-center w-12 h-12 bg-[#D52128] text-white rounded-full hover:bg-[#1B1819] transition-colors"
                                            aria-label="Facebook"
                                        >
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="flex items-center justify-center w-12 h-12 bg-[#D52128] text-white rounded-full hover:bg-[#1B1819] transition-colors"
                                            aria-label="Instagram"
                                        >
                                            <Instagram className="h-6 w-6" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-[#1B1819]/20">
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button asChild className="bg-[#D52128] hover:bg-[#1B1819]">
                                            <Link href="/">Return to Homepage</Link>
                                        </Button>
                                        <Button asChild variant="outline" className="text-[#1B1819] border-[#1B1819]/30 hover:bg-[#1B1819]/10">
                                            <Link href="/locations">View Our Locations</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Lottie Animation */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="w-full hidden sm:block">
                                <DotLottieReact src="/DoctorConfirm.lottie" autoplay loop className="w-full h-full" width={600} height={600} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
