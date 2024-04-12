'use client';

import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import classNames from 'classnames';
import { Bars3Icon, ChevronRightIcon, Cog6ToothIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavigationItem } from '@/utils/types';
import { SIDEBAR_ITEMS } from './constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';

interface SidebarProps {
  children: React.ReactNode;
}

const renderLink = (item: NavigationItem, isActive: boolean) => {
  if (item.external) {
    return (
      <a
        href={item.href}
        className={classNames(
          'group flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 text-[#5E6773] font-normal hover:text-white'
        )}
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
      href={item.href}
      className={classNames(
        isActive ? 'text-[#25D695] font-medium bg-sidebar-active' : 'text-[#5E6773] font-normal hover:text-white',
        'group flex gap-x-3 rounded-md p-2 text-sm leading-6'
      )}
    >
      {item.name}
    </Link>
  );
};

const renderNavigationItems = (items: NavigationItem[], pathname: string) => {
  if (!items) return null;

  return items.map((item: NavigationItem) => {
    const isActive = pathname === item.href;

    const cx = classNames('flex items-center w-full rounded-lg p-3 pr-2 gap-x-6 text-base font-normal capitalize', {
      'text-[#25D695] font-medium bg-sidebar-active': isActive,
    });

    return (
      <li key={item.name}>
        {!item.children?.length ? renderLink(item, isActive) : (
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
                  {renderNavigationItems(item.children || [], pathname)}
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

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

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
                            {renderNavigationItems(SIDEBAR_ITEMS, pathname)}
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
                    {renderNavigationItems(SIDEBAR_ITEMS, pathname)}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <main className="px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] grow max-w-full overflow-hidden main-content">
          {children}
        </main>
      </div>
    </>
  );
};
