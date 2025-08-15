import React from 'react';
import NavBar from '../components/NavBar'; // NavBar component එක import කරගන්න

const FeaturesPage = () => {
  return (
    <div>
      <NavBar />
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Features</h1>
        <p className="text-lg">
          This is the Features page. Here you can showcase all the amazing features of your AI editor.
        </p>
        {/* ඔබට අවශ්‍ය අනෙක් content මෙතනට දාන්න */}
      </main>
    </div>
  );
};

export default FeaturesPage;