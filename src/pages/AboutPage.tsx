import React from 'react';

// කණ්ඩායම් සාමාජිකයන්ගේ තොරතුරු
const teamMembers = [
  {
    name: 'Anuradha Bandara',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a562002717d?fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Anuradha is the driving force behind the vision to create a user-friendly AI platform.',
  },
  {
    name: 'Kasun Perera',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f6687?fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Kasun is a full-stack developer with a passion for building robust and scalable applications.',
  },
  {
    name: 'Chathuranga Fonseka',
    role: 'UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1499951360471-41928b5e34d1?fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Chathuranga focuses on creating intuitive and beautiful user experiences.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8 pt-24">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fadeInUp">
          Our Story
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto animate-fadeInUp delay-200">
          We are a team of passionate creators dedicated to building the future of AI-powered creative tools.
        </p>
      </div>

      <div className="container mx-auto mt-12 animate-fadeInUp delay-400">
        <div className="bg-gray-100 rounded-lg p-8 shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-white shadow-lg"
                  src={member.image}
                  alt={member.name}
                />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{member.role}</p>
                <p className="text-gray-700 max-w-xs">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}