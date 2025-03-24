import { DocLinkItem, DocLinkItemProps } from "@/components/DocLinkItem";
import { NavigatonItem, NavigatonItemMode } from "@/components/NavigationItem";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tools/Ecosystem | Coreum Docs",
  description: "Access essential tools for engaging with the Coreum ecosystem including wallets, faucets, and block explorers. Start interacting with the Coreum blockchain now.",
  keywords: [
    'Coreum Tools',
    'Coreum Ecosystem',
    'Blockchain Wallets',
    'Coreum Faucet',
    'Blockchain Block Explorers',
    'Coreum Blockchain Interaction',
    'Coreum Resources',
    'Blockchain Utilities',
    'Cryptocurrency Tools',
    'Blockchain Infrastructure Tools'
  ],
  openGraph: {
    type: 'website',
    description: "Access essential tools for engaging with the Coreum ecosystem including wallets, faucets, and block explorers. Start interacting with the Coreum blockchain now.",
    siteName: "Tools/Ecosystem | Coreum Docs",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};

const TOOLS_ITEMS: DocLinkItemProps[] = [
  {
    label: 'Wallets',
    href: '/docs/tools/wallets',
    external: false,
  },
  {
    label: 'Faucet',
    href: '/docs/tools/faucet',
    external: false,
  },
  {
    label: 'Block Explorers',
    href: '/docs/tools/blockchain-explorers',
    external: false,
  },
  // {
  //   label: 'Github',
  //   href: '',
  //   external: true,
  // },
];

const ToolsEcosystemMainPage = () => {
  const nextNavigationItem = TOOLS_ITEMS[0];

  return (
    <div className="flex flex-col w-full gap-6 max-w-[900px] px-2 pt-6 pb-[5.5rem]">
      <div className="text-[2rem] font-medium text-[#EEE] tracking-[-0.64px]">
        Tools/Ecosystem
      </div>
      <div className="text-base font-medium tracking-[-0.32px] mt-4">
        Get started:
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3">
        {TOOLS_ITEMS.map((item: DocLinkItemProps, index: number) => (
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

export default ToolsEcosystemMainPage;
