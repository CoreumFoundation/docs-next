import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './how-much-fund-to-create-validator.mdx';

const Page = () => {
  const prevNavigationItem = {
    label: 'System Requirements',
    href: '/docs/become-validator/essentials/system-requirements',
  };
  const nextNavigationItem = {
    label: 'How to Unjail My Validator?',
    href: '/docs/become-validator/validator/unjail-validator',
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
