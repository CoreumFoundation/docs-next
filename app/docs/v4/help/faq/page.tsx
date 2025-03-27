
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './faq.mdx';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coreum Blockchain FAQ: Common Issues and Solutions | Coreum Docs",
  description: "Find answers to frequently asked questions about Coreum blockchain, including how to connect `cored` to specific networks, resolve account errors, and more.",
  keywords: [
    'Coreum blockchain FAQ',
    'Cored network connection',
    'Account not found error',
    'Key not found error',
    'Coreum blockchain solutions',
    'Blockchain troubleshooting'
  ],
  openGraph: {
    type: 'website',
    description: "Find answers to frequently asked questions about Coreum blockchain, including how to connect `cored` to specific networks, resolve account errors, and more.",
    siteName: "Coreum Blockchain FAQ: Common Issues and Solutions | Coreum Docs",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'Help Overview',
    href: '/docs/v4/overview/help',
  };
  const nextNavigationItem = {
    label: 'Useful links',
    href: '/docs/v4/help/useful-links',
  };

  return (
    <div className="flex flex-col w-full">
      <Component />
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 py-10">
        <NavigatonItem href={prevNavigationItem.href} label={prevNavigationItem.label} mode={NavigatonItemMode.Previous} />
        <NavigatonItem href={nextNavigationItem.href} label={nextNavigationItem.label} mode={NavigatonItemMode.Next} />
      </div>
    </div>
  );
};

export default Page;
