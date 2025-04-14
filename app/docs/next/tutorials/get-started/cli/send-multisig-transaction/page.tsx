import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './send-multisig-transaction.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Creating and Broadcasting Multisig Transactions with Coreum CLI | Coreum Docs",
  description: "Step-by-step guide on creating a multisig account and sending a multisig transaction using the Coreum cored CLI. Learn how to securely manage multisig transactions on the Coreum blockchain.",
  keywords: [
    'Coreum Multisig Transaction',
    'cored CLI Tutorial',
    'Multisig Account Setup',
    'Coreum CLI Multisig',
    'Blockchain Multisig',
    'Coreum Blockchain Transactions',
    'Multisig Transaction Broadcast',
    'Coreum CLI Guide'
  ],
  openGraph: {
    type: 'website',
    description: "Step-by-step guide on creating a multisig account and sending a multisig transaction using the Coreum cored CLI. Learn how to securely manage multisig transactions on the Coreum blockchain.",
    siteName: "Creating and Broadcasting Multisig Transactions with Coreum CLI | Coreum Docs",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Transfer Funds with CLI',
    href: '/docs/next/tutorials/get-started/cli/transfer-funds-with-cli',
  };
  const nextNavigationItem = {
    label: 'Smart FT with Access Control List (ACL)',
    href: '/docs/next/tutorials/get-started/cli/smart-ft-with-acl',
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
