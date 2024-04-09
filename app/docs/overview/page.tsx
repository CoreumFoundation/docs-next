'use client';

import { DocLinkItem, DocLinkItemProps } from "@/components/DocLinkItem";
import { NavigatonItem, NavigatonItemMode } from "@/components/NavigationItem";

export const OVERVIEW_ITEMS: DocLinkItemProps[] = [
  {
    label: 'Introduction',
    href: '/docs/overview/introduction',
    external: false,
  },
  {
    label: 'Smart Contracts',
    href: '/docs/overview/smart-contracts',
    external: false,
  },
  {
    label: 'Smart Tokens',
    href: '/docs/overview/smart-tokens',
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
    <div className="flex flex-col w-full gap-6 max-w-[900px] px-2 pt-6 pb-[5.5rem]">
      <div className="text-[2rem] font-medium text-[#EEE] tracking-[-0.64px]">
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
