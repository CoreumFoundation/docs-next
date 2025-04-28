import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './wallets.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Compare Coreum Blockchain Wallets: Features and Support Guide",
  description: "Explore the best wallets for Coreum blockchain with our detailed comparison. Find out which wallets support staking, mobile apps, browser extensions, hardware wallets, and more.",
  keywords: [
    'Coreum wallets',
    'Blockchain wallets comparison',
    'Staking wallets',
    'Coreum mobile wallets',
    'Coreum browser wallets',
    'Coreum hardware wallets',
    'Wallet features'
  ],
  openGraph: {
    type: 'website',
    description: "Explore the best wallets for Coreum blockchain with our detailed comparison. Find out which wallets support staking, mobile apps, browser extensions, hardware wallets, and more.",
    siteName: "Compare Coreum Blockchain Wallets: Features and Support Guide",
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'Tools and Ecosystem Overview',
    href: '/docs/v4/tools-and-ecosystem/overview',
  };
  const nextNavigationItem = {
    label: 'Faucet',
    href: '/docs/v4/tools-and-ecosystem/faucet',
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
