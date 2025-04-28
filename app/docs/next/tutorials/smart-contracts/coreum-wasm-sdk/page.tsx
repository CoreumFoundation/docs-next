import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './coreum-wasm-sdk.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coreum WASM SDK: Rust Data Types for Smart Contract Development | Coreum Developers",
  description: "Explore Coreum WASM SDK for Rust developers. Utilize Rust data types for building WASM smart contracts on Coreum blockchain. Learn more about interacting with Smart Tokens.",
  keywords: [
    'Coreum WASM SDK',
    'Rust Smart Contracts',
    'Coreum Blockchain Development',
    'Rust Data Types',
    'WASM Contracts',
    'Coreum Smart Tokens',
    'Blockchain SDK',
    'Rust Protobuf',
    'Coreum Developer Tools'
  ],
  openGraph: {
    type: 'website',
    description: "Explore Coreum WASM SDK for Rust developers. Utilize Rust data types for building WASM smart contracts on Coreum blockchain. Learn more about interacting with Smart Tokens.",
    siteName: "Coreum WASM SDK: Rust Data Types for Smart Contract Development | Coreum Developers",
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'Using CosmJS with WASM contracts',
    href: '/docs/next/tutorials/smart-contracts/using-cosmjs-with-wasm-contracts',
  };
  const nextNavigationItem = {
    label: 'Web app',
    href: '/docs/next/tutorials/build-apps/web-app',
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
