
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
