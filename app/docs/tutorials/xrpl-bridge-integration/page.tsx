
import Component from './xrpl-bridge-integration.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Client integration guide for XRPL-Coreum Bridge | Coreum Guides",
  description: "Learn how to prepare the client side of application to interact with XRPL-Coreum Bridge",
  keywords: [
    'XRPL',
    'Coreum',
    'Coreum Bridging Fees',
    'XRPL-Coreum Bridge',
    'Token Bridging Fees',
    'Claim Relayer Fees',
    'Coreum Token Registry',
    'Cross-Chain Transaction Fees',
    'Coreum Network Fees',
    'Relayer Profit',
    'Operational Expenses Coverage',
    'Coreum Explorer'
  ],
  openGraph: {
    type: 'website',
    description: "Learn how to prepare the client side of application to interact with XRPL-Coreum Bridge",
    siteName: "Client integration guide for XRPL-Coreum Bridge | Coreum Guides",
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
