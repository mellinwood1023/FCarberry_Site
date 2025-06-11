import React from 'react';
import Nav from '../components/Nav';
import TestimonialForm from '../components/TestimonialForm';
import Footer from '../components/Footer';

const Testimonials: React.FC = () => {
  return (
    <>
      <Nav />
    <div className="bg-white/70 rounded-xl shadow-lg backdrop-blur-sm mt-11 p-8 max-w-2xl mx-auto flex flex-col items-center ">
      <div className="px-4 py-8 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-900 mt-8">My Clients Say...</h1>
                <TestimonialForm />
        {/* Testimonial content goes here */}
      </div>
    </div>
      <Footer />
    </>
  );
};

export default Testimonials;
