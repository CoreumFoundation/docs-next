'use client';

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import Link from 'next/link';
import { Dropdown } from '../Dropdown';
import AskCookbook from '@cookbookdev/coreum/react';
import "../index.css";

import dynamic from 'next/dynamic';
import { Suspense, useContext, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { ThemeSwitch } from '../ThemeSwitch';
import { VERSION_DROPDOWN_ITEMS } from '@/constants';
import { ThemeContext } from '@/providers/ThemeProvider';

const AutocompleteComponent = dynamic(() => import('@/components/AlgoliaSearch'), {
  ssr: false,
});

export const Navbar = () => {
  const { theme: activeTheme, setTheme: handleThemeChange } = useContext(ThemeContext);

  const route = usePathname();

  const versionRoute = useMemo(() => {
    const currentRoute = route.split('/')[2];

    if (!currentRoute || currentRoute && (currentRoute !== 'next' && currentRoute !== 'v4')) {
      return 'Select Version';
    }

    return currentRoute === 'v4' ? 'v4' : 'v5';
  }, [route]);

  const isBridgeDocs = useMemo(() => {
    const currentRoute = route.split('/')[1];

    return currentRoute === 'docs-bridge';
  }, [route]);

  const currentLogoRoute = useMemo(() => {
    if (activeTheme === 'dark') {
      return isBridgeDocs ? '/images/logo-bridge.svg' : '/images/logo.svg';
    }

    return isBridgeDocs ? '/images/logo-bridge-light.svg' : '/images/logo-light.svg';
  }, [activeTheme, isBridgeDocs]);

  return (
    <>
      <AskCookbook apiKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWZiNGM1MTQ5YjZiODQ0ZDY4NWY3NjIiLCJpYXQiOjE3MTA5Njc4ODksImV4cCI6MjAyNjU0Mzg4OX0.oBQsTKgd3fsmkTG0WR3RVcigQkUFgKE5A0WA031Ju8E" />
      <Disclosure as="nav" className="shadow w-full">
        {({ open }) => (
          <>
            <div className="flex py-3 px-6 justify-between w-full bg-main-light dark:bg-main-dark border-b-sidebar-light dark:border-b-sidebar-dark border-b-2">
              <div className="flex flex-shrink-0 items-center">
                <Link href="/">
                  <Image
                    className="h-5 w-auto"
                    src={currentLogoRoute}
                    alt="Your Company"
                    width={200}
                    height={20}
                  />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center gap-3">
                <Link className="flex items-center cursor-pointer" href={isBridgeDocs ? '/docs/next/overview/general' : '/docs-bridge/overview'}>
                  <p className="text-[#9FA2AC] text-sm font-space-grotesk leading-[21px] tracking-[-0.14px] text-nowrap">
                    {isBridgeDocs ? 'Coreum Docs' : 'Bridge Docs'}
                  </p>
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0754 8.3908H7.02604V7.1665H14.1678V14.3082H12.9435V9.25411L6.69774 15.4998L5.83203 14.6341L12.0754 8.3908Z"
                      fill="#5E6773"
                    />
                  </svg>
                </Link>
                {!isBridgeDocs && (
                  <div className="flex items-center mr-2">
                    <Dropdown
                      label={versionRoute}
                      items={VERSION_DROPDOWN_ITEMS}
                    />
                  </div>
                )}
                <div className="flex items-center">
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
                <ThemeSwitch activeTheme={activeTheme} toggleTheme={handleThemeChange} />
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 bg-main-light dark:bg-main-dark focus:outline-none">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="text-main-title-light dark:text-main-title-dark block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="text-main-title-light dark:text-main-title-dark block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-4 px-6 py-4 bg-main-light dark:bg-main-dark">
                <AutocompleteComponent />
                <div className="flex items-center w-full justify-between gap-4">
                  <Link className="flex items-center cursor-pointer" href={isBridgeDocs ? '/docs/next/overview/general' : '/docs-bridge/overview'}>
                    <p className="text-[#9FA2AC] text-sm font-space-grotesk leading-[21px] tracking-[-0.14px] text-nowrap">
                      {isBridgeDocs ? 'Coreum Docs' : 'Bridge Docs'}
                    </p>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.0754 8.3908H7.02604V7.1665H14.1678V14.3082H12.9435V9.25411L6.69774 15.4998L5.83203 14.6341L12.0754 8.3908Z"
                        fill="#5E6773"
                      />
                    </svg>
                  </Link>
                  {!isBridgeDocs && (
                    <Dropdown
                      label={versionRoute}
                      items={VERSION_DROPDOWN_ITEMS}
                    />
                  )}
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
                <ThemeSwitch activeTheme={activeTheme} toggleTheme={handleThemeChange} />
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
