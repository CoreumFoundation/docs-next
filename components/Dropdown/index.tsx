import { FC, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';

interface DropdownItem {
  label: string;
  href: string;
  external?: boolean;
}

interface DropdownProps {
  label: string;
  items: DropdownItem[];
}

export const Dropdown: FC<DropdownProps> = ({
  label,
  items,
}) => {
  return (
    <Menu as="div" className="relative inline-block text-left w-full max-w-fit">
      <div>
        <Menu.Button className="inline-flex w-full sm:justify-center gap-x-1.5 rounded-md bg-main-light dark:bg-main-dark px-3 py-2 text-sm font-medium text-[#9FA2AC] shadow-sm ring-0">
          {label}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="relative w-full sm:absolute sm:right-0 sm:z-50 sm:mt-2 sm:w-40 origin-top-right rounded-md bg-[#0d110f] shadow-lg ring-0 outline-none">
          <div className="py-1">
            {items.map((item: DropdownItem, index: number) => {
              return (
                <Menu.Item key={`${item.label}-${index}`}>
                  <Link
                    href={item.href}
                    className="flex items-center text-[#5E6773] px-5 py-3 text-sm hover:bg-[#17191E] hover:text-[#9FA2AC]"
                    target={item.external ? "_blank" : "_self"}
                  >
                    {item.label}
                    {item.external ? (
                      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.0767 8.39104H7.02734V7.16675H14.1691V14.3085H12.9448V9.25435L6.69904 15.5001L5.83333 14.6344L12.0767 8.39104Z" fill="#5E6773"/>
                      </svg>
                    ) : ''}
                  </Link>
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
