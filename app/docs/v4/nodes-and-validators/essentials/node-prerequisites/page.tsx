import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './node-prerequisites.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coreum Node Setup Prerequisites | Coreum Docs",
  description: "Prepare your system for Coreum node setup with these prerequisites. Learn how to configure system limits and install necessary utilities for optimal node operation.",
  keywords: [
    'Coreum Node Setup',
    'Node Configuration',
    'Blockchain Node Prerequisites',
    'Coreum Utilities Installation',
    'Ulimit Configuration',
    'Coreum Network',
    'Node Public IP'
  ],
  openGraph: {
    type: 'website',
    description: "Prepare your system for Coreum node setup with these prerequisites. Learn how to configure system limits and install necessary utilities for optimal node operation.",
    siteName: "Coreum Node Setup Prerequisites | Coreum Docs",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'How much fund do I need to create a validator?',
    href: '/docs/v4/nodes-and-validators/essentials/how-much-fund-to-create-validator',
  };
  const nextNavigationItem = {
    label: 'Install Cored',
    href: '/docs/v4/nodes-and-validators/essentials/install-cored',
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
