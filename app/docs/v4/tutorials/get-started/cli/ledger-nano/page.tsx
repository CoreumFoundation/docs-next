import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './ledger-nano.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Using Ledger Nano with Coreum CLI and Keplr Wallet | Coreum Docs",
  description: "Learn how to enhance the security of your Coreum digital assets using Ledger Nano with cored CLI and Keplr Wallet. Complete guide for setup and transaction signing.",
  keywords: [
    'Coreum Blockchain',
    'Ledger Nano',
    'Keplr Wallet',
    'cored CLI',
    'Cosmos App',
    'Hardware Wallet',
    'Crypto Security',
    'Digital Assets',
    'Transaction Signing',
    'Coreum Testnet'
  ],
  openGraph: {
    type: 'website',
    description: "Learn how to enhance the security of your Coreum digital assets using Ledger Nano with cored CLI and Keplr Wallet. Complete guide for setup and transaction signing.",
    siteName: "Using Ledger Nano with Coreum CLI and Keplr Wallet | Coreum Docs",
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Smart FT with Access Control List (ACL)',
    href: '/docs/v4/tutorials/get-started/cli/smart-ft-with-acl',
  };
  const nextNavigationItem = {
    label: 'Transfer Funds with Golang',
    href: '/docs/v4/tutorials/get-started/golang/transfer-funds',
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
