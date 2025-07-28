"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useIsMobile } from "@/hooks/use-mobile"

export default function FAQsPage() {
  const [mounted, setMounted] = useState(false)
  const [openFAQ, setOpenFAQ] = useState(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  if (!mounted) return null

  const faqs = [
    {
      question: "What is Bremmiepalooza?",
      answer: "Bremmiepalooza is our wedding celebration with a music festival twist! We're bringing together our favorite people for a weekend of love, music, and unforgettable memories in Cancun, Mexico."
    },
    {
      question: "When and where is the festival?",
      answer: "The festival runs from January 16-18, 2026, at the InterContinental Presidente Cancun. The main ceremony will be on [Day], with festivities continuing throughout the weekend."
    },
    {
      question: "What should I wear?",
      answer: "Think festival chic meets tropical paradise! Comfortable, breathable clothing in bright colors. Don't forget sunscreen, sunglasses, and comfortable shoes for dancing. We'll have more detailed packing lists in your welcome bags."
    },
    {
      question: "Are kids welcome?",
      answer: "We love your little ones, but we've planned this as an adults-only celebration so everyone can party late into the night! We recommend enjoying this as a kid-free vacation."
    },
    {
      question: "What's included in my stay?",
      answer: "Your hotel package includes accommodations, all meals, drinks, and access to all festival events. Transportation to and from the airport is also included with your booking."
    },
    {
      question: "Will there be vegetarian/vegan options?",
      answer: "Absolutely! The resort offers extensive vegetarian and vegan options. Please let us know about any dietary restrictions when you RSVP so we can ensure special arrangements if needed."
    },
    {
      question: "What activities are planned?",
      answer: "Beyond the wedding ceremony, we have pool parties, beach activities, live music, dancing, group excursions, and surprise performances throughout the weekend. Check the festival schedule for details!"
    },
    {
      question: "Do I need a passport?",
      answer: "Yes! All guests traveling to Mexico need a valid passport. Make sure it's valid for at least 6 months beyond your travel date. No visa is required for US citizens staying less than 180 days."
    },
    {
      question: "What about gratuities?",
      answer: "Tips are included in your package for most services. We'll provide specific guidance about additional tipping in your welcome materials."
    },
    {
      question: "Can I bring a plus-one?",
      answer: "If your invitation includes a plus-one, absolutely! If not, we're keeping the guest list intimate due to venue capacity. Reach out to us if you have questions about your invitation."
    },
    {
      question: "What if I have mobility concerns?",
      answer: "The resort is fully accessible with elevators, ramps, and accessible rooms available. Please let us know about any specific needs when booking so we can ensure everything is arranged."
    },
    {
      question: "Weather concerns?",
      answer: "January is one of the best times to visit Cancun! Average temperatures are in the 80s with low humidity. We have indoor backup plans for all events just in case."
    },
    {
      question: "How do I get from the airport?",
      answer: "Airport transportation is included in your package! Look for our festival shuttle service when you arrive. Details will be sent with your booking confirmation."
    },
    {
      question: "Can I extend my stay?",
      answer: "Yes! Contact the resort directly to add extra nights at a discounted rate. We recommend booking early as January is peak season in Cancun."
    },
    {
      question: "Gift registry?",
      answer: "Your presence is our present! If you'd like to contribute to our honeymoon fund or house fund, we'll share those details closer to the wedding date."
    }
  ]

  return (
    <main className="relative min-h-screen">
      {/* Background gradient */}
      <div
        className="fixed inset-0 animate-gradient-shift"
        style={{
          background: "linear-gradient(135deg, #ff0099, #ff6600, #ffcc00, #22cc88, #00ccff, #cc88ff, #ff0099)",
          backgroundSize: "600% 600%",
        }}
      />

      {/* Content container */}
      <div className="relative z-10">
        {/* Header */}
        <div className="p-4 md:p-6 lg:p-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <div className="w-32 md:w-48">
                <Image
                  src="/bremmiepalooza-logo-for-cta.png"
                  alt="Bremmiepalooza 2026"
                  width={200}
                  height={100}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </Link>
            <Link 
              href="/"
              className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white font-bold hover:bg-white/30 transition-all duration-200"
            >
              ← Back to Festival
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <h1 
              className="text-4xl md:text-6xl font-black text-center mb-12 uppercase tracking-wider" 
              style={{
                fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                color: '#d81b8c'
              }}
            >
              FESTIVAL FAQs
            </h1>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border-2 border-white/20">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left hover:bg-white/5 transition-all duration-200 flex justify-between items-center"
                  >
                    <h3 
                      className="text-lg md:text-xl font-black text-white pr-4"
                      style={{
                        fontFamily: "'ZollaPro', 'Arial Black', sans-serif",
                        textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                      }}
                    >
                      {faq.question}
                    </h3>
                    <div 
                      className={`text-2xl text-white transition-transform duration-200 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`}
                    >
                      ▼
                    </div>
                  </button>
                  
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-white/90 leading-relaxed text-base md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-12 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-8 text-center border-2 border-white/20">
              <h2 
                className="text-2xl md:text-3xl font-black text-white mb-4"
                style={{
                  fontFamily: "'ZollaPro', 'Arial Black', sans-serif",
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                }}
              >
                Still Have Questions?
              </h2>
              <p className="text-white/90 text-lg mb-6">
                We're here to help make your festival experience amazing!
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a 
                  href="mailto:hello@bremmiepalooza.com"
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full px-8 py-3 text-white font-bold transition-all duration-200 border-2 border-white/30"
                >
                  📧 Email Us
                </a>
                <a 
                  href="tel:+1234567890"
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full px-8 py-3 text-white font-bold transition-all duration-200 border-2 border-white/30"
                >
                  📞 Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx global>{`
        @font-face {
          font-family: 'ZollaPro';
          src: url('/fonts/Zolla%20Pro.woff') format('woff');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: 'ZollaProOutlined';
          src: url('/fonts/Zolla-Pro-Outlined.woff') format('woff');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient-shift {
          background-size: 600% 600%;
          animation: gradient-shift 10s ease infinite;
        }
      `}</style>
    </main>
  )
}
