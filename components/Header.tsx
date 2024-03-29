'use client';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
  BuildingStorefrontIcon,
  ChatBubbleLeftIcon,
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  RocketLaunchIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import LogoutButton from '../app/(auth)/logout/LogoutButton';
import { cn } from '../lib/utils';

const tripItems = [
  {
    id: 1,
    name: 'Stays',
    description: 'worlds topnotch hotels',
    href: '/hotels',
    icon: BuildingStorefrontIcon,
  },
  {
    id: 2,
    name: 'Flights',
    description: 'soon to the moon',
    href: '#',
    icon: RocketLaunchIcon,
  },
  {
    id: 3,
    name: 'Contact',
    description: 'only praises please',
    href: '#',
    icon: ChatBubbleLeftIcon,
  },
];

const callsToAction = [
  { name: 'Demo Booking', href: '/', icon: PlayCircleIcon },
  { name: 'Support', href: '/', icon: PhoneIcon },
];

export default function Header(props: { username?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#2D5886] sticky top-0">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 font-sans"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            {/* for screenreaders */}
            <span className="sr-only">bookingwulf</span>
            <img
              className="h-12 w-auto"
              src="/bookingwulf-logo-white.png"
              alt="Logo"
              width={200}
            />
          </Link>
        </div>

        {/* mobile menu button with icon from https://www.npmjs.com/package/@heroicons/react */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>

            {/* imported from heroicons as well (like above) */}
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Submenu from 'Stays' with Popover component */}
        <Popover.Group className="hidden lg:flex lg:gap-x-16 items-center">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-base leading-6 text-white hover:text-gray-200">
              Trips
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-white"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-white -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-md shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {tripItems.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-md p-4 text-sm leading-6 hover:bg-gray-100"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justiy-center rounded-md">
                        <item.icon
                          className="h-6 w-6 text-[#2D5886] group-hover:text-blue-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-[#2D5886]"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-[#2D5886]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[#2D5886] hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-[#2D5886]"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <a
            href="/specials"
            className="text-base leading-6 text-white hover:text-gray-200"
          >
            Specials
          </a>
          <a
            href="/cars"
            className="text-base leading-6 text-white hover:text-gray-200"
          >
            Cars
          </a>
          <a
            href="/"
            className="text-base leading-6 text-white hover:text-gray-200"
          >
            Sights
          </a>

          {props.username ? (
            <>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a
                  href={`/profile/${props.username}`}
                  className="text-base leading-6 text-white underline hover:no-underline hover:text-gray-200"
                >
                  Profile
                  {/* <span aria-hidden="true">&rarr;</span> */}
                </a>
              </div>
              <LogoutButton />
            </>
          ) : (
            <>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a
                  href="/register"
                  className="text-base leading-6 text-white underline hover:no-underline hover:text-gray-200"
                >
                  Register
                  {/* <span aria-hidden="true">&rarr;</span> */}
                </a>
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a
                  href="/login"
                  className="text-base leading-6 text-white underline hover:no-underline hover:text-gray-200"
                >
                  Log in
                  {/* <span aria-hidden="true">&rarr;</span> */}
                </a>
              </div>
            </>
          )}
        </Popover.Group>
      </nav>

      {/* mobile menu dialog */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#2D5886] px-6 py-6 sm:max-w-sm sm-ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            {/* mobile menu logo */}
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">bookingwulf</span>
              <img
                className="h-8 w-auto"
                src="/bookingwulf-logo-white.png"
                alt=""
              />
            </a>

            {/* close-button with icon */}
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* first nav-item with dropdown */}
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-[#3669a1]">
                        Trips
                        <ChevronDownIcon
                          // cn is imported from lib-folder for 'classNames' ()
                          className={cn(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none',
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>

                      {/* mapping sub-nav-items */}
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...tripItems, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-md py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-[#3669a1]"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                {/* other main-nav-items */}
                <a
                  href="/specials"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-[#3669a1]"
                >
                  Specials
                </a>
                <a
                  href="/cars"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-[#3669a1]"
                >
                  Cars
                </a>
                <a
                  href="/sights"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-[#3669a1]"
                >
                  Sights
                </a>
              </div>
              {/* <div className="py-6">
                <a
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-[#3669a1]"
                >
                  Log in
                </a>
              </div> */}
              <div>
                <div className="mb-4 lg:flex lg:flex-1 lg:justify-end">
                  <a
                    href="/register"
                    className="text-base leading-6 text-white underline hover:no-underline"
                  >
                    Register
                    {/* <span aria-hidden="true">&rarr;</span> */}
                  </a>
                </div>
                <div className="mb-4 lg:flex lg:flex-1 lg:justify-end">
                  <a
                    href="/login"
                    className="text-base leading-6 text-white underline hover:no-underline"
                  >
                    Log in
                    {/* <span aria-hidden="true">&rarr;</span> */}
                  </a>
                </div>
                {/* <LoginButton /> */}
                <LogoutButton />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
