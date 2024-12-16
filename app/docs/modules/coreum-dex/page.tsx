
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './coreum-dex.mdx';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coreum DEX | Coreum Developers",
  description: "Learn how to use Coreum DEX.",
  keywords: [
    'Coreum fungible token',
    'Blockchain token creation',
    'Assetft module',
    'Token freezing',
    'Coreum token management',
    'Blockchain whitelisting',
    'Coreum IBC transfers',
    'Smart contract token restrictions',
    'Coreum blockchain development',
    'Coreum DEX',
  ],
  openGraph: {
    type: 'website',
    description: "Learn how to use Coreum DEX.",
    siteName: "Coreum DEX | Coreum Developers",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'Modules Overview',
    href: '/docs/overview/modules',
  };
  const nextNavigationItem = {
    label: 'Coreum Fungible Token',
    href: '/docs/modules/coreum-fungible-token',
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
