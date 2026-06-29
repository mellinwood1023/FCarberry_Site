import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <>
      <Nav />

      <div className="about-container max-w-5xl mx-auto px-4 py-10 flex flex-col sm:flex-row gap-8 items-start mt-10 bg-white/70 rounded-xl shadow-lg backdrop-blur-sm">

        {/* TEXT COLUMN – FIRST ON MOBILE, SECOND ON DESKTOP */}
        <div className="order-1 sm:order-2 flex-1">
          <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center sm:text-left">
            About Me
          </h1>

          <div className="bg-white/70 rounded-xl shadow-lg p-8 space-y-4 text-left backdrop-blur-sm">
            <p className="text-gray-800 leading-relaxed">
              With over 24 years of experience in real estate, I’ve had the privilege of helping
              clients find more than just a property—I help them find a place to call home. My
              background includes working with luxury homes, new construction, lakefront properties,
              farmland, and vacation retreats. Whether you're a first-time homebuyer, relocating, or
              looking to invest, I offer local expertise, a steady hand, and a commitment to
              getting results.
            </p>

            <p className="text-gray-800 leading-relaxed">
              Outside of real estate, I’m proud to be a husband since 2004, a father of four, and a
              grandfather to three. My family is at the heart of everything I do. I also enjoy
              riding motorcycles, spending time on the water, and following my favorite sports
              teams—especially the Patriots.
            </p>

            <p className="text-gray-800 leading-relaxed">
              I’m passionate about travel and have explored destinations across the Dominican
              Republic, Italy, Costa Rica, and Mexico. I believe in the value of new experiences and
              always bring that same energy and curiosity to my work.
            </p>

            <p className="text-gray-800 leading-relaxed">
              My approach is straightforward: treat every client with respect, honesty, and care—as
              if they were family. If you're searching for a real estate professional who is
              reliable, responsive, and deeply rooted in the community, I’d be glad to help you take
              the next step.
            </p>
          </div>

          {/* BACKGROUND BLOB */}
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

        {/* IMAGE COLUMN – CAROUSEL ON MOBILE, COLUMN ON DESKTOP */}
        <div className="order-2 sm:order-1 w-full sm:w-1/4">

          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide sm:flex-col sm:overflow-visible">

            <img
              src="/images/fishing_photo.jpg"
              alt="Fred Carberry Fishing"
              className="flex-shrink-0 w-[85vw] sm:w-full rounded-lg shadow-md object-cover snap-center transition-all duration-300"
            />

            <img
              src="/images/Jungle_photo.jpg"
              alt="Fred Carberry Traveling"
              className="flex-shrink-0 w-[85vw] sm:w-full rounded-lg shadow-md object-cover snap-center transition-all duration-300"
            />

            <img
              src="/images/horses_photo.jpg"
              alt="Fred Carberry Horses"
              className="flex-shrink-0 w-[85vw] sm:w-full rounded-lg shadow-md object-cover snap-center transition-all duration-300"
            />

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default About;