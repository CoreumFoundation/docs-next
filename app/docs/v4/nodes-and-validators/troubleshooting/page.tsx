import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './troubleshooting.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Troubleshooting Network and Configuration Errors on Blockchain | Coreum Blockchain Docs",
  description: "Solve common network connection and app.toml parsing errors in Coreum blockchain development. Includes fixes for crudini version issues and network visibility.",
  keywords: [
    'Coreum Blockchain Troubleshooting',
    'Network Connection Error',
    'app.toml Parsing',
    'Crudini Version Update',
    'Blockchain Network Troubleshooting',
    'Coreum Documentation'
  ],
  openGraph: {
    type: 'website',
    description: "Solve common network connection and app.toml parsing errors in Coreum blockchain development. Includes fixes for crudini version issues and network visibility.",
    siteName: "Troubleshooting Network and Configuration Errors on Blockchain | Coreum Blockchain Docs",
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'Upgrade history',
    href: '/docs/v4/nodes-and-validators/upgrades/upgrades-history',
  };

  return (
    <div className="flex flex-col w-full">
      <Component />
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 py-10">
        <NavigatonItem href={prevNavigationItem.href} label={prevNavigationItem.label} mode={NavigatonItemMode.Previous} />
      </div>
    </div>
  );
};

export default Page;
