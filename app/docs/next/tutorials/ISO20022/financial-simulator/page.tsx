import Component from './financial-simulator.mdx';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "ISO20022: Financial Simulator",
    description: "Process transactions between financial institutions using the global financial messaging standard leading interoperability across high-value payment systems worldwide.",
    keywords: [
      'ISO 20022 Compliance',
      'ISO 20022 Financial Standard',
      'ISO 20022 Messaging',
      'ISO 20022 Global Payments',
      'Blockchain Development',
      'IS020022 Financial Simulator',
      'Adopting ISO 20022',
      'ISO 20022 for Cross-Border Payments'
    ],
    openGraph: {
      type: 'website',
      description: "Dive into the details of ISO 20022, the advanced financial messaging standard revolutionizing how data is exchanged across global financial institutions.",
      siteName: "Understanding ISO 20022: Revolutionizing Financial Messaging",
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
