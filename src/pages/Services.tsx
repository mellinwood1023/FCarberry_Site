import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Services: React.FC = () => {
    const Divider = () => <hr className="m-1 " />;
  return (
    <div className="about-container">
      <Nav />
      <h1 className="text-3xl font-bold text-blue-900 mb-6 text-left pt-20 pb-5">Services</h1>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-80 flex-shrink-0 flex flex-row gap-4 justify-center items-start flex-wrap mb-4 md:flex-col md:gap-4 md:items-start md:mt-10">
          {/* Example photo slots, replace src with your own images */}
          <img src="/images/home2.jpeg" alt="Fred Carberry" className="rounded-lg shadow-md w-30 sm:w-28 md:w-full object-cover transition-all duration-300" />
          <img src="/images/home1.webp" alt="Fred Carberry" className="rounded-lg shadow-md w-30 sm:w-28 md:w-full object-cover transition-all duration-300" />
          <img src="/images/skyviewhomes.webp" alt="Fred Carberry" className="rounded-lg shadow-md w-35 sm:w-28 md:w-full object-cover transition-all duration-300" />
          {/* Add more <img> tags here for additional photos */}
          {/* <img src="/public/another_photo.jpg" alt="Description" className="rounded-lg shadow-md w-full object-cover" /> */}
        </div>
        <div className="flex-1">
          <div className="max-w-2xl bg-white/70 rounded-xl shadow-lg p-6 space-y-4 backdrop-blur-sm">
            <p className="list-disc list-inside text-left">
              <strong>Buyer Representation <br /></strong>
              Guidance through every step of the home buying process—from the first showing to the final signature.
              <Divider />
              <strong>Seller Representation <br /></strong>
              Expert marketing, pricing strategy, and negotiation to get top value for your property.
              <Divider />
              <strong>Luxury Home Sales & Purchases <br /></strong>
              Discreet, dedicated service for high-end and custom properties.
              <Divider />
              <strong>New Construction <br /></strong>
              Experience working directly with builders and navigating pre-construction deals.
              <Divider />
              <strong>Relocation Assistance <br /></strong>
              Whether you're moving to Massachusetts or heading elsewhere, I help make transitions smooth and stress-free.
              <Divider />
              <strong>Investment Properties <br /></strong>
              Find and evaluate residential or commercial investment opportunities.
              <Divider />
              <strong>Vacation & Second Homes <br /></strong>
              From beachside retreats to weekend getaways—find your perfect escape.
              <Divider />
              <strong>Farm & Land Sales <br /></strong>
              Knowledgeable support for those looking to buy or sell rural, agricultural, or undeveloped land.
              <Divider />
              <strong>Condominiums & Townhomes <br /></strong>
              Whether it’s your first home or a downsizing move, I’ll help you find the right fit.
              <Divider />
              <strong>Lakefront & Beach Properties <br /></strong>
              Specialized insight into waterfront living across Massachusetts and beyond.
              <Divider />
              <strong>Business Opportunities <br /></strong>
              Helping entrepreneurs and investors buy and sell commercial or mixed-use properties.
              <Divider />
              <strong>Market Analysis & Home Valuation <br /></strong>
              Detailed reports to help you understand your home’s market value and trends.
            </p>
          </div>
        </div>
      </div>
              <Footer />
     <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-0"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 4.1%, 100% 61.6%, 47.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-white to-sky-600 opacity-70 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        
    </div>
  );
};

export default Services;
