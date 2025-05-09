import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './update-service.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coreum Server Update Services Overview",
  description: "Coreum API Update service provides a way for IT administrators to deploy the latest Coreum product updates",
  keywords: [
    'technical',
    'report',
    'ensure connection',
    'websocket',
    'reads',
    'calls',
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
    description: "Coreum API Update service provides a way for IT administrators to deploy the latest Coreum product updates",
    siteName: "Coreum Server Update Services Overview",
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Coreum DEX API server',
    href: '/docs/next/core-dex/api-server/overview',
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

export default Page;
