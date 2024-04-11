
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './transfer-funds-cli.mdx';

const Page = () => {
  const prevNavigationItem = {
    label: 'Install cored',
    href: '/docs/tutorials/get-started/install-cored',
  };
  const nextNavigationItem = {
    label: 'Send Multisig Transaction',
    href: '/docs/tutorials/get-started/cli/send-multisig-transaction',
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
