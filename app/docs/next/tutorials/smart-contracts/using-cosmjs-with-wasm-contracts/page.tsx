
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './using-cosmjs-with-wasm-contracts.mdx';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Interact with CosmWASM Contracts on Coreum using CosmJS | Coreum Docs",
  description: "Explore how to use CosmJS to instantiate, execute, and query CosmWASM smart contracts on the Coreum blockchain. A complete guide for developers.",
  keywords: [
    'Coreum Blockchain',
    'CosmJS',
    'CosmWASM Contracts',
    'Smart Contract Interaction',
    'Blockchain Development',
    'WASM Contract Execution',
    'Smart Contract Instantiation',
    'CosmWASM Query',
    'Blockchain Programming Tutorial',
    'Coreum Development Guide'
  ],
  openGraph: {
    type: 'website',
    description: "Explore how to use CosmJS to instantiate, execute, and query CosmWASM smart contracts on the Coreum blockchain. A complete guide for developers.",
    siteName: "Interact with CosmWASM Contracts on Coreum using CosmJS | Coreum Docs",
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Testing multiple contracts',
    href: '/docs/next/tutorials/smart-contracts/testing-multiple-contracts',
  };
  const nextNavigationItem = {
    label: 'Coreum WASM SDK',
    href: '/docs/next/tutorials/smart-contracts/coreum-wasm-sdk',
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
