
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './transfer-funds.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Fund Transfer Using TypeScript and CosmJS | Coreum Developers",
  description: "Explore how to transfer funds on the Coreum blockchain using TypeScript and CosmJS. This guide includes step-by-step instructions for setting up and executing transactions.",
  keywords: [
    'Coreum Fund Transfer',
    'Blockchain Transactions TypeScript',
    'CosmJS Tutorial',
    'Typescript Blockchain Development',
    'Coreum TypeScript SDK',
    'Send Crypto with TypeScript',
    'Coreum Transaction Guide',
    'Programming Crypto Transactions',
    'Blockchain Development Tutorials',
    'Coreum Developers Guide'
  ],
  openGraph: {
    type: 'website',
    description: "Learn to transfer funds on the Coreum blockchain using TypeScript. This tutorial covers the essentials of setting up CosmJS and executing transactions efficiently.",
    siteName: "Fund Transfer Using TypeScript and CosmJS | Coreum Developers",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'Create Non-Fungible Token with Golang',
    href: '/docs/v4/tutorials/get-started/golang/create-nft',
  };
  const nextNavigationItem = {
    label: 'Using CosmJS',
    href: '/docs/v4/tutorials/get-started/typescript/cosmjs',
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
