import Component from './rust-protobuf.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coreum Rust Protobuf Generator | Coreum Developers",
  description: "Learn how to generate Rust protobuf structures for interacting with the Coreum blockchain using the Coreum Rust Protobuf tool. This guide provides detailed steps on using gRPC and Rust for blockchain development.",
  keywords: [
    'Coreum Rust Protobuf',
    'Rust Blockchain Development',
    'gRPC Coreum Interaction',
    'Coreum SDK',
    'Blockchain Protocol Buffers',
    'Rust Protobuf Generation',
    'Coreum Blockchain API',
    'Rust gRPC Integration',
    'Coreum Development Tools',
    'Blockchain Code Generation'
  ],
  openGraph: {
    type: 'website',
    description: "Master the generation of Rust protobuf structures with the Coreum Rust Protobuf tool, enabling efficient communication with the Coreum blockchain via gRPC and Rust.",
    siteName: "Coreum Rust Protobuf Generator | Coreum Developers",
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
