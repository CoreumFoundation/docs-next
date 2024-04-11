
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './unjail-validator.mdx';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Unjailing Your Validator Node on Coreum Network",
  description: "Master the setup and optimization of a validator node in the Coreum blockchain network. Learn how to secure your node, optimize storage, and unjail your validator.",
  keywords: [
    'Coreum Validator Node',
    'Validator Node Optimization',
    'Coreum Unjail Validator',
    'Blockchain Node Optimization',
    'Secure Validator Node',
    'Blockchain Storage Management',
    'Coreum Node Setup',
    'Blockchain Network Security'
  ]
};


const Page = () => {
  const prevNavigationItem = {
    label: 'How much fund do I need to create a validator?',
    href: '/docs/become-validator/essentials/how-much-fund-to-create-validator',
  };
  const nextNavigationItem = {
    label: 'How to Upgrade My Node',
    href: '/docs/become-validator/upgrades/main-info',
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
