import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './intro-to-iso20022.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ISO20022: Financial Simulator",
  description: "Process transactions between financial institutions using the global financial messaging standard leading interoperability across high-value payment systems worldwide.",
  keywords: [
    'ISO 20022 Compliance',
    'ISO 20022 Financial Standard',
    'ISO 20022 Messaging',
    'ISO 20022 Global Payments',
    'Blockchain Development',
    'IS020022 Financial Simulator',
    'Adopting ISO 20022',
    'ISO 20022 for Cross-Border Payments'
  ],
  openGraph: {
    type: 'website',
    description: "Dive into the details of ISO 20022, the advanced financial messaging standard revolutionizing how data is exchanged across global financial institutions.",
    siteName: "Understanding ISO 20022: Revolutionizing Financial Messaging",
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'IBC Transfer Using CLI',
    href: '/docs/next/tutorials/ibc/ibc-transfer-using-cli',
  };
  const nextNavigationItem = {
    label: 'Financial simulator',
    href: '/docs/next/tutorials/ISO20022/financial-simulator',
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
