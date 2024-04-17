
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './smart-ft-with-wasm.mdx';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Developing Smart FT with WASM on Coreum | Coreum Developers",
  description: "Learn how to develop, deploy, and utilize a WASM-based fungible token with airdrop functionality on the Coreum blockchain. This tutorial covers all the necessary steps from environment setup to smart contract interactions.",
  keywords: [
    'Coreum Smart FT',
    'WASM Blockchain Development',
    'Fungible Token Airdrop',
    'Coreum Blockchain Tutorial',
    'Smart Contract Development',
    'Blockchain Token Deployment',
    'Rust and WASM on Coreum',
    'Coreum WASM Tutorial',
    'Decentralized Token Airdrop',
    'Coreum Development Environment'
  ],
  openGraph: {
    type: 'website',
    description: "Comprehensive guide to developing, deploying, and managing WASM-based fungible tokens with airdrop functionality on the Coreum blockchain. Includes detailed instructions and code snippets.",
    siteName: "Developing Smart FT with WASM on Coreum | Coreum Developers",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Create and Manage NFT with Golang',
    href: '/docs/tutorials/use-tokens/create-and-manage-nft-with-golang',
  };
  const nextNavigationItem = {
    label: 'CEX Integration',
    href: '/docs/tutorials/integrate-coreum/cex-integrations',
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
