// pages/about.tsx

import type { NextPage } from 'next';
import Head from 'next/head';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us - My AI Editor</title>
        <meta name="description" content="Learn more about our AI-powered editor and our mission to help you write better." />
      </Head>

      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">About My AI Editor</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to My AI Editor, where we're dedicated to helping you craft exceptional content with the power of artificial intelligence.
          Our platform is designed to assist students, professionals, and everyone in between to write more effectively and efficiently.
        </p>

        <section className="mt-8">
          <h2 className="text-3xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is simple: to make writing accessible and powerful for everyone. We believe that technology can be a creative
            partner, not just a tool. By integrating advanced AI, we help you overcome writer's block, refine your ideas, and perfect your
            prose with ease.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-semibold mb-2">Our Team</h2>
          <p className="text-gray-700 leading-relaxed">
            We are a small team of developers, designers, and writers who are passionate about technology and creativity. We're constantly
            working to improve My AI Editor, adding new features and refining our algorithms to give you the best possible experience.
          </p>
        </section>
      </main>
    </>
  );
};

export default About;