import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function OurStoryPage() {
  const timelineEvents = [
    {
      date: "June 2020",
      title: "First Meeting",
      description:
        "We met at Emerald Coffee Shop in downtown Seattle. Sarah was working on her laptop, and Michael asked if he could share her table since the café was packed. The rest, as they say, is history.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      date: "December 2020",
      title: "First Date",
      description:
        "After months of running into each other at the same coffee shop, Michael finally asked Sarah out. We went to the Seattle Art Museum and talked for hours about our favorite exhibits.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      date: "August 2021",
      title: "Moving In Together",
      description:
        "After a year of dating, we decided to take the next step and move in together. We found a cozy apartment in Capitol Hill with a view of the Space Needle.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      date: "July 2023",
      title: "The Proposal",
      description:
        "During a hike at Mount Rainier, Michael proposed at sunrise with a stunning view of the mountain behind us. Sarah said yes immediately, and we celebrated with champagne at the summit.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      date: "August 2025",
      title: "Wedding Day",
      description:
        "We can't wait to celebrate our love with all of our friends and family at Rosewood Gardens in Seattle.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Couple"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-4">Our Story</h1>
        </div>
      </div>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-rose-500 hover:text-rose-600">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-20 relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-rose-200 transform -translate-x-1/2 hidden md:block" />

          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 relative`}
            >
              {/* Date Bubble (visible on mobile and desktop) */}
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 md:translate-y-1/2 z-10 hidden md:block">
                <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>
              </div>

              {/* Mobile Date (visible only on mobile) */}
              <div className="md:hidden mb-4 text-center">
                <span className="inline-block px-4 py-1 bg-rose-100 text-rose-600 rounded-full text-sm font-medium">
                  {event.date}
                </span>
              </div>

              {/* Image */}
              <div className="md:w-1/2">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
              </div>

              {/* Content */}
              <div className="md:w-1/2 flex flex-col justify-center">
                <span className="hidden md:inline-block px-4 py-1 bg-rose-100 text-rose-600 rounded-full text-sm font-medium mb-2 w-fit">
                  {event.date}
                </span>
                <h3 className="text-2xl font-serif mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-rose-50 py-16 my-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <blockquote className="text-2xl md:text-3xl font-serif text-gray-800 italic mb-6">
            "True love stories never have endings."
          </blockquote>
          <cite className="text-gray-600">— Richard Bach</cite>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white/80">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl mb-4">Sarah & Michael</h3>
          <p className="mb-6">August 15, 2025 • Seattle, Washington</p>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6">
            {["Home", "Our Story", "Details", "Gallery", "Registry", "RSVP"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
          <p className="text-sm text-white/60">
            Made with <span className="text-rose-400">♥</span> by the happy couple
          </p>
        </div>
      </footer>
    </div>
  )
}
