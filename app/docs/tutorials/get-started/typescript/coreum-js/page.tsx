
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './coreum-js.mdx';

const Page = () => {
  const prevNavigationItem = {
    label: 'Using CosmJS',
    href: '/docs/tutorials/get-started/typescript/cosmjs',
  };
  const nextNavigationItem = {
    label: 'Deploy First WASM Contract',
    href: '/docs/tutorials/get-started/wasm/deploy-wasm-contract',
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
