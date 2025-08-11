"use client"

import { useEffect, useRef, useState } from "react"
import BeachFooter from "../../../components/BeachFooter"
import BremmieDoodle from "../../../components/BremmieDoodle"

export default function SuccessPage() {
  const [mounted, setMounted] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // keep the --logo-h var in sync with actual header height
  useEffect(() => {
    if (!headerRef.current) return
    const set = () =>
      document.documentElement.style.setProperty(
        "--logo-h",
        `${headerRef.current?.offsetHeight ?? 0}px`
      )
    set()
    const ro = new ResizeObserver(set)
    ro.observe(headerRef.current)
    window.addEventListener("resize", set)
    return () => {
      ro.disconnect()
      window.removeEventListener("resize", set)
    }
  }, [])

  if (!mounted) return null

  return (
    <main className="relative min-h-screen">
      {/* gradient bg */}
      <div
        className="fixed inset-0 animate-gradient-shift"
        style={{
          background: "linear-gradient(135deg,#ff0099,#ff6600,#ffcc00,#22cc88,#00ccff,#cc88ff,#ff0099)",
          backgroundSize: "600% 600%",
        }}
      />

      <div className="relative z-10 flex flex-col">
        {/* Logo */}
        <div ref={headerRef} className="p-4 md:p-6 lg:p-8">
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

        {/* Success copy */}
        <div
          className="grid place-items-center px-4"
          style={{
            minHeight: "calc(100svh - var(--wave-h) - var(--logo-h))",
            paddingTop: "clamp(0px, 8vh, 80px)", // desktop adjustment
          }}
        >
          <div className="text-center">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider leading-tight mb-8"
              style={{
                fontFamily: "'ZollaPro','Impact','Arial Black',sans-serif",
                textShadow: "3px 3px 6px rgba(0,0,0,0.5)",
                color: "#d81b8c",
              }}
            >
              You&apos;re In!
            </h1>
            <p
              className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wider mb-4"
              style={{
                fontFamily: "'ZollaPro','Impact','Arial Black',sans-serif",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                color: "#fff",
              }}
            >
              Thank you for securing your tickets!
            </p>
            <p
              className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wider mb-8"
              style={{
                fontFamily: "'ZollaPro','Impact','Arial Black',sans-serif",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                color: "#fff",
              }}
            >
              We can&apos;t wait to see you at Bremmiepalooza!
            </p>
            <p
              className="text-lg md:text-xl lg:text-2xl font-semibold"
              style={{
                fontFamily: "Arial, sans-serif",
                textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                color: "#fff",
              }}
            >
              Check your email for your ticket registration confirmation!
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <BeachFooter height="24vh" bremmieMobileFactor={0.46} />
      <BremmieDoodle />

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
    </main>
  )
}
