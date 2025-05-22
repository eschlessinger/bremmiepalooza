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
      onClick: null,
      color: "bg-yellow-400",
      textColor: "text-red-600"
    },
    { 
      label: "FESTIVAL", 
      sublabel: "MAP",
      href: "#festival-map", 
      disabled: false,
      onClick: scrollToMap,
      color: "bg-green-400",
      textColor: "text-purple-800"
    },
    { 
      label: "TRAVEL", 
      sublabel: "INFO",
      href: "/travel-info", 
      disabled: false,
      onClick: null,
      color: "bg-blue-400",
      textColor: "text-white"
    },
    { 
      label: "FAQS", 
      sublabel: "",
      href: "/faqs", 
      disabled: false,
      onClick: null,
      color: "bg-pink-400",
      textColor: "text-black"
    },
    { 
      label: "BOOK MY", 
      sublabel: "HOTEL",
      href: "/book-hotel", 
      disabled: false,
      onClick: null,
      color: "bg-orange-400",
      textColor: "text-white"
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
        {/* Header with logo */}
        <header className="p-4 md:p-6 lg:p-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
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

          {/* Vintage Festival-Style Navigation Banner */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 p-2 rounded-2xl shadow-2xl border-4 border-white">
              <div className="flex flex-wrap justify-center gap-1 md:gap-2">
                {navButtons.map((button, index) => (
                  <button
                    key={index}
                    onClick={button.onClick}
                    disabled={button.disabled}
                    className={`
                      relative px-3 py-4 md:px-6 md:py-6 text-center
                      border-3 border-black rounded-xl transition-all duration-200 transform
                      font-black uppercase tracking-wider shadow-lg overflow-hidden
                      ${button.color} ${button.textColor}
                      ${button.disabled 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:scale-105 hover:shadow-xl active:scale-95'
                      }
                    `}
                    style={{
                      fontFamily: "'Impact', 'Arial Black', sans-serif",
                      textShadow: button.disabled ? 'none' : '1px 1px 2px rgba(0,0,0,0.3)',
                      minWidth: isMobile ? '60px' : '100px',
                      minHeight: isMobile ? '60px' : '80px'
                    }}
                  >
                    {/* Background Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 z-0">
                      <div className="text-4xl md:text-6xl">
                        {button.label === 'TICKETS' && '🎫'}
                        {button.label === 'FESTIVAL' && '🗺️'}
                        {button.label === 'TRAVEL' && '✈️'}
                        {button.label === 'FAQS' && '❓'}
                        {button.label === 'BOOK MY' && '🏨'}
                      </div>
                    </div>
                    
                    {/* Button text content */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full">
                      <div className={`text-xs md:text-lg font-black leading-tight`}>
                        {button.label}
                      </div>
                      {button.sublabel && (
                        <div className={`text-xs md:text-sm font-bold mt-1 leading-tight`}>
                          {button.sublabel}
                        </div>
                      )}
                    </div>
                    
                    {/* Vintage-style decorative corners */}
                    <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-black rounded-tl z-10"></div>
                    <div className="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-black rounded-tr z-10"></div>
                    <div className="absolute bottom-1 left-1 w-2 h-2 border-b-2 border-l-2 border-black rounded-bl z-10"></div>
                    <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-black rounded-br z-10"></div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Countdown Timer */}
        <section className="px-4 mb-8">
          <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-4 border-pink-400">
            <h2 className="text-2xl md:text-3xl font-black text-center mb-6 text-black uppercase tracking-wider">
              Countdown to Bremmiepalooza 2026
            </h2>
            <div className="grid grid-cols-4 gap-4 text-center">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-b from-[#d81b8c] to-[#ff0099] text-white rounded-xl p-4 border-2 border-white shadow-lg">
                  <div className="text-2xl md:text-4xl font-black font-mono">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs md:text-sm uppercase tracking-wider mt-1 font-bold">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Weather Widget */}
        <section className="px-4 mb-8">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-blue-400 to-cyan-300 rounded-2xl p-6 shadow-xl border-4 border-white">
            <h3 className="text-xl md:text-2xl font-black text-center mb-4 text-white uppercase tracking-wider" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
              Cancun Weather
            </h3>
            <div className="text-center">
              <div className="text-6xl mb-2">☀️</div>
              <div className="text-2xl font-black text-white mb-2" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>82°F / 28°C</div>
              <div className="text-white font-bold" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>Sunny & Perfect for a Festival!</div>
              <div className="text-sm text-white/90 mt-2 font-semibold">
                January 16-18, 2026 • Cancun, Mexico
              </div>
            </div>
          </div>
        </section>

        {/* Main Lineup/Invite Section - Your Actual Invite */}
        <section className="px-4 mb-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-8 text-white uppercase tracking-wider" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.5)'}}>
              THE LINEUP
            </h2>
            
            {/* Your Festival Invite */}
            <div className="bg-white rounded-2xl shadow-2xl border-4 border-black overflow-hidden">
              <div className="relative">
                {/* Main invite content matching your design */}
                <div 
                  className="relative p-6 md:p-8"
                  style={{
                    background: "linear-gradient(135deg, #ff0099 0%, #ff6b9d 25%, #4ecdc4 50%, #45b7d1 75%, #96ceb4 100%)"
                  }}
                >
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="text-sm md:text-base text-black font-bold mb-2">
                      Cancun, MX<br />
                      January 16-18<br />
                      2026
                    </div>
                    <div className="text-4xl md:text-7xl font-black text-purple-900 mb-4 leading-none" style={{textShadow: '2px 2px 4px rgba(255,255,255,0.5)'}}>
                      BREMMIEPALOOZA
                    </div>
                    <div className="text-lg md:text-2xl text-yellow-400 font-bold" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
                      A festival for the festiv-all time
                    </div>
                  </div>

                  {/* Friday - The Pregame */}
                  <div className="mb-8 bg-pink-300/80 rounded-2xl p-4 md:p-6 border-2 border-black">
                    <div className="flex items-center mb-4">
                      <div className="text-lg md:text-xl font-bold text-black mr-4">Friday</div>
                      <div className="text-2xl md:text-4xl font-black text-black">THE PREGAME</div>
                    </div>
                    <div className="text-sm md:text-base font-bold text-black leading-relaxed">
                      WELCOME DRINKS AND GAMES ON THE BEACH • BEER PONG TOURNAMENT<br />
                      KICKOFF • LADDER BALL • BAGGO / CORNHOLE / BAGS • BOCCE BALL<br />
                      MARGARITAS • WHITE CLAW • CORONA • MILLER LITE • BUD LIGHT • GIN &<br />
                      TONIC • LONG LIVE THE QUEEN • JELLO SHOTS • GOOD VIBES
                    </div>
                  </div>

                  {/* Saturday - The Main Stage */}
                  <div className="mb-8 bg-cyan-300/80 rounded-2xl p-4 md:p-6 border-2 border-black">
                    <div className="flex items-center mb-4">
                      <div className="text-lg md:text-xl font-bold text-black mr-4">Saturday</div>
                      <div className="text-2xl md:text-4xl font-black text-black">THE MAIN STAGE</div>
                    </div>
                    <div className="text-sm md:text-base font-bold text-black leading-relaxed">
                      THE REASON WE'RE IN CANCUN! • DANCE AND CELEBRATE WITH US UNTIL<br />
                      THE WEE HOURS OF THE MORNING • A SPECIAL APPEARANCE TO TAKE<br />
                      PLACE AT 6PM • THEN DANCING • DRINKING • EATING • BEER PONG<br />
                      TOURNAMENT SEMI FINALS • SUNRISE VIEWING 5AM • YOU'LL SLEEP<br />
                      WHEN YOU'RE DEAD (OR ON MONDAY SINCE YOU DON'T HAVE WORK!)
                    </div>
                  </div>

                  {/* Sunday - The Aftershow */}
                  <div className="mb-6 bg-blue-300/80 rounded-2xl p-4 md:p-6 border-2 border-black">
                    <div className="flex items-center mb-4">
                      <div className="text-lg md:text-xl font-bold text-black mr-4">Sunday</div>
                      <div className="text-2xl md:text-4xl font-black text-black">THE AFTERSHOW</div>
                    </div>
                    <div className="text-sm md:text-base font-bold text-black leading-relaxed">
                      WE'RE ON A BOAT! (feat. mimosas) • BREMMIEPALOOZA WOULD NOT BE<br />
                      COMPLETE WITHOUT ONE FINAL RAVE • THIS TIME ABOARD A BOAT • DON'T<br />
                      FORGET YOUR FLIPPIE FLOPPIES • SWIMSUIT • SUNSCREEN • WE'LL BRING THE<br />
                      REST • EVERYBODY LOOK AT US CAUSE WE'RE SAILING ON A BOAT
                    </div>
                  </div>

                  {/* Bottom decorative elements */}
                  <div className="relative">
                    {/* Fish and decorative elements */}
                    <div className="flex justify-center space-x-4 text-2xl md:text-4xl mb-4">
                      🐠 🐠 🐠 🐠 🐠
                    </div>
                    
                    {/* Festival doodles section */}
                    <div className="grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-4 text-xl md:text-3xl">
                      🍺 📱 🏐 💕 ⏰ 🌴 🎵 🍸
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Festival Map Section */}
        <section id="festival-map" className="px-4 mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-8 text-white uppercase tracking-wider" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.5)'}}>
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
      </div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient-shift {
          background-size: 600% 600%;
          animation: gradient-shift 10s ease infinite;
        }

        .border-3 {
          border-width: 3px;
        }
      `}</style>
    </main>
  )
}
