import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Gift, MapPin, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DetailsPage() {
  const schedule = [
    {
      time: "4:00 PM",
      title: "Ceremony",
      description: "Join us as we exchange vows in the Rose Garden",
    },
    {
      time: "5:00 PM",
      title: "Cocktail Hour",
      description: "Enjoy drinks and hors d'oeuvres on the terrace",
    },
    {
      time: "6:30 PM",
      title: "Dinner Reception",
      description: "Celebrate with a seated dinner in the Grand Ballroom",
    },
    {
      time: "8:00 PM",
      title: "Dancing",
      description: "Dance the night away with live music",
    },
    {
      time: "11:00 PM",
      title: "Farewell",
      description: "Send off the newlyweds",
    },
  ]

  const faqs = [
    {
      question: "What should I wear?",
      answer: "The dress code is formal attire. We recommend suits and dresses in summer colors.",
    },
    {
      question: "Can I bring a plus one?",
      answer:
        "Due to venue constraints, we can only accommodate those guests named on your invitation. Please refer to your RSVP card for details.",
    },
    {
      question: "Will the ceremony and reception be indoors or outdoors?",
      answer:
        "The ceremony will be held outdoors in the Rose Garden, weather permitting. The reception will be indoors in the Grand Ballroom.",
    },
    {
      question: "Is there parking available?",
      answer: "Yes, complimentary valet parking will be available for all guests.",
    },
    {
      question: "Are children welcome?",
      answer:
        "While we love your little ones, our wedding will be an adults-only celebration. We appreciate your understanding.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Wedding details"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-4">Wedding Details</h1>
        </div>
      </div>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-rose-500 hover:text-rose-600">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Event Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-rose-500" />
              </div>
              <CardTitle className="font-serif text-2xl">Ceremony & Reception</CardTitle>
              <CardDescription>August 15, 2025</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-6">
                Join us for an evening of celebration as we exchange vows and begin our journey together.
              </p>
              <div className="flex justify-center">
                <Button asChild variant="outline" className="border-rose-200 text-rose-500 hover:bg-rose-50">
                  <Link href="/rsvp">RSVP Now</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-rose-500" />
              </div>
              <CardTitle className="font-serif text-2xl">Venue</CardTitle>
              <CardDescription>Rosewood Gardens</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-6">
                123 Blossom Lane
                <br />
                Seattle, WA 98101
              </p>
              <div className="flex justify-center">
                <Button asChild variant="outline" className="border-rose-200 text-rose-500 hover:bg-rose-50">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    View Map
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Schedule */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-center mb-8">Schedule of Events</h2>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-rose-200 transform md:-translate-x-1/2" />

            <div className="space-y-8">
              {schedule.map((event, index) => (
                <div key={index} className="relative flex items-start gap-4 md:gap-8">
                  {/* Time Bubble */}
                  <div className="z-10 flex-shrink-0">
                    <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center text-white shadow-md">
                      <Clock className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex-grow md:w-[calc(50%-2rem)] md:ml-auto">
                    <div className="font-medium text-rose-500">{event.time}</div>
                    <h3 className="text-xl font-serif mb-1">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Accommodations */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-center mb-8">Accommodations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-xl">Grand Seattle Hotel</CardTitle>
                <CardDescription>0.5 miles from venue</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We've arranged a special rate for our guests. Use code "SARAHMICHAEL" when booking.
                </p>
                <Button asChild variant="outline" size="sm" className="border-rose-200 text-rose-500 hover:bg-rose-50">
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                    Book Room
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-xl">Emerald Suites</CardTitle>
                <CardDescription>1.2 miles from venue</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  A boutique hotel with spacious suites. Mention our wedding for a 15% discount.
                </p>
                <Button asChild variant="outline" size="sm" className="border-rose-200 text-rose-500 hover:bg-rose-50">
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                    Book Room
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Menu Preview */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-center mb-8">Menu Preview</h2>
          <div className="max-w-2xl mx-auto bg-rose-50 p-8 rounded-lg">
            <div className="flex justify-center mb-6">
              <Utensils className="h-8 w-8 text-rose-500" />
            </div>

            <div className="space-y-6 text-center">
              <div>
                <h3 className="font-serif text-xl mb-2">Appetizers</h3>
                <p className="text-gray-600">Caprese Skewers with Balsamic Glaze</p>
                <p className="text-gray-600">Wild Mushroom Arancini</p>
                <p className="text-gray-600">Smoked Salmon Canapés</p>
              </div>

              <div>
                <h3 className="font-serif text-xl mb-2">Main Course</h3>
                <p className="text-gray-600">Beef Tenderloin with Red Wine Reduction</p>
                <p className="text-gray-600">Herb Roasted Chicken with Lemon Sauce</p>
                <p className="text-gray-600">Grilled Salmon with Dill Butter</p>
                <p className="text-gray-600">Vegetarian Wild Mushroom Risotto</p>
              </div>

              <div>
                <h3 className="font-serif text-xl mb-2">Dessert</h3>
                <p className="text-gray-600">Wedding Cake</p>
                <p className="text-gray-600">Assorted Mini Desserts</p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">Please indicate any dietary restrictions in your RSVP.</p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg font-medium">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Registry CTA */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="h-8 w-8 text-rose-500" />
          </div>
          <h2 className="text-3xl font-serif mb-4">Registry</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift,
            we've registered at the following places.
          </p>
          <Button asChild className="bg-rose-500 hover:bg-rose-600">
            <Link href="/registry">View Registry</Link>
          </Button>
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
