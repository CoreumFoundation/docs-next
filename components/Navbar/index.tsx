'use client';

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import Link from 'next/link';
import { Dropdown } from '../Dropdown';
import AskCookbook from '@cookbookdev/coreum/react';
import "../index.css";

import dynamic from 'next/dynamic';
import { Suspense, useMemo } from 'react';
import { usePathname } from 'next/navigation';

const AutocompleteComponent = dynamic(() => import('@/components/AlgoliaSearch'), {
  ssr: false,
});

export const Navbar = () => {
  const versionDropdownItems = [
    {
      label: 'v4',
      href: '/docs/v4/overview/general',
      external: false,
    },
    {
      label: 'Next',
      href: '/docs/next/overview/general',
      external: false,
    }
  ];

  const route = usePathname();

  const versionRoute = useMemo(() => {
    const currentRoute = route.split('/')[2];

    if (!currentRoute || currentRoute && (currentRoute !== 'next' && currentRoute !== 'v4')) {
      return 'Select Version';
    }

    return currentRoute.toUpperCase();
  }, [route]);

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
                    label={versionRoute}
                    items={versionDropdownItems}
                  />
                  <div className="algolia-search flex items-center">
                    <Suspense fallback={<div>Loading...</div>}>
                      <AutocompleteComponent />
                    </Suspense>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {['github', 'twitter', 'instagram', 'telegram', 'discord', 'youtube'].map((platform) => (
                    <div key={platform} className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                      <Link href={`https://${platform === 'twitter' ? 'x' : platform}.com/${platform === 'twitter' ? 'CoreumOfficial' : platform === 'github' ? 'CoreumFoundation' : platform === 'youtube' ? '@coreumofficial' : 'CoreumOfficial'}`} target="_blank">
                        <Image
                          className="h-8 w-8"
                          src={`/images/${platform}-navbar.svg`}
                          alt={`Coreum ${platform.charAt(0).toUpperCase() + platform.slice(1)}`}
                          width={32}
                          height={32}
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 bg-[#080908] focus:outline-none">
                  <span className="absolute -inset-0.5" />
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
              <div className="space-y-4 px-6 py-4 bg-[#080908]">
                <AutocompleteComponent />
                <div className="flex items-center w-full justify-between gap-4">
                  <Dropdown
                    label={versionRoute}
                    items={versionDropdownItems}
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
                <div className="flex flex-wrap items-center w-full gap-2">
                  {['github', 'twitter', 'instagram', 'telegram', 'discord', 'youtube'].map((platform) => (
                    <Disclosure.Button
                      key={platform}
                      as="a"
                      href={`https://${platform === 'twitter' ? 'x' : platform}.com/${platform === 'twitter' ? 'CoreumOfficial' : platform === 'github' ? 'CoreumFoundation' : platform === 'youtube' ? '@coreumofficial' : 'CoreumOfficial'}`}
                      target="_blank"
                      className="flex items-center border-l-4 border-transparent text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    >
                      <Image
                        className="h-8 w-8"
                        src={`/images/${platform}-navbar.svg`}
                        alt={`Coreum ${platform.charAt(0).toUpperCase() + platform.slice(1)}`}
                        width={32}
                        height={32}
                      />
                    </Disclosure.Button>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
