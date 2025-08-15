import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Features from './components/Features'

export default function App() {
  return (
    <div className="min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center">
      <NavBar />
      <Hero />
      <Features />
    </div>
  )
}
