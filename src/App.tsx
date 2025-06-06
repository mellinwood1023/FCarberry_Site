import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Links from './pages/Links';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/termsofservice" element={<TermsOfService />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/links" element={<Links />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
