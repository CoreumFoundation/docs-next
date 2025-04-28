import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './crust-for-development.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Crust: Coreum Development and Testing Environment Tool | Coreum Developers",
  description: "Master Coreum blockchain development with Crust. Learn how to set up, build, and run applications for efficient blockchain development and testing.",
  keywords: [
    'Crust Coreum Tool',
    'Blockchain Development Environment',
    'Coreum Testing Tool',
    'Coreum Blockchain Setup',
    'Blockchain Application Building',
    'Coreum Developers',
    'Coreum CLI Tools',
    'Blockchain Docker Images',
    'Coreum Blockchain Testing',
    'Blockchain Development Workflow'
  ],
  openGraph: {
    type: 'website',
    description: "Master Coreum blockchain development with Crust. Learn how to set up, build, and run applications for efficient blockchain development and testing.",
    siteName: "Crust: Coreum Development and Testing Environment Tool | Coreum Developers",
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'Automated Market Maker (AMM)',
    href: '/docs/v4/tutorials/build-apps/amm',
  };
  const nextNavigationItem = {
    label: 'CEX integration',
    href: '/docs/v4/tutorials/integrate-coreum/cex-integrations',
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
