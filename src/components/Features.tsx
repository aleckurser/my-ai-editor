import React from 'react'

export default function Features() {
  const features = [
    { icon: '🔥', title: 'AI Background Removal', desc: 'Remove backgrounds instantly with AI precision.' },
    { icon: '⚡', title: 'Smart Filters', desc: 'Apply cinematic and vintage looks automatically.' },
    { icon: '📤', title: 'Easy Upload', desc: 'Drag & drop your photos and videos effortlessly.' }
  ]

  return (
    <section
      id="features"
      aria-label="Main features"
      className="mt-16 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4"
    >
      {features.map((f, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 animate-fadeIn"
          style={{ animationDelay: `${idx * 0.15}s` }}
        >
          <div
            aria-hidden="true"
            className="bg-blue-400 dark:bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-lg"
          >
            {f.icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{f.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{f.desc}</p>
        </div>
      ))}
    </section>
  )
}
