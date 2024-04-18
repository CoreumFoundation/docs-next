
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './create-and-manage-nft-with-golang.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Create and Manage NFTs on Coreum with Golang | Coreum Developer Guide",
  description: "Explore how to use Golang for creating and managing Non-Fungible Tokens (NFTs) on the Coreum blockchain. This guide covers everything from NFT class creation, minting, sending, to freezing NFTs.",
  keywords: [
    'Coreum NFTs with Golang', 
    'Golang Blockchain Development', 
    'NFT Creation using Golang', 
    'Coreum NFT Management', 
    'Blockchain NFT Development with Golang', 
    'Coreum Developer Guide', 
    'Golang NFT Tutorial', 
  ],
  openGraph: {
    type: 'website',
    description: "Explore how to use Golang for creating and managing Non-Fungible Tokens (NFTs) on the Coreum blockchain. This guide covers everything from NFT class creation, minting, sending, to freezing NFTs.",
    siteName: "Create and Manage NFTs on Coreum with Golang | Coreum Developer Guide",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
  }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Create and Manage NFT with CLI',
    href: '/docs/tutorials/use-tokens/create-and-manage-nft-with-cli',
  };
  const nextNavigationItem = {
    label: 'Smart FT with WASM',
    href: '/docs/tutorials/use-tokens/smart-ft-with-wasm',
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
