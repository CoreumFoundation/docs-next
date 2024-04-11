
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
  ]
};


const Page = () => {
  const prevNavigationItem = {
    label: 'Run Full Node',
    href: '/docs/become-validator/run-full-node',
  };
  const nextNavigationItem = {
    label: 'Run Sentry Node',
    href: '/docs/become-validator/validator/run-sentry',
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
