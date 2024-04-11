
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './cex-integrations.mdx';

const Page = () => {
  const prevNavigationItem = {
    label: 'Smart FT with WASM',
    href: '/docs/tutorials/use-tokens/smart-ft-with-wasm',
  };
  const nextNavigationItem = {
    label: 'Wallet Integration',
    href: '/docs/tutorials/integrate-coreum/wallet-integration',
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
