
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './coreum-dex-cli.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coreum DEX CLI | Coreum Docs",
  description: "Learn how to use Coreum DEX with CLI.",
  keywords: [
    'Coreum CLI Guide',
    'Transferring Funds Coreum',
    'Staking Tokens Coreum',
    'cored CLI Tutorial',
    'Coreum Testnet Transactions',
    'Blockchain CLI Operations',
    'Coreum DEX Module',
  ],
  openGraph: {
    type: 'website',
    description: "Learn how to use Coreum DEX with CLI.",
    siteName: "Coreum DEX CLI | Coreum Docs",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Ledger Nano with CLI',
    href: '/docs/tutorials/get-started/cli/ledger-nano',
  };
  const nextNavigationItem = {
    label: 'Transfer Funds with Golang',
    href: '/docs/tutorials/get-started/golang/transfer-funds',
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
