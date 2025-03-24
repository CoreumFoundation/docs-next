import Component from './network-variables.mdx';
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Install Coreum's Core Daemon (cored): Comprehensive Guide | Coreum Docs",
  description: "Explore detailed instructions on installing Coreum's core daemon (cored) through various methods including cosmovisor for Linux, prebuilt binaries, and building from sources.",
  keywords: [
    'Coreum Validator setup',
    'CLI network variables',
    'Coreum mainnet',
    'Coreum testnet',
    'Coreum devnet',
    'blockchain CLI configuration',
    'Coreum RPC nodes',
    'Coreum REST API',
    'Coreum network environments'
  ],
  openGraph: {
    type: 'website',
    description: "Step-by-step guide on setting up Coreum CLI Validator network variables for mainnet, testnet, devnet, and localnet environments. Learn how to configure your CLI for Coreum blockchain interactions.",
    siteName: "Setting Up Coreum Validator Network Variables for Different Environments | Coreum Docs",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
    const prevNavigationItem = {
      label: 'Set Connnection config',
      href: '/docs/become-validator/essentials/connection-config',
    };
    const nextNavigationItem = {
      label: 'Troubleshooting',
      href: '/docs/become-validator/troubleshooting/',
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
