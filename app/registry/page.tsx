import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RegistryPage() {
  const registries = [
    {
      name: "Amazon",
      logo: "/placeholder.svg?height=100&width=200",
      description: "Find a variety of home essentials and more.",
      url: "https://amazon.com",
    },
    {
      name: "Crate & Barrel",
      logo: "/placeholder.svg?height=100&width=200",
      description: "Quality kitchenware and home decor.",
      url: "https://crateandbarrel.com",
    },
    {
      name: "Zola",
      logo: "/placeholder.svg?height=100&width=200",
      description: "Unique gifts and experiences for our new life together.",
      url: "https://zola.com",
    },
  ]

  const honeymoonFund = {
    title: "Honeymoon Fund",
    description: "Help us create memories on our dream honeymoon to Bali.",
    image: "/placeholder.svg?height=400&width=600",
  }

  const charities = [
    {
      name: "World Wildlife Fund",
      description: "Supporting conservation efforts worldwide.",
    },
    {
      name: "Habitat for Humanity",
      description: "Building homes and communities for those in need.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Registry"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-4">Registry</h1>
        </div>
      </div>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-rose-500 hover:text-rose-600">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      {/* Thank You Message */}
      <div className="container mx-auto px-4 py-8 max-w-3xl text-center">
        <h2 className="text-3xl font-serif mb-4">Thank You</h2>
        <p className="text-gray-600 mb-8">
          Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we've
          registered at the following places. Thank you for your love and support as we begin this new chapter together.
        </p>
      </div>

      {/* Registry Links */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h2 className="text-3xl font-serif text-center mb-8">Our Registries</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {registries.map((registry) => (
            <Card key={registry.name} className="text-center">
              <CardHeader>
                <div className="h-16 flex items-center justify-center mb-4">
                  <Image
                    src={registry.logo || "/placeholder.svg"}
                    alt={registry.name}
                    width={150}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <CardTitle className="font-serif">{registry.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{registry.description}</p>
                <Button asChild className="bg-rose-500 hover:bg-rose-600">
                  <a href={registry.url} target="_blank" rel="noopener noreferrer">
                    View Registry
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Honeymoon Fund */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-rose-50 rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image src={honeymoonFund.image || "/placeholder.svg"} alt="Honeymoon" fill className="object-cover" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-serif mb-4">{honeymoonFund.title}</h2>
              <p className="text-gray-600 mb-6">{honeymoonFund.description}</p>
              <Button asChild className="bg-rose-500 hover:bg-rose-600 w-fit">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Contribute
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Charity Donations */}
      <div className="container mx-auto px-4 py-8 max-w-3xl text-center mb-16">
        <h2 className="text-3xl font-serif mb-6">Charitable Donations</h2>
        <p className="text-gray-600 mb-8">
          If you prefer, we would be honored if you made a donation to one of these organizations that are close to our
          hearts.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {charities.map((charity) => (
            <Card key={charity.name}>
              <CardHeader>
                <CardTitle className="font-serif">{charity.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{charity.description}</p>
                <Button asChild variant="outline" className="border-rose-200 text-rose-500 hover:bg-rose-50">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Donate
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
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
