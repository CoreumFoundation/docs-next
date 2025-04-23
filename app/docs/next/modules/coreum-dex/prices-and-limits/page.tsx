import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './prices-and-limits.mdx';

const Page = () => {
  const prevNavigationItem = {
    label: 'Coreum DEX',
    href: '/docs/next/modules/coreum-dex/overview',
  };
  const nextNavigationItem = {
    label: 'Cosmos Non-Fungible Tokens',
    href: '/docs/next/modules/cosmos-non-fungible-token',
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
