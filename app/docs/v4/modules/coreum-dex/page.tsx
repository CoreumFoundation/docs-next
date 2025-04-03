import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './coreum-dex.mdx';

const Page = () => {
  const prevNavigationItem = {
    label: 'Coreum Fee Model',
    href: '/docs/v4/modules/coreum-fee-model',
  };
  const nextNavigationItem = {
    label: 'Cosmos Non-Fungible Tokens',
    href: '/docs/v4/modules/cosmos-non-fungible-token',
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
