import React from "react";

export default function App() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-pulse delay-1000 top-40 -right-32"></div>

      {/* Glass card */}
      <div className="relative z-10 p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-xl border border-white/20 max-w-md text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome 🚀</h1>
        <p className="text-lg text-white/80 mb-6">
          This is your brand new UI, built with React + TailwindCSS + smooth animations.
        </p>
        <button className="px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 transition duration-300 shadow-lg">
          Get Started
        </button>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-sm text-white/50">
        © {new Date().getFullYear()} Your Website Name
      </footer>
    </div>
  );
}

