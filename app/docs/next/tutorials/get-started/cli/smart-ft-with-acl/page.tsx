import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './smart-ft-with-acl.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Creating Smart FT with ACL on Coreum Blockchain | Coreum Docs",
  description: "Learn how to create a multisig account, issue a fungible token (FT), and manage permissions with the Authz module on the Coreum blockchain for enhanced asset control.",
  keywords: [
    'Coreum Smart FT',
    'Access Control List',
    'Coreum Multisig Account',
    'Authz Module Coreum',
    'Issuing FT on Coreum',
    'Blockchain Asset Management',
    'Coreum CLI Tutorial',
    'Coreum Asset Permissions',
    'Multisig Transactions Coreum'
  ],
  openGraph: {
    type: 'website',
    description: "Learn how to create a multisig account, issue a fungible token (FT), and manage permissions with the Authz module on the Coreum blockchain for enhanced asset control.",
    siteName: "Creating Smart FT with ACL on Coreum Blockchain | Coreum Docs",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'Send Multisig Transaction',
    href: '/docs/next/tutorials/get-started/cli/send-multisig-transaction',
  };
  const nextNavigationItem = {
    label: 'Ledger Nano with CLI',
    href: '/docs/next/tutorials/get-started/cli/ledger-nano',
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
