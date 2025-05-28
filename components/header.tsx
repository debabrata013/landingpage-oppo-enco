"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-lg py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">OPPO</span>
            <span className="text-blue-500 ml-1 text-2xl font-bold"> Landing page</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-blue-400 transition-colors">
              Features
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors">
              Specs
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors">
              Reviews
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors">
              Support
            </a>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full">Buy Now</Button>
          </nav>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg absolute top-full left-0 right-0 p-4">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-white hover:text-blue-400 transition-colors py-2">
              Features
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors py-2">
              Specs
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors py-2">
              Reviews
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors py-2">
              Support
            </a>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-full">Buy Now</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
