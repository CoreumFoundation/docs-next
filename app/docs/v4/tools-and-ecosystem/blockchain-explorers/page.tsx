import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './blockchain-explorers.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Discover Coreum Block Explorers: Mainnet, Testnet, and Devnet",
  description: "Explore Coreum blockchain with official and community-maintained block explorers. Access detailed information on transactions, blocks, and validators on Mainnet, Testnet, and Devnet.",
  keywords: [
    'Coreum block explorer',
    'Blockchain explorer',
    'Coreum Mainnet explorer',
    'Testnet explorer',
    'Devnet explorer',
    'Coreum blockchain',
    'Transaction lookup',
    'Validator information'
  ],
  openGraph: {
    type: 'website',
    description: "Explore Coreum blockchain with official and community-maintained block explorers. Access detailed information on transactions, blocks, and validators on Mainnet, Testnet, and Devnet.",
    siteName: "Discover Coreum Block Explorers: Mainnet, Testnet, and Devnet",
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'Faucet',
    href: '/docs/v4/tools-and-ecosystem/faucet',
  };

  return (
    <div className="flex flex-col w-full">
      <Component />
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 py-10">
        <NavigatonItem href={prevNavigationItem.href} label={prevNavigationItem.label} mode={NavigatonItemMode.Previous} />
      </div>
    </div>
  );
};

export default Page;
