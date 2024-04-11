
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './faq.mdx';

const Page = () => {
  const prevNavigationItem = {
    label: 'Help Overview',
    href: '/docs/overview/help',
  };
  const nextNavigationItem = {
    label: 'Useful links',
    href: '/docs/help/useful-links',
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
