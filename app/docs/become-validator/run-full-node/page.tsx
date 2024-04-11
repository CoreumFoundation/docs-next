import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './run-full-node.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "How to Run a Full Node on Coreum Blockchain | Coreum Network Participation",
  description: "Learn the step-by-step process of running a full node on the Coreum blockchain. Join the network and contribute to the decentralization and security of Coreum.",
  keywords: [
    'Coreum Full Node Setup',
    'Coreum Blockchain',
    'Running Coreum Node',
    'Blockchain Node Setup',
    'Coreum Network Participation',
    'Decentralized Blockchain Network',
    'Coreum Node Requirements',
    'Coreum Cored Binary',
    'Coreum Validator Node',
    'Blockchain Technology',
    'Cryptocurrency Nodes'
  ]
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Become Validator Overview',
    href: '/docs/overview/validator',
  };
  const nextNavigationItem = {
    label: 'Run Validator Node',
    href: '/docs/become-validator/validator/run-validator',
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
