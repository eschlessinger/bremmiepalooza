"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useIsMobile } from "@/hooks/use-mobile"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Calculate positions in an ellipse with better mobile adjustments
  const createEllipticalPositions = (count) => {
    const positions = []
    for (let i = 0; i < count; i++) {
      // Calculate angle in radians (distribute evenly around the circle)
      const angle = (i * 2 * Math.PI) / count

      // Adjust radius based on screen size
      const xRadius = isMobile ? 35 : 25 // DESKTOP: reduced from 30 to 25, MOBILE: unchanged at 35
      const yRadius = isMobile ? 12 : 25 // No change

      // Calculate x and y positions based on the angle and radius
      const x = 50 + xRadius * Math.cos(angle)

      // MOBILE: Center the ellipse around the logo (moved up significantly)
      // DESKTOP: Keep centered in the middle of the screen
      const y = (isMobile ? 24 : 50) + yRadius * Math.sin(angle)

      // Doodle sizes
      const size = isMobile
        ? 7 + Math.random() * 2 // 7-9vmin on mobile
        : 10 + Math.random() * 4 // 10-14vmin on desktop

      const rotation = (Math.random() - 0.5) * 30
      const delay = i * 0.2

      positions.push({ x, y, size, rotation, delay })
    }
    return positions
  }

  // Create positions in an ellipse
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
    <main className="relative h-screen overflow-hidden">
      {/* Fixed height container to prevent scrolling */}
      <div
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background: "linear-gradient(135deg, #ff0099, #ff6600, #ffcc00, #22cc88, #00ccff, #cc88ff, #ff0099)",
          backgroundSize: "600% 600%",
        }}
      ></div>

      {/* Doodles arranged in an ellipse */}
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

      {/* LOGO - Positioned with absolute positioning */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 z-10"
        style={{
          top: isMobile ? "20vh" : "40vh", // FIXED: Desktop much lower, mobile unchanged
          width: "100%",
          maxWidth: isMobile ? "200px" : "400px", // FIXED: Desktop logo much smaller
        }}
      >
        <Image
          src="/bremmiepalooza-logo-for-cta.png"
          alt="Bremmiepalooza 2026"
          width={800}
          height={400}
          style={{
            width: "100%",
            height: "auto",
          }}
          className="mx-auto"
          priority
        />
      </div>

      {/* CTA BUTTON - Positioned right under logo */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 z-10"
        style={{
          top: isMobile ? "calc(20vh + 50px)" : "calc(40vh + 100px)", // FIXED: Mobile button back to previous position
        }}
      >
        <Link href="/lineup">
          <button 
            className="bg-[#d81b8c] text-white transform transition-transform duration-200 hover:scale-105"
            style={{
              fontFamily: "Arial Black, Helvetica, sans-serif",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: isMobile ? "0.3px" : "1px", // FIXED: Even tighter mobile letter spacing
              borderRadius: "15px", // CHANGED: Back to rounded corners
              border: "none",
              cursor: "pointer",
              padding: isMobile ? "3px 6px" : "8px 16px", // FIXED: Even tighter mobile padding
              fontSize: isMobile ? "11px" : "30px",
              lineHeight: "1.2",
              whiteSpace: "nowrap",
              textAlign: "center", // ADDED: Ensure text is centered
              display: "flex",
              alignItems: "center",
              justifyContent: "center", // ADDED: Center text both horizontally and vertically
            }}
          >
            SEE THE LINEUP
          </button>
        </Link>
      </div>

      {/* Wave Footer - FIXED FOR MOBILE */}
      <div
        className="absolute left-0 w-full z-10"
        style={
          isMobile
            ? {
                bottom: "0",
                height: "60vh",
              }
            : {
                bottom: "0",
                height: "24vh",
              }
        }
      >
        <svg
          width="100%"
          height="100%"
          viewBox={isMobile ? "0 0 1440 600" : "0 0 1440 200"}
          preserveAspectRatio="none"
          style={{ display: "block" }}
        >
          {isMobile ? (
            <>
              <path
                d="M0 200L48 187.5C96 175 192 150 288 158.3C384 166.7 480 208.3 576 225C672 241.7 768 233.3 864 216.7C960 200 1056 175 1152 166.7C1248 158.3 1344 166.7 1392 170.8L1440 175V600H1392C1344 600 1248 600 1152 600C1056 600 960 600 864 600C768 600 672 600 576 600C480 600 384 600 288 600C192 600 96 600 48 600H0V200Z"
                fill="url(#paint0_linear_mobile)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_mobile"
                  x1="720"
                  y1="100"
                  x2="720"
                  y2="600"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EC4899" />
                  <stop offset="0.15" stopColor="#FACC15" />
                  <stop offset="0.3" stopColor="#3B82F6" />
                  <stop offset="0.45" stopColor="#A855F7" />
                  <stop offset="1" stopColor="#A855F7" />
                </linearGradient>
              </defs>
            </>
          ) : (
            <>
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
            </>
          )}
        </svg>
      </div>

      {/* Bremmie doodle */}
      <div
        className="absolute pointer-events-none z-20"
        style={
          isMobile
            ? {
                right: "4%",
                bottom: "40vh",
                width: "20vmin",
                height: "20vmin",
              }
            : {
                right: "6%",
                bottom: "60px",
                width: "20vmin",
                height: "20vmin",
              }
        }
      >
        <div className="relative w-full h-full">
          <Image src="/doodles/bremmie.png" alt="Bremmie on the beach" fill style={{ objectFit: "contain" }} />
        </div>
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
      `}</style>
    </main>
  )
}
