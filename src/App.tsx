import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';

// pages ෆෝල්ඩරයේ ඇති components import කරන්න
import AboutPage from './pages/AboutPage';
import Dashboard from './pages/Dashboard';
import FeaturesPage from './pages/FeaturesPage';
import Login from './pages/login.tsx';
import PricingPage from './pages/PricingPage';
import ServicesPage from './pages/ServicesPage';
import Register from './pages/Register.tsx';
import Reset from './pages/Reset';

// ප්‍රධාන පිටුවේ අන්තර්ගතය
function Home() {
  return (
    <>
      <div className="min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center">
        <Hero />
      </div>
    </>
  );
}

// App component එකේ loading සහ routing කළමනාකරණය
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // තත්පර 2කට පස්සේ loading state එක false කරන්න
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);

  // loading screen එක පෙන්වන්න
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="text-white text-3xl animate-pulse">Loading...</div>
      </div>
    );
  }

  // ප්‍රධාන app එක render කරන්න
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </Router>
  );
}