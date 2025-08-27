import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { FaImage, FaVideo, FaCog, FaPlus } from 'react-icons/fa';

const dashboardTools = [
  {
    icon: <FaImage className="text-3xl text-blue-500" />,
    title: 'Image Editor',
    description: 'Edit your photos with our AI-powered tools.',
  },
  {
    icon: <FaVideo className="text-3xl text-purple-500" />,
    title: 'Video Enhancer',
    description: 'Improve video quality and add professional effects.',
  },
  {
    icon: <FaCog className="text-3xl text-green-500" />,
    title: 'Settings',
    description: 'Manage your profile and account settings.',
  },
];

export default function Dashboard() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-gray-800 text-3xl animate-pulse">Loading...</div>
      </div>
    );
  }

  // පරිශීලකයෙක් login වී නොමැති නම්, login page එකට යොමු කිරීම
  if (!user) {
    window.location.href = '/login'; // This is a simple redirect
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-8 pt-24">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fadeInUp">
          Hello, {user.displayName || 'User'}!
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl animate-fadeInUp delay-200">
          Welcome back. Here's a quick overview of your tools and projects.
        </p>

        {/* Quick Actions / Tools Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {dashboardTools.map((tool, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4 transform hover:scale-105 transition-transform duration-300 animate-fadeInUp"
              style={{ animationDelay: `${200 * index}ms` }}
            >
              <div className="mt-1">{tool.icon}</div>
              <div>
                <h2 className="text-2xl font-bold mb-1">{tool.title}</h2>
                <p className="text-gray-500">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Projects Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Recent Projects</h2>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition flex items-center">
              <FaPlus className="mr-2" /> New Project
            </button>
          </div>
          <div className="text-center text-gray-500 py-12">
            <p>You have no recent projects. Start a new one!</p>
          </div>
        </div>
      </div>
    </div>
  );
}