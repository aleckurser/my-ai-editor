import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 text-white p-6">
      {/* Background Particles Animation */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Create multiple animated divs for the particle effect */}
          <div className="absolute w-40 h-40 bg-purple-500 rounded-full opacity-20 animate-move-up-left" style={{ top: '10%', left: '15%', animationDuration: '20s' }}></div>
          <div className="absolute w-52 h-52 bg-blue-500 rounded-full opacity-20 animate-move-down-right" style={{ top: '60%', left: '70%', animationDuration: '25s' }}></div>
          <div className="absolute w-64 h-64 bg-pink-500 rounded-full opacity-20 animate-move-up-right" style={{ top: '30%', left: '40%', animationDuration: '30s' }}></div>
          <div className="absolute w-44 h-44 bg-green-500 rounded-full opacity-20 animate-move-down-left" style={{ top: '80%', left: '10%', animationDuration: '22s' }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center animate-fadeInUp">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-scaleIn">
          Your Creative Vision, <br />
          Powered by AI.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 animate-slideIn">
          Transform your images and videos with intelligent editing tools.
        </p>
        <Link
          to="/features"
          className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:from-purple-600 hover:to-blue-600 transition-transform transform hover:scale-105"
        >
          Explore Features
        </Link>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes slideIn {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes move-up-left {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-100px, -100px); }
        }
        @keyframes move-down-right {
          0% { transform: translate(0, 0); }
          100% { transform: translate(100px, 100px); }
        }
        @keyframes move-up-right {
          0% { transform: translate(0, 0); }
          100% { transform: translate(100px, -100px); }
        }
        @keyframes move-down-left {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-100px, 100px); }
        }
        .animate-fadeInUp { animation: fadeInUp 1.2s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 1.5s ease-out forwards; }
        .animate-slideIn { animation: slideIn 1.8s ease-out forwards; }
        .animate-move-up-left { animation: move-up-left infinite alternate ease-in-out; }
        .animate-move-down-right { animation: move-down-right infinite alternate ease-in-out; }
        .animate-move-up-right { animation: move-up-right infinite alternate ease-in-out; }
        .animate-move-down-left { animation: move-down-left infinite alternate ease-in-out; }
      `}</style>
    </div>
  );
}