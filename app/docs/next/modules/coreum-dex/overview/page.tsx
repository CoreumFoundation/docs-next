import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './coreum-dex.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coreum | DEX API Docs",
  description: "Dive into the documentation you need to build using Coreum DEX API",
  keywords: [
    'DEX',
    'exchange',
    'API',
    'documentation',
    'tools',
    'developers',
    'launch',
    'coreum',
    'blockchain',
    'smart contract',
    'token',
    'dapps',
    'defi',
    'decentralized',
    'bitcoin',
    'crypto',
    'network',
    'nft',
    'build',
  ],
  openGraph: {
    type: 'website',
    description: "Dive into the documentation you need to build using Coreum DEX API",
    siteName: "Dive into the documentation you need to build using Coreum DEX API",
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Coreum Fee Model',
    href: '/docs/next/modules/coreum-fee-model',
  };
  const nextNavigationItem = {
    label: 'Coreum DEX: Prices and Limits',
    href: '/docs/next/modules/coreum-dex/prices-and-limits',
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
