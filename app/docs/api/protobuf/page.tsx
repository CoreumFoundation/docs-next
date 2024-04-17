import Component from './protobuf.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coreum Protobuf Documentation | Coreum Developers",
  description: "Access comprehensive documentation for Protobuf files related to the Coreum blockchain. This resource details the structure and usage of various Protobuf messages and services across different modules of the Coreum ecosystem.",
  keywords: [
    'Coreum Protobuf Documentation',
    'Blockchain Protobuf Files',
    'Coreum Blockchain Interfaces',
    'gRPC for Coreum',
    'Coreum API Documentation',
    'Coreum Blockchain Development',
    'Protobuf File Descriptions',
    'Coreum Protobuf Services',
    'Blockchain Programming Interface',
    'Coreum Module Documentation'
  ],
  openGraph: {
    type: 'website',
    description: "Explore detailed Protobuf documentation for Coreum, providing essential information on how to interact with Coreum's blockchain protocols and services using gRPC and Protobuf interfaces.",
    siteName: "Coreum Protobuf Documentation | Coreum Developers",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  return (
    <div className="flex flex-col w-full">
      <Component />
    </div>
  );
};

export default Page;
