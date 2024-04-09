
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './smart-tokens.mdx';

const Page = () => {
  const prevNavigationItem = {
    label: 'Smart Contracts',
    href: '/docs/overview/smart-contracts',
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
