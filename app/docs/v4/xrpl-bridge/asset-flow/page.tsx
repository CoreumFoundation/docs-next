
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './asset-flow.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Understanding Asset Flow in Coreum Bridge XRPL Relayer | Coreum and XRPL Integration",
  description: "Explore the seamless asset flow between Coreum and the XRP Ledger (XRPL) through the Coreum Bridge XRPL Relayer. Discover the decentralized and non-custodial transfer mechanism.",
  keywords: [
    'Coreum Bridge XRPL Relayer',
    'Asset Flow Coreum XRPL',
    'Blockchain Interoperability',
    'XRPL to Coreum Transfer',
    'Coreum to XRPL Transfer',
    'Decentralized Asset Transfer',
    'Non-Custodial Blockchain Bridge',
    'Coreum Smart Tokens',
    'XRPL Multisig Transactions',
    'Cryptocurrency Bridging'
  ],
  openGraph: {
    type: 'website',
    description: "Explore the seamless asset flow between Coreum and the XRP Ledger (XRPL) through the Coreum Bridge XRPL Relayer. Discover the decentralized and non-custodial transfer mechanism.",
    siteName: "Understanding Asset Flow in Coreum Bridge XRPL Relayer | Coreum and XRPL Integration",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Introduction',
    href: '/docs/v4/xrpl-bridge/introduction',
  };
  const nextNavigationItem = {
    label: 'Fees',
    href: '/docs/v4/xrpl-bridge/fees',
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
