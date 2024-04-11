
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './send-multisig-transaction.mdx';

const Page = () => {
  const prevNavigationItem = {
    label: 'Transfer Funds with CLI',
    href: '/docs/tutorials/get-started/cli/transfer-funds-cli',
  };
  const nextNavigationItem = {
    label: 'Smart FT with Access Control List (ACL)',
    href: '/docs/tutorials/get-started/cli/smart-ft-with-acl',
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
