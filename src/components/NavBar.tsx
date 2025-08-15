'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 50);

      if (currentScroll > lastScroll && currentScroll > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`flex justify-between items-center p-4 fixed top-0 w-full z-50 shadow-lg animate-fadeIn transition-all duration-300 ${
        scrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-white/10 backdrop-blur-md'
      } ${showNav ? 'translate-y-0' : '-translate-y-full'}`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Link href="/">
          <a className={`logo block w-10 h-10 ${scrolled ? 'text-white' : 'text-black'}`} aria-label="Brand logo">
            {/* SVG code for logo */}
          </a>
        </Link>
        <span className={`text-xl font-bold ${scrolled ? 'text-white' : 'text-black'}`}>My AI Editor</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <Link href="/features">
          <a className={`${scrolled ? 'text-white' : 'text-black'} hover:text-white transition-colors`}>Features</a>
        </Link>
        <Link href="/pricing">
          <a className={`${scrolled ? 'text-white' : 'text-black'} hover:text-white transition-colors`}>Pricing</a>
        </Link>
        <Link href="/about">
          <a className={`${scrolled ? 'text-white' : 'text-black'} hover:text-white transition-colors`}>About</a>
        </Link>
      </div>

      {/* Desktop Actions */}
      <div className="hidden md:flex space-x-4">
        <Link href="/signin">
          <a className="px-4 py-2 rounded-full bg-black text-white hover:bg-white hover:text-black transition">login</a>
        </Link>
        <Link href="/start">
          <a className="px-4 py-2 rounded-full bg-black text-white hover:bg-white hover:text-black transition">Get Started</a>
        </Link>
      </div>

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
          <Link href="/features">
            <a className="block hover:text-white">Features</a>
          </Link>
          <Link href="/pricing">
            <a className="block hover:text-white">Pricing</a>
          </Link>
          <Link href="/about">
            <a className="block hover:text-white">About</a>
          </Link>
          <Link href="/signin">
            <a className="block px-4 py-2 rounded-full bg-black text-white hover:bg-white hover:text-black transition">Sign In</a>
          </Link>
          <Link href="/start">
            <a className="block px-4 py-2 rounded-full bg-black text-white hover:bg-white hover:text-black transition">Get Started</a>
          </Link>
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
  );
}