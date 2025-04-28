import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './Introduction.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coreum: Advanced Layer-1 Blockchain for Decentralized Applications | Coreum Docs",
  description: "Discover Coreum, a layer-1 enterprise-grade blockchain with ISO20022, IBC interoperability, and Smart Tokens. Learn about $COREUM token, smart contracts, DEX, and cross-chain bridges.",
  keywords: ['Coreum blockchain', 'enterprise-grade blockchain', 'decentralized applications', 'smart contracts', 'smart tokens', '$COREUM token', 'BPoS consensus', 'ISO20022 compatibility', 'IBC interoperability', 'Coreum DEX', 'crypto bridges', 'Sologenic ecosystem', 'blockchain scalability'],
  openGraph: {
    type: 'website',
    description: "Discover Coreum, a layer-1 enterprise-grade blockchain with ISO20022, IBC interoperability, and Smart Tokens. Learn about $COREUM token, smart contracts, DEX, and cross-chain bridges.",
    siteName: "Coreum: Advanced Layer-1 Blockchain for Decentralized Applications | Coreum Docs",
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'General Overview',
    href: '/docs/next/overview/general',
  };
  const nextNavigationItem = {
    label: 'Smart Contracts',
    href: '/docs/next/overview/smart-contracts',
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
