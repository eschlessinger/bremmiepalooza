"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useIsMobile } from "@/hooks/use-mobile"

export default function BookHotelPage() {
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
      href: "/lineup", 
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
            <Link href="/lineup" className="w-full max-w-sm md:max-w-md">
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
                          {button.label === 'BOOK MY' && (
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
                      {button.label === 'BOOK MY' && (
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
            <div className="max-w-5xl mx-auto">
              <h1 
                className="text-4xl md:text-6xl font-black text-center mb-12 uppercase tracking-wider" 
                style={{
                  fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                  textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                  color: '#d81b8c'
                }}
              >
                BOOK MY HOTEL
              </h1>

              {/* Important Dates Section */}
              <section className="mb-12">
                <h2 
                  className="text-3xl md:text-4xl font-black text-center mb-8 uppercase tracking-wider" 
                  style={{
                    fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                    textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                    color: '#d81b8c'
                  }}
                >
                  Important Dates
                </h2>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center bg-red-500/20 rounded-xl p-6 border-2 border-red-400/50">
                      <div className="text-2xl md:text-3xl font-black text-white mb-2" style={{fontFamily: 'Arial, sans-serif'}}>
                        September 1, 2025
                      </div>
                      <div className="text-white/90 font-semibold" style={{fontFamily: 'Arial, sans-serif'}}>
                        Room Block<br />
                        Reservation Deadline
                      </div>
                    </div>
                    <div className="text-center bg-yellow-500/20 rounded-xl p-6 border-2 border-yellow-400/50">
                      <div className="text-2xl md:text-3xl font-black text-white mb-2" style={{fontFamily: 'Arial, sans-serif'}}>
                        December 1, 2025
                      </div>
                      <div className="text-white/90 font-semibold" style={{fontFamily: 'Arial, sans-serif'}}>
                        Full Payment<br />
                        Deadline
                      </div>
                    </div>
                    <div className="text-center bg-green-500/20 rounded-xl p-6 border-2 border-green-400/50">
                      <div className="text-2xl md:text-3xl font-black text-white mb-2" style={{fontFamily: 'Arial, sans-serif'}}>
                        January 16-19, 2026
                      </div>
                      <div className="text-white/90 font-semibold" style={{fontFamily: 'Arial, sans-serif'}}>
                        Festival<br />
                        Weekend
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Overview Section */}
              <section className="mb-12">
                <h2 
                  className="text-3xl md:text-4xl font-black text-center mb-8 uppercase tracking-wider" 
                  style={{
                    fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                    textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                    color: '#d81b8c'
                  }}
                >
                  Overview
                </h2>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
                  <div className="space-y-6 text-white/95" style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontSize: '18px'}}>
                    <p>
                      We have reserved a block of rooms at Presidente Intercontinental Cancun. We highly recommend staying at the hotel, as it will make it logistically easiest for you to enjoy all aspects of the Bremmiepalooza Festival. Plus, in true Bremmie form, we got them to throw in daily breakfast!
                    </p>
                    <p>
                      Specifically, <strong>The Pregame</strong> and <strong>The Main Stage</strong> will take place at the Presidente Intercontinental Hotel. Additionally, there will be a bus departing from the Presidente Intercontinental Hotel to take festival goers to and from the Marina for <strong>The Aftershow</strong>.
                    </p>
                    <div className="text-center">
                      <p className="mb-1" style={{color: '#d81b8c', fontWeight: '700', fontSize: '18px', fontFamily: 'Arial, sans-serif'}}>
                        To take advantage of the room block rate,
                      </p>
                      <p className="mb-1" style={{color: '#d81b8c', fontWeight: '700', fontSize: '18px', fontFamily: 'Arial, sans-serif'}}>
                        reservations must be made by Monday, September 1, 2025.
                      </p>
                    </div>
                    <p className="text-center mb-6" style={{color: '#000', fontWeight: '400', fontSize: '18px', fontFamily: 'Arial, sans-serif', marginTop: '1.5rem'}}>
                      When you are ready to book, please do so at this link:
                    </p>
                    <div className="text-center">
                      <a 
                        href="https://forms.office.com/r/tuSCB07uW9?origin=lprLink"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-black hover:bg-gray-800 text-white font-black text-3xl px-20 py-8 rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-2xl border-4 border-white"
                        style={{
                          fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                          minWidth: '280px'
                        }}
                      >
                        BOOK HERE
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Room Block Details Section */}
              <section className="mb-12">
                <h2 
                  className="text-3xl md:text-4xl font-black text-center mb-8 uppercase tracking-wider" 
                  style={{
                    fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                    textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                    color: '#d81b8c'
                  }}
                >
                  Room Block Details
                </h2>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
                  <p className="text-white/95 mb-8" style={{fontFamily: 'Arial, sans-serif', fontSize: '18px'}}>
                    For the room block, we have reserved 2 types of rooms:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/5 rounded-xl p-6 border-2 border-blue-400/30">
                      <h3 className="text-2xl font-black text-white mb-4" style={{fontFamily: "'ZollaPro', sans-serif"}}>
                        Classic Ocean View
                      </h3>
                      <div style={{height: isMobile ? 'auto' : '60px', display: 'flex', alignItems: 'start'}}>
                        <p className="text-white/90 mb-0" style={{fontFamily: 'Arial, sans-serif', fontSize: '18px'}}>
                          (guaranteed ocean view,<br />
                          but higher cost)
                        </p>
                      </div>
                      <div className="space-y-2 text-white/95 mt-4" style={{fontFamily: 'Arial, sans-serif', fontSize: '18px'}}>
                        <div className="flex justify-between items-end">
                          <span>Single/Double Occupancy:</span>
                          <span className="font-bold" style={{textAlign: 'right', minWidth: '120px'}}>$365.00 / night</span>
                        </div>
                        <div className="flex justify-between items-end">
                          <span>Triple Occupancy:</span>
                          <span className="font-bold" style={{textAlign: 'right', minWidth: '120px'}}>$443.68 / night</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-xl p-6 border-2 border-green-400/30">
                      <h3 className="text-2xl font-black text-white mb-4" style={{fontFamily: "'ZollaPro', sans-serif"}}>
                        Classic
                      </h3>
                      <div style={{height: isMobile ? 'auto' : '60px', display: 'flex', alignItems: 'start'}}>
                        <p className="text-white/90 mb-0" style={{fontFamily: 'Arial, sans-serif', fontSize: '18px'}}>
                          (no guaranteed view – could be garden view, resort view, or street / parking lot view. but lower cost)
                        </p>
                      </div>
                      <div className="space-y-2 text-white/95 mt-4" style={{fontFamily: 'Arial, sans-serif', fontSize: '18px'}}>
                        <div className="flex justify-between items-end">
                          <span>Single/Double Occupancy:</span>
                          <span className="font-bold" style={{textAlign: 'right', minWidth: '120px'}}>$322.00 / night</span>
                        </div>
                        <div className="flex justify-between items-end">
                          <span>Triple Occupancy:</span>
                          <span className="font-bold" style={{textAlign: 'right', minWidth: '120px'}}>$400.68 / night</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 text-center">
                    <p className="text-white/95 font-semibold" style={{fontFamily: 'Arial, sans-serif', fontSize: '18px', color: '#d81b8c'}}>
                      If you have a strong preference for one or the other, please book early to secure your room of choice!
                    </p>
                  </div>
                </div>
              </section>

              {/* Booking Process Details Section */}
              <section className="mb-12">
                <h2 
                  className="text-3xl md:text-4xl font-black text-center mb-8 uppercase tracking-wider" 
                  style={{
                    fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                    textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                    color: '#d81b8c'
                  }}
                >
                  Booking Process Details
                </h2>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
                  <div className="space-y-4 text-white/95" style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontSize: '18px'}}>
                    <p>
                      The payment process is a bit unusual (but apparently the norm for Mexico):
                    </p>
                    <ul className="space-y-3 ml-6 custom-bullets">
                      <li>
                        Once the hotel room reservation link is completed and sent, you will receive an email from the hotel containing the reservation details along with a credit card payment link
                      </li>
                      <li>
                        All rooms must be guaranteed with payment of one night at the time of booking
                      </li>
                      <li>
                        The payment of the remaining nights of the room reservation must be completed before December 1, 2025
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* The Fine Print Section */}
              <section className="mb-12">
                <h2 
                  className="text-3xl md:text-4xl font-black text-center mb-8 uppercase tracking-wider" 
                  style={{
                    fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                    textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                    color: '#d81b8c'
                  }}
                >
                  The Fine Print
                </h2>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
                  <div className="space-y-4 text-white/95" style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontSize: '18px'}}>
                    <ul className="space-y-4 custom-bullets ml-6">
                      <li>
                        <div>
                          Hotel room rates include daily access to the Breakfast Buffet at Caribeño Restaurant
                          <ul className="mt-2 ml-6 space-y-2 custom-bullets">
                            <li>
                              For each child up to 12 years of age, a $13 / day fee applies to cover breakfast
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <div>
                          A maximum of 3 adults are allowed per room
                          <ul className="mt-2 ml-6 space-y-2 custom-bullets">
                            <li>
                              In addition, up to 2 children 12 years of age or under may stay in each room for free with a maximum of 4 people per room (2 adults + 2 children 12 years of age or younger, or 3 adults + 1 child 12 years of age or under)
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        Discounted room rates are applicable 3 days prior to and 3 days after January 16-19, 2026 (subject to availability)
                      </li>
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
                  <p className="text-white/95 mb-2" style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontSize: '18px'}}>
                    Interested in a different room type?
                  </p>
                  <p className="text-white/95 mb-2" style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontSize: '18px'}}>
                    Experiencing issues with booking and / or affording a room at the Presidente Intercontinental Hotel?
                  </p>
                  <p className="text-white/95 mb-6" style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontSize: '18px'}}>
                    Really want to stay elsewhere?
                  </p>
                  <p className="text-white/95 mb-6 font-bold" style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontSize: '18px', color: '#d81b8c'}}>
                    Please shoot us a message at info@bremmiepalooza.com so we can help!
                  </p>
                  <a 
                    href="/contact"
                    className="inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full px-8 py-3 text-white font-bold transition-all duration-200 border-2 border-white/30"
                    style={{fontFamily: 'Arial, sans-serif', fontSize: '18px'}}
                  >
                    Email Us
                  </a>
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

        /* Custom bullet styling for better visibility */
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
        
        ul.custom-bullets ul.custom-bullets li::before {
          content: "◦";
          color: black;
        }
      `}</style>
    </main>
  )
}
