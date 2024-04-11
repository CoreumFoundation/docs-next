import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './how-much-fund-to-create-validator.mdx';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Understanding Funding Requirements for a Coreum Validator Node",
  description: "Discover how much funding you need to launch a validator node on the Coreum blockchain. Learn about self-delegation, slashing risks, and how to secure your spot in the active set.",
  keywords: [
    'Coreum Validator Funding',
    'Blockchain Validator Stake',
    'Coreum Node Setup',
    'Validator Self-delegation',
    'Blockchain Slashing',
    'Validator Active Set',
    'Cost of Running a Validator',
  ]
};


const Page = () => {
  const prevNavigationItem = {
    label: 'System Requirements',
    href: '/docs/become-validator/essentials/system-requirements',
  };
  const nextNavigationItem = {
    label: 'How to Unjail My Validator?',
    href: '/docs/become-validator/validator/unjail-validator',
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
