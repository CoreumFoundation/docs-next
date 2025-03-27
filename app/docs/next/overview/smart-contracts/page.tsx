import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './smart-contracts.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Smart Contracts on Coreum: WASM-Powered Contract Execution | Coreum Docs",
  description: "Explore the advanced Smart Contract capabilities of Coreum using WebAssembly (WASM) for enhanced security, efficiency, and cross-language compatibility. Learn how CosmWasm integrates with the Cosmos SDK.",
  keywords: ['Coreum Smart Contracts', 'WASM Smart Contracts', 'blockchain programming', 'CosmWasm', 'Cosmos SDK', 'Smart Contract architecture', 'IBC protocol', 'blockchain security', 'Rust for blockchain', 'Smart Contract execution'],
  openGraph: {
    type: 'website',
    description: "Explore the advanced Smart Contract capabilities of Coreum using WebAssembly (WASM) for enhanced security, efficiency, and cross-language compatibility. Learn how CosmWasm integrates with the Cosmos SDK.",
    siteName: "Smart Contracts on Coreum: WASM-Powered Contract Execution | Coreum Docs",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Introduction',
    href: '/docs/next/overview/introduction',
  };
  const nextNavigationItem = {
    label: 'Smart Tokens',
    href: '/docs/next/overview/smart-tokens',
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
