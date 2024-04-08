'use client';

import { Disclosure } from '@headlessui/react'
import classNames from 'classnames';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { NavigationItem } from '@/utils/types';
import { SIDEBAR_ITEMS } from './constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
    );q
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

    return (
      <li key={item.name}>
        {!item.children?.length ? renderLink(item, isActive) : (
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={classNames(
                    open ? 'bg-[#17191E] text-[#eeeeee]' : 'text-[#868991]',
                    isActive ? 'text-red-700' : '',
                    'flex items-center w-full rounded-lg p-3 pr-2 gap-x-6 text-base font-normal text-[#868991] capitalize'
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

  return (
    <div className="flex flex-row w-full h-auto min-h-full flex-1 font-['space grotesk'] ">
      <div className="flex flex-none w-72">
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
      <main className="px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] flex-1">
        {children}
      </main>
    </div>
  );
};
