import React from 'react';
import Nav from '../components/Nav';
import TestimonialForm from '../components/TestimonialForm';
import Footer from '../components/Footer';

const Testimonials: React.FC = () => {
  return (
    <>
      <Nav />
      <div className="px-4 py-8 max-w-5xl mx-auto">
        <TestimonialForm />
        <h1 className="text-3xl font-bold text-blue-900 mt-8">My Clients Say...</h1>
        {/* Testimonial content goes here */}
      </div>
      <Footer />
    </>
  );
};

export default Testimonials;
