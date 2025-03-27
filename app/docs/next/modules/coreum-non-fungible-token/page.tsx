import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './coreum-non-fungible-token.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coreum Non-Fungible Token Creation and Features | Coreum Developers",
  description: "Unlock the power of non-fungible tokens on the Coreum blockchain. Learn about creating NFTs, implementing custom features, and managing your digital assets effectively.",
  keywords: [
    'Coreum NFT creation',
    'Blockchain NFTs',
    'Assetnft module',
    'Non-fungible tokens',
    'NFT burning',
    'NFT freezing',
    'NFT whitelisting',
    'Digital asset management',
    'Coreum blockchain development',
    'NFT features',
    'Soulbound NFTs',
    'Disable NFT sending',
    'Coreum developers'
  ],
  openGraph: {
    type: 'website',
    description: 'Unlock the power of non-fungible tokens on the Coreum blockchain. Learn about creating NFTs, implementing custom features, and managing your digital assets effectively.',
    siteName: 'Coreum Non-Fungible Token Creation and Features | Coreum Developers',
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'Coreum Fungible Token',
    href: `/docs/next/modules/coreum-fungible-token`,
  };
  const nextNavigationItem = {
    label: 'Coreum Deterministic Gas',
    href: `/docs/next/modules/coreum-deterministic-gas`,
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
