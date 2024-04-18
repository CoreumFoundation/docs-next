
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './create-and-manage-ft-with-golang.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Creating Fungible Tokens on Coreum with Golang | Coreum Docs",
  description: "Step-by-step tutorial on how to create and manage fungible tokens on the Coreum blockchain using Golang. Includes examples for issuing, sending, and freezing tokens.",
  keywords: [
    'Coreum Blockchain Overview',
    'Golang Blockchain Development',
    'Fungible Tokens on Coreum',
    'Token Creation with Golang',
    'Token Management on Blockchain',
    'Coreum Token Management',
    'Golang Programming for Blockchain',
    'Blockchain Development Tutorial'
  ],
  openGraph: {
    type: 'website',
    description: "Step-by-step tutorial on how to create and manage fungible tokens on the Coreum blockchain using Golang. Includes examples for issuing, sending, and freezing tokens.",
    siteName: "Creating Fungible Tokens on Coreum with Golang | Coreum Docs",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Create and Manage FT with CLI',
    href: '/docs/tutorials/use-tokens/create-and-manage-ft-with-cli',
  };
  const nextNavigationItem = {
    label: 'Create and Manage NFT with CLI',
    href: '/docs/tutorials/use-tokens/create-and-manage-nft-with-cli',
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
