
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './register-new-token.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "How to Register a New Token for XRPL-Coreum Bridge | Coreum Token Registry",
  description: "Learn the step-by-step process of registering new tokens from XRPL, Coreum, and Cosmos ecosystems for the XRPL-Coreum Bridge. Discover the essentials of token registration with the Coreum Token Registry.",
  keywords: [
    'Coreum Token Registration',
    'XRPL-Coreum Bridge',
    'Coreum Token Registry',
    'XRPL Brdige Token Registration',
    'Cosmos Token Registration',
    'Blockchain Token Registration',
    'Cross-Chain Token',
    'Token Registration Guide',
    'Coreum Ecosystem Tokens',
    'XRPL Assets Registration'
  ],
  openGraph: {
    type: 'website',
    description: "Learn the step-by-step process of registering new tokens from XRPL, Coreum, and Cosmos ecosystems for the XRPL-Coreum Bridge. Discover the essentials of token registration with the Coreum Token Registry.",
    siteName: "How to Register a New Token for XRPL-Coreum Bridge | Coreum Token Registry",
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Fees',
    href: '/docs-bridge/fees',
  };
  const nextNavigationItem = {
    label: 'Install Relayer',
    href: '/docs-bridge/install-relayer',
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
