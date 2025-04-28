import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './transfer-funds-cli.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Transferring Funds and Staking with Coreum CLI | Coreum Docs",
  description: "Learn how to transfer funds and stake tokens on the Coreum blockchain using the cored CLI. Follow our step-by-step guide for testnet transactions and staking operations.",
  keywords: [
    'Coreum CLI Guide',
    'Transferring Funds Coreum',
    'Staking Tokens Coreum',
    'cored CLI Tutorial',
    'Coreum Testnet Transactions',
    'Blockchain CLI Operations',
    'Coreum Staking Commands',
    'Coreum Bank Module',
    'Coreum Staking Module'
  ],
  openGraph: {
    type: 'website',
    description: "Learn how to transfer funds and stake tokens on the Coreum blockchain using the cored CLI. Follow our step-by-step guide for testnet transactions and staking operations.",
    siteName: "Transferring Funds and Staking with Coreum CLI | Coreum Docs",
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Install cored',
    href: '/docs/v4/tutorials/get-started/install-cored',
  };
  const nextNavigationItem = {
    label: 'Send Multisig Transaction',
    href: '/docs/v4/tutorials/get-started/cli/send-multisig-transaction',
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
