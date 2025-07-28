"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useIsMobile } from "@/hooks/use-mobile"

export default function BookHotelPage() {
  const [mounted, setMounted] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [showBookingForm, setShowBookingForm] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const packages = [
    {
      id: 'standard',
      name: 'Festival Standard',
      subtitle: 'Garden View Room',
      price: '$899',
      originalPrice: '$1,200',
      nights: '3 nights',
      features: [
        'Garden view room with king or two double beds',
        'All meals included (breakfast, lunch, dinner)',
        'Premium bar drinks included',
        'Access to all festival events',
        'Airport shuttle service',
        'Welcome gift bag',
        'Pool and beach access',
        'Fitness center access'
      ],
      popular: false,
      image: '/garden-view-room.jpg'
    },
    {
      id: 'oceanview',
      name: 'Festival Premium',
      subtitle: 'Ocean View Room',
      price: '$1,199',
      originalPrice: '$1,600',
      nights: '3 nights',
      features: [
        'Ocean view room with private balcony',
        'All meals at premium restaurants',
        'Top-shelf bar service',
        'VIP seating at ceremony',
        'Priority airport shuttle',
        'Premium welcome amenities',
        'Spa credit ($100 value)',
        'Room service included',
        'Late checkout available'
      ],
      popular: true,
      image: '/ocean-view-room.jpg'
    },
    {
      id: 'suite',
      name: 'Festival VIP',
      subtitle: 'Presidential Suite',
      price: '$1,899',
      originalPrice: '$2,500',
      nights: '3 nights',
      features: [
        'Presidential suite with panoramic ocean views',
        'Private butler service',
        'Exclusive dining experiences',
        'Premium liquor and champagne service',
        'Private beach cabana',
        'Couples spa package included',
        'Private transportation',
        'VIP festival lounge access',
        'Personalized concierge service',
        'Late checkout until 4 PM'
      ],
      popular: false,
      image: '/presidential-suite.jpg'
    }
  ]

  const handleBookNow = (packageId) => {
    setSelectedPackage(packageId)
    setShowBookingForm(true)
  }

  const BookingForm = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-black text-purple-600">Book Your Stay</h3>
          <button 
            onClick={() => setShowBookingForm(false)}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="John Doe"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
            <input 
              type="email" 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="john@example.com"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
            <input 
              type="tel" 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="(555) 123-4567"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Guest Name (if different)</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Jane Doe"
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Special Requests</label>
            <textarea 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 h-24"
              placeholder="Dietary restrictions, accessibility needs, anniversary celebration, etc."
            />
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-bold text-purple-800 mb-2">Selected Package</h4>
            <p className="text-purple-600">{packages.find(p => p.id === selectedPackage)?.name}</p>
            <p className="text-2xl font-black text-purple-800">{packages.find(p => p.id === selectedPackage)?.price}</p>
          </div>
          
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setShowBookingForm(false)}
              className="flex-1 py-3 border border-gray-300 rounded-lg font-bold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
            >
              Submit Booking
            </button>
          </div>
        </form>
        
        <div className="mt-4 text-center text-sm text-gray-600">
          <p>* A $200 deposit will be required to secure your reservation</p>
          <p>* Final payment due 30 days before arrival</p>
        </div>
      </div>
    </div>
  )

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
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <div className="w-32 md:w-48">
                <Image
                  src="/bremmiepalooza-logo-for-cta.png"
                  alt="Bremmiepalooza 2026"
                  width={200}
                  height={100}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </Link>
            <Link 
              href="/"
              className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white font-bold hover:bg-white/30 transition-all duration-200"
            >
              ← Back to Festival
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-4 pb-12">
          <div className="max-w-7xl mx-auto">
            <h1 
              className="text-4xl md:text-6xl font-black text-center mb-4 uppercase tracking-wider" 
              style={{
                fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                color: '#d81b8c'
              }}
            >
              BOOK YOUR STAY
            </h1>
            
            <p className="text-center text-white text-lg md:text-xl mb-12 max-w-3xl mx-auto" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
              Join us at the beautiful InterContinental Presidente Cancun for an unforgettable festival wedding weekend! Choose your perfect package below.
            </p>

            {/* Hotel Info Banner */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-12 border-2 border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-white mb-4" style={{fontFamily: "'ZollaPro', sans-serif", textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
                    🏨 InterContinental Presidente Cancun
                  </h2>
                  <div className="space-y-2 text-white/90">
                    <p>📍 Kukulcan Boulevard Km 7.5, Hotel Zone</p>
                    <p>🌊 Beachfront luxury resort with stunning ocean views</p>
                    <p>🍽️ 5 restaurants & 4 bars on-site</p>
                    <p>🏊‍♀️ Multiple pools, spa, and fitness center</p>
                    <p>⭐ 4.5-star AAA Diamond rated resort</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-xl p-4 inline-block">
                    <h3 className="text-xl font-bold text-white mb-2">Festival Dates</h3>
                    <p className="text-2xl font-black text-white" style={{fontFamily: "'ZollaPro', sans-serif"}}>
                      January 16-18, 2026
                    </p>
                    <p className="text-white/90 text-sm mt-2">Check-in: Thursday 1/15 • Check-out: Monday 1/19</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Package Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {packages.map((pkg) => (
                <div 
                  key={pkg.id}
                  className={`
                    relative bg-white rounded-2xl overflow-hidden shadow-2xl border-4 transition-all duration-300 hover:scale-105
                    ${pkg.popular ? 'border-yellow-400' : 'border-gray-200'}
                  `}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-400 text-center py-2 z-10">
                      <span className="text-black font-black text-sm uppercase tracking-wider">🌟 Most Popular</span>
                    </div>
                  )}
                  
                  <div className={`p-6 ${pkg.popular ? 'pt-12' : ''}`}>
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-black text-gray-800 mb-1" style={{fontFamily: "'ZollaPro', sans-serif"}}>
                        {pkg.name}
                      </h3>
                      <p className="text-gray-600 font-semibold">{pkg.subtitle}</p>
                      <div className="mt-4">
                        <span className="text-4xl font-black text-purple-600">{pkg.price}</span>
                        <span className="text-gray-500 line-through ml-2">{pkg.originalPrice}</span>
                        <p className="text-sm text-gray-600 mt-1">per person • {pkg.nights}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button
                      onClick={() => handleBookNow(pkg.id)}
                      className={`
                        w-full py-4 rounded-xl font-black text-lg transition-all duration-200 transform hover:scale-105 active:scale-95
                        ${pkg.popular 
                          ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-black shadow-lg' 
                          : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        }
                      `}
                      style={{fontFamily: "'ZollaPro', sans-serif"}}
                    >
                      BOOK NOW
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20">
                <h3 className="text-2xl font-black text-white mb-4" style={{fontFamily: "'ZollaPro', sans-serif", textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
                  🎉 What's Included
                </h3>
                <ul className="space-y-2 text-white/90">
                  <li>• 3 nights luxury accommodation</li>
                  <li>• All meals (breakfast, lunch, dinner)</li>
                  <li>• Premium drinks and cocktails</li>
                  <li>• Wedding ceremony and reception</li>
                  <li>• Festival activities and entertainment</li>
                  <li>• Airport shuttle transportation</li>
                  <li>• Resort amenities access</li>
                  <li>• Welcome gift and itinerary</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20">
                <h3 className="text-2xl font-black text-white mb-4" style={{fontFamily: "'ZollaPro', sans-serif", textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
                  💳 Booking Details
                </h3>
                <div className="space-y-3 text-white/90">
                  <div>
                    <strong>Deposit:</strong> $200 per person required to secure reservation
                  </div>
                  <div>
                    <strong>Final Payment:</strong> Due 30 days before arrival
                  </div>
                  <div>
                    <strong>Cancellation:</strong> Free cancellation up to 60 days before
                  </div>
                  <div>
                    <strong>Payment Methods:</strong> Credit card, bank transfer, PayPal
                  </div>
                  <div>
                    <strong>Group Discount:</strong> 10% off for groups of 6+ rooms
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-12 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-8 text-center border-2 border-white/20">
              <h2 className="text-3xl font-black text-white mb-4" style={{fontFamily: "'ZollaPro', sans-serif", textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
                Need Help Booking?
              </h2>
              <p className="text-white/90 text-lg mb-6">
                Our festival concierge team is here to help you choose the perfect package!
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a 
                  href="mailto:bookings@bremmiepalooza.com"
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full px-8 py-3 text-white font-bold transition-all duration-200 border-2 border-white/30"
                >
                  📧 bookings@bremmiepalooza.com
                </a>
                <a 
                  href="tel:+1555123456"
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full px-8 py-3 text-white font-bold transition-all duration-200 border-2 border-white/30"
                >
                  📞 (555) 123-FESTIVAL
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && <BookingForm />}

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
