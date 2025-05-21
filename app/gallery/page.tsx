"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, X } from "lucide-react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `/placeholder.svg?height=800&width=800`,
    alt: `Couple photo ${i + 1}`,
    category: i < 4 ? "Engagement" : i < 8 ? "Travel" : "Memories",
  }))

  const categories = ["All", "Engagement", "Travel", "Memories"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredImages = activeCategory === "All" ? images : images.filter((img) => img.category === activeCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Gallery"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-4">Our Gallery</h1>
        </div>
      </div>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-rose-500 hover:text-rose-600">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category ? "bg-rose-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="aspect-square relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(image.id)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 hover:opacity-100 transition-opacity">
                <span className="text-white text-sm">{image.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X className="h-8 w-8" />
          </button>

          <div className="relative w-full max-w-4xl aspect-square">
            <Image
              src={images.find((img) => img.id === selectedImage)?.src || ""}
              alt={images.find((img) => img.id === selectedImage)?.alt || ""}
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            <p>
              {selectedImage} / {images.length}
            </p>
          </div>

          <button
            onClick={() => setSelectedImage((prev) => (prev && prev > 1 ? prev - 1 : images.length))}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2"
          >
            <ArrowLeft className="h-6 w-6 text-white" />
          </button>

          <button
            onClick={() => setSelectedImage((prev) => (prev && prev < images.length ? prev + 1 : 1))}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2"
          >
            <ArrowLeft className="h-6 w-6 text-white rotate-180" />
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white/80 mt-16">
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
