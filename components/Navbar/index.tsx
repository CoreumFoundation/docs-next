'use client';

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import Link from 'next/link';
import { Dropdown } from '../Dropdown';
import AskCookbook from '@cookbookdev/coreum/react';
import "../index.css";
import { lazy, Suspense } from 'react';


// Import dynamic from Next.js
import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import the AlgoliaSearch component with SSR disabled
const AutocompleteComponent = lazy(() => import('@/components/AlgoliaSearch'));


export const Navbar = () => {
  const dropdownItems = [
    {
      label: 'Overview',
      href: '/docs/overview/general',
      external: false,
    },
    {
      label: 'Tutorials',
      href: '/docs/overview/tutorials',
      external: false,
    },
    {
      label: 'Modules',
      href: '/docs/overview/modules',
      external: false,
    },
    {
      label: 'Validator',
      href: '/docs/overview/validator',
      external: false,
    },
    {
      label: 'API',
      href: '/docs/api/protobuf',
      external: false,
    },
    {
      label: 'Tools/Ecosystem',
      href: '/docs/overview/tools',
      external: false,
    },
    // {
    //   label: 'Apps',
    //   href: '/docs/overview/apps',
    //   external: false,
    // },
    {
      label: 'Help',
      href: '/docs/overview/help',
      external: false,
    },
    {
      label: 'Bug Bounty',
      href: 'https://skynet.certik.com/projects/coreum#bug-bounty',
      external: true,
    },
  ];

  
  return (
    <>
      <AskCookbook apiKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWZiNGM1MTQ5YjZiODQ0ZDY4NWY3NjIiLCJpYXQiOjE3MTA5Njc4ODksImV4cCI6MjAyNjU0Mzg4OX0.oBQsTKgd3fsmkTG0WR3RVcigQkUFgKE5A0WA031Ju8E" />
      <Disclosure as="nav" className="shadow w-full">
        {({ open }) => (
          <>
            <div className="flex py-3 px-6 justify-between w-full bg-[#080908]">
              <div className="flex flex-shrink-0 items-center">
                <Link href="/">
                  <Image
                    className="h-5 w-auto"
                    src="/images/logo.svg"
                    alt="Your Company"
                    width={200}
                    height={20}
                  />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center gap-3">
                <div className="flex items-center gap-2">
                  <Dropdown
                    label="Join Coreum"
                    items={dropdownItems}
                  />
                  <div className="algolia-search flex items-center">
                    <Suspense fallback={<div>Loading...</div>}>
                      <AutocompleteComponent />
                    </Suspense>
                  </div>
                </div>
                <div
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  <Link href="https://github.com/CoreumFoundation" target="_blank">
                    <Image
                      className="h-8 w-8"
                      src="/images/github-navbar.svg"
                      alt="Coreum Github"
                      width={32}
                      height={32}
                    />
                  </Link>
                </div>
                <div
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  <Link href="https://x.com/CoreumOfficial" target="_blank">
                    <Image
                      className="h-8 w-8"
                      src="/images/twitter-navbar.svg"
                      alt="Coreum Twitter"
                      width={32}
                      height={32}
                    />
                  </Link>
                </div>
                <div
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  <Link href="https://www.instagram.com/coreum.official/" target="_blank">
                    <Image
                      className="h-8 w-8"
                      src="/images/instagram-navbar.svg"
                      alt="Coreum Instagram"
                      width={32}
                      height={32}
                    />
                  </Link>
                </div>
                <div
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  <Link href="https://t.me/CoreumOfficial" target="_blank">
                    <Image
                      className="h-8 w-8"
                      src="/images/telegram-navbar.svg"
                      alt="Coreum Telegram"
                      width={32}
                      height={32}
                    />
                  </Link>
                </div>
                <div
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  <Link href="https://discord.com/invite/XdVAGKXEhg" target="_blank">
                    <Image
                      className="h-8 w-8"
                      src="/images/discord-navbar.svg"
                      alt="Coreum Discord"
                      width={32}
                      height={32}
                    />
                  </Link>
                </div>
                <div
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  <Link href="https://www.youtube.com/@coreumofficial" target="_blank">
                    <Image
                      className="h-8 w-8"
                      src="/images/youtube-navbar.svg"
                      alt="Coreum Youtube"
                      width={32}
                      height={32}
                    />
                  </Link>
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 bg-[#080908]  focus:outline-none ">
                  <span className=" absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="text-[#eee] block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="text-[#eee] block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-6 bg-[#080908]">
                <div className="flex items-center w-full justify-between gap-4">
                  <Dropdown
                    label="Join Coreum"
                    items={dropdownItems}
                  />
                  <Link href="/docs" className="flex items-center justify-between gap-2 px-2 py-1 text-nowrap rounded-lg text-[#1B1D23] text-sm bg-green-gradient">
                    Get Started
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.8434 13.0714V8.19407L6.72266 14.3148L5.68018 13.2723L11.7985 7.15398H6.92596V5.67969H14.3177V13.0714H12.8434Z"
                        fill="#1B1D23"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="algolia-search flex items-center py-2">
                  <Suspense fallback={<div>Loading...</div>}>
                    <AutocompleteComponent />
                  </Suspense>
                </div>
                <div className="flex items-center w-full gap-2">
                  <Disclosure.Button
                    as="a"
                    href="https://github.com/CoreumFoundation"
                    target="_blank"
                    className="flex items-center border-l-4 border-transparent text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <Image
                      className="h-8 w-8"
                      src="/images/github-navbar.svg"
                      alt="Coreum Github"
                      width={32}
                      height={32}
                    />
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="https://x.com/CoreumOfficial"
                    target="_blank"
                    className="flex items-center border-l-4 border-transparent text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <Image
                      className="h-8 w-8"
                      src="/images/twitter-navbar.svg"
                      alt="Coreum Twitter"
                      width={32}
                      height={32}
                    />
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="https://www.instagram.com/coreum.official/"
                    target="_blank"
                    className="flex items-center border-l-4 border-transparent text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <Image
                      className="h-8 w-8"
                      src="/images/instagram-navbar.svg"
                      alt="Coreum Instagram"
                      width={32}
                      height={32}
                    />
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="https://t.me/CoreumOfficial"
                    target="_blank"
                    className="flex items-center border-l-4 border-transparent text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <Image
                      className="h-8 w-8"
                      src="/images/telegram-navbar.svg"
                      alt="Coreum Telegram"
                      width={32}
                      height={32}
                    />
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="https://discord.com/invite/XdVAGKXEhg"
                    target="_blank"
                    className="flex items-center border-l-4 border-transparent text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <Image
                      className="h-8 w-8"
                      src="/images/discord-navbar.svg"
                      alt="Coreum Discord"
                      width={32}
                      height={32}
                    />
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="https://www.youtube.com/@coreumofficial"
                    target="_blank"
                    className="flex items-center border-l-4 border-transparent text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <Image
                      className="h-8 w-8"
                      src="/images/youtube-navbar.svg"
                      alt="Coreum Youtube"
                      width={32}
                      height={32}
                    />
                  </Disclosure.Button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
