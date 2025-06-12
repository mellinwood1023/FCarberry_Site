import App from '../components/Form'
import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  return (
    <div className="contact-container p-8">
      <Nav />
      <div className="bg-white/70 rounded-xl shadow-lg backdrop-blur-sm p-8 max-w-2xl mx-auto flex flex-col items-center">
        <h1 className="pt-12 text-3xl font-bold text-blue-900">Let's Connect</h1>
        <p className="pt-7 pb-9">If you have any questions or would like to get in touch, please fill out the form below.</p>
        <App />
        <p className="pt-7 pb-9">Form issues? Email me directly at:</p>
        <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=fcarberry70@gmail.com&su=Real%20Estate%20Inquiry&body=Hi%20Frederick,"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:underline bg-sky-800 rounded pr-0.5 pl-0.5"
            >
             fcarberry70@gmail.com
        </a>
      </div>
      <Footer />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-white to-sky-600 opacity-70 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>
    </div>
  );
};

export default Contact;
