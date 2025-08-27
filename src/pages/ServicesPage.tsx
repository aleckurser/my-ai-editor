import React from 'react';
import { FaImage, FaVideo, FaMicrophone, FaStar } from 'react-icons/fa';

const services = [
  {
    icon: <FaImage className="text-4xl text-blue-500" />,
    title: 'Advanced Photo Editing',
    description: 'Use our AI to enhance photos, remove objects, and create stunning visual effects with ease.',
  },
  {
    icon: <FaVideo className="text-4xl text-purple-500" />,
    title: 'AI Video Enhancement',
    description: 'Automatically stabilize footage, apply cinematic filters, and improve video quality.',
  },
  {
    icon: <FaMicrophone className="text-4xl text-green-500" />,
    title: 'Audio Transcription & Editing',
    description: 'Convert audio to text and edit sound files with our intelligent audio tools.',
  },
  {
    icon: <FaStar className="text-4xl text-yellow-500" />,
    title: 'Creative AI Templates',
    description: 'Access a library of professionally designed templates to kickstart your creative projects.',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8 pt-24">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fadeInUp">
          Our Powerful Services
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto animate-fadeInUp delay-200">
          Discover the wide range of services our platform offers to bring your creative vision to life.
        </p>
      </div>

      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-300 animate-fadeInUp"
            style={{ animationDelay: `${200 * index}ms` }}
          >
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
            <p className="text-gray-500">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}