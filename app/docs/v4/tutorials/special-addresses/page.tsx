
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './special-addresses.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Special Addresses on Coreum Blockchain | Coreum Developers",
  description: "Discover the key special addresses on the Coreum blockchain that are used for important functions like the community pool, IBC escrow, and module accounts. Learn how these addresses facilitate various blockchain operations without being controlled by any single account.",
  keywords: [
    'Coreum Special Addresses',
    'Blockchain Community Pool',
    'IBC Escrow Addresses',
    'Coreum Module Accounts',
    'Blockchain Governance',
    'Coreum Blockchain Operations',
    'Decentralized Blockchain Accounts',
    'Coreum Chain Management',
    'Blockchain Special Functions',
    'Coreum Address Usage'
  ],
  openGraph: {
    type: 'website',
    description: "Explore the special addresses on the Coreum blockchain that manage critical functions like governance, asset distribution, and inter-blockchain communications. These addresses ensure decentralized control and operational efficiency.",
    siteName: "Special Addresses on Coreum Blockchain | Coreum Developers",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Gas Price',
    href: '/docs/v4/tutorials/gas-price',
  };
  const nextNavigationItem = {
    label: 'Set up CLI Network Variables',
    href: '/docs/v4/tutorials/get-started/setup-cli',
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
