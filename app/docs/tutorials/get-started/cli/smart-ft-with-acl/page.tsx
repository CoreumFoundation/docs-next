
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './smart-ft-with-acl.mdx';

const Page = () => {
  const prevNavigationItem = {
    label: 'Send Multisig Transaction',
    href: '/docs/tutorials/get-started/cli/send-multisig-transaction',
  };
  const nextNavigationItem = {
    label: 'Ledger Nano with CLI',
    href: '/docs/tutorials/get-started/cli/ledger-nano',
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
