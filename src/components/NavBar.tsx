'use client';

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
        setShowNav(false)
      } else {
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
      {/* Logo (black/white only — uses currentColor) */}
      <div className="flex items-center space-x-3">
        <a href="#" className={`logo block w-10 h-10 ${scrolled ? 'text-white' : 'text-black'}`} aria-label="Brand logo">
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <defs>
              <clipPath id="circleClip">
                <circle cx="32" cy="32" r="28" />
              </clipPath>
            </defs>

            {/* Outer ring */}
            <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="4" />

            {/* Shutter blades clipped to circle */}
            <g clipPath="url(#circleClip)" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
              <g transform="rotate(20 32 32)">
                <line x1="10" y1="32" x2="54" y2="32" />
                <line x1="16" y1="18" x2="48" y2="46" />
                <line x1="16" y1="46" x2="48" y2="18" />
                <line x1="12" y1="25" x2="52" y2="39" />
                <line x1="12" y1="39" x2="52" y2="25" />
              </g>
            </g>

            {/* Lens dot */}
            <circle cx="32" cy="32" r="3" fill="currentColor" />
          </svg>
        </a>
        <span className={`text-xl font-bold ${scrolled ? 'text-white' : 'text-black'}`}>My AI Editor</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <a href="#features" className={`${scrolled ? 'text-white' : 'text-black'} hover:text-white transition-colors`}>Features</a>
        <a href="#pricing" className={`${scrolled ? 'text-white' : 'text-black'} hover:text-white transition-colors`}>Pricing</a>
        <a href="#about"   className={`${scrolled ? 'text-white' : 'text-black'} hover:text-white transition-colors`}>About</a>
      </div>

      {/* Desktop Actions */}
      <div className="hidden md:flex space-x-4">
        <a href="#signin" className="px-4 py-2 rounded-full bg-black text-white hover:bg-white hover:text-black transition">
          login
        </a>
        <a href="#start" className="px-4 py-2 rounded-full bg-black text-white hover:bg-white hover:text-black transition">
          Get Started
        </a>
      </div>

{isOpen && (
  <div className="absolute top-16 left-0 w-full bg-white text-black shadow-lg p-4 space-y-4 md:hidden animate-fadeIn">
    <a href="/features" className="block hover:text-white">Features</a>
    <a href="/pricing" className="block hover:text-white">Pricing</a>
    <a href="/about" className="block hover:text-white">About</a>
    ...
  </div>
)}

      {/* Mobile Menu Button */}
      <button
        className={`${scrolled ? 'text-white' : 'text-black'} md:hidden text-2xl`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? '✖' : '☰'}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white text-black shadow-lg p-4 space-y-4 md:hidden animate-fadeIn">
          <a href="#features" className="block hover:text-white">Features</a>
          <a href="#pricing" className="block hover:text-white">Pricing</a>
          <a href="#about" className="block hover:text-white">About</a>
          <a href="#signin" className="block px-4 py-2 rounded-full bg-black text-white hover:bg-white hover:text-black transition">
            Sign In
          </a>
          <a href="#start" className="block px-4 py-2 rounded-full bg-black text-white hover:bg-white hover:text-black transition">
            Get Started
          </a>
        </div>
      )}

      {/* minimal CSS for hover spin & reduced motion */}
      <style jsx>{`
        .logo svg { transition: transform .3s ease; }
        .logo:hover svg { animation: spin 6s linear infinite; }
        @keyframes spin { from { transform: rotate(0) } to { transform: rotate(360deg) } }
        @media (prefers-reduced-motion: reduce) {
          .logo:hover svg { animation: none !important; }
        }
      `}</style>
    </nav>
  )
}
