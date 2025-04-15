import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import Component from './faq.mdx';
import { Metadata } from 'next';
import { HelpCard } from '@/components/HelpCard';

export const metadata: Metadata = {
  title: "Coreum Blockchain FAQ: Common Issues and Solutions | Coreum Docs",
  description: "Find answers to frequently asked questions about Coreum blockchain, including how to connect `cored` to specific networks, resolve account errors, and more.",
  keywords: [
    'Coreum blockchain FAQ',
    'Cored network connection',
    'Account not found error',
    'Key not found error',
    'Coreum blockchain solutions',
    'Blockchain troubleshooting'
  ],
  openGraph: {
    type: 'website',
    description: "Find answers to frequently asked questions about Coreum blockchain, including how to connect `cored` to specific networks, resolve account errors, and more.",
    siteName: "Coreum Blockchain FAQ: Common Issues and Solutions | Coreum Docs",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};

const CARDS = [
  {
    title: 'GitHub Issues',
    description: 'Explore, discuss, and report technical issues on our GitHub repository. Our community actively collaborates to resolve problems and provide assistance.',
    linkLabel: 'Github Issues',
    linkHref: 'https://github.com/CoreumFoundation/coreum/issues',
  },
  {
    title: 'Ask the Community',
    description: 'Explore, discuss, and report technical issues on our GitHub repository. Our community actively collaborates to resolve problems and provide assistance.',
    linkLabel: 'Coreum Community',
    linkHref: 'https://discord.com/invite/VgkhYeWmTd',
  },
  {
    title: 'GitHub Discussion',
    description: 'Explore, discuss, and report technical issues on our GitHub repository. Our community actively collaborates to resolve problems and provide assistance.',
    linkLabel: 'Github Discussion',
    linkHref: 'https://github.com/CoreumFoundation/coreum/discussions',
  },
];

const Page = () => {
  const prevNavigationItem = {
    label: 'FAQ',
    href: '/docs/next/help/faq',
  };
  const nextNavigationItem = {
    label: 'How to unjail my validator',
    href: '/docs/next/help/how-to-unjail-my-validator',
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col py-10">
        <h1 className="text-[#eee] font-['space grotesk'] text-[32px] font-medium leading-10 tracking-[-0.64px]">
          Get the support you need
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARDS.map((card, index) => {
            return (
              <HelpCard {...card} key={`help-card-${index}`} />
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 py-10">
        <NavigatonItem href={prevNavigationItem.href} label={prevNavigationItem.label} mode={NavigatonItemMode.Previous} />
        <NavigatonItem href={nextNavigationItem.href} label={nextNavigationItem.label} mode={NavigatonItemMode.Next} />
      </div>
    </div>
  );
};

export default Page;
