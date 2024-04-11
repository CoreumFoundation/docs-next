
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './install-cored.mdx';

const Page = () => {
  const prevNavigationItem = {
    label: 'Setup CLI Network Variables',
    href: '/docs/tutorials/get-started/setup-cli',
  };
  const nextNavigationItem = {
    label: 'Transfer Funds with CLI',
    href: '/docs/tutorials/get-started/cli/transfer-funds-cli',
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
