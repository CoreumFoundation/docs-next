
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
