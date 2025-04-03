import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './run-validator.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Setting Up a Validator Node | Coreum Blockchain Network Guide",
  description: "Learn how to set up and run a validator node on the Coreum blockchain network. This guide covers everything from initial setup to advanced configuration options.",
  keywords: [
    'Coreum Validator Setup',
    'Blockchain Validator Node',
    'Coreum Blockchain Documentation',
    'Validator Node Configuration',
    'Staking Coreum',
    'Blockchain Node Pruning'
  ],
  openGraph: {
    type: 'website',
    description: "Learn how to set up and run a validator node on the Coreum blockchain network. This guide covers everything from initial setup to advanced configuration options.",
    siteName: "Setting Up a Validator Node | Coreum Blockchain Network Guide",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'Nodes and Validators Overview',
    href: `/docs/v4/nodes-and-validators/overview`,
  };
  const nextNavigationItem = {
    label: 'Run a full node',
    href: '/docs/v4/nodes-and-validators/run-full-node',
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
