
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './cosmjs.mdx';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Interacting with Coreum Blockchain using CosmJS and TypeScript | Coreum Docs",
  description: "Master blockchain interactions with CosmJS and TypeScript. Learn to broadcast transactions and query the Coreum blockchain with step-by-step code examples.",
  keywords: [
    'Coreum Blockchain',
    'CosmJS',
    'TypeScript Blockchain',
    'Blockchain Transactions',
    'Coreum SDK',
    'TypeScript Development',
    'Blockchain Querying',
    'Crypto Programming'
  ],
  openGraph: {
    type: 'website',
    description: "Master blockchain interactions with CosmJS and TypeScript. Learn to broadcast transactions and query the Coreum blockchain with step-by-step code examples.",
    siteName: "Interacting with Coreum Blockchain using CosmJS and TypeScript | Coreum Docs",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Transfer Funds with Typescript',
    href: '/docs/tutorials/get-started/typescript/transfer-funds',
  };
  const nextNavigationItem = {
    label: 'Using coreum-js',
    href: '/docs/tutorials/get-started/typescript/coreum-js',
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
