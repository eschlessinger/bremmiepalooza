"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function LineupPage() {
  const [activeDay, setActiveDay] = useState("friday")

  const days = [
    {
      id: "friday",
      name: "Friday",
      title: "The Pregame",
      subtitle: "Welcome BBQ",
      description:
        "Kick off the weekend with a casual welcome BBQ. Meet and greet, good food, and good vibes to set the tone for an unforgettable weekend.",
      icon: "🍔",
    },
    {
      id: "saturday",
      name: "Saturday",
      title: "The Main Stage",
      subtitle: "Wedding Beach Party",
      description:
        "The main event! Join us for a beautiful ceremony followed by a beach party celebration with dinner, dancing, and plenty of surprises.",
      icon: "🏝️",
    },
    {
      id: "sunday",
      name: "Sunday",
      title: "The Aftershow",
      subtitle: "Boat Bash",
      description:
        "Keep the party going with a relaxing day on the water. The perfect way to wrap up an amazing weekend of celebration.",
      icon: "⛵",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e4017e] via-[#ffcc00] to-[#00ccff]">
      {/* Header with Back Button */}
      <header className="pt-6 px-4 md:px-8">
        <div className="container mx-auto">
          <Link
            href="/lineup-reveal"
            className="inline-flex items-center text-white hover:text-white/80 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span className="font-bold">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Lineup Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-display text-white mb-4">BREMMIEPALOOZA</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white">2026 OFFICIAL LINEUP</h2>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {days.map((day) => (
            <button
              key={day.id}
              onClick={() => setActiveDay(day.id)}
              className={`px-4 py-3 md:px-6 md:py-4 rounded-full text-lg md:text-xl font-bold transition-all ${
                activeDay === day.id
                  ? "bg-white text-[#e4017e] shadow-lg scale-105"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              {day.name}
            </button>
          ))}
        </div>

        {/* Day Content */}
        {days.map((day) => (
          <div
            key={day.id}
            className={`bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-10 text-white ${
              activeDay === day.id ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
              {/* Day Icon */}
              <div className="text-7xl md:text-8xl">{day.icon}</div>

              {/* Day Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">{day.title}</h3>
                <h4 className="text-xl md:text-2xl mb-4">{day.subtitle}</h4>
                <p className="text-lg md:text-xl">{day.description}</p>

                {/* Hint at surprises */}
                <div className="mt-8 p-4 bg-white/10 rounded-xl">
                  <p className="text-lg italic">More details coming soon... we've got some surprises planned! 🎉</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* RSVP Button */}
        <div className="text-center mt-12">
          <Link href="/rsvp" className="inline-block">
            <button className="bg-[#e4017e] text-white font-bold uppercase tracking-wider py-2 px-5 rounded-full text-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
              GET YOUR PASS!
            </button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-white/80">
        <p>January 16-18, 2026 • Cancun, MX</p>
      </footer>
    </div>
  )
}
