import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './web-app.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Building a Coreum Web Application with TypeScript | Coreum Development Tutorial",
  description: "Master the art of building a Coreum web application using TypeScript. This tutorial covers essential tools like Next.js, React, CosmWasm, and Keplr integration.",
  keywords: [
    'Coreum Web Application',
    'TypeScript Blockchain Development',
    'Coreum Blockchain Tutorial',
    'Next.js Blockchain App',
    'React Blockchain Integration',
    'CosmWasm Coreum',
    'Keplr Wallet Integration',
    'Decentralized Application Development',
    'Coreum dApp Tutorial'
  ],
  openGraph: {
    type: 'website',
    description: "Master the art of building a Coreum web application using TypeScript. This tutorial covers essential tools like Next.js, React, CosmWasm, and Keplr integration.",
    siteName: "Building a Coreum Web Application with TypeScript | Coreum Development Tutorial",
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
    label: 'AMM (Automated Market Maker)',
    href: '/docs/v4/tutorials/build-apps/amm',
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
