"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useIsMobile } from "@/hooks/use-mobile"

export default function LineupPage() {
  const [mounted, setMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const isMobile = useIsMobile()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date('2026-01-16T00:00:00').getTime()
    
    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  const scrollToMap = () => {
    document.getElementById('festival-map')?.scrollIntoView({ 
      behavior: 'smooth' 
    })
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
      label: "FESTIVAL", 
      sublabel: "MAP",
      href: "#festival-map", 
      disabled: false,
      onClick: scrollToMap
    },
    { 
      label: "FAQS", 
      sublabel: "",
      href: "/faqs", 
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
        {/* Logo */}
        <div className="p-4 md:p-6 lg:p-8">
          <div className="flex justify-center">
            <div className="w-full max-w-sm md:max-w-md">
              <Image
                src="/bremmiepalooza-logo-for-cta.png"
                alt="Bremmiepalooza 2026"
                width={400}
                height={200}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                className="mx-auto"
                priority
              />
            </div>
          </div>
        </div>

        {/* ABSOLUTELY POSITIONED Navigation Banner - SUPER THIN */}
        <div 
          className="w-full z-20"
          style={{
            position: 'absolute',
            top: isMobile ? '180px' : '220px', // Adjust these values as needed
            left: '0',
            right: '0'
          }}
        >
          <div className="bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300" style={{ height: isMobile ? '20px' : '25px' }}>
            <div className="flex justify-center items-center gap-4 md:gap-8 px-2 h-full relative">
              {navButtons.map((button, index) => (
                <button
                  key={index}
                  onClick={button.onClick}
                  disabled={button.disabled}
                  className={`
                    relative flex flex-col items-center justify-center transition-all duration-200 transform
                    ${button.disabled 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:scale-110 active:scale-95'
                    }
                  `}
                  style={{
                    minWidth: isMobile ? '70px' : '120px',
                    minHeight: isMobile ? '80px' : '100px', // MUCH taller than banner
                    marginTop: isMobile ? '-30px' : '-40px' // Move up to center on thin banner
                  }}
                >
                  {/* LARGE Icons that overflow the banner */}
                  <div className="text-4xl md:text-6xl mb-1">
                    {button.label === 'TICKETS' && '🎫'}
                    {button.label === 'FESTIVAL' && '🗺️'}
                    {button.label === 'FAQS' && '❓'}
                    {button.label === 'TRAVEL' && '✈️'}
                    {button.label === 'BOOK MY' && '🏨'}
                  </div>
                  
                  {/* LARGE TEXT that overflows the banner */}
                  <div className="text-center">
                    <div 
                      className="text-sm md:text-lg font-black uppercase tracking-wider text-black leading-tight zolla-outlined"
                      style={{
                        textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                      }}
                    >
                      {button.label}
                    </div>
                    {button.sublabel && (
                      <div 
                        className="text-xs md:text-base font-bold uppercase text-black leading-tight zolla-outlined"
                        style={{
                          textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                        }}
                      >
                        {button.sublabel}
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Add top margin to content to account for absolute positioned banner */}
        <div style={{ marginTop: isMobile ? '100px' : '120px' }}>
          
        {/* Simple Countdown Timer - Just numbers */}
        <section className="px-4 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="text-4xl md:text-6xl font-black text-white mb-1"
                    style={{
                      fontFamily: "'Zolla Pro Outlined', 'Impact', sans-serif",
                      textShadow: '2px 2px 4px rgba(0,0,0,0.7), 0 0 10px rgba(255,255,255,0.3)'
                    }}
                  >
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div 
                    className="text-sm md:text-lg text-white font-bold uppercase tracking-wider"
                    style={{
                      fontFamily: "'Zolla Pro', 'Arial Black', sans-serif",
                      textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Lineup/Invite Section */}
        <section className="px-4 mb-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-8 uppercase tracking-wider" style={{
              fontFamily: "'Zolla Pro Outlined', 'Zolla Pro', 'Impact', sans-serif",
              textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
              color: '#d81b8c'
            }}>
              THE LINEUP
            </h2>
            
            {/* Your Actual Invite Image */}
            <div className="bg-white rounded-2xl shadow-2xl border-4 border-black overflow-hidden">
              <div className="p-4">
                <Image
                  src="/bremmiepalooza-invite.png"
                  alt="Bremmiepalooza 2026 Festival Lineup"
                  width={1200}
                  height={800}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  className="rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Festival Map Section */}
        <section id="festival-map" className="px-4 mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-8 text-white uppercase tracking-wider" style={{
              fontFamily: "'Zolla Pro Outlined', 'Zolla Pro', 'Impact', sans-serif",
              textShadow: '3px 3px 6px rgba(0,0,0,0.5)'
            }}>
              FESTIVAL MAP
            </h2>
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-4 border-yellow-400">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-xl md:text-2xl font-black mb-4 text-black uppercase">
                  Cancun Venue Map
                </h3>
                <p className="text-gray-700 mb-6 font-semibold">
                  Interactive map showing all event locations, hotels, and points of interest
                </p>
                <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl p-8 min-h-96 flex items-center justify-center border-2 border-gray-300">
                  <p className="text-gray-600 font-semibold text-lg">
                    [Interactive map will be embedded here]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Weather Widget at bottom */}
        <section className="px-4 mb-12">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-400 to-cyan-300 rounded-2xl p-6 shadow-xl border-4 border-white">
            <h3 className="text-xl md:text-2xl font-black text-center mb-6 text-white uppercase tracking-wider" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
              Cancun Weather Forecast
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  day: "Friday",
                  date: "Jan 16",
                  icon: "☀️",
                  high: "84°F",
                  low: "73°F",
                  condition: "Sunny & Clear"
                },
                {
                  day: "Saturday", 
                  date: "Jan 17",
                  icon: "🌤️",
                  high: "82°F",
                  low: "74°F", 
                  condition: "Partly Cloudy"
                },
                {
                  day: "Sunday",
                  date: "Jan 18", 
                  icon: "☀️",
                  high: "85°F",
                  low: "75°F",
                  condition: "Perfect for Boating!"
                }
              ].map((forecast, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center border-2 border-white/30">
                  <div className="text-lg font-black text-white mb-1" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
                    {forecast.day}
                  </div>
                  <div className="text-sm text-white/90 mb-3 font-semibold">
                    {forecast.date}
                  </div>
                  <div className="text-4xl mb-3">
                    {forecast.icon}
                  </div>
                  <div className="text-xl font-black text-white mb-1" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
                    {forecast.high} / {forecast.low}
                  </div>
                  <div className="text-sm text-white font-bold" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
                    {forecast.condition}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-6">
              <div className="text-white font-bold text-lg" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
                Perfect Festival Weather in Paradise! 🌴
              </div>
              <div className="text-sm text-white/90 mt-2 font-semibold">
                Cancun, Mexico • January 16-18, 2026
              </div>
            </div>
          </div>
        </section>

        </div> {/* End of margin div */}
      </div>

      {/* CSS with Font Loading */}
      <style jsx global>{`
        @font-face {
          font-family: 'Zolla Pro';
          src: url('/fonts/Zolla%20Pro.woff') format('woff');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: 'Zolla Pro Outlined';
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

        /* Force outlined font loading */
        .zolla-outlined {
          font-family: 'Zolla Pro Outlined', 'Zolla Pro', 'Impact', 'Arial Black', sans-serif !important;
        }
      `}</style>
    </main>
  )
}
