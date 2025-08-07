<p className="text-white/95 mb-2" style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontSize: '18px'}}>
            Confused about the best transportation approach for you?
          </p>
          <p className="text-white/95 mb-6" style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontSize: '18px'}}>
            Want to discuss other potential options?
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
      </section>"use client"

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

  const tabs = [
    { id: 'flights', label: 'Flights', icon: '✈️' },
    { id: 'airport', label: 'Airport Transportation', icon: '🛬' },
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
      {/* Introductory Text */}
      <div className="text-center max-w-4xl mx-auto py-8">
        <p className="text-white font-bold mb-6" style={{fontFamily: 'Arial, sans-serif', fontSize: '20px', lineHeight: '1.4'}}>
          <span className="block">Once you arrive at Cancun International Airport,</span>
          <span className="block">the Presidente Intercontinental Hotel is a ~30 minute car ride away.</span>
        </p>
        <p className="text-white font-bold mb-8" style={{fontFamily: 'Arial, sans-serif', fontSize: '20px', lineHeight: '1.4'}}>
          <span className="block">After extensive Reddit / Google / ChatGPT research,</span>
          <span className="block">we would recommend the following transportation methods:</span>
        </p>
      </div>

      {/* Pre-Arranged Transfer Section */}
      <section className="mb-16">
        <h3 className="text-2xl md:text-3xl font-black text-center mb-8 uppercase tracking-wider" 
            style={{
              fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
              textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
              color: '#d81b8c'
            }}>
          Pre-Arranged Transfer
        </h3>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
              <h3 className="text-2xl md:text-3xl font-black text-center mb-8 uppercase tracking-wider" 
                  style={{
                    fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                    textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                    color: '#d81b8c'
                  }}>
                Pre-Arranged Transfer
              </h3>
              
              <div className="space-y-6 text-white/95" style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontSize: '18px'}}>
                <p className="text-center italic">
                  Great option if you are only planning to drive to / from the hotel!
                </p>
                
                <div>
                  <h4 className="font-bold text-lg mb-2" style={{color: 'black'}}>Keep In Mind:</h4>
                  <ul className="space-y-2 ml-6 custom-bullets">
                    <li>For additional / unforeseen transportation needs, can use Ubers (plentiful around the hotel & cheap) and / or Taxis</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg text-white mb-4" style={{color: '#d81b8c'}}>Our Pick: USA Transfers</h4>
                  <ul className="space-y-2 ml-6 custom-bullets">
                    <li>Appears to be the most beloved and reliable Transfer service</li>
                    <li>Round trip for 6 people to and from the hotel is $95 for a Private Van or $170 for a Private SUV (which, relative to the Van, boasts leather seats, a stepping stool, 5-volt power outlets, and fresh towels on arrival)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2" style={{color: 'black'}}>Customer Testimonials</h4>
                  <div className="space-y-4 ml-6">
                    <div className="bg-white/5 rounded-lg p-4 border-l-4 border-blue-400/50">
                      <p className="italic mb-2" style={{color: 'black'}}>"Book USA Transfers every time. We go to Mexico 2 to 3 times a year, they are always there waiting for you. It's a private transfer so no waiting for a bus (Sometimes there's a short wait for your shuttle). It's around $100 round trip. They have always done a great job for us. You can book it online on their website. Once you get your checked bags, you put your head down and keep walking past all the rental car places, don't talk to anyone, until you are outside. USA is usually towards the back of the crowd of shuttle people. Once you are outside, you can ask anyone out there "Where is USA Transfers" and they will point you right to them."</p>
                      <p className="text-sm" style={{color: 'black'}}>- RobbieG52726, February 2025 (Reddit)</p>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 border-l-4 border-blue-400/50">
                      <p className="italic mb-2" style={{color: 'black'}}>"USA Transfers booked roundtrip for 5 of us, arriving on foreign and domestic flights, plus Maya Train, and leaving from 4 terminals. They knew about every terminal, each delay, etc. They can turn on a dime, and arrive on time."</p>
                      <p className="text-sm" style={{color: 'black'}}>- truckforbiketrader, February 2025 (Reddit)</p>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 border-l-4 border-blue-400/50">
                      <p className="italic mb-2" style={{color: 'black'}}>"Check out USA transfers. Legit company, owned by a Canadian guy. Easy to get a quote on their website or app. Super reliable"</p>
                      <p className="text-sm mb-2" style={{color: 'black'}}>- KrazyKen62, 2023 (Reddit)</p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <a 
                    href="https://usa-transfers.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-black hover:bg-gray-800 text-white font-black text-3xl px-20 py-8 rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-2xl border-4 border-white"
                    style={{
                      fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                      minWidth: '280px'
                    }}
                  >
                    BOOK NOW
                  </a>
                </div>
              </div>
            </div>

            {/* Rental Car Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20 mb-12">
              <h3 className="text-2xl md:text-3xl font-black text-center mb-8 uppercase tracking-wider" 
                  style={{
                    fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                    textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                    color: '#d81b8c'
                  }}>
                Rental Car
              </h3>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
          <div className="space-y-6 text-white/95" style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontSize: '18px'}}>
            <p className="text-center italic">
              Great option if you are interested in additional flexibility to drive not only to / from the hotel, but also around Cancun!
            </p>
            
            <div>
              <h4 className="font-bold text-lg mb-2" style={{ color: 'black' }}>Keep In Mind:</h4>
              <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem' }}>
                <li>Make sure to book directly and avoid third party sites</li>
                <li>Bring printed or digital copies of your quote and communication</li>
                <li>Purchasing TPL Insurance is required in Mexico (even if you are booking with a Credit Card that offers insurance coverage – which may or may not be valid for Mexico); some rental car companies will take advantage of this and try to massively upcharge you for it upon pickup (see below for our recommendation on which rental car company to use to avoid this)</li>
                <li>Drive cautiously — follow speed limits, keep headlights on (even during the day), and avoid night driving in rural areas</li>
                <li>
                  There are a number of scams of which to be aware if you decide you want to rent a car:
                  <ol style={{ listStyleType: 'decimal', marginLeft: '1.5rem' }}>
                    <li>
                      Rental Car Pickup: Check and photograph the car thoroughly during pickup, including scratches, tires, windshield, fuel level, and mileage
                    </li>
                    <li>
                      Police Stops: It's not uncommon for tourists to be pulled over and asked to pay a fine on the spot — sometimes unjustly. These are often "mordidas" (bribes) rather than legitimate tickets. If stopped:
                      <ul style={{ listStyleType: 'circle', marginLeft: '1.5rem' }}>
                        <li>Ask for a written ticket</li>
                        <li>Do not pay in cash on the roadside</li>
                        <li>Stay calm, polite, and firm</li>
                      </ul>
                    </li>
                    <li>
                      Speed Traps & Sudden Signage Changes: Some highways have sudden speed limit drops (especially near towns or police checkpoints) where speed traps are common
                    </li>
                    <li>
                      Speed Bumps: Many aren't well-marked and can damage your car if hit at full speed
                    </li>
                    <li>
                      Gas Stations:
                      <ul style={{ listStyleType: 'circle', marginLeft: '1.5rem' }}>
                        <li>Always check the meter is zeroed before fueling</li>
                        <li>Always pay in cash (using 200 peso notes or smaller bills, not 500+ peso notes), say the amount you are paying as you are handing it to the attendant, and count your change</li>
                        <li>Avoid airport-adjacent gas stations</li>
                      </ul>
                    </li>
                  </ol>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg text-white mb-4" style={{color: '#d81b8c'}}>Our Pick: Avant Rental Cars</h4>
              <ul className="space-y-2 ml-6 custom-bullets">
                <li>Highly rated across platforms, with reviews indicating they book clean, modern vehicles with no hidden fees and provide responsive support and pickup instructions via WhatsApp or email</li>
                <li>Rates starting at ~$103 for 3 days, inclusive of mandatory insurance</li>
                <li>Review <a href="https://www.avantrentacar.com/policies" target="_blank" rel="noopener noreferrer" className="underline font-bold" style={{color: '#d81b8c'}}>here</a> for a detailed breakdown of Avant's policies, including Insurance coverage</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2" style={{color: 'black'}}>Customer Testimonials</h4>
              <div className="space-y-4 ml-6">
                <div className="bg-white/5 rounded-lg p-4 border-l-4 border-green-400/50">
                  <p className="italic mb-2" style={{color: 'black'}}>"After doing quite a bit of research and comparing prices, I rented from Avant because of the reviews, the competitive price, and the fact that insurance was included. We had a wonderful experience renting from them. The staff was professional and kind. They charged exactly what they said they would for the car rental, did not try to scam us with extra charges or extra scratches when we returned the car. It was a well-maintained vehicle in good condition. Would definitely rent again!"</p>
                  <p className="text-sm" style={{color: 'black'}}>– Christen Diehl, July 2025 (Google)</p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4 border-l-4 border-green-400/50">
                  <p className="italic mb-2" style={{color: 'black'}}>"An amazing car rental company. Much better than the big brand places at the airport. No hidden costs or surprises, they were so professional and friendly with excellent communication. I totally recommend using Avant…The office is a short ride by shuttle from the airport and we didn't have to wait"</p>
                  <p className="text-sm" style={{color: 'black'}}>– Mathew Bailey, July 2025 (Google)</p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4 border-l-4 border-green-400/50">
                  <p className="italic mb-2" style={{color: 'black'}}>"Look into Avant Rental Car. I had an awesome experience and the price they quoted was the price I paid. No hidden fees. It was like $200 for 4 days. They even dropped the car off for me in PDC and I returned it to them at CUN airport. They have a location right outside the airport and shuttle you over to the terminal"</p>
                  <p className="text-sm" style={{color: 'black'}}>– westwoodft, January 2025 (Reddit)</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <a 
                href="https://www.avantrentacar.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black hover:bg-gray-800 text-white font-black text-3xl px-20 py-8 rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-2xl border-4 border-white"
                style={{
                  fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  minWidth: '280px'
                }}
              >
                BOOK NOW
              </a>
            </div>
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
                Confused about the best transportation approach for you?
              </p>
              <p className="text-white/95 mb-6" style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontSize: '18px'}}>
                Want to discuss other potential options?
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
                      fontFamily: "Arial, sans-serif"
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
        
        ul.custom-bullets ul.custom-bullets ul.custom-bullets li::before {
          content: "—";
          color: black;
        }

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
