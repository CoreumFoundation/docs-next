import Component from './node-prerequisites.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coreum Node Setup Prerequisites | Coreum Docs",
  description: "Prepare your system for Coreum node setup with these prerequisites. Learn how to configure system limits and install necessary utilities for optimal node operation.",
  keywords: [
    'Coreum Node Setup',
    'Node Configuration',
    'Blockchain Node Prerequisites',
    'Coreum Utilities Installation',
    'Ulimit Configuration',
    'Coreum Network',
    'Node Public IP'
  ],
  openGraph: {
    type: 'website',
    description: "Prepare your system for Coreum node setup with these prerequisites. Learn how to configure system limits and install necessary utilities for optimal node operation.",
    siteName: "Coreum Node Setup Prerequisites | Coreum Docs",
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
