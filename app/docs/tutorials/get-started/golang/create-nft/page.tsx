
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './create-nft.mdx';

const Page = () => {
  const prevNavigationItem = {
    label: 'Create Fungible Token with Golang',
    href: '/docs/tutorials/get-started/golang/create-ft',
  };
  const nextNavigationItem = {
    label: 'Transfer Funds with Typescript',
    href: '/docs/tutorials/get-started/typescript/transfer-funds',
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
