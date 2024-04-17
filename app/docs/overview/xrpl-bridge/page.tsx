import Component from './xrpl-bridge.mdx';
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "XRPL-Coreum Bridge: Enabling Blockchain Interoperability | Coreum Developers",
  description: "Discover the XRPL-Coreum Bridge, a groundbreaking solution for seamless asset transfers between XRPL and IBC-compatible appchains. Learn about the bridge's decentralized, non-custodial mechanism and its architecture involving smart contracts and multi-signing accounts.",
  keywords: [
    'XRPL-Coreum Bridge',
    'Blockchain Interoperability',
    'Asset Transfer Blockchain',
    'Decentralized Blockchain Mechanism',
    'Multi-signing Blockchain Account',
    'Blockchain Smart Contracts',
    'Coreum Blockchain Solutions',
    'XRPL Token Bridging',
    'Blockchain Relayers',
    'Smart Contract Minting Tokens'
  ],
  openGraph: {
    type: 'website',
    description: "Explore the XRPL-Coreum Bridge that facilitates asset transfers between the XRPL and Coreum blockchains, enhancing blockchain interoperability with a robust, decentralized architecture.",
    siteName: "XRPL-Coreum Bridge: Enabling Blockchain Interoperability | Coreum Developers",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};

const XRPLBridgeMainPage = () => {
  const prevNavigationItem = {
    label: 'Tools/Ecosystem',
    href: '/docs/overview/smart-contracts',
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

export default XRPLBridgeMainPage;
