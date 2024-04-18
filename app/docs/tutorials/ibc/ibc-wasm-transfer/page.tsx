import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './ibc-wasm-transfer.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IBC WASM Transfer Tutorial with Coreum and CosmWasm | Coreum Developers",
  description: "Learn how to build and execute an IBC-enabled smart contract for token transfers on Coreum using CosmWasm and Rust. Start developing cross-chain applications today.",
  keywords: [
    'IBC WASM Transfer',
    'Coreum Blockchain',
    'CosmWasm Tutorial',
    'Rust Programming',
    'Cross-Chain Token Transfer',
    'Smart Contract Development',
    'Coreum Developers',
    'Blockchain Coding',
    'IBC Protocol',
    'CosmWasm Contracts'
  ],
  openGraph: {
    type: 'website',
    description: "Learn how to build and execute an IBC-enabled smart contract for token transfers on Coreum using CosmWasm and Rust. Start developing cross-chain applications today.",
    siteName: "IBC WASM Transfer Tutorial with Coreum and CosmWasm | Coreum Developers",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'IBC Smart Contract Call Tutorial',
    href: '/docs/tutorials/ibc/ibc-smart-contract-call',
  };
  const nextNavigationItem = {
    label: 'IBC Transfer Using CLI',
    href: '/docs/tutorials/ibc/ibc-transfer-using-cli',
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
