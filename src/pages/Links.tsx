import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Links: React.FC = () => {
  return (
    <>
      <Nav />
      <div className="px-4 py-8 max-w-5xl mx-auto ">
        <div className="bg-white/70 rounded-xl shadow-lg backdrop-blur-sm p-8">
          <h1 className="text-3xl font-bold text-black mt-8 bg-stone-200 rounded-lg p-2">Useful Links</h1>
          <p className="pt-4 pb-6">Here are some resources and links that might be helpful for you:</p>
          <h3 className="text-xl font-semibold text-black mt-6">Find Me</h3>
          <ul className="list-disc pl-6 mt-2 text-left">
              <li><a href="https://www.facebook.com/fredcarberryremax" className="bg-sky-900 rounded pr-0.5 pl-0.5 hover:underline">Facebook</a>  Follow me for updates and listings.</li>
              <li><a href="https://www.remax.com/real-estate-agents/frederick-carberry-north-andover-ma/101985044" className="bg-sky-900 pl-0.5 rounded pr-0.5 hover:underline">RE/MAX</a>  Check out my latest properties and real estate tips.</li>
              <li><a href="https://www.linkedin.com/in/fredcarberry/" className="bg-sky-900 rounded pr-0.5 pl-0.5 hover:underline">LinkedIn</a>  Connect with me professionally.</li>
          </ul>
          <h3 className="text-xl font-semibold black mt-6">Real Estate Resources</h3>
          <ul className="list-disc pl-6 mt-2 text-left ">
            <li><a href="https://www.realtor.com/" className="bg-stone-400 rounded pr-0.5 pl-0.5 hover:underline">Realtor.com</a>  Find homes for sale and rent.</li>
            <li><a href="https://www.zillow.com/" className="bg-stone-400 rounded pr-0.5 pl-0.5 hover:underline">Zillow</a>  Real estate listings and market trends.</li>
            <li><a href="https://www.redfin.com/" className="bg-stone-400 rounded pr-0.5 pl-0.5 hover:underline">Redfin</a>  Home buying and selling services.</li>
              <li><a href="https://www.nar.realtor/" className="bg-stone-400 rounded pr-0.5 pl-0.5 hover:underline">National Association of Realtors</a>  Industry news and resources.</li>
              <li><a href="https://www.hud.gov/" className="bg-stone-400 rounded pr-0.5 pl-0.5 hover:underline">U.S. Department of Housing and Urban Development</a>  Government housing resources.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Links;
