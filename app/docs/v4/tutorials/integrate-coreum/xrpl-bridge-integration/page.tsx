
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './xrpl-bridge-integration.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Client integration guide for XRPL-Coreum Bridge | Coreum Guides",
  description: "Learn how to prepare the client side of application to interact with XRPL-Coreum Bridge",
  keywords: [
    'XRPL',
    'Coreum',
    'Coreum Bridging Fees',
    'XRPL-Coreum Bridge',
    'Token Bridging Fees',
    'Claim Relayer Fees',
    'Coreum Token Registry',
    'Cross-Chain Transaction Fees',
    'Coreum Network Fees',
    'Relayer Profit',
    'Operational Expenses Coverage',
    'Coreum Explorer'
  ],
  openGraph: {
    type: 'website',
    description: "Learn how to prepare the client side of application to interact with XRPL-Coreum Bridge",
    siteName: "Client integration guide for XRPL-Coreum Bridge | Coreum Guides",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Explorer API - Beta',
    href: '/docs/v4/tutorials/integrate-coreum/explorer-api',
  };
  const nextNavigationItem = {
    label: 'IBC Channels',
    href: '/docs/v4/tutorials/ibc/ibc-channels',
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
