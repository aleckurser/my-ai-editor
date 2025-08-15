import React, { useState, useEffect } from 'react'; // useState සහ useEffect import කරන්න
import NavBar from './components/NavBar';
import Hero from './components/Hero';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // තත්පර 2කට පස්සේ loading state එක false කරන්න
    setTimeout(() => {
      setLoading(false);
    }, 2000); // ඔබට අවශ්‍ය කාලය වෙනස් කරන්න පුළුවන්
  }, []);

  return (
    <>
      {loading ? (
        // Loading screen එක
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
          <div className="text-white text-3xl animate-pulse">Loading...</div>
        </div>
      ) : (
        // ඔබේ ප්‍රධාන අන්තර්ගතය
        <div className="min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center">
          <NavBar />
          <Hero />
        </div>
      )}
    </>
  );
}