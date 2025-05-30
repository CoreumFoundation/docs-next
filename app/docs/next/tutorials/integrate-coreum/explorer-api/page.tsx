
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './explorer-api.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Using Explorer API for Coreum Blockchain | Coreum Documentation",
  description: "Explore the step-by-step tutorial on utilizing the Explorer API for Coreum Blockchain. Learn how to access GraphQL Query endpoints and leverage the API for development.",
  keywords: [
    'Coreum Explorer API',
    'GraphQL API for Coreum',
    'Coreum Blockchain Development',
    'Blockchain Explorer API',
    'Coreum API Tutorial',
    'Blockchain Data Query',
    'Coreum GraphQL Schema',
    'Blockchain API Endpoints'
  ],
  openGraph: {
    type: 'website',
    description: "Explore the step-by-step tutorial on utilizing the Explorer API for Coreum Blockchain. Learn how to access GraphQL Query endpoints and leverage the API for development.",
    siteName: "Using Explorer API for Coreum Blockchain | Coreum Documentation",
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'Wallet Integration',
    href: '/docs/next/tutorials/integrate-coreum/wallet-integration',
  };
  const nextNavigationItem = {
    label: 'XRPL Bridge Integration',
    href: '/docs/next/tutorials/integrate-coreum/xrpl-bridge-integration',
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
