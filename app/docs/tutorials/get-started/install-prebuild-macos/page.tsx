import Component from './install-prebuild-macos.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Setup Guide for macOS Development Environment | Coreum Developers",
  description: "Learn how to export network variables and configure your macOS development environment using the .bash_profile for optimal Coreum blockchain development.",
  keywords: [
    'macOS Setup for Blockchain',
    'Configure Development Environment macOS',
    '.bash_profile Configuration',
    'Coreum macOS Installation',
    'Export Network Variables macOS',
    'Blockchain Development Setup',
    'Coreum Blockchain Tools',
    'macOS Terminal Commands',
    'Coreum Environment Setup',
    'Blockchain Developer Guide macOS'
  ],
  openGraph: {
    type: 'website',
    description: "Step-by-step guide to setting up your macOS development environment for Coreum blockchain applications. Includes details on exporting network variables and configuring .bash_profile.",
    siteName: "Setup Guide for macOS Development Environment | Coreum Developers",
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
        
  