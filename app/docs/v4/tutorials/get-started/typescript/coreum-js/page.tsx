
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './coreum-js.mdx';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Issuing and Managing Tokens on Coreum with JavaScript | Coreum Docs",
  description: "Learn how to issue, mint, and send fungible tokens and create non-fungible tokens on the Coreum blockchain using the coreum-js library. Complete examples included.",
  keywords: [
    'Coreum Blockchain',
    'JavaScript Development',
    'coreum-js Library',
    'Fungible Tokens',
    'Non-Fungible Tokens',
    'Blockchain Tokenization',
    'JavaScript Blockchain Programming',
    'Coreum Token Management'
  ],
  openGraph: {
    type: 'website',
    description: "Learn how to issue, mint, and send fungible tokens and create non-fungible tokens on the Coreum blockchain using the coreum-js library. Complete examples included.",
    siteName: "Issuing and Managing Tokens on Coreum with JavaScript | Coreum Docs",
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Using CosmJS',
    href: '/docs/v4/tutorials/get-started/typescript/cosmjs',
  };
  const nextNavigationItem = {
    label: 'Create and manage my first FT',
    href: '/docs/v4/tutorials/smart-tokens/create-and-manage-ft',
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
