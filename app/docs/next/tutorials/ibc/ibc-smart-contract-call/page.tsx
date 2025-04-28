
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './ibc-smart-contract-call.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IBC Smart Contract Communication Tutorial | Coreum Documentation",
  description: "Learn how to enable smart contracts on Coreum to communicate across chains with IBC. This tutorial covers setting up CosmWasm contracts for cross-chain messaging.",
  keywords: [
    'Coreum IBC Tutorial',
    'CosmWasm Smart Contract',
    'IBC Communication',
    'Cross-Chain Messaging',
    'Smart Contract Tutorial',
    'Blockchain Interoperability',
    'Coreum Blockchain',
    'IBC Channel Setup',
    'Hermes Relayer',
    'CosmWasm IBC'
  ],
  openGraph: {
    type: 'website',
    description: "Learn how to enable smart contracts on Coreum to communicate across chains with IBC. This tutorial covers setting up CosmWasm contracts for cross-chain messaging.",
    siteName: "IBC Smart Contract Communication Tutorial | Coreum Documentation",
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'IBC Transfer to Osmosis Using Keplr Wallet',
    href: '/docs/next/tutorials/ibc/ibc-transfer-to-osmosis',
  };
  const nextNavigationItem = {
    label: 'IBC WASM Transfer Tutorial',
    href: '/docs/next/tutorials/ibc/ibc-wasm-transfer',
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
