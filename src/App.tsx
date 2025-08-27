import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';

// pages ෆෝල්ඩරයේ ඇති componentස් import කරන්න
import AboutPage from './pages/AboutPage';
import Dashboard from './pages/Dashboard';
import FeaturesPage from './pages/FeaturesPage';
import Login from './pages/login'; 

function Home() {
  return (
    <div className="min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center">
      <Hero />
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // තත්පර 2කට පස්සේ loading state එක false කරන්න
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      // Loading screen එක
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="text-white text-3xl animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        {/* ඔබට වෙනත් පිටු අවශ්‍ය නම්, මේ ආකාරයට ඒවාටද Routes එකතු කරන්න */}
        {/* <Route path="/pricing" element={<Pricing />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
      </Routes>
    </Router>
  );
}