
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './ibc-transfer-using-cli.mdx';

const Page = () => {
  const prevNavigationItem = {
    label: 'IBC WASM Transfer Tutorial',
    href: '/docs/tutorials/ibc/ibc-wasm-transfer',
  };

  return (
    <div className="flex flex-col w-full">
      <Component />
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 py-10">
        <NavigatonItem href={prevNavigationItem.href} label={prevNavigationItem.label} mode={NavigatonItemMode.Previous} />
      </div>
    </div>
  );
};

export default Page;
