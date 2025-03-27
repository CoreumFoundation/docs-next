import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './deploy-wasm-contract.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Deploy Your First WASM Smart Contract on Coreum | Coreum Docs",
  description: "A step-by-step guide to deploying a WASM smart contract on the Coreum blockchain. Learn from setting up Rust to interacting with your deployed contract.",
  keywords: [
    'Coreum Blockchain',
    'WASM Smart Contract',
    'Rust Programming',
    'Blockchain Deployment',
    'Coreum Smart Contract',
    'Smart Contract Tutorial',
    'Coreum Development',
    'Blockchain Coding'
  ],
  openGraph: {
    type: 'website',
    description: "A step-by-step guide to deploying a WASM smart contract on the Coreum blockchain. Learn from setting up Rust to interacting with your deployed contract.",
    siteName: "Deploy Your First WASM Smart Contract on Coreum | Coreum Docs",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'Using coreum-js',
    href: '/docs/v4/tutorials/get-started/typescript/coreum-js',
  };
  const nextNavigationItem = {
    label: 'Smart FT with WASM',
    href: '/docs/v4/tutorials/get-started/wasm/smart-ft-with-wasm',
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
