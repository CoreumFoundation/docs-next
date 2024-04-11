
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './ibc-smart-contract-call.mdx';

const Page = () => {
  const prevNavigationItem = {
    label: 'IBC Transfer to Osmosis Using Keplr Wallet',
    href: '/docs/tutorials/ibc/ibc-transfer-to-osmosis',
  };
  const nextNavigationItem = {
    label: 'IBC WASM Transfer Tutorial',
    href: '/docs/tutorials/ibc/ibc-wasm-transfer',
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
