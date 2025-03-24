
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
