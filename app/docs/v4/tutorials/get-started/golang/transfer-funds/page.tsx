import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './transfer-funds.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Transferring Funds on Coreum Blockchain with Go | Coreum Docs",
  description: "Learn how to use the Go programming language to broadcast transactions and query the Coreum blockchain. A complete guide with examples and a full code snippet.",
  keywords: [
    'Coreum Blockchain',
    'Go Programming',
    'Blockchain Transactions',
    'Coreum SDK',
    'Go Blockchain Development',
    'Coreum Query',
    'Golang Coreum',
    'Broadcast Transactions Go'
  ],
  openGraph: {
    type: 'website',
    description: "Learn how to use the Go programming language to broadcast transactions and query the Coreum blockchain. A complete guide with examples and a full code snippet.",
    siteName: "Transferring Funds on Coreum Blockchain with Go | Coreum Docs",
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'Ledger Nano with CLI',
    href: '/docs/v4/tutorials/get-started/cli/ledger-nano',
  };
  const nextNavigationItem = {
    label: 'Create Fungible Token with Golang',
    href: '/docs/v4/tutorials/get-started/golang/create-ft',
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
