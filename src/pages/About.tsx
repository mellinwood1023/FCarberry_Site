import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <>
      <div className="about-container max-w-5xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-8 items-start">
        <Nav />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-blue-900 mb-6 text-left">About Me</h1>
          <div className="space-y-4 text-left">
            <p className="text-gray-800 leading-relaxed">For over two decades, I’ve had the honor of helping people find more than just properties—I help them find places where memories are made. With 24 years of experience, I specialize in everything from luxury homes and new construction to lakefront getaways, farmland, and vacation retreats. Whether you're relocating, investing, or buying your very first home, I bring patience, local insight, and an unwavering commitment to your goals.</p>
            <p className="text-gray-800 leading-relaxed">But real estate is just one part of my story.</p>
            <p className="text-gray-800 leading-relaxed">I’ve been married to the love of my life since 2004. I'm a proud dad of four and “Nanu” to three grandkids who keep me on my toes and keep my life overflowing with fulfillment. When I’m not helping clients close on their dream homes, you’ll catch me cruising on my motorcycle, yelling at the Patriots on TV, or casting a line on the boat with my grandson. If there’s a campsite or a classic car show nearby, chances are I’m there—with a coffee in hand, soaking it all in.</p>
            <p className="text-gray-800 leading-relaxed">And when I really want to unwind? I travel. From the beaches of Puerto Rico and the Dominican Republic to the jungles of Costa Rica and the coastlines of Mexico—there’s nothing like stepping into a new place and soaking up the culture, food, and sun.</p>
            <p className="text-gray-800 leading-relaxed">Family comes first, always. That’s why I treat every client like one of my own—with honesty, respect, and a little good-natured sarcasm if the moment calls for it.</p>
            <p className="text-gray-800 leading-relaxed">During the week, I also serve as Fleet Supervisor for the City of Lawrence, MA—a role that keeps me grounded, sharp, and always ready to solve the next challenge. In 2019, I was proud to receive the Executive Award, which reminds me that hard work and heart never go unnoticed.</p>
            <p className="text-gray-800 leading-relaxed">If you're looking for a Realtor who knows the value of a handshake, believes in doing right by people, and brings a bit of Boston grit to everything he does, I’d be honored to help you find your next home—or your next great investment.</p>
          </div>
        </div>
        <div className="w-full md:w-80 flex-shrink-0 flex flex-col gap-4 items-center">
          {/* Example photo slots, replace src with your own images */}
          <img src="public\fishing_photo.jpg" alt="Fred Carberry" className="rounded-lg shadow-md w-full object-cover" />
          {/* Add more <img> tags here for additional photos */}
          {/* <img src="/public/another_photo.jpg" alt="Description" className="rounded-lg shadow-md w-full object-cover" /> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
