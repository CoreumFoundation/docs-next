
import Component from './network-variables.mdx';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Setting Up Network Variables for Coreum Environments | Coreum Docs",
  description: "Learn how to configure network variables for Coreum's Mainnet, Testnet, Devnet, and Znet environments. Essential steps for developers aiming to connect to various Coreum networks.",
  keywords: [
    'Coreum network setup',
    'Blockchain environment variables',
    'Coreum Mainnet configuration',
    'Testnet settings',
    'Devnet setup',
    'Coreum blockchain development',
    'Network variables guide'
  ],
  openGraph: {
    type: 'website',
    description: "Learn how to configure network variables for Coreum's Mainnet, Testnet, Devnet, and Znet environments. Essential steps for developers aiming to connect to various Coreum networks.",
    siteName: "Setting Up Network Variables for Coreum Environments | Coreum Docs",
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
