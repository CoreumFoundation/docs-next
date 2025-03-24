
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './testing-multiple-contracts.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Testing Interactions Between Multiple Contracts on Coreum with CosmWasm | Coreum Docs",
  description: "Learn how to test multiple contract interactions within a CosmWasm workspace on Coreum. A comprehensive guide for developers using Rust.",
  keywords: [
    'Coreum Blockchain',
    'CosmWasm Multitest',
    'Rust Smart Contracts',
    'Coreum Contract Testing',
    'Multi-Contract Interactions',
    'Blockchain Development',
    'WASM Contract Testing',
    'Smart Contract Workspace',
    'Coreum Development Tutorial'
  ],
  openGraph: {
    type: 'website',
    description: "Learn how to test multiple contract interactions within a CosmWasm workspace on Coreum. A comprehensive guide for developers using Rust.",
    siteName: "Testing Interactions Between Multiple Contracts on Coreum with CosmWasm | Coreum Docs",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'Smart FT with WASM',
    href: '/docs/tutorials/get-started/wasm/smart-ft-with-wasm',
  };
  const nextNavigationItem = {
    label: 'Using CosmJS with WASM Contracts',
    href: '/docs/tutorials/get-started/wasm/using-cosmjs-with-wasm-contracts',
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
