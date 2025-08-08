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

  const navButtons = [
    { 
      label: "TICKETS", 
      sublabel: "(Coming Soon)",
      href: "#", 
      disabled: true,
      onClick: null
    },
    { 
      label: "LINEUP", 
      sublabel: "",
      href: "/", 
      disabled: false,
      onClick: null
    },
    { 
      label: "FESTIVAL", 
      sublabel: "MAP",
      href: "/festival-map", 
      disabled: false,
      onClick: null
    },
    { 
      label: "FAQS", 
      sublabel: "",
      href: "/faq", 
      disabled: false,
      onClick: null
    },
    { 
      label: "TRAVEL", 
      sublabel: "INFO",
      href: "/travel-info/flights", 
      disabled: false,
      onClick: null
    },
    { 
      label: "BOOK MY", 
      sublabel: "HOTEL",
      href: "/book-hotel", 
      disabled: false,
      onClick: null
    }
  ]

  const faqs = [
    {
      question: "What should I wear for Bremmiepalooza?",
      answer: (
        <div>
          <p>Bremmiepalooza will be a fun, colorful, and joyful weekend. We hope it will be filled with lots of fun bright colors, patterns, and textures. We also hope that everyone will feel 100% comfortable throughout the whole weekend (reminder: typically early evening temperatures in the mid-to-upper 70s / low 80s falling to lows in the mid-to-upper 60s / low 70s overnight).</p>
          <p>Check back soon for more specific, event-by-event inspiration!</p>
        </div>
      )
    },
    {
      question: "Where should I stay for Bremmiepalooza?",
      answer: (
        <div>
          <p>We have booked a room block at the Presidente Intercontinental Hotel in Cancun. We highly recommend staying at this hotel, as it will make it logistically easiest for you to enjoy all aspects of the Bremmiepalooza Festival. Plus, in true Bremmie form, we got them to throw in daily breakfast!</p>
          <p>Specifically, The Pregame and The Main Stage will take place at the Presidente Intercontinental Hotel. Additionally, there will be a bus departing from the Presidente Intercontinental Hotel to take festival goers to and from the Marina for The Aftershow.</p>
          <p><strong className="text-pink-600 font-bold">Please note that to secure the reduced rate for the room block, all hotel reservations must be confirmed by Monday, September 1, 2025.</strong></p>
          <p>Additionally, for anyone interested in extending their stay in Mexico, the reduced rate at the hotel will be valid (subject to availability) for the 3 days leading up to Bremmiepalooza and the 3 days following Bremmiepalooza.</p>
          <p>All additional details related to the hotel can be found on our <a href="https://www.bremmiepalooza.com/book-hotel" className="text-pink-600 hover:text-pink-800 underline font-bold">Book My Hotel</a> page.</p>
        </div>
      )
    },
    {
      question: "What are the addresses of the festival events?",
      answer: (
        <div>
          <p>The Pregame and The Main Stage will take place on the beach at the Presidente Intercontinental Hotel in Cancun, which is located at Blvd. Kukulcan Km 7.5, Punta Cancun, Zona Hotelera, 77500 Cancún, Q.R., Mexico.</p>
          <p>The Aftershow will take place offsite. A bus will be provided to transport festival-goers from the Presidente Intercontinental Hotel to the Marina, which is located at API Maritime Terminal Puerto Juarez (Supermanzana 84, Naval, 77525 Cancún, Q.R.).</p>
        </div>
      )
    },
    {
      question: "Do I need my own method of transportation?",
      answer: (
        <div>
          <p>If you are staying at the Presidente Intercontinental Cancun, the only transportation you will need to get to / from Bremmiepalooza is a ride from and to Cancun International Airport. Two Bremmiepalooza events are being held onsite at the Presidente Intercontinental Cancun, and the third is being held offsite, but there will be bus transportation provided to and from that event.</p>
          <p>The area immediately around the hotel is very walkable – to shopping as well as to the nightlife area where there are some good restaurants to try for lunch if you are interested. There are also inexpensive Ubers available to go to restaurants / etc. nearby the hotel.</p>
          <p>If you want to rent a car, there is free onsite parking available at the Presidente Intercontinental Hotel.</p>
          <p>See <a href="https://www.bremmiepalooza.com/travel-info/ground-transportation" className="text-pink-600 hover:text-pink-800 underline font-bold">Travel Info - Ground Transportation</a> for more details.</p>
        </div>
      )
    },
    {
      question: "Do I need a passport?",
      answer: "Yes! All guests traveling to Mexico need a valid passport. Mexico requires that passports are valid for the duration of your stay in Mexico, but it is safest to ensure it is valid for at least 6 months beyond your travel date in case your airline requires that (you can check with your airline to be sure). No visa is required for U.S. or UK citizens staying less than 180 days."
    },
    {
      question: "When do tickets to Bremmiepalooza go on sale?",
      answer: "Keep an eye on your email for updates regarding booking your tickets."
    },
    {
      question: "Who is invited to Bremmiepalooza?",
      answer: "We want Bremmiepalooza to be a weekend to remember for you and your loved ones. That means everyone gets a +1 and kids are invited! When tickets are released, please feel free to reserve tickets for you, your significant other and / or bestie, and / or your kiddos – whatever will optimize your Bremmiepalooza experience!"
    },
    {
      question: "Is Bremmiepalooza fully outdoor?",
      answer: "Yes! The Pregame, The Main Stage, and the Aftershow will all take place outdoor. The Pregame and the Main Stage will take place on the beach, so be sure to plan your shoes (or lack of shoes) accordingly."
    },
    {
      question: "Where do I need to be and when?",
      answer: "A detailed schedule will be released closer to Bremmiepalooza. Generally speaking, you can expect festivities to start around 5PM Cancun Time on Friday, January 16th and run through the evening of Sunday, Jan 18th, with The Main Stage taking place on the evening of Saturday, January 17th."
    },
    {
      question: "What if I want to stay at The Main Stage until 4AM but my kids don't?",
      answer: "We are in the process of working with our Planner and the Hotel to arrange for babysitting services and / or recommendations. We will keep you posted as we learn more!"
    },
    {
      question: "Is there anything to do in Cancun during my downtime?",
      answer: (
        <p>There is a lot to do! You can start off each morning with a complimentary breakfast at the Caribeño Restaurant before lounging by the pool / beach, going shopping in town (admittedly most of the 'cool shopping locations' that ChatGPT found seem to sell junky souvenirs – haven't yet found any cool artisanal shops 😞), or potentially embarking on some excursions (although we recommend you save a good portion of your energy for Bremmiepalooza events – and especially The Main Stage). See <a href="https://www.bremmiepalooza.com/travel-info/activities" className="text-pink-600 hover:text-pink-800 underline font-bold">Travel Info – Activities</a> for more specific recommendations!</p>
      )
    },
    {
      question: "Where is Bremmie registered?",
      answer: "Your presence at Bremmiepalooza is the greatest gift we could ask for! We're so excited to celebrate with you, and we don't want you to worry about bringing anything other than your dancing shoes and positive energy <3"
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
          <div className="flex justify-center">
            <Link href="/" className="w-full max-w-sm md:max-w-md">
              <Image
                src="/bremmiepalooza-logo-for-cta.png"
                alt="Bremmiepalooza 2026"
                width={400}
                height={200}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                className="mx-auto cursor-pointer hover:opacity-90 transition-opacity"
                priority
              />
            </Link>
          </div>
        </div>

        {/* Navigation Banner */}
        <div 
          className="w-full z-20"
          style={{
            position: 'absolute',
            top: isMobile ? '120px' : '150px',
            left: '0',
            right: '0'
          }}
        >
          <div 
            className="bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300" 
            style={{ height: isMobile ? '120px' : '160px' }}
          >
            <div className="flex justify-center items-center gap-4 md:gap-8 px-2 h-full relative">
              {navButtons.map((button, index) => {
                // For internal page links
                if (button.href && button.href.startsWith('/') && !button.href.startsWith('/#')) {
                  return (
                    <Link key={index} href={button.href}>
                      <div className={`
                        relative flex flex-col items-center justify-center transition-all duration-200 transform cursor-pointer
                        ${button.disabled 
                          ? 'opacity-50 cursor-not-allowed' 
                          : 'hover:scale-110 active:scale-95'
                        }
                      `}
                      style={{
                        minWidth: isMobile ? '50px' : '120px',
                        minHeight: isMobile ? '70px' : '100px',
                        marginTop: '-10px'
                      }}>
                        <div className="mb-1">
                          {button.label === 'LINEUP' && (
                            <Image 
                              src="/Lineup.png" 
                              alt="Lineup Icon" 
                              width={isMobile ? 45 : 80} 
                              height={isMobile ? 45 : 80} 
                              className="md:w-24 md:h-24"
                              style={{ marginTop: '-2px' }}
                            />
                          )}
                          {button.label === 'TICKETS' && (
                            <Image 
                              src="/tickets_icon.PNG" 
                              alt="Tickets Icon" 
                              width={isMobile ? 45 : 80} 
                              height={isMobile ? 45 : 80} 
                              className="md:w-24 md:h-24"
                            />
                          )}
                          {button.label === 'FESTIVAL' && (
                            <Image 
                              src="/festival_map_icon.PNG" 
                              alt="Festival Map Icon" 
                              width={isMobile ? 45 : 80} 
                              height={isMobile ? 45 : 80} 
                              className="md:w-24 md:h-24"
                            />
                          )}
                          {button.label === 'FAQS' && (
                            <Image 
                              src="/faqs_icon.PNG" 
                              alt="FAQs Icon" 
                              width={isMobile ? 45 : 80} 
                              height={isMobile ? 45 : 80} 
                              className="md:w-24 md:h-24"
                            />
                          )}
                          {button.label === 'TRAVEL' && (
                            <Image 
                              src="/travel_info.PNG" 
                              alt="Travel Info Icon" 
                              width={isMobile ? 45 : 80} 
                              height={isMobile ? 45 : 80} 
                              className="md:w-24 md:h-24"
                            />
                          )}
                          {button.label === 'BOOK MY' && (
                            <Image 
                              src="/book_my_hotel.PNG" 
                              alt="Book My Hotel Icon" 
                              width={isMobile ? 45 : 80} 
                              height={isMobile ? 45 : 80} 
                              className="md:w-24 md:h-24"
                            />
                          )}
                        </div>
                        
                        <div className="text-center relative">
                          <div 
                            className={`${isMobile ? 'text-xs' : 'text-lg'} font-black uppercase tracking-wider text-black leading-tight`}
                            style={{
                              textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                              fontFamily: "'ZollaProOutlined', 'Impact', 'Arial Black', sans-serif"
                            }}
                          >
                            {button.label}
                          </div>
                          {button.sublabel ? (
                            <div 
                              className={`${isMobile ? 'text-xs' : 'text-base'} font-bold uppercase text-black leading-tight relative`}
                              style={{
                                textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                                fontFamily: "'ZollaProOutlined', 'Impact', 'Arial Black', sans-serif"
                              }}
                            >
                              {button.sublabel}
                            </div>
                          ) : (button.label === 'LINEUP' || button.label === 'FAQS') ? (
                            <div 
                              className={`${isMobile ? 'text-xs' : 'text-base'} font-bold uppercase text-black leading-tight invisible`}
                              style={{
                                textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                                fontFamily: "'ZollaProOutlined', 'Impact', 'Arial Black', sans-serif"
                              }}
                            >
                              &nbsp;
                            </div>
                          ) : null}
                          {button.label === 'FAQS' && (
                            <div 
                              className="absolute"
                              style={{
                                left: '50%',
                                bottom: '-8px',
                                transform: 'translateX(-50%)',
                                width: '60%',
                                height: '3px',
                                backgroundColor: '#d81b8c',
                                borderRadius: '2px'
                              }}
                            />
                          )}
                        </div>
                      </div>
                    </Link>
                  )
                }
                
                // For disabled buttons
                return (
                  <div
                    key={index}
                    className={`
                      relative flex flex-col items-center justify-center transition-all duration-200 transform
                      ${button.disabled 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:scale-110 active:scale-95 cursor-pointer'
                      }
                    `}
                    style={{
                      minWidth: isMobile ? '50px' : '120px',
                      minHeight: isMobile ? '70px' : '100px',
                      marginTop: '-10px'
                    }}
                  >
                    <div className="mb-1">
                      {button.label === 'LINEUP' && (
                        <Image 
                          src="/Lineup.png" 
                          alt="Lineup Icon" 
                          width={isMobile ? 45 : 80} 
                          height={isMobile ? 45 : 80} 
                          className="md:w-24 md:h-24"
                          style={{ marginTop: '-2px' }}
                        />
                      )}
                      {button.label === 'TICKETS' && (
                        <Image 
                          src="/tickets_icon.PNG" 
                          alt="Tickets Icon" 
                          width={isMobile ? 45 : 80} 
                          height={isMobile ? 45 : 80} 
                          className="md:w-24 md:h-24"
                        />
                      )}
                      {button.label === 'FESTIVAL' && (
                        <Image 
                          src="/festival_map_icon.PNG" 
                          alt="Festival Map Icon" 
                          width={isMobile ? 45 : 80} 
                          height={isMobile ? 45 : 80} 
                          className="md:w-24 md:h-24"
                        />
                      )}
                      {button.label === 'FAQS' && (
                        <Image 
                          src="/faqs_icon.PNG" 
                          alt="FAQs Icon" 
                          width={isMobile ? 45 : 80} 
                          height={isMobile ? 45 : 80} 
                          className="md:w-24 md:h-24"
                        />
                      )}
                      {button.label === 'TRAVEL' && (
                        <Image 
                          src="/travel_info.PNG" 
                          alt="Travel Info Icon" 
                          width={isMobile ? 45 : 80} 
                          height={isMobile ? 45 : 80} 
                          className="md:w-24 md:h-24"
                        />
                      )}
                      {button.label === 'BOOK MY' && (
                        <Image 
                          src="/book_my_hotel.PNG" 
                          alt="Book My Hotel Icon" 
                          width={isMobile ? 45 : 80} 
                          height={isMobile ? 45 : 80} 
                          className="md:w-24 md:h-24"
                        />
                      )}
                    </div>
                    
                    <div className="text-center relative">
                      <div 
                        className={`${isMobile ? 'text-xs' : 'text-lg'} font-black uppercase tracking-wider text-black leading-tight`}
                        style={{
                          textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                          fontFamily: "'ZollaProOutlined', 'Impact', 'Arial Black', sans-serif"
                        }}
                      >
                        {button.label}
                      </div>
                      {button.sublabel ? (
                        <div 
                          className={`${isMobile ? 'text-xs' : 'text-base'} font-bold uppercase text-black leading-tight`}
                          style={{
                            textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                            fontFamily: "'ZollaProOutlined', 'Impact', 'Arial Black', sans-serif"
                          }}
                        >
                          {button.sublabel}
                        </div>
                      ) : (button.label === 'LINEUP' || button.label === 'FAQS') ? (
                        <div 
                          className={`${isMobile ? 'text-xs' : 'text-base'} font-bold uppercase text-black leading-tight invisible`}
                          style={{
                            textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                            fontFamily: "'ZollaProOutlined', 'Impact', 'Arial Black', sans-serif"
                          }}
                        >
                          &nbsp;
                        </div>
                      ) : null}
                      {button.label === 'FAQS' && (
                        <div 
                          className="absolute"
                          style={{
                            left: '50%',
                            bottom: '-8px',
                            transform: 'translateX(-50%)',
                            width: '60%',
                            height: '3px',
                            backgroundColor: '#d81b8c',
                            borderRadius: '2px'
                          }}
                        />
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Content with margin for absolute positioned banner */}
        <div style={{ marginTop: isMobile ? '120px' : '160px' }}>

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
                        className="text-lg md:text-xl font-bold text-white pr-4"
                        style={{
                          fontFamily: "Arial, sans-serif",
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
                        <div className="text-black leading-relaxed text-base md:text-lg faq-content" style={{fontFamily: 'Arial, sans-serif'}}>
                          {typeof faq.answer === 'string' ? (
                            <p>{faq.answer}</p>
                          ) : (
                            faq.answer
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Questions Section */}
              <section className="mt-12">
                <h2 
                  className="text-3xl md:text-4xl font-black text-center mb-8 uppercase tracking-wider" 
                  style={{
                    fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                    textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                    color: '#d81b8c'
                  }}
                >
                  Questions?
                </h2>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20 text-center">
                  <p className="text-black mb-6" style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontSize: '18px'}}>
                    Still have questions? We're here to help make your festival experience amazing!
                  </p>
                  <p className="text-black mb-6 font-bold" style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontSize: '18px', color: '#d81b8c'}}>
                    Please shoot us a message at info@bremmiepalooza.com so we can help!
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full px-8 py-3 text-white font-bold transition-all duration-200 border-2 border-white/30"
                    style={{fontFamily: 'Arial, sans-serif', fontSize: '18px'}}
                  >
                    Email Us
                  </Link>
                </div>
              </section>

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

        /* FAQ paragraph spacing */
        .faq-content p {
          margin-bottom: 1rem;
        }
        
        .faq-content p:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </main>
  )
}
