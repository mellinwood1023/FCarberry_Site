import { useEffect, useState } from 'react';

const testimonials = [
  {
    name: 'Sam C.',
    quote: "It's not easy finding someone you can truly trust when making such a big decision, but Fred really came through. If you're looking to buy a home and want someone who's reliable, down-to-earth, and genuinely has your back, I highly recommend working with him.",
  },
//   {
//     name: 'Mark R.',
//     quote: 'Made buying our first home stress-free. Highly recommend!',
//   },
//   {
//     name: 'Emily S.',
//     quote: 'Incredibly responsive and knowledgeable. Great experience!',
//   },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = testimonials.length;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // ✅ Autoplay every 5 seconds
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const current = testimonials[currentIndex];

  return (
    <div className="max-w-xl mx-auto px-6 py-8 bg-white shadow-lg rounded-xl text-center">
      <h2 className="text-2xl font-bold mb-6">What People Are Saying</h2>

      <div className="relative">
        <p className="text-lg italic mb-4 transition duration-500">"{current.quote}"</p>
        <p className="text-gray-700 font-semibold mb-6">– {current.name}</p>

        <div className="flex justify-center space-x-4">
          <button
            onClick={prev}
            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded shadow"
          >
            ←
          </button>
          <button
            onClick={next}
            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded shadow"
          >
            →
          </button>
        </div>

        <div className="mt-4 text-sm text-gray-500">
          {currentIndex + 1} of {total}
        </div>
      </div>
    </div>
  );
}
