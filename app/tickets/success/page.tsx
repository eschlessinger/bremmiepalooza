"use client"

import { useEffect, useState } from "react"

export default function SuccessPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="relative min-h-screen">
      <div
        className="fixed inset-0 animate-gradient-shift"
        style={{
          background: "linear-gradient(135deg, #ff0099, #ff6600, #ffcc00, #22cc88, #00ccff, #cc88ff, #ff0099)",
          backgroundSize: "600% 600%",
        }}
      />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Logo Section */}
        <div className="p-4 md:p-6 lg:p-8">
          <div className="flex justify-center">
            <a href="/" className="w-full max-w-sm md:max-w-md">
              <img
                src="/bremmiepalooza-logo-for-cta.png"
                alt="Bremmiepalooza 2026"
                className="w-full h-auto mx-auto cursor-pointer hover:opacity-90 transition-opacity"
              />
            </a>
          </div>
        </div>

        {/* Centered Success Message */}
        <div className="flex-1 flex items-center justify-center px-4" style={{ paddingBottom: '20vh' }}>
          <div className="text-center">
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider leading-tight mb-8"
              style={{
                fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                color: '#d81b8c'
              }}
            >
              You're In!
            </h1>
            
            <p 
              className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wider mb-4"
              style={{
                fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                color: '#fff'
              }}
            >
              Thank you for securing your tickets!
            </p>
            
            <p 
              className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wider mb-8"
              style={{
                fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                color: '#fff'
              }}
            >
              We can't wait to see you at Bremmiepalooza!
            </p>

            <p 
              className="text-lg md:text-xl lg:text-2xl font-semibold"
              style={{
                fontFamily: 'Arial, sans-serif',
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                color: '#fff'
              }}
            >
              Check your email for your ticket registration confirmation!
            </p>
          </div>
        </div>
      </div>

      {/* Wave Footer - Fixed to bottom */}
      <div className="fixed left-0 w-full bottom-0 z-10" style={{ height: "24vh" }}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          style={{ display: "block" }}
        >
          <path
            d="M0 100L48 87.5C96 75 192 50 288 58.3C384 66.7 480 108.3 576 125C672 141.7 768 133.3 864 116.7C960 100 1056 75 1152 66.7C1248 58.3 1344 66.7 1392 70.8L1440 75V200H1392C1344 200 1248 200 1152 200C1056 200 960 200 864 200C768 200 672 200 576 200C480 200 384 200 288 200C192 200 96 200 48 200H0V100Z"
            fill="url(#paint0_linear_desktop)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_desktop"
              x1="720"
              y1="0"
              x2="720"
              y2="200"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#EC4899" />
              <stop offset="0.333333" stopColor="#FACC15" />
              <stop offset="0.666667" stopColor="#3B82F6" />
              <stop offset="1" stopColor="#A855F7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bremmie doodle - Fixed to bottom */}
      <div
        className="fixed pointer-events-none z-20"
        style={{
          right: "6%",
          bottom: "60px",
          width: "20vmin",
          height: "20vmin",
        }}
      >
        <div className="relative w-full h-full">
          <img 
            src="/doodles/bremmie.png" 
            alt="Bremmie on the beach" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <style jsx>{`
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

      <style jsx global>{`
        html {
          scrollbar-gutter: stable;
        }
      `}</style>
    </main>
  )
}
