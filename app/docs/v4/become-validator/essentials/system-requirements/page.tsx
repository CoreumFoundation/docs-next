
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './system-requirements.mdx';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coreum Node System Requirements for Mainnet, Testnet, and Devnet | Coreum Docs",
  description: "Discover the system requirements for running Coreum nodes on Mainnet, Testnet, and Devnet. Learn about the recommended hardware specifications for validators, full nodes, and default nodes.",
  keywords: [
    'Coreum System Requirements',
    'Coreum Node Setup',
    'Blockchain Node Hardware',
    'Coreum Mainnet',
    'Coreum Testnet',
    'Coreum Devnet',
    'Validator Node Requirements',
    'Full Node Specifications'
  ],
  openGraph: {
    type: 'website',
    description: "Discover the system requirements for running Coreum nodes on Mainnet, Testnet, and Devnet. Learn about the recommended hardware specifications for validators, full nodes, and default nodes.",
    siteName: "Coreum Node System Requirements for Mainnet, Testnet, and Devnet | Coreum Docs",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Run Sentry Node',
    href: '/docs/v4/become-validator/validator/run-sentry',
  };
  const nextNavigationItem = {
    label: 'How much fund do I need to create a validator?',
    href: '/docs/v4/become-validator/essentials/how-much-fund-to-create-validator',
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
