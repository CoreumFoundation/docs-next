import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './amm.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Setting Up an AMM on Coreum with Astroport | Coreum Development Guide",
  description: "Learn how to set up an Automated Market Maker (AMM) on the Coreum blockchain using the Astroport protocol with our comprehensive development guide.",
  keywords: [
    'Automated Market Maker',
    'Coreum Blockchain AMM',
    'Astroport Protocol',
    'Coreum AMM Setup',
    'DeFi on Coreum',
    'Liquidity Pool Creation',
    'Coreum Smart Contracts',
    'Blockchain Development',
    'Coreum Astroport Guide'
  ],
  openGraph: {
    type: 'website',
    description: "Learn how to set up an Automated Market Maker (AMM) on the Coreum blockchain using the Astroport protocol with our comprehensive development guide.",
    siteName: "Setting Up an AMM on Coreum with Astroport | Coreum Development Guide",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'Web App',
    href: '/docs/v4/tutorials/build-apps/web-app',
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
