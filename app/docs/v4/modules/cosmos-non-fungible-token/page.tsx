import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './cosmos-non-fungible-token.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cosmos Non-Fungible Tokens: Create, Transfer, and Manage NFTs | Cosmos Developers",
  description: "Master the Cosmos NFT module for creating, transferring, and managing non-fungible tokens on the Cosmos blockchain. Follow our guide for comprehensive insights.",
  keywords: [
    'Cosmos NFT module',
    'Non-fungible tokens Cosmos',
    'NFT creation Cosmos',
    'Transfer NFTs Cosmos',
    'Manage NFT Cosmos',
    'Cosmos blockchain NFTs',
    'Cosmos SDK NFT',
    'ERC721 Cosmos',
    'Cosmos NFT classification',
    'Cosmos NFT ownership'
  ],
  openGraph: {
    type: 'website',
    description: 'Master the Cosmos NFT module for creating, transferring, and managing non-fungible tokens on the Cosmos blockchain. Follow our guide for comprehensive insights.',
    siteName: 'Cosmos Non-Fungible Tokens: Create, Transfer, and Manage NFTs | Cosmos Developers',
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};



const Page = () => {
  const prevNavigationItem = {
    label: 'Coreum Fee Model',
    href: `/docs/v4/modules/coreum-fee-model`,
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
