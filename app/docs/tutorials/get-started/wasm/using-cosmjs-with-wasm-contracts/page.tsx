
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './using-cosmjs-with-wasm-contracts.mdx';

const Page = () => {
  const prevNavigationItem = {
    label: 'Testing Multiple Contracts',
    href: '/docs/tutorials/get-started/wasm/testing-multiple-contracts',
  };
  const nextNavigationItem = {
    label: 'Create and Manage FT with CLI',
    href: '/docs/tutorials/use-tokens/create-and-manage-ft-with-cli',
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
