
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './smart-ft-with-wasm.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Developing and Deploying Smart FT with WASM on Coreum | Coreum Docs",
  description: "Master the art of creating and deploying a WASM-based fungible smart token with airdrop functionality on the Coreum blockchain with our comprehensive guide.",
  keywords: [
    'Coreum Blockchain',
    'WASM Smart Contract',
    'Smart FT Development',
    'WebAssembly Coreum',
    'Fungible Token Airdrop',
    'Coreum Token Deployment',
    'Rust Blockchain Development',
    'WASM Contract Tutorial',
    'Coreum FT Airdrop'
  ],
  openGraph: {
    type: 'website',
    description: "Master the art of creating and deploying a WASM-based fungible smart token with airdrop functionality on the Coreum blockchain with our comprehensive guide.",
    siteName: "Developing and Deploying Smart FT with WASM on Coreum | Coreum Docs",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'Deploy First WASM Contract',
    href: '/docs/tutorials/get-started/wasm/deploy-wasm-contract',
  };
  const nextNavigationItem = {
    label: 'Testing Multiple Contracts',
    href: '/docs/tutorials/get-started/wasm/testing-multiple-contracts',
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
