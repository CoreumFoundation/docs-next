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
  return (
    <Component />
  );
};

export default Page;
