import React from 'react';
import NavBar from '../components/NavBar'; // NavBar component එක import කරගන්න

const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          This is the About Us page. Learn more about our mission and our team.
        </p>
        {/* ඔබට අවශ්‍ය අනෙක් content මෙතනට දාන්න */}
      </main>
    </div>
  );
};

export default AboutPage;