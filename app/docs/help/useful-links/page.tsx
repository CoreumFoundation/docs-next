
import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './useful-links.mdx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Useful Links for Coreum Community and Developers | Coreum",
  description: "Access a curated list of useful links for the Coreum community. Includes links to the Coreum main website, GitHub repository, and the Discord Validators channel for active community engagement and support.",
  keywords: [
    'Coreum Links',
    'Coreum Community',
    'Coreum Developers',
    'Blockchain Development Resources',
    'Coreum GitHub',
    'Coreum Discord Channel',
    'Coreum Validator Resources',
    'Coreum Official Site',
    'Blockchain Community Links',
    'Coreum Support Channels'
  ],
  openGraph: {
    type: 'website',
    description: "Find all essential links for navigating the Coreum ecosystem, including official website, GitHub for code contributions, and Discord for community interactions.",
    siteName: "Useful Links for Coreum Community and Developers | Coreum",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};


const Page = () => {
  const prevNavigationItem = {
    label: 'FAQ',
    href: '/docs/help/faq',
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
