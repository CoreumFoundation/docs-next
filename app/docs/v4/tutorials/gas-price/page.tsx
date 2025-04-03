import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './gas-price.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Gas Price Calculation Guide for Coreum Blockchain | Coreum Developers",
  description: "Understand the dynamic fee model and how to calculate the minimum gas price for Coreum transactions. Access tools and endpoints to optimize your transaction fees.",
  keywords: [
    'Coreum Gas Price',
    'Blockchain Transaction Fees',
    'Min Gas Price Calculation',
    'Coreum Fee Model',
    'Blockchain Fee Optimization',
    'Coreum Blockchain Development',
    'Gas Price Prediction',
    'Coreum Smart Contracts',
    'Decentralized Application Fees',
    'Coreum Blockchain Tools'
  ],
  openGraph: {
    type: 'website',
    description: "Explore the Coreum gas price calculation methods including the minimum gas price dynamics and fee model. Use provided tools to efficiently manage and predict transaction costs.",
    siteName: "Gas Price Calculation Guide for Coreum Blockchain | Coreum Developers",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'Tutorials overview',
    href: '/docs/v4/tutorials/overview',
  };
  const nextNavigationItem = {
    label: 'Special addresses',
    href: '/docs/v4/tutorials/special-addresses',
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
