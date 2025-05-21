"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Calculate positions in an ellipse (smaller circle with more space from the wave)
  const createEllipticalPositions = (count) => {
    const positions = []
    for (let i = 0; i < count; i++) {
      // Calculate angle in radians (distribute evenly around the circle)
      const angle = (i * 2 * Math.PI) / count

      // Make the ellipse smaller overall (30% horizontal radius instead of 35%)
      // And even shorter vertically (25% vertical radius) to avoid the wave
      const xRadius = 30
      const yRadius = 25

      // Convert to percentage coordinates (centered in the viewport)
      const x = 50 + xRadius * Math.cos(angle)
      const y = 50 + yRadius * Math.sin(angle)

      // Add some randomness to size and rotation
      const size = 9 + Math.random() * 4 // Size between 9-13vmin
      const rotation = (Math.random() - 0.5) * 30 // Rotation between -15 and 15 degrees

      // Calculate animation delay based on position in the circle
      const delay = i * 0.2 // 0.2 seconds between each doodle

      positions.push({ x, y, size, rotation, delay })
    }
    return positions
  }

  // Create 10 positions in a smaller ellipse
  const doodlePositions = createEllipticalPositions(10)

  // Array of doodle image paths
  const doodles = [
    "/doodles/tree.png",
    "/doodles/bikini.png",
    "/doodles/heart.png",
    "/doodles/whiteclaw.png",
    "/doodles/ball.png",
    "/doodles/sunglasses.png",
    "/doodles/star-blue.png",
    "/doodles/music.png",
    "/doodles/sun.png",
    "/doodles/hotdog.png",
  ]

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background: "linear-gradient(135deg, #ff0099, #ff6600, #ffcc00, #22cc88, #00ccff, #cc88ff, #ff0099)",
          backgroundSize: "600% 600%",
        }}
      ></div>

      {/* Doodles arranged in a smaller circle/ellipse */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        {doodlePositions.map((position, index) => {
          const doodleSrc = doodles[index % doodles.length]
          return (
            <div
              key={index}
              className="absolute doodle-animation"
              style={{
                left: `${position.x}%`,
                top: `${position.y}%`,
                width: `${position.size}vmin`,
                height: `${position.size}vmin`,
                transform: `translate(-50%, -50%) rotate(${position.rotation}deg)`,
                animationDelay: `${position.delay}s`,
                zIndex: 20,
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={doodleSrc || "/placeholder.svg"}
                  alt="Festival doodle"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Bremmie doodle positioned on the wave */}
      <div
        className="absolute pointer-events-none z-20"
        style={{
          right: "9%",
          bottom: "32px",
          width: "20vmin",
          height: "20vmin",
          transform: "translateY(0)",
        }}
      >
        <div className="relative w-full h-full">
          <Image src="/doodles/bremmie.png" alt="Bremmie on the beach" fill style={{ objectFit: "contain" }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 z-10 relative">
        {/* Logo and CTA Button */}
        <div className="w-full max-w-md flex flex-col items-center" style={{ marginTop: "15px" }}>
          {/* Logo */}
          <div className="w-full mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image0%20%288%29-beOvenUhAfVvtgkwNbVktfwy0UfMVY.png"
              alt="Bremmiepalooza 2026"
              width={800}
              height={400}
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </div>
          
          {/* Event Details */}
          <div className="text-center mb-8">
            <h2 className="font-bold text-3xl text-white drop-shadow-lg mb-2">Cancún, MX</h2>
            <h3 className="font-bold text-2xl text-white drop-shadow-lg">January 17-19, 2026</h3>
          </div>

          {/* SEE THE LINEUP Button */}
          <Link href="/lineup">
            <button className="bg-purple-700 hover:bg-purple-800 text-yellow-300 font-bold text-2xl py-4 px-8 rounded-full uppercase tracking-wider transform transition-transform duration-200 hover:scale-105 animate-pulse-slow">
              SEE THE LINEUP!
            </button>
          </Link>
        </div>

        {/* Note for deployment - can be removed in production */}
        <div className="fixed bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 text-xs rounded max-w-xs z-30">
          Note: For deployment, replace the Google Font with your custom font
        </div>
      </div>

      {/* Wave Footer */}
      <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 z-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100L48 87.5C96 75 192 50 288 58.3C384 66.7 480 108.3 576 125C672 141.7 768 133.3 864 116.7C960 100 1056 75 1152 66.7C1248 58.3 1344 66.7 1392 70.8L1440 75V200H1392C1344 200 1248 200 1152 200C1056 200 960 200 864 200C768 200 672 200 576 200C480 200 384 200 288 200C192 200 96 200 48 200H0V100Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient id="paint0_linear" x1="720" y1="0" x2="720" y2="200" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EC4899" />
              <stop offset="0.333333" stopColor="#FACC15" />
              <stop offset="0.666667" stopColor="#3B82F6" />
              <stop offset="1" stopColor="#A855F7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient-shift {
          background-size: 600% 600%;
          animation: gradient-shift 10s ease infinite;
        }

        @keyframes doodleAppear {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
          }
          70% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.2) rotate(var(--rotation));
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1) rotate(var(--rotation));
          }
        }

        .doodle-animation {
          --rotation: 0deg;
          opacity: 0;
          animation: doodleAppear 0.6s forwards;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.05);
          }
        }
        
        .animate-pulse-slow {
          animation: pulse 2s infinite alternate ease-in-out;
        }
      `}</style>
    </main>
  )
}
