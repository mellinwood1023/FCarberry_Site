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
    <div className="bg-white">
      <header className="relative inset-x-0 top-0 z-50">
        <nav className="flex flex-col bg-sky-100 items-center justify-between p-4 sm:p-6 lg:px-8">
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

          <div className="hidden lg:flex gap-x-8 ml-auto">
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
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm bg-white px-6 py-6 overflow-y-auto shadow-lg">
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

      <div className="relative isolate px-4 sm:px-6 pt-3 lg:px-8">
        <div className="bg-white/70 rounded-xl shadow-lg backdrop-blur-sm p-6 sm:p-9 flex flex-col lg:flex-row items-center justify-center max-w-6xl w-full mx-auto gap-8">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/images/agent-2020-fred-carberry.jpg"
              alt="Fred Carberry"
              className="w-70 max-w-md rounded-lg shadow-lg ring-1 ring-gray-900/10 object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              Frederick Carberry
              <p className="text-2xl">Licensed Realtor</p>
              <p className="text-2xl text-gray-800">serving Massachusetts & New Hampshire</p>
              <p className="text-xs text-gray-500">RE/MAX Partners</p>
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-500">
              Turning your real estate dreams into reality. Whether you're buying or selling, I'm here to help you every step of the way.
            </p>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
              <div className="hidden sm:flex">
                <div className="relative rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Start the preapproval process with Remaxx Realtors{' '}
                  <a href="#" className="font-semibold text-indigo-600">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Here &rarr;
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
