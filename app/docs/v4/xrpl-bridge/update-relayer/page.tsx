
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './update-relayer.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "How to Update Coreum Bridge XRPL Relayer Software | Coreum Tutorials",
  description: "Step-by-step guide on updating the Coreum Bridge XRPL Relayer software. Ensure your relayer operations remain efficient and secure with the latest software version.",
  keywords: [
    'Update Coreum Bridge Relayer',
    'XRPL Relayer Software',
    'Coreum Relayer Update',
    'Docker Container Update',
    'Coreum Bridge Software',
    'Secure Relayer Operation',
    'Coreum XRPL Integration',
    'Blockchain Relayer Software'
  ],
  openGraph: {
    type: 'website',
    description: "Step-by-step guide on updating the Coreum Bridge XRPL Relayer software. Ensure your relayer operations remain efficient and secure with the latest software version.",
    siteName: "How to Update Coreum Bridge XRPL Relayer Software | Coreum Tutorials",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'Run Relayer',
    href: '/docs/v4/xrpl-bridge/run-relayer',
  };

  return (
    <div className="flex flex-col w-full">
      <Component />
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 py-10">
        <NavigatonItem href={prevNavigationItem.href} label={prevNavigationItem.label} mode={NavigatonItemMode.Previous} />
      </div>
    </div>
  );
};

export default Page;
