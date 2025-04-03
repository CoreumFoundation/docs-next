import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './main-info.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "How to Upgrade Your Coreum Node: A Complete Guide | Coreum Docs",
  description: "Follow our step-by-step guide to upgrade your Coreum node seamlessly. Learn about prerequisites, downloading binaries, and verifying upgrades for Mainnet and Testnet.",
  keywords: [
    'Coreum node upgrade',
    'Coreum cosmovisor',
    'Blockchain node update',
    'Coreum binary download',
    'Verify node upgrade',
    'Coreum blockchain maintenance'
  ],
  openGraph: {
    type: 'website',
    description: "Follow our step-by-step guide to upgrade your Coreum node seamlessly. Learn about prerequisites, downloading binaries, and verifying upgrades for Mainnet and Testnet.",
    siteName: "How to Upgrade Your Coreum Node: A Complete Guide | Coreum Docs",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'Set Connection Config',
    href: '/docs/next/nodes-and-validators/essentials/connection-config',
  };
  const nextNavigationItem = {
    label: 'Upgrade history',
    href: '/docs/next/nodes-and-validators/upgrades/upgrades-history',
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
