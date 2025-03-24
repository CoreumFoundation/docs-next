
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
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  return (
    <Component />
  );
};

export default Page;
