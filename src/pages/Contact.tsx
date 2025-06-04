import Form from '../components/Form'
import React from 'react';
import Nav from '../components/Nav';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <Nav />
      <h1 className="pt-20">Let's Connect</h1>
      <p className="pt-7 pb-9">If you have any questions or would like to get in touch, please fill out the form below.</p>
      <Form />
    </div>
  );
};

export default Contact;
