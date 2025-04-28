import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import { ProtobufPageContent } from './ProtobufPageContent';
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
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Coreum Protobuf Overview',
    href: '/docs/next/api/overview',
  };
  const nextNavigationItem = {
    label: 'Rust Protobuf',
    href: '/docs/next/api/rust-protobuf',
  };

  return (
    <div className="flex flex-col w-full">
      <ProtobufPageContent />
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 py-10">
        <NavigatonItem href={prevNavigationItem.href} label={prevNavigationItem.label} mode={NavigatonItemMode.Previous} />
        <NavigatonItem href={nextNavigationItem.href} label={nextNavigationItem.label} mode={NavigatonItemMode.Next} />
      </div>
    </div>
  );
};

export default Page;
