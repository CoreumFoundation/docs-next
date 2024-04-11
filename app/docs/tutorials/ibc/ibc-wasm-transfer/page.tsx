import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './ibc-wasm-transfer.mdx';

const Page = () => {
  const prevNavigationItem = {
    label: 'IBC Smart Contract Call Tutorial',
    href: '/docs/tutorials/ibc/ibc-smart-contract-call',
  };
  const nextNavigationItem = {
    label: 'IBC Transfer Using CLI',
    href: '/docs/tutorials/ibc/ibc-transfer-using-cli',
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
