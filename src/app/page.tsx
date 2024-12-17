"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const galleryItems = [
  { src: "/pic0.jpg", alt: "Pic 0", className: "col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 aspect-[16/9]" },
  { src: "/pic1.jpg", alt: "Pic 1", className: "col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-2 aspect-[3/4]" },
  { src: "/pic2.jpg", alt: "Pic 2", className: "col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-2 aspect-[3/4]" },
  { src: "/pic3.jpg", alt: "Pic 3", className: "col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 aspect-[16/10.3]" },
  { src: "/pic4.jpg", alt: "Pic 4", className: "col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-2 aspect-[9/14.5]" },
  { src: "/pic5.jpg", alt: "Pic 5", className: "col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-2 aspect-[8/13]" },
  { src: "/pic6.jpg", alt: "Pic 6", className: "col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-6 aspect-[4/2.07]" },
  { src: "/pic7.jpg", alt: "Pic 7", className: "col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-2 aspect-[3/4.8]" },
  { src: "/pic0.jpg", alt: "Pic 8", className: "col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-2 aspect-[3/4]" },
  { src: "/pic1.jpg", alt: "Pic 9", className: "col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 aspect-[14/9]" },
  { src: "/pic2.jpg", alt: "Pic 10", className: "col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-2 aspect-[3/4]" },
  { src: "/pic3.jpg", alt: "Pic 11", className: "col-span-6 sm:col-span-3 md:col-span-4 lg:col-span-4 aspect-[14/9]" }, // Adjusted column span and aspect ratio
  { src: "/pic4.jpg", alt: "Pic 12", className: "col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-6 aspect-[2/1]" },
  { src: "/pic5.jpg", alt: "Pic 13", className: "col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-2 aspect-[3/4.7]" },
  { src: "/pic6.jpg", alt: "Pic 14", className: "col-span-6 sm:col-span-3 md:col-span-4 lg:col-span-4 aspect-[12/9]" }, // Adjusted column span and aspect ratio
  { src: "/pic7.jpg", alt: "Pic 15", className: "col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 aspect-[16/10.3]" },
  { src: "/pic1.jpg", alt: "Pic 16", className: "col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-2 aspect-[3/4]" },
  { src: "/pic7.jpg", alt: "Pic 17", className: "col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-2 aspect-[3/4]" },
  { src: "/pic5.jpg", alt: "Pic 18", className: "col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 aspect-[16/10.3]" },
  { src: "/pic3.jpg", alt: "Pic 19", className: "col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-6 aspect-[2/1]" },
  { src: "/pic2.jpg", alt: "Pic 20", className: "col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 aspect-[16/12]" },
  { src: "/pic1.jpg", alt: "Pic 21", className: "col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-2 aspect-[3/4.8]" },


  

  { src: "/pic0.jpg", alt: "Pic 0", className: "col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 aspect-[16/9]" },
  { src: "/pic1.jpg", alt: "Pic 1", className: "col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-2 aspect-[3/4]" },
  { src: "/pic2.jpg", alt: "Pic 2", className: "col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-2 aspect-[3/4]" },
  { src: "/pic3.jpg", alt: "Pic 3", className: "col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 aspect-[16/10.3]" },
  { src: "/pic4.jpg", alt: "Pic 4", className: "col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-2 aspect-[9/14.5]" },
  { src: "/pic5.jpg", alt: "Pic 5", className: "col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-2 aspect-[8/13]" },
  { src: "/pic6.jpg", alt: "Pic 6", className: "col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-6 aspect-[4/2.07]" },
  { src: "/pic7.jpg", alt: "Pic 7", className: "col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-2 aspect-[3/4.8]" },
  { src: "/pic0.jpg", alt: "Pic 8", className: "col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-2 aspect-[3/4]" },
  { src: "/pic1.jpg", alt: "Pic 9", className: "col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 aspect-[14/9]" },
  { src: "/pic2.jpg", alt: "Pic 10", className: "col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-2 aspect-[3/4]" },
  { src: "/pic3.jpg", alt: "Pic 11", className: "col-span-6 sm:col-span-3 md:col-span-4 lg:col-span-4 aspect-[14/9]" }, // Adjusted column span and aspect ratio
  { src: "/pic4.jpg", alt: "Pic 12", className: "col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-6 aspect-[2/1]" },
  { src: "/pic5.jpg", alt: "Pic 13", className: "col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-2 aspect-[3/4.7]" },
  { src: "/pic6.jpg", alt: "Pic 14", className: "col-span-6 sm:col-span-3 md:col-span-4 lg:col-span-4 aspect-[12/9]" }, // Adjusted column span and aspect ratio
  { src: "/pic7.jpg", alt: "Pic 15", className: "col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 aspect-[16/10.3]" },
  { src: "/pic1.jpg", alt: "Pic 16", className: "col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-2 aspect-[3/4]" },
  { src: "/pic7.jpg", alt: "Pic 17", className: "col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-2 aspect-[3/4]" },
  { src: "/pic5.jpg", alt: "Pic 18", className: "col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 aspect-[16/10.3]" },
  { src: "/pic3.jpg", alt: "Pic 19", className: "col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-6 aspect-[2/1]" },
  { src: "/pic2.jpg", alt: "Pic 20", className: "col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 aspect-[16/12]" },
  { src: "/pic1.jpg", alt: "Pic 21", className: "col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-2 aspect-[3/4.8]" },
  
  
];

export default function Gallery() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/sakeclogo.png"
                alt="Pratishtha Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            
            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:bg-white/10"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="hover:text-gray-300 transition">Home</Link>
              <Link href="/about" className="hover:text-gray-300 transition">About Us</Link>
              <Link href="/gallery" className="hover:text-gray-300 transition">Gallery</Link>
              <Link href="/committee" className="hover:text-gray-300 transition">Core Committee</Link>
              <Link href="/contact" className="hover:text-gray-300 transition">Contact Us</Link>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                Login
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                LinkTree
              </Button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute left-0 right-0 bg-black/95 pb-4">
              <div className="flex flex-col items-center space-y-4 pt-4">
                <Link 
                  href="/" 
                  className="hover:text-gray-300 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="hover:text-gray-300 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  href="/gallery" 
                  className="hover:text-gray-300 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link 
                  href="/committee" 
                  className="hover:text-gray-300 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Core Committee
                </Link>
                <Link 
                  href="/contact" 
                  className="hover:text-gray-300 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    className="text-white border-white hover:bg-white hover:text-black"
                  >
                    Login
                  </Button>
                  <Button 
                    variant="outline" 
                    className="text-white border-white hover:bg-white hover:text-black"
                  >
                    LinkTree
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl mb-8 sm:mb-12 text-center sm:text-left">
          Gallery
        </h1>
        
        {/* Gallery Grid - More Responsive Layout */}
        <div className="grid grid-cols-6 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-12 gap-2 sm:gap-4">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-lg ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover hover:scale-105 transition duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

