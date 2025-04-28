import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './coreum-fee-model.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coreum Fee Model: Dynamic Gas Pricing for Blockchain Transactions | Coreum Developers",
  description: "Discover Coreum's Fee Model, a dynamic approach to blockchain transaction gas pricing. Understand the mechanisms behind minimum gas price calculations and how it impacts your transactions.",
  keywords: [
    'Coreum Fee Model',
    'Blockchain gas pricing',
    'Dynamic gas price',
    'Coreum blockchain transactions',
    'Blockchain fee calculation',
    'EMA block gas average',
    'Coreum gas price adjustment',
    'Blockchain transaction fees',
    'Gas price model',
    'Coreum development'
  ],
  openGraph: {
    type: 'website',
    description: "Discover Coreum's Fee Model, a dynamic approach to blockchain transaction gas pricing. Understand the mechanisms behind minimum gas price calculations and how it impacts your transactions.",
    siteName: "Coreum Fee Model: Dynamic Gas Pricing for Blockchain Transactions | Coreum Developers",
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'Coreum Deterministic Gas',
    href: `/docs/next/modules/coreum-deterministic-gas`,
  };
  const nextNavigationItem = {
    label: 'Coreum DEX',
    href: `/docs/next/modules/coreum-dex/overview`,
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
