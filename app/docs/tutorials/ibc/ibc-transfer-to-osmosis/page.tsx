
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './ibc-transfer-to-osmosis.mdx';

const Page = () => {
  const prevNavigationItem = {
    label: 'IBC Channels',
    href: '/docs/tutorials/ibc/ibc-channels',
  };
  const nextNavigationItem = {
    label: 'IBC Smart Contract Call Tutorial',
    href: '/docs/tutorials/ibc/ibc-smart-contract-call',
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
