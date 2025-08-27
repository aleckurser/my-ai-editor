import React from 'react';
import { FaMagic, FaPalette, FaVideo, FaCog } from 'react-icons/fa';

const features = [
  {
    icon: <FaMagic className="text-4xl text-blue-500" />,
    title: 'Smart Image Enhancement',
    description: 'Automatically adjust brightness, contrast, and color balance to make your photos pop.',
  },
  {
    icon: <FaPalette className="text-4xl text-purple-500" />,
    title: 'AI-Powered Background Removal',
    description: 'Effortlessly remove backgrounds from any image with a single click, no manual selection needed.',
  },
  {
    icon: <FaVideo className="text-4xl text-green-500" />,
    title: 'Instant Video Effects',
    description: 'Apply professional-grade filters and effects to your videos in real-time.',
  },
  {
    icon: <FaCog className="text-4xl text-yellow-500" />,
    title: 'Customizable Presets',
    description: 'Save your favorite settings as presets for quick and consistent editing across all your projects.',
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8 pt-24">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fadeInUp">
          Powerful Features. Seamless Workflow.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto animate-fadeInUp delay-200">
          Discover how our AI editor transforms your creative process with intelligent and intuitive tools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-300 animate-fadeInUp"
              style={{ animationDelay: `${200 * index}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h2 className="text-2xl font-bold mb-2">{feature.title}</h2>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}