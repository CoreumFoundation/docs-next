import Component from './install-prebuild-windows.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Windows Setup Guide for Coreum Development | Coreum Developers",
  description: "Step-by-step instructions for setting up a prebuilt Coreum blockchain development environment on Windows, including PowerShell access, installing WSL, and configuring environment variables.",
  keywords: [
    'Windows Setup for Blockchain',
    'Install WSL for Development',
    'Coreum Windows Installation',
    'Blockchain Development on Windows',
    'PowerShell for Blockchain',
    'Configure WSL for Coreum',
    'Set Environment Variables Windows',
    'Coreum Blockchain Tools',
    'Blockchain Developer Guide Windows',
    'WSL Tutorial for Blockchain'
  ],
  openGraph: {
    type: 'website',
    description: "Comprehensive guide for Windows users to set up the Coreum blockchain development environment. Includes PowerShell setup, WSL installation, and environment configuration.",
    siteName: "Windows Setup Guide for Coreum Development | Coreum Developers",
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
