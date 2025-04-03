'use client';

import { Dialog, Disclosure, Transition } from '@headlessui/react'
import classNames from 'classnames';
import { ArrowUpIcon, Bars3Icon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavigationItem } from '@/utils/types';
import {
  API_ITEMS,
  BUG_BOUNTY_ITEMS,
  DEX_API,
  HELP_ITEMS,
  MODULES_ITEMS,
  OVERVIEW_ITEMS,
  ROUTE_NEXT_PREFIX,
  ROUTE_V4_PREFIX,
  TOOLS_ITEMS,
  TUTORIAL_ITEMS,
  VALIDATORS_ITEMS,
  XRPL_BRIDGE_ITEMS,
} from './constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import TransitionDiv from '../Transition';

interface SidebarProps {
  children: React.ReactNode;
}

const renderLink = (item: NavigationItem, isActive: boolean, routePrefix: string) => {
  if (item.external) {
    return (
      <a
        href={item.href}
        className="group flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 text-[#5E6773] font-normal hover:text-white"
        target='blank'
      >
        {item.name}
        <svg className="group-hover:stroke-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M14.492 9.46915H8.43281V8H17.0029V16.5701H15.5337V10.5051L8.03885 18L7 16.9612L14.492 9.46915Z" fill="#5E6773"/>
        </svg>
      </a>
    );
  }

  return (
    <Link
      href={`${routePrefix}${item.href}`}
      prefetch={false}
      className={classNames(
        isActive ? 'text-[#25D695] font-medium bg-sidebar-active' : 'text-[#5E6773] font-normal hover:text-white',
        'group flex gap-x-3 rounded-md p-2 text-sm leading-6'
      )}
    >
      {item.name}
    </Link>
  );
};

const renderNavigationItems = (items: NavigationItem[], pathname: string, routePrefix: string) => {
  if (!items) return null;

  return items.map((item: NavigationItem) => {
    const isActive = pathname.split(routePrefix)[1] === item.href;

    const cx = classNames('flex items-center w-full rounded-lg p-3 pr-2 gap-x-6 text-base font-normal capitalize', {
      'text-[#25D695] font-medium bg-sidebar-active': isActive,
    });

    return (
      <li key={item.name}>
        {!item.children?.length ? renderLink(item, isActive, routePrefix) : (
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={classNames(cx,
                    isActive ? 'text-[#25D695] font-medium bg-sidebar-active' : 'text-[#868991]',
                    open && !isActive ? 'md:bg-[#17191E] text-[#eeeeee]' : '',
                    'flex items-center w-full rounded-lg p-3 pr-2 gap-x-6 text-base font-normal capitalize'
                  )}
                >
                  {item.name}
                  <ChevronRightIcon
                    className={`
                    w-3 h-3 ml-auto ${open ? 'transform rotate-90 text-[#25D695]' : 'transform rotate-0 text-[#868991]'}`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel as="ul" className="my-2 ml-4 px-2 border-l border-l-1 border-[#17191E]">
                  {renderNavigationItems(item.children || [], pathname, routePrefix)}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        )}
      </li>
    );
  });
};

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const routePrefix = useMemo(() => {
    return pathname.includes('/next') ? ROUTE_NEXT_PREFIX : ROUTE_V4_PREFIX;
  }, [pathname]);

  const scrollToTop = useCallback(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  const sidebarItems = useMemo(() => {
    if (routePrefix.includes('next')) {
      return [
        ...OVERVIEW_ITEMS,
        ...MODULES_ITEMS,
        ...TOOLS_ITEMS,
        ...XRPL_BRIDGE_ITEMS,
        ...VALIDATORS_ITEMS,
        ...TUTORIAL_ITEMS,
        ...DEX_API,
        ...API_ITEMS,
        ...HELP_ITEMS,
        ...BUG_BOUNTY_ITEMS,
      ];
    }

    return [
      ...OVERVIEW_ITEMS,
      ...MODULES_ITEMS,
      ...TOOLS_ITEMS,
      ...XRPL_BRIDGE_ITEMS,
      ...VALIDATORS_ITEMS,
      ...TUTORIAL_ITEMS,
      ...API_ITEMS,
      ...HELP_ITEMS,
      ...BUG_BOUNTY_ITEMS,
    ];
  }, [routePrefix]);

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full h-auto min-h-full flex-1 font-['space grotesk']">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 w-full lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-[#080908] w-full" />
            </Transition.Child>

            <div className="fixed inset-0 flex w-full">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="flex flex-col w-full flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="flex w-full pt-6 pb-4 px-4">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col  gap-y-5 overflow-y-auto bg-[#080908] px-6 pb-4 ring-0">
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {renderNavigationItems(sidebarItems, pathname, routePrefix)}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <div className="flex lg:hidden w-full">
          <div className="sticky top-0 z-40 flex w-full px-6 py-3 shrink-0 items-center gap-x-4 border-b border-[#17191e] bg-[#080908] px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" className="-m-2.5 p-2.5 text-gray-700 flex items-center lg:hidden gap-1" onClick={() => setSidebarOpen(true)}>
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" /> Menu
            </button>

            {/* Separator */}
          </div>
        </div>

        <div className="hidden lg:flex flex-none w-72 main-content">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#101216] p-6">
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {renderNavigationItems(sidebarItems, pathname, routePrefix)}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <main className="relative px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] grow max-w-full overflow-hidden main-content overflow-y-scroll scroll-smooth" ref={scrollContainerRef}>
          <TransitionDiv>
            {children}
          </TransitionDiv>
        </main>
        <div className="text-white fixed right-10 bottom-24" onClick={scrollToTop}>
          <div className="w-10 h-10 flex items-center justify-center rounded-full p-2 border-2 border-[#25D695] bg-[#0a0a0a] cursor-pointer">
            <ArrowUpIcon className="w-4 h-4 text-[#25D695]" />
          </div>
        </div>
      </div>
    </>
  );
};
