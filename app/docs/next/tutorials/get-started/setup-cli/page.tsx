import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './setup-cli.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Setting Up Coreum CLI Network Variables for Different Environments | Coreum Docs",
  description: "Step-by-step guide on setting up Coreum CLI network variables for mainnet, testnet, devnet, and localnet environments. Learn how to configure your CLI for Coreum blockchain interactions.",
  keywords: [
    'Coreum CLI setup',
    'CLI network variables',
    'Coreum mainnet',
    'Coreum testnet',
    'Coreum devnet',
    'blockchain CLI configuration',
    'Coreum RPC nodes',
    'Coreum GRPC endpoints',
    'Coreum REST API',
    'Coreum network environments'
  ],
  openGraph: {
    type: 'website',
    description: "Step-by-step guide on setting up Coreum CLI network variables for mainnet, testnet, devnet, and localnet environments. Learn how to configure your CLI for Coreum blockchain interactions.",
    siteName: "Setting Up Coreum CLI Network Variables for Different Environments | Coreum Docs",
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Special addresses',
    href: '/docs/next/tutorials/special-addresses',
  };
  const nextNavigationItem = {
    label: 'Install cored',
    href: '/docs/next/tutorials/get-started/install-cored',
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
