import React from 'react';
import Nav from '../components/Nav';
import TestimonialForm from '../components/TestimonialForm';

const Testimonials: React.FC = () => {
  return (
    <div className="about-container">
      <Nav />
      <TestimonialForm />
      <h1>My Clients Say..</h1>
      
    </div>
  );
};

export default Testimonials;
