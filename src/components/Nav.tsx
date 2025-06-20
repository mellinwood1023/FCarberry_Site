import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline'



const navigation = [
    { name: 'Home', href: '/' },
  { name: 'About Me', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
  { name: 'Links', href: '/links'},
]

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const remaxPhoto = "/images/remax_mastrballoon_cmyk_r.jpg";
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50 bg-sky-900  shadow-lg backdrop-blur-sm">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 ">
              <span className="sr-only">Your Company</span>
              <img
                alt="Re/Max Balloon"
                src={remaxPhoto}
                className="h-8 w-auto rounded-lg"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href} className="text-sm/6 font-semibold text-blue-900 hover:text-red-700">
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </header>
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-30" onClick={() => setMobileMenuOpen(false)} />
      )}
      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div className="fixed top-0 right-0 h-full w-64 z-[100] bg-sky-900 shadow-lg p-6 flex flex-col gap-4 overflow-auto lg:h-auto lg:top-[72px] lg:rounded-bl-xl">
            <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="self-end mb-4"
                >
                <span className="sr-only">Close menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            {navigation.map((item) => (
                <Link
                    key={item.name}
                    to={item.href}
                    className="block text-lg font-semibold text-blue-900 hover:text-red-700"
                    onClick={() => setMobileMenuOpen(false)}
                    >
                     {item.name}
                </Link>
             ))}
        </div>
    )}
    </div>
  )
}