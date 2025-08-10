"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useIsMobile } from "@/hooks/use-mobile"

export default function PackingPage() {
  const [mounted, setMounted] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    setMounted(true)
  }, [])

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

  const travelTabs = [
    { id: 'flights', label: 'Flights', icon: '✈️', href: '/travel-info/flights', active: false },
    { id: 'ground-transportation', label: 'Ground Transportation', icon: '🚗', href: '/travel-info/ground-transportation', active: false },
    { id: 'documents', label: 'Documents', icon: '📄', href: '/travel-info/documents', active: false },
    { id: 'packing', label: 'Packing', icon: '🧳', href: '/travel-info/packing', active: true },
    { id: 'activities', label: 'Activities', icon: '🏖️', href: '/travel-info/activities', active: false }
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
                          {button.label === 'TRAVEL' && (
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
            <div className="max-w-5xl mx-auto">
              <h1 
                className="text-4xl md:text-6xl font-black text-center mb-12 uppercase tracking-wider" 
                style={{
                  fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                  textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                  color: '#d81b8c'
                }}
              >
                TRAVEL INFO
              </h1>

              {/* Travel Sub-Navigation */}
              <div className="flex flex-wrap justify-center gap-2 mb-8 mt-12">
                {travelTabs.map((tab) => (
                  <Link key={tab.id} href={tab.href}>
                    <div className="relative">
                      <button
                        className={`
                          px-4 py-2 rounded-full font-bold transition-all duration-200 flex items-center gap-2
                          ${tab.active 
                            ? 'bg-white text-purple-600 shadow-lg' 
                            : 'bg-white/20 text-white hover:bg-white/30'
                          }
                        `}
                        style={{
                          fontFamily: "Arial, sans-serif"
                        }}
                      >
                        <span>{tab.icon}</span>
                        <span className={isMobile ? 'text-sm' : 'text-base'}>{tab.label}</span>
                      </button>
                      {tab.active && (
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
                  </Link>
                ))}
              </div>

              {/* Essentials for the Cancun Climate Section */}
              <section className="mb-12">
                <h2 
                  className="text-3xl md:text-4xl font-black text-center mb-8 uppercase tracking-wider flex items-center justify-center gap-3" 
                  style={{
                    fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                    textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                    color: '#d81b8c'
                  }}
                >
                  <span className="text-4xl md:text-5xl">🌞</span>
                  Essentials for the Cancun Climate
                </h2>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
                  <div className="space-y-6 text-black" style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontSize: '18px'}}>
                    <ul className="space-y-3 custom-bullets">
                      <li>🧴 <strong>Sunscreen</strong></li>
                      <li>🕶️ <strong>Sunglasses</strong></li>
                      <li>👒 <strong>Sun hat / baseball cap</strong></li>
                      <li>🩴 <strong>Flip flops / sandals</strong></li>
                      <li>💧 <strong>Refillable water bottle</strong></li>
                      <li>🐜 <strong>Bug spray</strong></li>
                      <li>🌴 <strong>After-sun lotion</strong></li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Beach & Pool Must-Haves Section */}
              <section className="mb-12">
                <h2 
                  className="text-3xl md:text-4xl font-black text-center mb-8 uppercase tracking-wider flex items-center justify-center gap-3" 
                  style={{
                    fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                    textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                    color: '#d81b8c'
                  }}
                >
                  <span className="text-4xl md:text-5xl">🏖️</span>
                  Beach & Pool Must-Haves
                </h2>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
                  <div className="space-y-6 text-black" style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontSize: '18px'}}>
                    <ul className="space-y-3 custom-bullets">
                      <li>👙 <strong>Swimsuits</strong> (bring 2+ so you always have a dry one)</li>
                      <li>🧼 <strong>Wet bag</strong> (for storing damp swimsuits)</li>
                      <li>🩳 <strong>Fun cover-ups / sarongs / oversized shirts</strong></li>
                      <li>🏖️ <strong>Beach tote</strong></li>

                    </ul>
                  </div>
                </div>
              </section>

              {/* Wedding & Party Extras Section */}
              <section className="mb-12">
                <h2 
                  className="text-3xl md:text-4xl font-black text-center mb-8 uppercase tracking-wider flex items-center justify-center gap-3" 
                  style={{
                    fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                    textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                    color: '#d81b8c'
                  }}
                >
                  <span className="text-4xl md:text-5xl">🪩</span>
                  Wedding & Party Extras
                </h2>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
                  <div className="space-y-6 text-black" style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontSize: '18px'}}>
                    <ul className="space-y-3 custom-bullets">
                      <li>💃 <strong>Outfits & jewelry</strong> (see <Link href="/faq" style={{color: '#d81b8c', fontWeight: 'normal', textDecoration: 'underline'}}>FAQ page</Link> for more details)</li>
                      <li>👡 <strong>Comfortable shoes</strong> (for dancing & sand)</li>
                      <li>👜 <strong>Small purse and / or clutch and / or fanny pack</strong></li>
                      <li>💇‍♀️ <strong>Hair tools</strong> (blow dryer, straightener, curling iron, brush)</li>
                      <li>🪥 <strong>Toiletries</strong> (toothbrush, toothpaste, razor, shaver, makeup, deodorant, face wash, moisturizer, etc.)</li>
                      <li>🧷 <strong>Fashion tape / safety pins</strong></li>
                      <li>🪞 <strong>Mini mirror / makeup wipes</strong></li>
                      <li>💅 <strong>Touch-up kit</strong> (nail file, hair ties, mini deodorant)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Easy-to-Forget but SO Useful Section */}
              <section className="mb-12">
                <h2 
                  className="text-3xl md:text-4xl font-black text-center mb-8 uppercase tracking-wider flex items-center justify-center gap-3" 
                  style={{
                    fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                    textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                    color: '#d81b8c'
                  }}
                >
                  <span className="text-4xl md:text-5xl">💡</span>
                  Easy-to-Forget but SO Useful
                </h2>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
                  <div className="space-y-6 text-black" style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontSize: '18px'}}>
                    <ul className="space-y-3 custom-bullets">
                      <li>🔌 <strong>International power adapter</strong> (especially for UK guests!) and / or <strong>travel power strip</strong></li>
                      <li>🔋 <strong>Portable phone charger / power bank</strong></li>
                      <li>📺 <strong>HDMI cable</strong> (to connect your own device to the hotel TV)</li>
                      <li>🔐 <strong>Zippered pouch or mini safe</strong> (for valuables at the beach)</li>
                      <li>📱 <strong>Offline maps or screenshots of hotel/venue info</strong> (in case of no service)</li>
                      <li>🧴 <strong>Hand sanitizer</strong></li>
                      <li>📑 <strong>Printed copy of your passport + travel docs</strong></li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Carry-On Tips Section */}
              <section className="mb-12">
                <h2 
                  className="text-3xl md:text-4xl font-black text-center mb-8 uppercase tracking-wider flex items-center justify-center gap-3" 
                  style={{
                    fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                    textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                    color: '#d81b8c'
                  }}
                >
                  <span className="text-4xl md:text-5xl mr-2 md:mr-0">✈️</span>
                  Carry-On Tips
                </h2>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
                  <div className="space-y-6 text-black" style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontSize: '18px'}}>
                    <ul className="space-y-3 custom-bullets">
                      <li>💊 <strong>Any medications</strong></li>
                      <li>🧦 <strong>Comfy socks / layers for the flight</strong></li>
                      <li>🧃 <strong>Snacks</strong></li>
                      <li>🎧 <strong>Noise-cancelling headphones / earbuds</strong></li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Questions Section */}
              <section className="mb-12">
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
                    Need some advice on what to bring with you?
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

        /* Custom bullet styling */
        ul.custom-bullets {
          list-style: none;
          padding-left: 0;
        }
        
        ul.custom-bullets li {
          position: relative;
          padding-left: 1.5rem;
          color: black;
        }
        
        ul.custom-bullets li::before {
          content: "•";
          color: black;
          position: absolute;
          left: 0;
          font-weight: bold;
        }

        /* Custom circle styling for sub-bullets */
        ul.custom-circles {
          list-style: none;
          padding-left: 0;
        }
        
        ul.custom-circles li {
          position: relative;
          padding-left: 1.5rem;
          color: black;
        }
        
        ul.custom-circles li::before {
          content: "◦";
          color: black;
          position: absolute;
          left: 0;
          font-weight: bold;
        }
      `}</style>
    </main>
  )
}
