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
            <div 
              className="flex justify-center items-center px-2 h-full relative"
              style={{ gap: isMobile ? '16px' : '32px' }}
            >
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
          <div style={{ padding: '0 1rem 3rem 1rem' }}>
            <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
              <h1 
                className="text-4xl md:text-6xl font-black text-center uppercase tracking-wider" 
                style={{
                  fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                  textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                  color: '#d81b8c',
                  marginBottom: '3rem'
                }}
              >
                BOOK MY HOTEL
              </h1>

              {/* Important Dates Section */}
              <section style={{ marginBottom: '3rem' }}>
                <h2 
                  className="text-3xl md:text-4xl font-black text-center uppercase tracking-wider" 
                  style={{
                    fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                    textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                    color: '#d81b8c',
                    marginBottom: '2rem'
                  }}
                >
                  Important Dates
                </h2>
                <div 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/20"
                  style={{ padding: '2rem' }}
                >
                  <div 
                    style={{
                      display: 'grid',
                      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr',
                      gap: isMobile ? '1.5rem' : '1.5rem'
                    }}
                  >
                    <div 
                      className="text-center bg-red-500/20 rounded-xl border-2 border-red-400/50"
                      style={{ padding: '1.5rem' }}
                    >
                      <div className="text-2xl md:text-3xl font-black text-white" style={{fontFamily: 'Arial, sans-serif', marginBottom: '0.5rem'}}>
                        September 1, 2025
                      </div>
                      <div className="text-white/90 font-semibold" style={{fontFamily: 'Arial, sans-serif'}}>
                        Room Block<br />
                        Reservation Deadline
                      </div>
                    </div>
                    <div 
                      className="text-center bg-yellow-500/20 rounded-xl border-2 border-yellow-400/50"
                      style={{ padding: '1.5rem' }}
                    >
                      <div className="text-2xl md:text-3xl font-black text-white" style={{fontFamily: 'Arial, sans-serif', marginBottom: '0.5rem'}}>
                        December 1, 2025
                      </div>
                      <div className="text-white/90 font-semibold" style={{fontFamily: 'Arial, sans-serif'}}>
                        Full Payment<br />
                        Deadline
                      </div>
                    </div>
                    <div 
                      className="text-center bg-green-500/20 rounded-xl border-2 border-green-400/50"
                      style={{ padding: '1.5rem' }}
                    >
                      <div className="text-2xl md:text-3xl font-black text-white" style={{fontFamily: 'Arial, sans-serif', marginBottom: '0.5rem'}}>
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
              <section style={{ marginBottom: '3rem' }}>
                <h2 
                  className="text-3xl md:text-4xl font-black text-center uppercase tracking-wider" 
                  style={{
                    fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                    textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                    color: '#d81b8c',
                    marginBottom: '2rem'
                  }}
                >
                  Overview
                </h2>
                <div 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/20"
                  style={{ padding: '2rem' }}
                >
                  <div style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontSize: '18px', color: 'rgba(255,255,255,0.95)'}}>
                    <p style={{ marginBottom: '1.5rem' }}>
                      We have reserved a block of rooms at Presidente Intercontinental Cancun. We highly recommend staying at the hotel, as it will make it logistically easiest for you to enjoy all aspects of the Bremmiepalooza Festival. Plus, in true Bremmie form, we got them to throw in daily breakfast!
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                      Specifically, <strong>The Pregame</strong> and <strong>The Main Stage</strong> will take place at the Presidente Intercontinental Hotel. Additionally, there will be a bus departing from the Presidente Intercontinental Hotel to take festival goers to and from the Marina for <strong>The Aftershow</strong>.
                    </p>
                    <div className="text-center" style={{ marginBottom: '1.5rem' }}>
                      <p style={{color: '#d81b8c', fontWeight: '700', fontSize: '18px', fontFamily: 'Arial, sans-serif', marginBottom: '0.25rem'}}>
                        To take advantage of the room block rate,
                      </p>
                      <p style={{color: '#d81b8c', fontWeight: '700', fontSize: '18px', fontFamily: 'Arial, sans-serif', marginBottom: '0.25rem'}}>
                        reservations must be made by Monday, September 1, 2025.
                      </p>
                    </div>
                    <p className="text-center" style={{color: '#000', fontWeight: '400', fontSize: '18px', fontFamily: 'Arial, sans-serif', marginTop: '1.5rem', marginBottom: '1.5rem'}}>
                      When you are ready to book, please do so at this link:
                    </p>
                    <div className="text-center">
                      <a 
                        href="https://forms.office.com/r/tuSCB07uW9?origin=lprLink"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-black hover:bg-gray-800 text-white font-black rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-2xl border-4 border-white"
                        style={{
                          fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                          fontSize: '2rem',
                          padding: '2rem 5rem',
                          minWidth: '320px'
                        }}
                      >
                        BOOK HERE
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Room Block Details Section */}
              <section style={{ marginBottom: '3rem' }}>
                <h2 
                  className="text-3xl md:text-4xl font-black text-center uppercase tracking-wider" 
                  style={{
                    fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                    textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                    color: '#d81b8c',
                    marginBottom: '2rem'
                  }}
                >
                  Room Block Details
                </h2>
                <div 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/20"
                  style={{ padding: '2rem' }}
                >
                  <p className="text-white/95" style={{fontFamily: 'Arial, sans-serif', fontSize: '18px', marginBottom: '2rem'}}>
                    For the room block, we have reserved 2 types of rooms:
                  </p>
                  
                  <div 
                    style={{
                      display: 'grid',
                      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                      gap: isMobile ? '1.5rem' : '2rem'
                    }}
                  >
                    <div 
                      className="bg-white/5 rounded-xl border-2 border-blue-400/30"
                      style={{ padding: '1.5rem' }}
                    >
                      <h3 className="text-2xl font-black text-white" style={{fontFamily: "'ZollaPro', sans-serif", marginBottom: '1rem'}}>
                        Classic Ocean View
                      </h3>
                      <div style={{height: isMobile ? 'auto' : '60px', display: 'flex', alignItems: 'start', marginBottom: '1rem'}}>
                        <p className="text-white/90" style={{fontFamily: 'Arial, sans-serif', fontSize: '18px', margin: '0'}}>
                          (guaranteed ocean view,<br />
                          but higher cost)
                        </p>
                      </div>
                      <div style={{fontFamily: 'Arial, sans-serif', fontSize: '18px', color: 'rgba(255,255,255,0.95)'}}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '0.5rem' }}>
                          <span>Single/Double Occupancy:</span>
                          <span className="font-bold" style={{textAlign: 'right', minWidth: '120px'}}>$365.00 / night</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                          <span>Triple Occupancy:</span>
                          <span className="font-bold" style={{textAlign: 'right', minWidth: '120px'}}>$443.68 / night</span>
                        </div>
                      </div>
                    </div>

                    <div 
                      className="bg-white/5 rounded-xl border-2 border-green-400/30"
                      style={{ padding: '1.5rem' }}
                    >
                      <h3 className="text-2xl font-black text-white" style={{fontFamily: "'ZollaPro', sans-serif", marginBottom: '1rem'}}>
                        Classic
                      </h3>
                      <div style={{height: isMobile ? 'auto' : '60px', display: 'flex', alignItems: 'start', marginBottom: '1rem'}}>
                        <p className="text-white/90" style={{fontFamily: 'Arial, sans-serif', fontSize: '18px', margin: '0'}}>
                          (no guaranteed view – could be garden view, resort view, or street / parking lot view. but lower cost)
                        </p>
                      </div>
                      <div style={{fontFamily: 'Arial, sans-serif', fontSize: '18px', color: 'rgba(255,255,255,0.95)'}}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '0.5rem' }}>
                          <span>Single/Double Occupancy:</span>
                          <span className="font-bold" style={{textAlign: 'right', minWidth: '120px'}}>$322.00 / night</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                          <span>Triple Occupancy:</span>
                          <span className="font-bold" style={{textAlign: 'right', minWidth: '120px'}}>$400.68 / night</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center" style={{ marginTop: '3rem' }}>
                    <p className="text-white/95 font-semibold" style={{fontFamily: 'Arial, sans-serif', fontSize: '18px', color: '#d81b8c'}}>
                      If you have a strong preference for one or the other, please book early to secure your room of choice!
                    </p>
                  </div>
                </div>
              </section>

              {/* Booking Process Details Section */}
              <section style={{ marginBottom: '3rem' }}>
                <h2 
                  className="text-3xl md:text-4xl font-black text-center uppercase tracking-wider" 
                  style={{
                    fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                    textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                    color: '#d81b8c',
                    marginBottom: '2rem'
                  }}
                >
                  Booking Process Details
                </h2>
                <div 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/20"
                  style={{ padding: '2rem' }}
                >
                  <div style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontSize: '18px', color: 'rgba(255,255,255,0.95)'}}>
                    <p style={{ marginBottom: '1rem' }}>
                      The payment process is a bit unusual (but apparently the norm for Mexico):
                    </p>
                    <ul className="custom-bullets" style={{ marginLeft: '1.5rem' }}>
                      <li style={{ marginBottom: '0.75rem' }}>
                        Once the hotel room reservation link is completed and sent, you will receive an email from the hotel containing the reservation details along with a credit card payment link
                      </li>
                      <li style={{ marginBottom: '0.75rem' }}>
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
              <section style={{ marginBottom: '3rem' }}>
                <h2 
                  className="text-3xl md:text-4xl font-black text-center uppercase tracking-wider" 
                  style={{
                    fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                    textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                    color: '#d81b8c',
                    marginBottom: '2rem'
                  }}
                >
                  The Fine Print
                </h2>
                <div 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/20"
                  style={{ padding: '2rem' }}
                >
                  <div style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontSize: '18px', color: 'rgba(255,255,255,0.95)'}}>
                    <ul className="custom-bullets" style={{ marginLeft: '1.5rem' }}>
                      <li style={{ marginBottom: '1rem' }}>
                        <div>
                          Hotel room rates include daily access to the Breakfast Buffet at Caribeño Restaurant
                          <ul className="custom-bullets" style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}>
                              For each child up to 12 years of age, a $13 / day fee applies to cover breakfast
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li style={{ marginBottom: '1rem' }}>
                        <div>
                          A maximum of 3 adults are allowed per room
                          <ul className="custom-bullets" style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}>
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
              <section style={{ marginBottom: '3rem' }}>
                <h2 
                  className="text-3xl md:text-4xl font-black text-center uppercase tracking-wider" 
                  style={{
                    fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                    textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                    color: '#d81b8c',
                    marginBottom: '2rem'
                  }}
                >
                  Questions?
                </h2>
                <div 
                  className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl border-2 border-white/20 text-center"
                  style={{ padding: '2rem' }}
                >
                  <p className="text-white/95" style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontSize: '18px', marginBottom: '0.5rem'}}>
                    Interested in a different room type?
                  </p>
                  <p className="text-white/95" style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontSize: '18px', marginBottom: '0.5rem'}}>
                    Experiencing issues with booking and / or affording a room at the Presidente Intercontinental Hotel?
                  </p>
                  <p className="text-white/95" style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontSize: '18px', marginBottom: '1.5rem'}}>
                    Really want to stay elsewhere?
                  </p>
                  <p className="text-white/95 font-bold" style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontSize: '18px', color: '#d81b8c', marginBottom: '1.5rem'}}>
                    Please shoot us a message at info@bremmiepalooza.com so we can help!
                  </p>
                  <a 
                    href="/contact"
                    className="inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white font-bold transition-all duration-200 border-2 border-white/30"
                    style={{fontFamily: 'Arial, sans-serif', fontSize: '18px', padding: '0.75rem 2rem'}}
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
