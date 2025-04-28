import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './data-aggregator.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coreum | DEX Data",
  description: "All the documentation you need to launch Coreum powerful real time data aggregator",
  keywords: [
    'consolidate',
    'real time data',
    'aggregate',
    'build',
    'launch',
    'run',
    'analytics',
    'sources',
    'exact',
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
    'launch',
  ],
  openGraph: {
    type: 'website',
    description: "All the documentation you need to launch Coreum powerful real time data aggregator",
    siteName: "Coreum | DEX Data",
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Introduction',
    href: '/docs/next/core-dex/introduction',
  };
  const nextNavigationItem = {
    label: 'Store',
    href: '/docs/next/core-dex/store',
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
