import { DocLinkItem, DocLinkItemProps } from "@/components/DocLinkItem";
import { NavigatonItem, NavigatonItemMode } from "@/components/NavigationItem";
import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Run Coreum Node | Coreum Docs",
  description: "Learn how to run different types of Coreum nodes including full, sentry, and validator nodes. Each guide provides detailed instructions and links to all necessary dependencies.",
  keywords: [
    'Run Coreum Node',
    'Coreum Full Node',
    'Coreum Validator Node',
    'Coreum Sentry Node',
    'Blockchain Node Setup',
    'Coreum Node Requirements',
    'Validator Node Guide',
    'Coreum Blockchain Infrastructure',
    'Node Operation Coreum',
    'Blockchain Network Participation'
  ],
  openGraph: {
    type: 'website',
    description: "Learn how to run different types of Coreum nodes including full, sentry, and validator nodes. Each guide provides detailed instructions and links to all necessary dependencies.",
    siteName: "Run Coreum Node | Coreum Docs",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};

const TUTORIALS_ITEMS = {
  section_1: {
    label: 'Each instruction is comprehensive and has links to all dependencies:',
    items: [
      {
        label: 'Run a full node',
        href: '/docs/become-validator/run-full-node',
        external: false,
      },
      // {
      //   label: 'Sync node from the genesis',
      //   href: '/docs/become-validator/',
      //   external: false,
      // },
      {
        label: 'Run a validator node',
        href: '/docs/become-validator/validator/run-validator',
        external: false,
      },
      {
        label: 'Run a sentry node',
        href: '/docs/become-validator/validator/run-sentry',
        external: false,
      },
    ],
  },
  section_2: {
    label: 'Before making a decision you can find additional information below:',
    items: [
      {
        label: 'System Requirements',
        href: '/docs/become-validator/essentials/system-requirements',
        external: false,
      },
      {
        label: 'How much fund to I need to create a validator?',
        href: '/docs/become-validator/essentials/how-much-fund-to-create-validator',
        external: false,
      },
    ],
  },
  section_3: {
    label: 'If you already started your validator or node:',
    items: [
      {
        label: 'How to unjail my validator?',
        href: '/docs/become-validator/validator/unjail-validator',
        external: false,
      },
      // {
      //   label: 'How to hide my validator behind sentry?',
      //   href: '',
      //   external: false,
      // },
      {
        label: 'How to upgrade my node?',
        href: '/docs/become-validator/upgrades/main-info',
        external: false,
      },
      {
        label: 'Upgrade history',
        href: '/docs/become-validator/upgrades/history',
        external: false,
      },
    ],
  },
};

const ValidatorMainPage = () => {
  const nextNavigationItem = TUTORIALS_ITEMS.section_1.items[0];

  return (
    <div className="flex flex-col w-full gap-6 max-w-[900px] px-2 pt-6 pb-10">
      <div className="text-[2rem] font-medium text-[#EEE] tracking-[-0.64px]">
        Run Coreum node
      </div>
      <div className="flex flex-col w-full gap-20 pb-20">
        {Object.values(TUTORIALS_ITEMS).map((tutorialItem, index) => {
          return (
            <div key={`tutorial-map-${index}`} className="flex flex-col gap-6">
              <div className="mt-4 text-base font-medium tracking-[-0.48px] text-[#eee]">
                {tutorialItem.label}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3">
                {tutorialItem.items.map((item: DocLinkItemProps, index: number) => (
                  <DocLinkItem
                    key={`tutorial-item-${index}`}
                    {...item}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 py-10">
        <div />
        <NavigatonItem href={nextNavigationItem.href} label={nextNavigationItem.label} mode={NavigatonItemMode.Next} />
      </div>
    </div>
  );
};

export default ValidatorMainPage;
