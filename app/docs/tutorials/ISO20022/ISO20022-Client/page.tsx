import { Metadata } from 'next';
import Component from './ISO20022-client.mdx';


export const metadata: Metadata = {
  title: "ISO20022 Client: Decentralized Financial Messaging",
  description: "A decentralized messenger for financial institutions to securely exchange ISO20022 messages using blockchain technology, supporting RTGS and cryptocurrency transactions.",
  keywords: [
    'ISO 20022 Client',
    'Decentralized Financial Messaging',
    'Blockchain ISO20022',
    'Real-Time Gross Settlement',
    'SWIFT Alternative',
    'Cryptocurrency ISO20022',
    'Financial Institution Messaging',
    'Secure Message Exchange',
    'ISO 20022 Compliance',
    'Blockchain Development'
  ],
  openGraph: {
    type: 'website',
    title: "ISO20022 Client: Revolutionizing Financial Messaging with Blockchain",
    description: "Explore the ISO20022 Client, a decentralized application that enables financial institutions to securely exchange ISO20022 messages using blockchain technology, supporting RTGS and cryptocurrency transactions.",
    siteName: "Coreum ISO20022 Client Documentation",
    images: [{
      url: '/images/diagram.png',
      width: 500,
      height: 500,
      alt: 'ISO20022 Network Diagram',
    }],
  },
};

const Page = () => {
  return (
    <Component />
  );
};

export default Page;
