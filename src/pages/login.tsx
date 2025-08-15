// src/pages/Login.tsx
import React, { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate login delay
    setTimeout(() => {
      setLoading(false);
      alert("Login Successful! 🎉");
    }, 2000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/bg.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/40 via-transparent to-blue-500/40"></div>
      </div>

      {/* Glass Card */}
      <div className="relative z-10 bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20 animate-fadeInUp">
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          Login
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-white mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter your email"
            />
          </div>
          {/* Password */}
          <div>
            <label className="block text-white mb-1">Password</label>
            <input
              type="password"
              required
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter your password"
            />
          </div>
          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 rounded-lg font-semibold transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl active:scale-95 ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-pink-500 to-blue-500 text-white"
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Logging in...</span>
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>
        <p className="text-center text-sm text-white/80 mt-5">
          Don't have an account?{" "}
          <a
            href="#"
            className="underline hover:text-white transition-colors duration-200"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
