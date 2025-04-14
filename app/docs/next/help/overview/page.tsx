import { DocLinkItem, DocLinkItemProps } from "@/components/DocLinkItem";
import { NavigatonItem, NavigatonItemMode } from "@/components/NavigationItem";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Help | Coreum Docs",
  description: "Find answers to frequently asked questions and explore a collection of useful links to support your experience with Coreum. Get the help you need to navigate the Coreum ecosystem.",
  keywords: [
    'Coreum Help',
    'Coreum FAQ',
    'Coreum Support',
    'Blockchain Support',
    'Coreum Documentation',
    'Coreum Useful Links',
    'Blockchain Guides',
    'Cryptocurrency Assistance',
    'Coreum User Guide',
    'Blockchain FAQ'
  ],
  openGraph: {
    type: 'website',
    description: "Find answers to frequently asked questions and explore a collection of useful links to support your experience with Coreum. Get the help you need to navigate the Coreum ecosystem.",
    siteName: "Help | Coreum Docs",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};

const HELP_ITEMS: DocLinkItemProps[] = [
  {
    label: 'FAQ',
    href: '/docs/next/help/faq',
    external: false,
  },
  {
    label: 'How to unjail my validator',
    href: '/docs/next/help/how-to-unjail-my-validator',
    external: false,
  },
  {
    label: 'Support',
    href: '/docs/next/help/support',
    external: false,
  },
];

const HelpMainPage = () => {
  const nextNavigationItem = HELP_ITEMS[0];

  return (
    <div className="flex flex-col w-full gap-6 max-w-[900px] px-2 pt-6 pb-[5.5rem]">
      <div className="text-[2rem] font-medium text-[#EEE] tracking-[-0.64px]">
        Help
      </div>
      <div className="text-base font-medium tracking-[-0.32px] mt-4">
        Get started:
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3">
        {HELP_ITEMS.map((item: DocLinkItemProps, index: number) => (
          <DocLinkItem
            key={`overview-item-${index}`}
            {...item}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 py-10">
        <div />
        <NavigatonItem
          href={nextNavigationItem.href}
          label={nextNavigationItem.label}
          mode={NavigatonItemMode.Next}
        />
      </div>
    </div>
  );
};

export default HelpMainPage;
