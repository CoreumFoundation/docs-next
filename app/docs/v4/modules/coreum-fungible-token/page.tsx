import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './coreum-fungible-token.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coreum Fungible Token Creation and Management | Coreum Developers",
  description: "Learn how to create and manage fungible tokens on the Coreum blockchain. Explore issuing, minting, burning, and other token functionalities with Coreum's assetft module.",
  keywords: [
    'Coreum fungible token',
    'Blockchain token creation',
    'Assetft module',
    'Minting tokens',
    'Burning tokens',
    'Token freezing',
    'Coreum token management',
    'Blockchain whitelisting',
    'Coreum IBC transfers',
    'Smart contract token restrictions',
    'Coreum blockchain development'
  ],
  openGraph: {
    type: 'website',
    description: "Learn how to create and manage fungible tokens on the Coreum blockchain. Explore issuing, minting, burning, and other token functionalities with Coreum's assetft module.",
    siteName: "Coreum Fungible Token Creation and Management | Coreum Developers",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Modules Overview',
    href: `/docs/v4/overview/modules`,
  };
  const nextNavigationItem = {
    label: 'Non-Fungible Tokens',
    href: `/docs/v4/modules/coreum-non-fungible-token`,
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
