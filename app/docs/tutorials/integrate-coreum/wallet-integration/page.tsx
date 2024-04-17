
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './wallet-integration.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coreum Wallet Integration Guide | Official Coreum Documentation",
  description: "Learn how to integrate Coreum into your wallet. This guide covers differences in gas price, gas estimation, and fungible tokens handling specific to Coreum, built with Cosmos SDK.",
  keywords: [
    'Coreum Wallet Integration', 
    'Coreum Gas Price', 
    'Cosmos SDK Usage', 
    'Coreum Fungible Tokens', 
    'Blockchain Wallet Development', 
    'Cryptocurrency Wallet Integration', 
    'Coreum Gas Estimation', 
    'Deterministic Gas Model', 
    'Coreum Blockchain Technology'
  ],
};


const Page = () => {
  const prevNavigationItem = {
    label: 'CEX Integration',
    href: '/docs/tutorials/integrate-coreum/cex-integrations',
  };
  const nextNavigationItem = {
    label: 'Explorer API - Beta',
    href: '/docs/tutorials/integrate-coreum/explorer-api',
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
