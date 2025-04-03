import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
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
  const prevNavigationItem = {
    label: 'Protobuf',
    href: '/docs/next/api/protobuf',
  };
  const nextNavigationItem = {
    label: 'Coreum TS Protobuf',
    href: '/docs/next/api/coreum-ts-protobuf',
  };

  return (
    <div className="flex flex-col w-full">
      <Component />
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 py-10">
        <NavigatonItem href={prevNavigationItem.href} label={prevNavigationItem.label} mode={NavigatonItemMode.Previous} />
        <NavigatonItem href={nextNavigationItem.href} label={nextNavigationItem.label} mode={NavigatonItemMode.Next} />
      </div>
    </div>
  );
};

export default Page;
