import React, { useState, useEffect } from 'react'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showNav, setShowNav] = useState(true)
  const [lastScroll, setLastScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      setScrolled(currentScroll > 50)

      if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down → hide
        setShowNav(false)
      } else {
        // Scrolling up → show
        setShowNav(true)
      }
      setLastScroll(currentScroll)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScroll])

  return (
    <nav
      className={`flex justify-between items-center p-4 fixed top-0 w-full z-50 shadow-lg animate-fadeIn transition-all duration-300 ${
        scrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-white/10 backdrop-blur-md'
      } ${showNav ? 'translate-y-0' : '-translate-y-full'}`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <span className="text-xl font-bold">My AI Editor</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <a href="#features" className="hover:text-orange-400 transition-colors">Features</a>
        <a href="#pricing" className="hover:text-orange-400 transition-colors">Pricing</a>
        <a href="#about" className="hover:text-orange-400 transition-colors">About</a>
      </div>

      {/* Desktop Actions */}
      <div className="hidden md:flex space-x-4">
        <a href="#signin" className="px-4 py-2 rounded-full border border-white hover:bg-white hover:text-black transition">
          Sign In
        </a>
        <a href="#start" className="px-4 py-2 rounded-full bg-orange-400 hover:bg-orange-500 text-white transition">
          Get Started
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? '✖' : '☰'}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white text-black shadow-lg p-4 space-y-4 md:hidden animate-fadeIn">
          <a href="#features" className="block hover:text-orange-400">Features</a>
          <a href="#pricing" className="block hover:text-orange-400">Pricing</a>
          <a href="#about" className="block hover:text-orange-400">About</a>
          <a href="#signin" className="block px-4 py-2 rounded-full border border-black hover:bg-black hover:text-white transition">
            Sign In
          </a>
          <a href="#start" className="block px-4 py-2 rounded-full bg-orange-400 hover:bg-orange-500 text-white transition">
            Get Started
          </a>
        </div>
      )}
    </nav>
  )
}
