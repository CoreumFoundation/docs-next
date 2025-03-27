
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './run-sentry.mdx';

import { Metadata } from 'next';
import { usePathname } from 'next/navigation';

export const metadata: Metadata = {
  title: "Guide to Setting Up Sentry Nodes for Coreum Blockchain | Coreum Node Configuration",
  description: "Step-by-step guide to setting up a sentry node in the Coreum blockchain network. Learn how to enhance network security and efficiency through detailed instructions.",
  keywords: [
    'Coreum Sentry Node Setup',
    'Blockchain Network Security',
    'Node Configuration Blockchain',
    'Coreum Documentation',
    'Blockchain Sentry Nodes',
    'Tendermint Node Setup'
  ],
  openGraph: {
    type: 'website',
    description: "Step-by-step guide to setting up a sentry node in the Coreum blockchain network. Learn how to enhance network security and efficiency through detailed instructions.",
    siteName: "Guide to Setting Up Sentry Nodes for Coreum Blockchain | Coreum Node Configuration",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'Run Validator Node',
    href: `/docs/next/become-validator/validator/run-validator`,
  };
  const nextNavigationItem = {
    label: 'System Requirements',
    href: `/docs/next/become-validator/essentials/system-requirements`,
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
