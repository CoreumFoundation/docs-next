
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './install-relayer.mdx';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "XRPL-Coreum Relayer Setup: A Developer's Guide | Coreum and XRP Ledger Integration",
  description: "Master XRPL-Coreum relayer setup for cross-chain functionality. Our guide covers CLI network variables and Docker configuration for seamless XRPL bridge installation.",
  keywords: [
    'Coreum XRPL Relayer',
    'Coreum XRP Ledger',
    'XRPL Coreum Integration',
    'CLI Network Variables Coreum',
    'Docker Coreum Relayer',
    'Coreum Bridge Relayer',
    'Cross-Chain XRPL',
    'Blockchain Relayer Coreum',
    'XRPL Blockchain Development',
    'XRPL Relayer Installation'
  ],
  openGraph: {
    type: 'website',
    description: "Master XRPL-Coreum relayer setup for cross-chain functionality. Our guide covers CLI network variables and Docker configuration for seamless XRPL bridge installation.",
    siteName: "XRPL-Coreum Relayer Setup: A Developer's Guide | Coreum and XRP Ledger Integration",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Register New Token',
    href: '/docs/next/xrpl-bridge/register-new-token',
  };
  const nextNavigationItem = {
    label: 'Run Relayer',
    href: '/docs/next/xrpl-bridge/run-relayer',
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
