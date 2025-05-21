import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function VenuePage() {
  const venueDetails = {
    name: "Rosewood Gardens",
    address: "123 Blossom Lane, Seattle, WA 98101",
    description:
      "Nestled in the heart of Seattle, Rosewood Gardens offers a picturesque setting for your special day. With lush gardens, a stunning ballroom, and breathtaking views of the city skyline, it's the perfect backdrop for creating memories that will last a lifetime.",
    features: [
      "Outdoor ceremony space in the Rose Garden",
      "Grand Ballroom with crystal chandeliers",
      "Terrace overlooking the city",
      "Bridal suite and groom's room",
      "Professional event staff",
      "Ample parking for guests",
    ],
    nearbyHotels: [
      {
        name: "Grand Seattle Hotel",
        distance: "0.5 miles",
        website: "https://example.com",
      },
      {
        name: "Emerald Suites",
        distance: "1.2 miles",
        website: "https://example.com",
      },
    ],
    directions: [
      {
        from: "Seattle-Tacoma International Airport",
        instructions:
          "Take I-5 North toward Seattle. Exit at James Street. Turn right onto 5th Avenue. Turn left onto Blossom Lane. Rosewood Gardens will be on your right.",
      },
      {
        from: "Downtown Seattle",
        instructions: "Head south on 5th Avenue. Turn right onto Blossom Lane. Rosewood Gardens will be on your right.",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Venue"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-4">Our Venue</h1>
        </div>
      </div>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-rose-500 hover:text-rose-600">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      {/* Venue Information */}
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-rose-500" />
            </div>
            <h2 className="text-3xl font-serif mb-4">{venueDetails.name}</h2>
            <p className="text-gray-600 mb-6">{venueDetails.address}</p>
            <p className="text-gray-600 mb-8">{venueDetails.description}</p>
            <Button asChild className="bg-rose-500 hover:bg-rose-600">
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                Get Directions
              </a>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((img) => (
              <div key={img} className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={`/placeholder.svg?height=400&width=400`}
                  alt={`Venue photo ${img}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Venue Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif text-center mb-8">Venue Features</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {venueDetails.features.map((feature, index) => (
              <Card key={index} className="bg-rose-50 border-none">
                <CardContent className="p-6">
                  <p className="text-gray-700">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif text-center mb-8">Location</h2>
          <div className="aspect-video relative rounded-lg overflow-hidden shadow-md">
            <Image src="/placeholder.svg?height=600&width=1200" alt="Map" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button asChild className="bg-rose-500 hover:bg-rose-600">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  Open in Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Directions */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif text-center mb-8">Directions</h2>
          <div className="space-y-6">
            {venueDetails.directions.map((direction, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-lg mb-2">From {direction.from}</h3>
                <p className="text-gray-600">{direction.instructions}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nearby Accommodations */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif text-center mb-8">Nearby Accommodations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {venueDetails.nearbyHotels.map((hotel, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-medium text-lg mb-1">{hotel.name}</h3>
                  <p className="text-gray-600 mb-4">Distance: {hotel.distance}</p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-rose-200 text-rose-500 hover:bg-rose-50"
                  >
                    <a href={hotel.website} target="_blank" rel="noopener noreferrer">
                      Book Room
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Parking Information */}
        <div className="mb-16 bg-rose-50 p-8 rounded-lg">
          <h2 className="text-2xl font-serif text-center mb-4">Parking Information</h2>
          <p className="text-center text-gray-600 mb-0">
            Complimentary valet parking will be available for all guests. Self-parking is also available in the adjacent
            lot.
          </p>
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
