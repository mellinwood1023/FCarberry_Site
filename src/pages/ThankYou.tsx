import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const ThankYou: React.FC = () => {
  return (
    <>
    <Nav />
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Thank you!</h1>
        <p className="text-gray-700 text-lg mb-2">
          Your review request has been submitted for approval.
        </p>
        <p className="text-sm text-gray-500">
          We appreciate your feedback and may feature it on our site soon.
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default ThankYou;
