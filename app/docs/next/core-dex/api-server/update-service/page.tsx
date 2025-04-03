import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './update-service.mdx';

const Page = () => {
  const prevNavigationItem = {
    label: 'Coreum DEX API server',
    href: '/docs/next/core-dex/api-server/overview',
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
