import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './install-cored.mdx';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Install Coreum's Core Daemon (cored): Comprehensive Guide | Coreum Docs",
  description: "Explore detailed instructions on installing Coreum's core daemon (cored) through various methods including cosmovisor for Linux, prebuilt binaries, and building from sources.",
  keywords: [
    'Coreum cored installation',
    'Coreum cosmovisor setup',
    'Install blockchain daemon',
    'Coreum binary download',
    'Build Coreum from source',
    'Coreum node setup'
  ],
  openGraph: {
    type: 'website',
    description: "Explore detailed instructions on installing Coreum's core daemon (cored) through various methods including cosmovisor for Linux, prebuilt binaries, and building from sources.",
    siteName: "Install Coreum's Core Daemon (cored): Comprehensive Guide | Coreum Docs",
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'Node Prerequisites',
    href: '/docs/v4/nodes-and-validators/essentials/node-prerequisites',
  };
  const nextNavigationItem = {
    label: 'Network Variables',
    href: '/docs/v4/nodes-and-validators/essentials/network-variables',
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
