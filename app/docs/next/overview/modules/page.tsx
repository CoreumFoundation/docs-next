import { DocLinkItem, DocLinkItemProps } from "@/components/DocLinkItem";
import { NavigatonItem, NavigatonItemMode } from "@/components/NavigationItem";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coreum Modules | Coreum Docs",
  description: "Dive into the Coreum Modules, offering a variety of functionalities including Fungible Tokens, Non-Fungible Tokens, Deterministic Gas, and more. Understand how these modules form the building blocks of the Coreum ecosystem.",
  keywords: [
    'Coreum Modules',
    'Blockchain Modules',
    'Fungible Tokens Module',
    'Non-Fungible Tokens Module',
    'Deterministic Gas',
    'Blockchain Ecosystem',
    'Coreum Token Economy',
    'Smart Contracts',
    'Coreum Platform Features',
    'Decentralized Application Modules'
  ],
  openGraph: {
    type: 'website',
    description: "Dive into the Coreum Modules, offering a variety of functionalities including Fungible Tokens, Non-Fungible Tokens, Deterministic Gas, and more. Understand how these modules form the building blocks of the Coreum ecosystem.",
    siteName: "Coreum Modules | Coreum Docs",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};

const MODULES_ITEMS: DocLinkItemProps[] = [
  {
    label: 'Fungible Tokens',
    href: '/docs/next/modules/coreum-fungible-token',
    external: false,
  },
  {
    label: 'Non-Fungible Tokens',
    href: '/docs/next/modules/coreum-non-fungible-token',
    external: false,
  },
  {
    label: 'Deterministic Gas',
    href: '/docs/next/modules/coreum-deterministic-gas',
    external: false,
  },
  {
    label: 'Fee Model',
    href: '/docs/next/modules/coreum-fee-model',
    external: false,
  },
  {
    label: 'DEX',
    href: '/docs/next/modules/coreum-dex',
    external: false,
  },
  {
    label: 'Cosmos Non-Fungible Tokens',
    href: '/docs/next/modules/cosmos-non-fungible-token',
    external: false,
  },
];

const ModulesMainPage = () => {
  const nextNavigationItem = MODULES_ITEMS[0];

  return (
    <div className="flex flex-col w-full gap-6 max-w-[900px] px-2 pt-6 pb-[5.5rem]">
      <div className="text-[2rem] font-medium text-[#EEE] tracking-[-0.64px]">
        Coreum Modules
      </div>
      <div className="text-base font-medium tracking-[-0.32px] mt-4">
        Each instruction is comprehensive and has links to all dependencies:
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3">
        {MODULES_ITEMS.map((item: DocLinkItemProps, index: number) => (
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

export default ModulesMainPage;
