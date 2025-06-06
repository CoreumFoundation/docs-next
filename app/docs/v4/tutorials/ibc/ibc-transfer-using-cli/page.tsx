
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './ibc-transfer-using-cli.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IBC Transfer Using CLI: Coreum to Osmosis and Back | Coreum Developers",
  description: "Master the steps for executing IBC transfers between Coreum and Osmosis using CLI tools. Learn how to send and receive tokens across blockchains efficiently.",
  keywords: [
    'IBC Transfer CLI',
    'Coreum Blockchain',
    'Osmosis Chain',
    'CLI Tools for Blockchain',
    'Cross-Chain Transfer',
    'Token Transfer via IBC',
    'Coreum to Osmosis',
    'IBC Token Denomination',
    'Blockchain Development',
    'Coreum CLI Tutorial'
  ],
  openGraph: {
    type: 'website',
    description: "Master the steps for executing IBC transfers between Coreum and Osmosis using CLI tools. Learn how to send and receive tokens across blockchains efficiently.",
    siteName: "IBC Transfer Using CLI: Coreum to Osmosis and Back | Coreum Developers",
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'IBC WASM Transfer Tutorial',
    href: '/docs/v4/tutorials/ibc/ibc-wasm-transfer',
  };
  const nextNavigationItem = {
    label: 'Introduction to ISO20022',
    href: '/docs/v4/tutorials/ISO20022/intro-to-ISO20022',
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
