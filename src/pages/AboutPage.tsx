import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-400 text-center">
      <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
      <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
        We are a team of passionate developers and designers dedicated to building the future of AI-powered creative tools.
      </p>
    </div>
  );
}