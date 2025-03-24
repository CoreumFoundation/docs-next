
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
