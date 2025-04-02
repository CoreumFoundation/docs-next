import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './create-ft.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Create and Manage Fungible Tokens on Coreum with Go | Coreum Docs",
  description: "Discover how to create and manage fungible tokens on the Coreum blockchain using Go. Includes complete code examples and detailed instructions for a smooth start.",
  keywords: [
    'Coreum Blockchain',
    'Go Programming',
    'Fungible Tokens',
    'Coreum SDK',
    'Blockchain Token Creation',
    'Go Blockchain Development',
    'Digital Assets Management',
    'Coreum Token Issuance'
  ],
  openGraph: {
    type: 'website',
    description: "Discover how to create and manage fungible tokens on the Coreum blockchain using Go. Includes complete code examples and detailed instructions for a smooth start.",
    siteName: "Create and Manage Fungible Tokens on Coreum with Go | Coreum Docs",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'Transfer Funds with Golang',
    href: '/docs/v4/tutorials/get-started/golang/transfer-funds',
  };
  const nextNavigationItem = {
    label: 'Create Non-Fungible Token with Golang',
    href: '/docs/v4/tutorials/get-started/golang/create-nft',
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
