"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useIsMobile } from "@/hooks/use-mobile"

export default function TravelInfoPage() {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState('flights')
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
      href: "/launch-page", 
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
      href: "/travel-info", 
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

  const tabs = [
    { id: 'flights', label: 'Flights', icon: '✈️' },
    { id: 'airport', label: 'Airport', icon: '🛬' },
    { id: 'documents', label: 'Documents', icon: '📄' },
    { id: 'packing', label: 'Packing', icon: '🧳' },
    { id: 'activities', label: 'Activities', icon: '🏖️' }
  ]

  const renderContent = () => {
    switch(activeTab) {
      case 'flights':
        return (
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20">
              <h3 className="text-2xl font-black text-white mb-4" style={{fontFamily: "'ZollaPro', sans-serif", textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
                ✈️ Getting to Cancun
              </h3>
              <div className="space-y-4 text-white/90">
                <div>
                  <h4 className="font-bold text-lg text-white mb-2">Airport: Cancun International (CUN)</h4>
                  <p>Most major US cities have direct flights to Cancun. Flight times are typically 2-5 hours depending on your departure city.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white mb-2">Best Airlines for Direct Flights:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>American Airlines (Dallas, Miami, Phoenix, Charlotte)</li>
                    <li>Delta (Atlanta, Detroit, Minneapolis, New York)</li>
                    <li>United (Chicago, Denver, Houston, Newark)</li>
                    <li>Southwest (Baltimore, Denver, Houston)</li>
                    <li>JetBlue (Boston, Fort Lauderdale, New York)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )

      case 'airport':
        return (
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20">
              <h3 className="text-2xl font-black text-white mb-4" style={{fontFamily: "'ZollaPro', sans-serif", textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
                🛬 Airport Arrival & Transportation
              </h3>
              <div className="space-y-6 text-white/90">
                <div>
                  <h4 className="font-bold text-lg text-white mb-2">Airport Shuttle Service</h4>
                  <div className="bg-green-500/20 rounded-lg p-4 border-l-4 border-green-400">
                    <p className="font-bold text-white mb-2">✅ INCLUDED IN YOUR PACKAGE!</p>
                    <p>Look for the "Bremmiepalooza" shuttle service when you arrive. Our coordinators will be waiting with festival signs in the arrivals area.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'documents':
        return (
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20">
              <h3 className="text-2xl font-black text-white mb-4" style={{fontFamily: "'ZollaPro', sans-serif", textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
                📄 Required Documents
              </h3>
              <div className="space-y-6">
                <div className="bg-red-500/20 rounded-lg p-4 border-l-4 border-red-400">
                  <h4 className="font-bold text-white mb-2">🚨 PASSPORT REQUIRED</h4>
                  <p className="text-white/90">All travelers to Mexico must have a valid passport. No exceptions!</p>
                </div>
              </div>
            </div>
          </div>
        )

      case 'packing':
        return (
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20">
              <h3 className="text-2xl font-black text-white mb-4" style={{fontFamily: "'ZollaPro', sans-serif", textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
                🧳 Festival Packing Essentials
              </h3>
              <div className="space-y-4 text-white/90">
                <p>Pack bright, colorful clothing, comfortable shoes, sunscreen, and swimwear for the tropical festival experience!</p>
              </div>
            </div>
          </div>
        )

      case 'activities':
        return (
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20">
              <h3 className="text-2xl font-black text-white mb-4" style={{fontFamily: "'ZollaPro', sans-serif", textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
                🏖️ Activities & Excursions
              </h3>
              <div className="space-y-4 text-white/90">
                <p>Enjoy snorkeling, catamaran cruises, cultural experiences, and so much more during your festival weekend!</p>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

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
            <Link href="/launch-page" className="w-full max-w-sm md:max-w-md">
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
                            <div 
                              className="bg-white/30 rounded-lg flex items-center justify-center text-2xl"
                              style={{
                                width: isMobile ? '45px' : '80px',
                                height: isMobile ? '45px' : '80px'
                              }}
                            >
                              🎵
                            </div>
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
                          {button.sublabel && (
                            <div 
                              className={`${isMobile ? 'text-xs' : 'text-base'} font-bold uppercase text-black leading-tight relative`}
                              style={{
                                textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                                fontFamily: "'ZollaProOutlined', 'Impact', 'Arial Black', sans-serif"
                              }}
                            >
                              {button.sublabel}
                            </div>
                          )}
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
                        <div 
                          className="bg-white/30 rounded-lg flex items-center justify-center text-2xl"
                          style={{
                            width: isMobile ? '45px' : '80px',
                            height: isMobile ? '45px' : '80px'
                          }}
                        >
                          🎵
                        </div>
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
                      {button.sublabel && (
                        <div 
                          className={`${isMobile ? 'text-xs' : 'text-base'} font-bold uppercase text-black leading-tight`}
                          style={{
                            textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                            fontFamily: "'ZollaProOutlined', 'Impact', 'Arial Black', sans-serif"
                          }}
                        >
                          {button.sublabel}
                        </div>
                      )}
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
                )
              })}
            </div>
          </div>
        </div>

        {/* Content with margin for absolute positioned banner */}
        <div style={{ marginTop: isMobile ? '120px' : '160px' }}>

          {/* Main Content */}
          <div className="px-4 pb-12">
            <div className="max-w-6xl mx-auto">
              <h1 
                className="text-4xl md:text-6xl font-black text-center mb-8 uppercase tracking-wider" 
                style={{
                  fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                  textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                  color: '#d81b8c'
                }}
              >
                TRAVEL INFO
              </h1>

              {/* Tab Navigation */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      px-4 py-2 rounded-full font-bold transition-all duration-200 flex items-center gap-2
                      ${activeTab === tab.id 
                        ? 'bg-white text-purple-600 shadow-lg' 
                        : 'bg-white/20 text-white hover:bg-white/30'
                      }
                    `}
                    style={{
                      fontFamily: "'ZollaPro', sans-serif"
                    }}
                  >
                    <span>{tab.icon}</span>
                    <span className={isMobile ? 'text-sm' : 'text-base'}>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="mt-8">
                {renderContent()}
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
