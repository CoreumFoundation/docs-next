
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './create-nft.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Create and Manage Non-Fungible Tokens on Coreum with Go | Coreum Docs",
  description: "Step-by-step guide to creating and managing non-fungible tokens (NFTs) on the Coreum blockchain using Go. Learn how to mint, transfer, and freeze NFTs with code examples.",
  keywords: [
    'Coreum NFTs',
    'Go Programming',
    'Non-Fungible Tokens',
    'Coreum SDK',
    'NFT Blockchain Development',
    'Coreum NFT Creation',
    'Golang Blockchain',
    'NFT Management Go'
  ],
  openGraph: {
    type: 'website',
    description: "Step-by-step guide to creating and managing non-fungible tokens (NFTs) on the Coreum blockchain using Go. Learn how to mint, transfer, and freeze NFTs with code examples.",
    siteName: "Create and Manage Non-Fungible Tokens on Coreum with Go | Coreum Docs",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Create Fungible Token with Golang',
    href: '/docs/tutorials/get-started/golang/create-ft',
  };
  const nextNavigationItem = {
    label: 'Transfer Funds with Typescript',
    href: '/docs/tutorials/get-started/typescript/transfer-funds',
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
