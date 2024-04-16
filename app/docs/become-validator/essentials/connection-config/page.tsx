
import Component from './connection-config.mdx';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coreum Node Connection Configuration Guide | Coreum Docs",
  description: "Learn how to configure connection settings for Coreum blockchain nodes. Includes setting public IP, adjusting consensus timeouts, and enabling RPC and P2P connections.",
  keywords: [
    'Coreum node setup',
    'Blockchain node configuration',
    'Coreum RPC setup',
    'P2P connection settings',
    'Blockchain consensus timeout',
    'Coreum network settings'
  ],
  openGraph: {
    type: 'website',
    description: 'Learn how to configure connection settings for Coreum blockchain nodes. Includes setting public IP, adjusting consensus timeouts, and enabling RPC and P2P connections.',
    siteName: 'Coreum Node Connection Configuration Guide | Coreum Docs',
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
