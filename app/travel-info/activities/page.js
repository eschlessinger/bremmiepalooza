"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useIsMobile } from "@/hooks/use-mobile"

export default function ActivitiesPage() {
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
    { id: 'ground-transportation', label: 'Ground Transportation', icon: '🛬', href: '/travel-info/ground-transportation', active: false },
    { id: 'documents', label: 'Documents', icon: '📄', href: '/travel-info/documents', active: false },
    { id: 'packing', label: 'Packing', icon: '🧳', href: '/travel-info/packing', active: false },
    { id: 'activities', label: 'Activities', icon: '🏖️', href: '/travel-info/activities', active: true }
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

              {/* Wedding Weekend Bites Section */}
              <section className="mb-12">
                <h2 
                  className="text-3xl md:text-4xl font-black text-center mb-8 uppercase tracking-wider" 
                  style={{
                    fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                    textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                    color: '#d81b8c'
                  }}
                >
                  Wedding Weekend Bites
                </h2>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
                  <div className="space-y-8 text-black" style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontSize: '16px'}}>
                    
                    {/* Restaurante Mextreme */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 uppercase tracking-wide"
                          style={{
                            fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                          }}>
                        Restaurante Mextreme
                      </h3>
                      <p><strong>Distance:</strong> ~9 min walk / ~4 min drive from Presidente Intercontinental Hotel</p>
                      <p><strong>Avg. Cost:</strong> ~$10–20 USD per person</p>
                      <p><strong>Why It Makes The List:</strong> Part restaurant, part fiesta—great food, live performers, and a festive vibe that fits perfectly with the wedding weekend energy.</p>
                      <p><strong>Hours:</strong> 7:30-12AM</p>
                      <p><strong>Description:</strong> High-energy restaurant with live performers and Mexican decor. A favorite among locals and tourists alike.</p>
                      <p><strong>Must-orders:</strong> Fried shrimp tacos, Huevos Rancheros, Mexican Coffee</p>
                      <p><strong>URL:</strong> <a href="https://mextrememexico.com/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 underline">https://mextrememexico.com/</a></p>
                    </div>

                    {/* Marakame */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 uppercase tracking-wide"
                          style={{
                            fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                          }}>
                        Marakame
                      </h3>
                      <p><strong>Distance:</strong> ~14 min drive from Presidente Intercontinental Hotel</p>
                      <p><strong>Avg. Cost:</strong> ~$15–25 USD per person</p>
                      <p><strong>Why It Makes The List:</strong> It's got that wow factor—beautiful treehouse vibes, live music, and elevated Mexican dishes. A perfect brunch or dinner vibe.</p>
                      <p><strong>Hours:</strong> M-F: 8-12AM, Sat/Sun: 9-12AM</p>
                      <p><strong>Description:</strong> Treehouse-style venue with live music, lush courtyard seating, and beautifully presented food.</p>
                      <p><strong>Must-orders:</strong> Molcajete de Cochinita, Sweet-Sour Chicken Pizza, Chilaquiles</p>
                      <p><strong>URL:</strong> <a href="https://marakame.mx/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 underline">https://marakame.mx/</a></p>
                    </div>

                    {/* Taquería Tres Reyes */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 uppercase tracking-wide"
                          style={{
                            fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                          }}>
                        Taquería Tres Reyes
                      </h3>
                      <p><strong>Distance:</strong> ~15 min drive from Presidente Intercontinental Hotel</p>
                      <p><strong>Avg. Cost:</strong> ~$6–10 USD per person</p>
                      <p><strong>Why It Makes The List:</strong> Hands-down one of the best places to try rare Yucatán taco varieties like relleno negro and lechón. Super local, super flavorful.</p>
                      <p><strong>Hours:</strong> 8:30AM-2PM</p>
                      <p><strong>Description:</strong> A go-to local taquería known for its Yucatecan-style meats—rich in flavor and deeply rooted in regional tradition.</p>
                      <p><strong>Must-orders:</strong> Relleno Negro, Cochinita Pibil, Lechón, Barbacoa de Chivo, Lengua, Buche</p>
                    </div>

                    {/* Puerto Santo */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 uppercase tracking-wide"
                          style={{
                            fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                          }}>
                        Puerto Santo
                      </h3>
                      <p><strong>Distance:</strong> ~18 min drive from Presidente Intercontinental Hotel</p>
                      <p><strong>Avg. Cost:</strong> ~$20-30 USD / person</p>
                      <p><strong>Why It Makes The List:</strong> Amazing Seafood on the Beach!</p>
                      <p><strong>Hours:</strong> 12:30-11PM</p>
                      <p><strong>Description:</strong> Dining right on the sand with the ocean just steps away, Puerto Santo delivers a casual yet elegant experience with fresh seafood, generous portions, and attentive service. The ambiance is enhanced by live music and beautiful lighting in the evenings. Perfect for a relaxed seaside lunch or a sunset dinner.</p>
                      <p><strong>Must-orders:</strong> Tuna Tartare, Shrimp Ceviche, Seafood Esquites</p>
                      <p><strong>URL:</strong> <a href="https://puertosanto.com.mx/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 underline">https://puertosanto.com.mx/</a></p>
                    </div>

                    {/* Barbacoa "La Laja" */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 uppercase tracking-wide"
                          style={{
                            fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                          }}>
                        Barbacoa "La Laja" (Mercado Cambray)
                      </h3>
                      <p><strong>Distance:</strong> ~20 min drive from Presidente Intercontinental Hotel</p>
                      <p><strong>Avg. Cost:</strong> ~$10–18 USD per person</p>
                      <p><strong>Why It Makes The List:</strong> Serving up barbacoa de chivo the way it's meant to be eaten—tender, steamy, and soul-warming.</p>
                      <p><strong>Hours:</strong> Tuesday–Sunday, 8 AM–4 PM</p>
                      <p><strong>Description:</strong> A hidden gem serving traditional goat barbacoa, rich pozole, and piquant consommé—authentic and deeply loved by locals.</p>
                      <p><strong>Must-orders:</strong> Barbacoa de Chivo, Pozole, Consomé</p>
                    </div>

                  </div>
                </div>
              </section>

              {/* Late-Night Eats Section */}
              <section className="mb-12">
                <h2 
                  className="text-3xl md:text-4xl font-black text-center mb-8 uppercase tracking-wider" 
                  style={{
                    fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                    textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                    color: '#d81b8c'
                  }}
                >
                  Late-Night Eats
                </h2>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
                  <div className="space-y-8 text-black" style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontSize: '16px'}}>
                    
                    {/* Taco Factory */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 uppercase tracking-wide"
                          style={{
                            fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                          }}>
                        Taco Factory
                      </h3>
                      <p><strong>Distance:</strong> ~10 min walk / ~3 min drive from Presidente Intercontinental Hotel</p>
                      <p><strong>Avg. Cost:</strong> ~$8–15 USD per person</p>
                      <p><strong>Why It Makes The List:</strong> Our Wedding Planner sent us here for lunch one day and we were very happy with it</p>
                      <p><strong>Hours:</strong> 2PM-5AM</p>
                      <p><strong>Description:</strong> A well-loved taco spot in the Hotel Zone with consistently fresh tortillas, generous fillings, and great salsas—perfect for a casual, satisfying bite</p>
                      <p><strong>Must-orders:</strong> According to our Wedding Planner, the Arracherra (Beef) Taco. According to Emmie, the Al Pastor Taco. According to Brett, the crispy cheese and the melted cheese. (Order all of them!)</p>
                      <p><strong>URL:</strong> <a href="http://www.tacofactory.mx/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 underline">http://www.tacofactory.mx/</a></p>
                    </div>

                    {/* The Surfin Burrito */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 uppercase tracking-wide"
                          style={{
                            fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                          }}>
                        The Surfin Burrito
                      </h3>
                      <p><strong>Distance:</strong> ~16 min walk / ~5 min drive from Presidente Intercontinental Hotel</p>
                      <p><strong>Avg. Cost:</strong> ~$8–15 USD per person</p>
                      <p><strong>Why It Makes The List:</strong> Open until 3AM!</p>
                      <p><strong>Hours:</strong> 7-3AM</p>
                      <p><strong>Description:</strong> A beachy, chill spot known for massive customizable burritos, tacos, smoothies, and cocktails. Friendly, casual, and always open.</p>
                      <p><strong>Must-orders:</strong> Build-your-own burrito, Coconut shrimp, Fajita nachos, Fish tacos, Tropical cocktails</p>
                      <p><strong>URL:</strong> <a href="https://the-surfin-burrito.res-menu.com/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 underline">https://the-surfin-burrito.res-menu.com/</a></p>
                    </div>

                    {/* Tacos Chachalacos */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 uppercase tracking-wide"
                          style={{
                            fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                          }}>
                        Tacos Chachalacos
                      </h3>
                      <p><strong>Distance:</strong> ~16 min walk / ~5 min drive from Presidente Intercontinental Hotel</p>
                      <p><strong>Avg. Cost:</strong> ~$6–12 USD per person</p>
                      <p><strong>Why It Makes The List:</strong> A casual taco joint that locals recommend for hearty portions, great flavor, and quick service right in the heart of the Hotel Zone.</p>
                      <p><strong>Hours:</strong> 10-2AM</p>
                      <p><strong>Description:</strong> Known for its generously stuffed tacos and authentic taste, Tacos Chachalacos is a perfect late-night option after a night out.</p>
                      <p><strong>Must-orders:</strong> Tacos al Pastor, Gringas, Arrachera Tacos, Chorizo Tacos</p>
                      <p><strong>URL:</strong> <a href="https://loschachalacos.com.mx/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 underline">https://loschachalacos.com.mx/</a></p>
                    </div>

                    {/* Los Tarascos */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 uppercase tracking-wide"
                          style={{
                            fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                          }}>
                        Los Tarascos
                      </h3>
                      <p><strong>Distance:</strong> ~11+ min drive from Presidente Intercontinental Hotel, depending on traffic</p>
                      <p><strong>Avg. Cost:</strong> ~$6–12 USD per person</p>
                      <p><strong>Why It Makes The List:</strong> If your guests are craving late-night tacos after a long day of dancing, this is the no-fail spot. Authentic pastor straight off the trompo.</p>
                      <p><strong>Hours:</strong> Daily, approximately 1 PM–1 AM</p>
                      <p><strong>Description:</strong> A local favorite for tacos al pastor (trompo-style) with a casual, welcoming atmosphere—late-night cravings, covered.</p>
                      <p><strong>Must-orders:</strong> Tacos al Pastor, Quesataco, Gringas</p>
                      <p><strong>URL:</strong> <a href="https://lostarascos.com.mx/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 underline">https://lostarascos.com.mx/</a></p>
                    </div>

                  </div>
                </div>
              </section>

              {/* Daytime Adventures Section */}
              <section className="mb-12">
                <h2 
                  className="text-3xl md:text-4xl font-black text-center mb-8 uppercase tracking-wider" 
                  style={{
                    fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                    textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                    color: '#d81b8c'
                  }}
                >
                  Daytime Adventures
                </h2>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
                  <div className="space-y-8 text-black" style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontSize: '16px'}}>
                    
                    {/* Parque Las Palapas */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 uppercase tracking-wide"
                          style={{
                            fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                          }}>
                        Parque Las Palapas & Downtown Markets
                      </h3>
                      <p><strong>Distance:</strong> ~10 min drive (~4 km)</p>
                      <p><strong>Hours:</strong> Evenings & weekends most active (market stalls open from ~4 PM)</p>
                      <p><strong>Description:</strong> Downtown community plaza full of food stalls, street performers, and local vendors. Ideal for souvenirs and snacks.</p>
                      <p><strong>Cost:</strong> Free</p>
                      <p><strong>Why It Makes The List:</strong> Lively local square where Cancún residents actually hang out—street food, crafts, and performances without the Hotel Zone markup.</p>
                      <p><strong>Testimonials:</strong></p>
                      <p><em>"Go to Parque de las Palapas in the evening…there's local craft people having tables set up and selling their wares along with a bunch of various food carts and some walk up places on the edge of park. Also has entertainment, typically a clown doing his act, and also for the kids, they have electric cars to rent and ride around…things sorta wind down around 10 or 11 but if looking to do more, there's bars and restaurants all around as well" -Healthy_Turnover_627, Reddit, June 2025</em></p>
                      <p><em>"Go to Parque Las Palapas, enjoy some street food like "marquesita" a crispy crepe with sweet and salty cheese known as queso de bola" -Rafapaf, Reddit, June 2025</em></p>
                    </div>

                    {/* Mangrove Speedboat */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 uppercase tracking-wide"
                          style={{
                            fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                          }}>
                        Mangrove Speedboat / Speedboat & Snorkel / Jet Ski Tours — Jungle Tour Adventure Cancun
                      </h3>
                      <p><strong>Distance:</strong> ~8 min drive from Presidente Intercontinental Hotel</p>
                      <p><strong>Hours:</strong> Tours offered daily, multiple departure times between 9 AM–3 PM</p>
                      <p><strong>Description:</strong> Guided 90-minute excursions through lush mangrove canals where you can spot wildlife and enjoy the thrill of up to 50 km/h on calm waters. Many packages include snorkeling at the Mesoamerican Barrier Reef and visits to the MUSA underwater museum sculptures.</p>
                      <p><strong>Cost:</strong> ~$45–180 USD per person, depending on solo or shared boat, +$20 / person national park surcharge & dock fee</p>
                      <p><strong>Why It Makes The List:</strong> A thrilling and scenic way to explore Nichupté Lagoon's mangrove channels while piloting your own speedboat / jet ski, with an optional snorkeling stop at Punta Nizuc coral reef and MUSA.</p>
                      <p><strong>URL:</strong> <a href="https://jungletourcancun.com/mangrove-speedboat-tour.html" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 underline">https://jungletourcancun.com/mangrove-speedboat-tour.html</a></p>
                      <p><strong>Additional notes:</strong></p>
                      <p>• It appears you may be able to add a tequila tasting to the experience essentially for free… (see next activity / this link: <a href="https://cancuntequilatasting.com/cancun-tequila-tasting-and-speedboat-tour-combo/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 underline">https://cancuntequilatasting.com/cancun-tequila-tasting-and-speedboat-tour-combo/</a>)</p>
                    </div>

                    {/* Cancun Tequila Tasting */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 uppercase tracking-wide"
                          style={{
                            fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                          }}>
                        Cancun Tequila Tasting
                      </h3>
                      <p><strong>Distance:</strong> ~7-9 min drive from Presidente Intercontinental Hotel (depending on which location you choose)</p>
                      <p><strong>Hours:</strong> Multiple daily slots (e.g., 9:00, 13:00, 15:00, 16:00); reservation recommended. cancuntequilatasting.com</p>
                      <p><strong>Description:</strong> Learn the history, process, and flavors of authentic tequila in a friendly, engaging setting. Guests rave about the knowledgeable hosts, generous pours, and light bites like guacamole and chips. Unique flavored tequilas (coffee, pistachio, walnut) are a highlight. Great for groups, celebrations, or curious first-timers.</p>
                      <p><strong>Cost:</strong> ~US$49–72+ per person, depending on package</p>
                      <p><strong>Why It Makes The List:</strong> A top-rated, intimate tequila experience led by expert hosts like Yasmin and Sergio—equal parts fun, educational, and delicious.</p>
                      <p><strong>URL:</strong> <a href="https://cancuntequilatasting.com/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 underline">https://cancuntequilatasting.com/</a></p>
                    </div>

                    {/* MUSA */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 uppercase tracking-wide"
                          style={{
                            fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                          }}>
                        Cancún Underwater Museum (MUSA)
                      </h3>
                      <p><strong>Distance:</strong> ~20 min drive (~13 km)</p>
                      <p><strong>Hours:</strong> Tours typically operate from ~9 AM-2 PM</p>
                      <p><strong>Description:</strong> Snorkel, dive, or glass-bottom-boat past 500+ sculptures—great visibility on calm days; best booked with reputable operators.</p>
                      <p><strong>Cost:</strong> ~$35-139 USD +$20 docking / natural protected area fee per person, depending on tour type</p>
                      <p><strong>Why It Makes The List:</strong> Surreal submerged sculpture garden that doubles as an artificial reef—art meets conservation.</p>
                      <p><strong>URL:</strong> <a href="https://musamexico.org" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 underline">https://musamexico.org</a></p>
                    </div>

                    {/* Selvatica Eco Park */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 uppercase tracking-wide"
                          style={{
                            fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                          }}>
                        Selvatica Eco Park
                      </h3>
                      <p><strong>Distance:</strong> ~55 min drive</p>
                      <p><strong>Hours:</strong> Daily 9 AM–5 PM</p>
                      <p><strong>Description:</strong> Very strongly reviewed (see especially the Google Review from Rhiannon Byrd) Action-packed jungle adventure park with zip-lining, cenote swims, ATV rides, and bungee swings. Great for thrill seekers.</p>
                      <p><strong>Cost:</strong> Packages from ~$99 USD–$159 USD depending on experience</p>
                      <p><strong>Why It Makes The List:</strong> Jungle thrills—zip-lines, ATVs, cenote swims—in a single, well-run park.</p>
                      <p><strong>URL:</strong> <a href="https://www.selvatica.com.mx/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 underline">https://www.selvatica.com.mx/</a></p>
                      <p><strong>Additional notes:</strong></p>
                      <p>• They will pick you up and drop you off at your hotel for ~$15-20 total</p>
                      <p>• Reviews suggest you can also add-on insurance, towels, photos, etc.</p>
                      <p>• The "Gimmie All" package seems most compelling if you have time for it (may be easiest to fit in if you are extending a day or 2 before and /or after Bremmiepalooza, but probably POSSIBLE to do on Saturday if you wake up early)</p>
                      <p>• There is currently a promotion for 35% off (SUMMER35), making it $84 pp for the Gimmie All package (without transportation, etc. add-ons)</p>
                    </div>

                  </div>
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
