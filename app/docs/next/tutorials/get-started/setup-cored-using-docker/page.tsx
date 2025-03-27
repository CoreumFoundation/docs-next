import Component from './setup-cored-using-docker.mdx';
import { Metadata } from 'next';
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';


export const metadata: Metadata = {
  title: "Set Up cored Using Docker",
  description: "Learn how to build and run a Docker image for the cored binary using Alpine Linux. Follow our step-by-step guide to set up your Coreum environment.",
  keywords: [
    'cored setup',
    'Docker cored setup',
    'Alpine Linux Docker',
    'Coreum Docker',
    'Blockchain Docker setup',
    'Coreum cored installation',
    'cored binary Docker',
    'cored Docker guide'
  ],
  openGraph: {
    type: 'website',
    description: "A comprehensive guide on setting up the cored binary using Docker and Alpine Linux. Perfect for developers looking to streamline their Coreum environment setup.",
    siteName: "Set Up cored Using Docker: A Step-by-Step Guide",
    images: [{
      url: 'https://test.docs.coreum.dev/images/docker-cored-og.jpg',
    }],
  },
};

const Page = () => {
    const prevNavigationItem = {
      label: 'Setup CLI Network Variables',
      href: '/docs/next/tutorials/get-started/install-cored',
    };
    const nextNavigationItem = {
      label: 'Install Prebuild MacOS',
      href: '/docs/next/tutorials/get-started/install-prebuild-macos',
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
