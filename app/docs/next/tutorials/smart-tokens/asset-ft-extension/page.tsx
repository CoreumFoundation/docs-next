
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './asset-ft-extension.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Smart FT Extension on Coreum | Coreum Developers",
  description: "Learn how to develop, deploy, and utilize a WASM-based extension for fungible tokens on the Coreum blockchain. This tutorial covers all the necessary steps from environment setup to extension interactions.",
  keywords: [
    'Coreum Smart FT',
    'Smart FT Extension',
    'WASM Blockchain Development',
    'Coreum Blockchain Tutorial',
    'Smart Contract Development',
    'Blockchain Token Deployment',
    'Rust and WASM on Coreum',
    'Coreum WASM Tutorial',
    'Coreum Development Environment'
  ],
  openGraph: {
    type: 'website',
    description: "Comprehensive guide to developing, deploying, and managing WASM-based extension for fungible tokens on the Coreum blockchain. Includes detailed instructions and code snippets.",
    siteName: "Developing Smart FT Extension with WASM on Coreum | Coreum Developers",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'Smart FT with WASM',
    href: '/docs/next/tutorials/use-tokens/smart-ft-with-wasm',
  };
  const nextNavigationItem = {
    label: 'CEX Integration',
    href: '/docs/next/tutorials/integrate-coreum/cex-integrations',
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
