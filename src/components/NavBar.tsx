import React from 'react'

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center p-4 backdrop-blur-md bg-white/10 fixed top-0 w-full z-50">
      <div className="flex space-x-6">
        <a href="#features" className="hover:text-orange-400 transition">Features</a>
        <a href="#pricing" className="hover:text-orange-400 transition">Pricing</a>
        <a href="#about" className="hover:text-orange-400 transition">About</a>
      </div>
      <div className="flex space-x-4">
        <a href="#signin" className="px-4 py-2 rounded-full border border-white hover:bg-white hover:text-black transition">Sign In</a>
        <a href="#start" className="px-4 py-2 rounded-full bg-orange-400 hover:bg-orange-500 transition">Get Started</a>
      </div>
    </nav>
  )
}
