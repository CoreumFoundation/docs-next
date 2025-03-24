
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './ibc-channels.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coreum IBC Channels: Connecting the Cosmos Ecosystem | Coreum Documentation",
  description: "Discover Coreum's IBC channels, enabling interoperability with Osmosis, Axelar, Evmos, and GravityBridge. Learn about the Cosmos Chain Registry and how Coreum connects within the Cosmos ecosystem.",
  keywords: [
    'Coreum IBC Channels',
    'Coreum Blockchain Interoperability',
    'Cosmos Chain Registry',
    'Coreum Osmosis Connection',
    'Coreum Axelar Integration',
    'Coreum Evmos IBC',
    'Coreum GravityBridge Connection',
    'Cosmos Ecosystem Connectivity',
    'IBC Channel Configuration'
  ],
  openGraph: {
    type: 'website',
    description: "Discover Coreum's IBC channels, enabling interoperability with Osmosis, Axelar, Evmos, and GravityBridge. Learn about the Cosmos Chain Registry and how Coreum connects within the Cosmos ecosystem.",
    siteName: "Coreum IBC Channels: Connecting the Cosmos Ecosystem | Coreum Documentation",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'AMM (Automated Market Maker)',
    href: '/docs/tutorials/build-apps/amm',
  };
  const nextNavigationItem = {
    label: 'IBC Transfer to Osmosis Using Keplr Wallet',
    href: '/docs/tutorials/ibc/ibc-transfer-to-osmosis',
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
