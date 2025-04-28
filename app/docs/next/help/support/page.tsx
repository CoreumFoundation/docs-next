import { NavigatonItem, NavigatonItemMode } from '@/components/NavigationItem';
import { Metadata } from 'next';
import { HelpCard } from '@/components/HelpCard';

export const metadata: Metadata = {
  title: "Coreum Help",
  description: "Help by topic: Github issues, Ask the community, FAQ, unjail a validator",
  keywords: [
    'help center',
    'validator',
    'FAQ',
    'contact us',
    'coreum',
    'blockchain',
    'smart contract',
    'token',
    'dapps',
    'defi',
    'decentralized',
    'bitcoin',
    'crypto',
    'network',
    'nft',
    'build',
  ],
  openGraph: {
    type: 'website',
    description: "Help by topic: Github issues, Ask the community, FAQ, unjail a validator",
    siteName: "Coreum Help",
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
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
      <div className="flex flex-col py-10 gap-4">
        <h1 className="text-main-title-light dark:text-main-title-dark font-space-grotesk text-[32px] font-medium leading-10 tracking-[-0.64px]">
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
