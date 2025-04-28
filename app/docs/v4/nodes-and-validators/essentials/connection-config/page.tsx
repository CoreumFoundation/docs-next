import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './connection-config.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coreum Node Connection Configuration Guide | Coreum Docs",
  description: "Learn how to configure connection settings for Coreum blockchain nodes. Includes setting public IP, adjusting consensus timeouts, and enabling RPC and P2P connections.",
  keywords: [
    'Coreum node setup',
    'Blockchain node configuration',
    'Coreum RPC setup',
    'P2P connection settings',
    'Blockchain consensus timeout',
    'Coreum network settings'
  ],
  openGraph: {
    type: 'website',
    description: 'Learn how to configure connection settings for Coreum blockchain nodes. Includes setting public IP, adjusting consensus timeouts, and enabling RPC and P2P connections.',
    siteName: 'Coreum Node Connection Configuration Guide | Coreum Docs',
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'Network Variables',
    href: '/docs/v4/nodes-and-validators/essentials/network-variables',
  };
  const nextNavigationItem = {
    label: 'How to upgrade my node?',
    href: '/docs/v4/nodes-and-validators/upgrades/upgrades-instructions',
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
