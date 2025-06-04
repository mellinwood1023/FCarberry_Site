import React from 'react';
import Nav from '../components/Nav';
import TestimonialForm from '../components/TestimonialForm';
import Footer from '../components/Footer';

const Testimonials: React.FC = () => {
  return (
    <div className="about-container">
      <Nav />
      <TestimonialForm />
      <h1>My Clients Say..</h1>
      <Footer />
    </div>
  );
};

export default Testimonials;
