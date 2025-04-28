import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './create-and-manage-ft.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Create and Manage Fungible Tokens on Coreum Blockchain with CLI | Coreum Docs",
  description: "Learn to create, manage, and interact with fungible tokens on the Coreum blockchain using the command-line interface. Follow our step-by-step guide.",
  keywords: [
    'Coreum Blockchain Essentials',
    'Fungible Tokens Management',
    'Blockchain CLI Operations',
    'Token Creation on Coreum',
    'Token Management via CLI',
    'Introduction to Blockchain Tokens',
    'Coreum Token Tutorial',
    'AssetFT Module Operations',
    'Command Line Blockchain Tools',
    'Coreum Token Administration'
  ],
  openGraph: {
    type: 'website',
    description: "Learn to create, manage, and interact with fungible tokens on the Coreum blockchain using the command-line interface. Follow our step-by-step guide.",
    siteName: "Create and Manage Fungible Tokens on Coreum Blockchain with CLI | Coreum Docs",
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Using coreum-js SDK to interact with Coreum network',
    href: '/docs/next/tutorials/get-started/typescript/coreum-js',
  };
  const nextNavigationItem = {
    label: 'Create and manage my first NFT',
    href: '/docs/next/tutorials/smart-tokens/create-and-manage-nft',
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
