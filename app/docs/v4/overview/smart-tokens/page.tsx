
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './smart-tokens.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coreum Smart Tokens: Customizable & Secure On-Chain Assets | Coreum Docs",
  description: "Learn about Coreum's Smart Tokens, the flexible and secure on-chain assets wrapped around Smart Contracts. Discover their unique features like IBC compatibility, minting, and ACL for superior asset management.",
  keywords: ['Coreum', 'Smart Tokens', 'blockchain assets', 'on-chain tokens', 'token minting', 'token burning', 'asset management', 'IBC compatibility', 'Smart Contract integration', 'token issuance', 'WASM', 'access control list', 'DeFi tokens'],
  openGraph: {
    type: 'website',
    description: "Learn about Coreum's Smart Tokens, the flexible and secure on-chain assets wrapped around Smart Contracts. Discover their unique features like IBC compatibility, minting, and ACL for superior asset management.",
    siteName: "Coreum Smart Tokens: Customizable & Secure On-Chain Assets | Coreum Docs",
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Smart Contracts',
    href: '/docs/v4/overview/smart-contracts',
  };
  const nextNavigationItem = {
    label: 'Coreum Modules',
    href: '/docs/v4/modules/overview',
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
