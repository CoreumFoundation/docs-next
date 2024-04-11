
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './history.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coreum Blockchain Upgrade History: Detailed Guide",
  description: "Explore the comprehensive history of Coreum blockchain upgrades. Understand the key milestones, including genesis and major version updates, for Mainnet and Testnet.",
  keywords: [
    'Coreum upgrade history',
    'Blockchain version updates',
    'Coreum Mainnet upgrades',
    'Testnet version history',
    'Coreum cosmovisor',
    'Coreum releases'
  ]
};


const Page = () => {
  const prevNavigationItem = {
    label: 'How to Upgrade My Node',
    href: '/docs/become-validator/upgrades/main-info',
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
