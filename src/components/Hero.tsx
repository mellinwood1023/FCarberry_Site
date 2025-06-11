'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'About Me', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
  { name: 'Links', href: '/links' },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const remaxPhoto = '/images/remax_mastrballoon_cmyk_r.jpg'

  return (
    <div className="bg-white rounded-b-lg shadow-lg backdrop-blur-sm ">
      <header className="relative inset-x-0 top-0 z-50">
        <nav className="flex flex-col bg-sky-900 items-center rounded-t-lg justify-between p-4 sm:p-6 lg:px-8">
          <div className="w-full flex flex-row sm:flex-row items-center gap-2">
            <img
              src="/images/home3.jpeg"
              alt="Home 3"
              className="w-full h-12 sm:w-1/3 rounded-lg shadow-lg ring-1 ring-gray-900/10 object-cover"
            />
            <img
              src="/images/skyview2.webp"
              alt="Skyview"
              className="w-full h-12 sm:w-1/3  rounded-lg shadow-lg ring-1 ring-gray-900/10 object-cover"
            />
            <img
              src="/images/house4.webp"
              alt="House 4"
              className="w-full h-12 sm:w-1/3  rounded-lg shadow-lg ring-1 ring-gray-900/10 object-cover"
            />
            <div className="ml-auto flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="hidden lg:flex gap-x-8 mt-4 ml-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-semibold text-gray-900 hover:text-red-700"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/30" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm bg-sky-900 px-6 py-6 overflow-y-auto shadow-lg">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img src={remaxPhoto} alt="" className="h-8 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 rounded-lg text-base font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-10 p-4 sm:p-8">
        <div className="bg-white/70 rounded-xl shadow-lg backdrop-blur-sm p-6 sm:p-9 flex flex-col lg:flex-row items-center justify-center max-w-6xl w-full mx-auto gap-8">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/images/agent-2020-fred-carberry.jpg"
              alt="Fred Carberry"
              className="w-70 max-w-md rounded-lg shadow-lg ring-1 ring-gray-900/10 object-cover"
            />
          </div>
           <div className="w-full lg:w-1/2 flex flex-col items-center text-center px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
              Frederick Carberry
              <p className="text-lg text-gray-800">Licensed Realtor</p>
              <p className="text-base text-gray-700">serving Massachusetts & New Hampshire</p>
              <p className="text-xs text-gray-500">RE/MAX Partners</p>
            </h1>

            <p className="text-xs text-gray-500 mt-10">Call or Text</p>
            <div className="mt-1 flex flex-col sm:flex-row items-center gap-4 bg-sky-900 rounded-lg shadow-md p-2 hover:bg-indigo-50 ">
              <a
                href="tel:978-479-4799"
                className="text-sm font-semibold"
              >
                 (978) 479-4799
              </a>
              </div>
            <p className="mt-15 text-sm sm:text-base text-gray-600">
              Turning your real estate dreams into reality. Whether you're buying or selling, I'm here to help you every step of the way.
            </p>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
              <div className="hidden sm:flex">
                <div className="mt-2 sm:mt-2">
                  <a
                    href="#"
                    className="block text-sm text-center font-semibold border px-4 py-2 hover:bg-indigo-50  bg-sky-900 rounded-lg shadow-md p-2"
                  >
                    Start the preapproval process →
                  </a>
                  <p>
                    <span className="text-xs text-gray-500">or</span>
                  </p>
                  <a
                    href="https://www.remax.com/"
                    className="block text-sm text-center font-semibold border px-4 py-2 hover:bg-indigo-50  bg-sky-900 rounded-lg shadow-md p-2"
                  >
                    Search for properties  →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-white to-sky-600 opacity-70 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
          />
        </div>
      </div>
    </div>
  )
}
