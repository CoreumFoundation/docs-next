
import Component from './special-addresses.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Special Addresses on Coreum Blockchain | Coreum Developers",
  description: "Discover the key special addresses on the Coreum blockchain that are used for important functions like the community pool, IBC escrow, and module accounts. Learn how these addresses facilitate various blockchain operations without being controlled by any single account.",
  keywords: [
    'Coreum Special Addresses',
    'Blockchain Community Pool',
    'IBC Escrow Addresses',
    'Coreum Module Accounts',
    'Blockchain Governance',
    'Coreum Blockchain Operations',
    'Decentralized Blockchain Accounts',
    'Coreum Chain Management',
    'Blockchain Special Functions',
    'Coreum Address Usage'
  ],
  openGraph: {
    type: 'website',
    description: "Explore the special addresses on the Coreum blockchain that manage critical functions like governance, asset distribution, and inter-blockchain communications. These addresses ensure decentralized control and operational efficiency.",
    siteName: "Special Addresses on Coreum Blockchain | Coreum Developers",
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
        