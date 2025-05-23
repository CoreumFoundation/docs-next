
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './create-and-manage-nft.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Creating Non-Fungible Tokens on Coreum with CLI | Coreum Docs",
  description: "Learn how to create and manage Non-Fungible Tokens (NFTs) on the Coreum blockchain using the command-line interface (CLI). This tutorial covers everything from issuing NFT classes to minting, sending, freezing, and burning NFTs.",
  keywords: [
    'Coreum Blockchain Overview',
    'CLI Blockchain Development',
    'Non-Fungible Tokens on Coreum',
    'Creating NFTs via CLI',
    'NFT Management on Blockchain',
    'Coreum NFT Management',
    'CLI Programming for Blockchain',
    'Blockchain Development Tutorial'
  ],
  openGraph: {
    type: 'website',
    description: "Learn how to create and manage Non-Fungible Tokens (NFTs) on the Coreum blockchain using the command-line interface (CLI). This tutorial covers everything from issuing NFT classes to minting, sending, freezing, and burning NFTs.",
    siteName: "Creating Non-Fungible Tokens on Coreum with CLI | Coreum Docs",
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Create and manage my first FT',
    href: '/docs/next/tutorials/smart-tokens/create-and-manage-ft',
  };
  const nextNavigationItem = {
    label: 'Asset FT Extension',
    href: '/docs/next/tutorials/smart-tokens/asset-ft-extension',
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
