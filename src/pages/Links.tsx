import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Links: React.FC = () => {
  return (
    <>
      <Nav />
      <main className="px-6 py-12 max-w-4xl mx-auto text-gray-900">
        <section className="bg-white rounded-2xl shadow-xl p-10">
          <h1 className="text-4xl font-extrabold text-center mb-6">Useful Links</h1>
          <p className="text-center text-lg text-gray-600 mb-10">
            Browse some helpful resources and ways to connect with me.
          </p>

          {/* Find Me */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Find Me</h2>
            <ul className="space-y-4 pl-5 list-disc">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100057614132217"
                  className="!text-blue-600 hover:!text-blue-800 font-semibold underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>{' '}
                – Follow me for updates and listings.
              </li>
              <li>
                <a
                  href="https://www.remax.com/real-estate-agents/frederick-carberry-north-andover-ma/101985044"
                  className="!text-blue-600 hover:!text-blue-800 font-semibold underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RE/MAX
                </a>{' '}
                – Explore properties and real estate tips.
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/fredcarberry/"
                  className="!text-blue-600 hover:!text-blue-800 font-semibold underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{' '}
                – Connect with me professionally.
              </li>
            </ul>
          </div>

          {/* Real Estate Resources */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Real Estate Resources</h2>
            <ul className="space-y-4 pl-5 list-disc">
              <li>
                <a
                  href="https://www.realtor.com/"
                  className="!text-blue-600 hover:!text-blue-800 font-medium underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Realtor.com
                </a>{' '}
                – Homes for sale and rent.
              </li>
              <li>
                <a
                  href="https://www.zillow.com/"
                  className="!text-blue-600 hover:!text-blue-800 font-medium underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zillow
                </a>{' '}
                – Listings and market insights.
              </li>
              <li>
                <a
                  href="https://www.redfin.com/"
                  className="!text-blue-600 hover:!text-blue-800 font-medium underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Redfin
                </a>{' '}
                – Tools for home buyers and sellers.
              </li>
              <li>
                <a
                  href="https://www.nar.realtor/"
                  className="!text-blue-600 hover:!text-blue-800 font-medium underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  National Association of Realtors
                </a>{' '}
                – News and professional resources.
              </li>
              <li>
                <a
                  href="https://www.hud.gov/"
                  className="!text-blue-600 hover:!text-blue-800 font-medium underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  U.S. Department of Housing and Urban Development
                </a>{' '}
                – Government housing assistance.
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Links;
