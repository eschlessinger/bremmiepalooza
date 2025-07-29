"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useIsMobile } from "@/hooks/use-mobile"
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  const isMobile = useIsMobile()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      const result = await emailjs.send(
        'service_82dfb16', // Your Service ID
        'template_lsfxu2j', // Your Template ID
{
  from_name: formData.name,
  reply_to: formData.email,
  message: formData.message,
},
        'yyooiTbTgb78rhpg0' // Your Public Key
      )

      console.log('Email sent successfully:', result.text)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Email send failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!mounted) return null

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

        {/* Main Content */}
        <div className="px-4 pb-12 pt-8">
          <div className="max-w-3xl mx-auto">
            <h1 
              className="text-4xl md:text-6xl font-black text-center mb-8 uppercase tracking-wider" 
              style={{
                fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                color: '#d81b8c'
              }}
            >
              Contact Us
            </h1>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
              <p className="text-white/95 text-center mb-8" style={{fontFamily: 'Arial, sans-serif', fontSize: '18px', lineHeight: '1.6'}}>
                We're here to help! Send us a message and we'll get back to you as soon as possible.
              </p>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border-2 border-green-400/50 rounded-xl text-center">
                  <p className="text-white font-semibold" style={{fontFamily: 'Arial, sans-serif'}}>
                    ✅ Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border-2 border-red-400/50 rounded-xl text-center">
                  <p className="text-white font-semibold" style={{fontFamily: 'Arial, sans-serif'}}>
                    ❌ Sorry, there was an error sending your message. Please try again or email us directly at info@bremmiepalooza.com
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-white font-semibold mb-2" 
                    style={{fontFamily: 'Arial, sans-serif', fontSize: '18px'}}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border-2 border-white/30 text-white placeholder-white/60 focus:border-white/60 focus:outline-none backdrop-blur-sm"
                    style={{fontFamily: 'Arial, sans-serif', fontSize: '16px'}}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-white font-semibold mb-2" 
                    style={{fontFamily: 'Arial, sans-serif', fontSize: '18px'}}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border-2 border-white/30 text-white placeholder-white/60 focus:border-white/60 focus:outline-none backdrop-blur-sm"
                    style={{fontFamily: 'Arial, sans-serif', fontSize: '16px'}}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-white font-semibold mb-2" 
                    style={{fontFamily: 'Arial, sans-serif', fontSize: '18px'}}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border-2 border-white/30 text-white placeholder-white/60 focus:border-white/60 focus:outline-none backdrop-blur-sm resize-vertical"
                    style={{fontFamily: 'Arial, sans-serif', fontSize: '16px'}}
                    placeholder="Tell us about your hotel booking question or any other festival-related inquiries..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-block bg-black hover:bg-gray-800 text-white font-black text-2xl px-20 py-6 rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-2xl border-4 border-white ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                    style={{
                      fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                      minWidth: '240px'
                    }}
                  >
                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                </div>
              </form>

              <div className="mt-12 text-center">
                <p className="text-white/80 mb-4" style={{fontFamily: 'Arial, sans-serif', fontSize: '16px'}}>
                  Prefer to email us directly?
                </p>
                <a 
                  href="mailto:info@bremmiepalooza.com"
                  className="text-white font-semibold hover:text-white/80 transition-colors"
                  style={{fontFamily: 'Arial, sans-serif', fontSize: '18px', color: '#d81b8c'}}
                >
                  info@bremmiepalooza.com
                </a>
              </div>
            </div>

            {/* Go Back */}
            <div className="text-center mt-16">
              <button 
                onClick={() => window.history.back()}
                className="inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full px-8 py-3 text-white font-bold transition-all duration-200 border-2 border-white/30 cursor-pointer"
                style={{fontFamily: 'Arial, sans-serif', fontSize: '18px'}}
              >
                ← Go Back
              </button>
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
      `}</style>
    </main>
  )
}
