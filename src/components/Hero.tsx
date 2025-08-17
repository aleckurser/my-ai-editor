import React from 'react'

export default function Hero() {
  return (
    <section className="text-center pt-32 px-4">
      <span className="inline-flex items-center gap-2 bg-blue-500 px-4 py-1 rounded-full text-sm">
        AI-Powered Photo & Video Editing
      </span>

      <h1 className="text-5xl font-bold mt-6">Transform Your Visual Content</h1>
      <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
        Professional AI-powered editing tools for photos and videos. Remove backgrounds, enhance colors, and create stunning content in seconds.
      </p>

      <div className="flex justify-center gap-4 mt-8">
        <Link to="/start" className="px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition flex items-center gap-2">
          Start Editing
        </Link>
        <Link to="/features" className="px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition flex items-center gap-2">
          View Featuress
        </Link>
        <Link to="/templates" className="px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition flex items-center gap-2">
          Template
        </Link>
      </div>
    </section>
  )
}
