
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './coreum-deterministic-gas.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Understanding Coreum's Deterministic Gas Model for Efficient Blockchain Transactions | Coreum Developers",
  description: "Dive into the deterministic gas model of Coreum for precise transaction cost estimation. Learn how it enhances blockchain development with fixed gas costs for specific transaction types.",
  keywords: [
    'Coreum deterministic gas',
    'Blockchain transaction costs',
    'Coreum gas model',
    'Efficient blockchain transactions',
    'Coreum blockchain development',
    'Smart contract gas estimation',
    'Coreum transaction fees',
    'Blockchain gas optimization'
  ],
  openGraph: {
    type: 'website',
    description: "Dive into the deterministic gas model of Coreum for precise transaction cost estimation. Learn how it enhances blockchain development with fixed gas costs for specific transaction types.",
    siteName: "Understanding Coreum's Deterministic Gas Model for Efficient Blockchain Transactions | Coreum Developers",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Coreum Non-Fungible Token',
    href: '/docs/v4/modules/coreum-non-fungible-token',
  };
  const nextNavigationItem = {
    label: 'Coreum Fee Model',
    href: '/docs/v4/modules/coreum-fee-model',
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
