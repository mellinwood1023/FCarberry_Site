import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
        <Nav />
      <h1 className="text-2xl font-bold mb-4 mt-20">Privacy Policy</h1>
      <p className="mb-4">
        This website is committed to protecting your privacy. Any personal information collected through contact forms, email submissions, or other means is kept confidential and used solely for the purpose of assisting you with your real estate needs.
      </p>
      <h2 className="text-xl font-semibold mb-2">Information Collection</h2>
      <p className="mb-4">
        We may collect your name, email address, phone number, or other details you provide when submitting inquiries or testimonials. This data is never sold or shared with third parties.
      </p>
      <h2 className="text-xl font-semibold mb-2">Cookies & Tracking</h2>
      <p className="mb-4">
        This site may use cookies or third-party tools to analyze traffic or improve your experience. You can disable cookies in your browser settings at any time.
      </p>
      <h2 className="text-xl font-semibold mb-2">Third-Party Services</h2>
      <p className="mb-4">
        We may use services like Google Analytics or embedded maps to enhance your experience. These services may collect anonymized usage data.
      </p>
      <h2 className="text-xl font-semibold mb-2">Contact</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us at [your@email.com].
      </p>
      <p className="text-sm text-gray-600">
        Last updated: {new Date().toLocaleDateString()}
      </p>
      <Footer />
      
    </div>
  );
};

export default PrivacyPolicy;
