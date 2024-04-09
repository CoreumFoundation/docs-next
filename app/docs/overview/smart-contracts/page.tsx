import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './smart-contracts.mdx';

const Page = () => {
  const prevNavigationItem = {
    label: 'Introduction',
    href: '/docs/overview/introduction',
  };
  const nextNavigationItem = {
    label: 'Smart Tokens',
    href: '/docs/overview/smart-tokens',
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
