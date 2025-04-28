import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './history.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coreum Blockchain Upgrade History: Detailed Guide | Coreum Docs",
  description: "Explore the comprehensive history of Coreum blockchain upgrades. Understand the key milestones, including genesis and major version updates, for Mainnet and Testnet.",
  keywords: [
    'Coreum upgrade history',
    'Blockchain version updates',
    'Coreum Mainnet upgrades',
    'Testnet version history',
    'Coreum cosmovisor',
    'Coreum releases'
  ],
  openGraph: {
    type: 'website',
    description: "Explore the comprehensive history of Coreum blockchain upgrades. Understand the key milestones, including genesis and major version updates, for Mainnet and Testnet.",
    siteName: "Coreum Blockchain Upgrade History: Detailed Guide | Coreum Docs",
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'How to upgrade my node?',
    href: '/docs/v4/nodes-and-validators/upgrades/upgrades-instructions',
  };
  const nextNavigationItem = {
    label: 'Troubleshooting',
    href: '/docs/v4/nodes-and-validators/troubleshooting',
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
