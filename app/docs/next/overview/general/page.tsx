import { DocLinkItem, DocLinkItemProps } from "@/components/DocLinkItem";
import { NavigatonItem, NavigatonItemMode } from "@/components/NavigationItem";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coreum Overview | Coreum Docs",
  description: "An introduction to Coreum, providing a general overview of the blockchain's capabilities, including Smart Tokens, Smart Contracts, and key technical information. Ideal for developers and enthusiasts starting with Coreum.",
  keywords: [
    'Coreum Overview',
    'Blockchain Introduction',
    'Smart Tokens',
    'Smart Contracts',
    'Blockchain Technology',
    'Coreum Features',
    'Blockchain Ecosystem',
    'Coreum Development',
    'Coreum Platform Capabilities',
    'Decentralized Technology'
  ],
  openGraph: {
    type: 'website',
    description: "An introduction to Coreum, providing a general overview of the blockchain's capabilities, including Smart Tokens, Smart Contracts, and key technical information. Ideal for developers and enthusiasts starting with Coreum.",
    siteName: "Coreum Overview | Coreum Docs",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};

const OVERVIEW_ITEMS: DocLinkItemProps[] = [
  {
    label: 'Introduction',
    href: '/docs/next/overview/introduction',
    external: false,
  },
  {
    label: 'Smart Contracts',
    href: '/docs/next/overview/smart-contracts',
    external: false,
  },
  {
    label: 'Smart Tokens',
    href: '/docs/next/overview/smart-tokens',
    external: false,
  },
  {
    label: 'Technical Whitepaper',
    href: 'https://www.coreum.com/assets/coreum_technical_paper.pdf',
    external: true,
  },
];

const OverviewMainPage = () => {
  const nextNavigationItem = OVERVIEW_ITEMS[0];

  return (
    <div className="flex flex-col w-full gap-6 px-2 pt-6 pb-[5.5rem]">
      <div className="text-[2rem] font-medium text-main-title-light dark:text-main-title-dark tracking-[-0.64px]">
        Coreum Overview
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3">
        {OVERVIEW_ITEMS.map((item: DocLinkItemProps, index: number) => (
          <DocLinkItem
            key={`overview-item-${index}`}
            {...item}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 py-10">
        <div />
        <NavigatonItem href={nextNavigationItem.href} label={nextNavigationItem.label} mode={NavigatonItemMode.Next} />
      </div>
    </div>
  );
};

export default OverviewMainPage;
