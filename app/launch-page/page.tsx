"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function FAQ() {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState("faq")
  const [activeQuestion, setActiveQuestion] = useState(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleQuestion = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null)
    } else {
      setActiveQuestion(index)
    }
  }

  const faqItems = [
    {
      question: "What is Bremmiepalooza?",
      answer: "Bremmiepalooza is a three-day festival-themed wedding celebration in Cancún, Mexico. Inspired by music festivals like Lollapalooza, it's a fun, high-energy event featuring beach games, parties, celebrations, and even a boat trip!"
    },
    {
      question: "When and where is Bremmiepalooza happening?",
      answer: "Bremmiepalooza will take place in Cancún, Mexico from January 17-19, 2026."
    },
    {
      question: "Do I need to attend all three days?",
      answer: "Not at all! While the full 3-day experience is recommended for the complete Bremmiepalooza experience, you can choose to attend for 1 or 2 days based on your schedule. When you register for tickets, you'll have the option to select which days you'll be attending."
    },
    {
      question: "What should I pack?",
      answer: "Beach attire, swimwear, sunscreen, comfortable shoes, and party clothes! For Sunday's boat excursion, don't forget your 'flippie floppies' (flip flops/sandals), swimsuit, and sunscreen. More detailed packing recommendations will be provided as the event gets closer."
    },
    {
      question: "What are the accommodation options?",
      answer: "We've arranged special rates at a resort in Cancún. Accommodation details and booking information will be sent after you register for tickets."
    },
    {
      question: "How do I get to Cancún?",
      answer: "Fly into Cancún International Airport (CUN). From there, transportation to the resort will be arranged. We recommend booking flights well in advance for the best rates."
    },
    {
      question: "What's the dress code?",
      answer: "Festival casual! Think beach-appropriate, comfortable, and fun. For Saturday's main event, slightly more dressy attire is recommended but still keeping with the festival vibe."
    },
    {
      question: "Can I bring a guest?",
      answer: "Yes! When registering for tickets, you'll have the option to add guests. Please provide their names and any dietary restrictions."
    },
    {
      question: "Are there any costs associated with attending?",
      answer: "While the events themselves are hosted, attendees are responsible for their travel to Cancún and accommodation costs. We've negotiated special rates for our group."
    },
    {
      question: "What if I have dietary restrictions?",
      answer: "We want everyone to enjoy the festival food! Please indicate any dietary restrictions when registering for your tickets, and we'll make sure appropriate options are available."
    },
    {
      question: "Will there be photography/videography of the events?",
      answer: "Yes! We'll have professional photography and videography throughout the weekend. Links to photos will be shared after the event."
    },
    {
      question: "What happens on the boat on Sunday?",
      answer: "Sunday's 'The Aftershow' takes place on a boat! We'll have lunch, drinks (featuring mimosas), music, and the opportunity to swim. It's the perfect way to cap off the festival weekend!"
    },
    {
      question: "I have a question that's not answered here!",
      answer: "No problem! Reach out to us directly at bremmiepalooza2026@email.com and we'll get back to you as soon as possible."
    }
  ]

  return (
    <main className="relative min-h-screen overflow-hidden font-sans">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background: "linear-gradient(135deg, #ff0099, #ff6600, #ffcc00, #22cc88, #00ccff, #cc88ff, #ff0099)",
          backgroundSize: "600% 600%",
        }}
      ></div>
      
      {/* Navigation Bar */}
      <nav className="relative z-30 bg-purple-900 bg-opacity-80 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <span className="font-bold text-xl md:text-2xl text-yellow-300">Bremmiepalooza</span>
              </div>
            </Link>
            
            {/* Nav Items */}
            <div className="hidden md:flex space-x-8">
              <Link href="/tickets" className="nav-item">Tickets</Link>
              <Link href="/lineup" className="nav-item">Lineup</Link>
              <Link href="/schedule" className="nav-item">Schedule</Link>
              <Link href="/map" className="nav-item">Festival Map</Link>
              <Link href="/faq" className={`nav-item ${activeTab === "faq" ? "active-nav" : ""}`}>FAQ</Link>
            </div>
            
            {/* Mobile Menu Button - simplified for this example */}
            <div className="md:hidden">
              <button className="text-white">Menu</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-20 pt-8 pb-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg mb-4">FAQ</h1>
        <div className="text-xl md:text-2xl text-white drop-shadow-md mb-6">
          <p>Everything you need to know about Bremmiepalooza</p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 pb-24 relative z-20">
        <div className="max-w-3xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-xl overflow-hidden p-6 md:p-8">
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <button 
                className="faq-question"
                onClick={() => toggleQuestion(index)}
                aria-expanded={activeQuestion === index}
              >
                <span>{item.question}</span>
                <svg 
                  className={`w-6 h-6 transform transition-transform ${activeQuestion === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`faq-answer ${activeQuestion === index ? 'active' : ''}`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
          
          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">Still have questions?</h3>
            <p className="text-gray-700 mb-6">
              We're here to help make your Bremmiepalooza experience amazing!
            </p>
            <a 
              href="mailto:bremmiepalooza2026@email.com" 
              className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Contact Us
            </a>
          </div>
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

        .nav-item {
          position: relative;
          color: #e2e8f0;
          font-weight: bold;
          transition: all 0.3s;
        }

        .nav-item:hover {
          color: #fde047;
        }

        .active-nav {
          color: #fde047;
        }

        .active-nav:after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: #fde047;
        }

        /* FAQ Styles */
        .faq-item {
          border-bottom: 1px solid #e5e7eb;
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 1.25rem 0;
          text-align: left;
          font-weight: 600;
          font-size: 1.125rem;
          color: #4b5563;
          transition: all 0.3s;
        }

        .faq-question:hover {
          color: #7c3aed;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out, padding 0.3s ease;
          padding: 0 0;
        }

        .faq-answer.active {
          max-height: 500px;
          padding-bottom: 1.25rem;
        }

        .faq-answer p {
          color: #6b7280;
          line-height: 1.6;
        }
      `}</style>
    </main>
  )
}
