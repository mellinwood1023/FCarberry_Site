import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
        <Nav />
      <h1 className="text-2xl font-bold mb-4">Terms of Service</h1>

      <p className="mb-4">
        By using this website, you agree to comply with and be bound by the following terms and conditions. Please review these terms carefully. If you do not agree with these terms, you should not use this site.
      </p>

      <h2 className="text-xl font-semibold mb-2">1. Website Purpose</h2>
      <p className="mb-4">
        This website is intended to provide general information about real estate services offered by [Realtor's Full Name], including listings, testimonials, and contact options. It is not intended to provide legal or financial advice.
      </p>

      <h2 className="text-xl font-semibold mb-2">2. No Guarantees</h2>
      <p className="mb-4">
        While we strive to provide accurate and up-to-date information, we make no guarantees about the completeness, reliability, or accuracy of any content on this site. Real estate availability and pricing may change at any time without notice.
      </p>

      <h2 className="text-xl font-semibold mb-2">3. User Conduct</h2>
      <p className="mb-4">
        Users agree not to misuse the website or submit false information through contact forms or testimonial submissions. Harassment, spam, or inappropriate content is prohibited and will be reported.
      </p>

      <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
      <p className="mb-4">
        All content on this website, including text, images, logos, and layout, is the property of [Realtor's Full Name] unless otherwise credited. You may not copy, reproduce, or distribute any content without prior written permission.
      </p>

      <h2 className="text-xl font-semibold mb-2">5. Links to Third-Party Sites</h2>
      <p className="mb-4">
        This site may contain links to third-party websites. We are not responsible for the content, accuracy, or policies of those sites.
      </p>

      <h2 className="text-xl font-semibold mb-2">6. Limitation of Liability</h2>
      <p className="mb-4">
        [Realtor's Full Name] shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your use of this site or reliance on any information provided herein.
      </p>

      <h2 className="text-xl font-semibold mb-2">7. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to update or modify these Terms of Service at any time without notice. Continued use of the site constitutes acceptance of those changes.
      </p>

      <h2 className="text-xl font-semibold mb-2">8. Contact</h2>
      <p className="mb-4">
        If you have any questions about these terms, please contact us at [your@email.com].
      </p>

      <p className="text-sm text-gray-600">
        Last updated: {new Date().toLocaleDateString()}
      </p>
      <Footer />
    </div>
  );
};

export default TermsOfService;
