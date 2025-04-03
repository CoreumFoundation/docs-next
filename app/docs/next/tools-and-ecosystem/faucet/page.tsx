import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './faucet.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Access Coreum Faucet: Fund Your Testnet and Devnet Accounts",
  description: "Learn how to use the Coreum faucet to fund your testnet or devnet accounts. Discover methods to generate a funded wallet for testing and development on Coreum blockchain.",
  keywords: [
    'Coreum faucet',
    'Fund testnet account',
    'Coreum devnet funding',
    'Blockchain testing',
    'Coreum wallet generation',
    'Blockchain development resources'
  ],
  openGraph: {
    type: 'website',
    description: "Learn how to use the Coreum faucet to fund your testnet or devnet accounts. Discover methods to generate a funded wallet for testing and development on Coreum blockchain.",
    siteName: "Access Coreum Faucet: Fund Your Testnet and Devnet Accounts",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'Wallets',
    href: '/docs/next/tools-and-ecosystem/wallets',
  };
  const nextNavigationItem = {
    label: 'Blockchain Explorers',
    href: '/docs/next/tools-and-ecosystem/blockchain-explorers',
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
