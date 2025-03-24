
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './install-cored.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "How to Install Coreum's cored: Prebuilt and From Sources | Coreum Docs",
  description: "Complete guide on installing the Coreum 'cored' binary. Choose between installing a prebuilt version for Linux or building from sources. Ensure your CLI is ready for Coreum blockchain.",
  keywords: [
    'Coreum cored Installation',
    'Install Coreum Binary',
    'Coreum Blockchain Software',
    'Build Coreum from Sources',
    'Coreum CLI Setup',
    'cored Linux Installation',
    'Coreum Blockchain Development',
    'Coreum GitHub Releases'
  ],
  openGraph: {
    type: 'website',
    description: "Complete guide on installing the Coreum 'cored' binary. Choose between installing a prebuilt version for Linux or building from sources. Ensure your CLI is ready for Coreum blockchain.",
    siteName: "How to Install Coreum's cored: Prebuilt and From Sources | Coreum Docs",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'Setup CLI Network Variables',
    href: '/docs/tutorials/get-started/setup-cli',
  };
  const nextNavigationItem = {
    label: 'Setup Cored Using Docker',
    href: '/docs/tutorials/get-started/setup-cored-using-docker',
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
