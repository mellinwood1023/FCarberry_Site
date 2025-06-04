import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
