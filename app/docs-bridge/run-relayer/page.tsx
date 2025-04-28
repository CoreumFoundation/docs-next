
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './run-relayer.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Running Coreum Bridge XRPL Relayer: A Step-by-Step Guide | Coreum Integration",
  description: "Learn how to run the Coreum Bridge XRPL Relayer, ensuring seamless interoperability between Coreum and the XRPL. Follow our comprehensive guide for a smooth setup.",
  keywords: [
    'Coreum Bridge XRPL Relayer',
    'XRPL Coreum Integration',
    'Blockchain Interoperability',
    'Relayer Software Setup',
    'Cryptocurrency Bridging',
    'XRPL Relaying',
    'Coreum Blockchain Technology',
    'XRP Ledger Integration',
    'Blockchain Relayer Guide'
  ],
  openGraph: {
    type: 'website',
    description: "Learn how to run the Coreum Bridge XRPL Relayer, ensuring seamless interoperability between Coreum and the XRPL. Follow our comprehensive guide for a smooth setup.",
    siteName: "Running Coreum Bridge XRPL Relayer: A Step-by-Step Guide | Coreum Integration",
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'Install Relayer',
    href: '/docs-bridge/install-relayer',
  };
  const nextNavigationItem = {
    label: 'Update Relayer',
    href: '/docs-bridge/update-relayer',
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
