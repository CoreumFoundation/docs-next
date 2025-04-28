import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './coreum-ts-protobuf.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coreum TS Protobuf: TypeScript Protobuf Generation for Coreum Blockchain | Coreum Developers",
  description: "Learn how to generate TypeScript protobuf files for interacting with the Coreum blockchain via gRPC. Follow our guide to use Coreum TS Protobuf for streamlined blockchain communication.",
  keywords: [
    'Coreum TS Protobuf',
    'TypeScript Protobuf Generation',
    'Coreum Blockchain Interaction',
    'gRPC Blockchain Communication',
    'Blockchain Development',
    'Cosmos SDK',
    'Coreum Developer Tools',
    'Protobuf Files Generation'
  ],
  openGraph: {
    type: 'website',
    description: "Learn how to generate TypeScript protobuf files for interacting with the Coreum blockchain via gRPC. Follow our guide to use Coreum TS Protobuf for streamlined blockchain communication.",
    siteName: "Coreum TS Protobuf: TypeScript Protobuf Generation for Coreum Blockchain | Coreum Developers",
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};

const Page = () => {
  const prevNavigationItem = {
    label: 'Rust Protobuf',
    href: '/docs/next/api/rust-protobuf',
  };

  return (
    <div className="flex flex-col w-full">
      <Component />
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 py-10">
        <NavigatonItem href={prevNavigationItem.href} label={prevNavigationItem.label} mode={NavigatonItemMode.Previous} />
      </div>
    </div>
  );
};

export default Page;
