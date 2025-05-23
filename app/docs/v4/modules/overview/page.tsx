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
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};

const MODULES_ITEMS: DocLinkItemProps[] = [
  {
    label: 'Fungible Tokens',
    href: '/docs/v4/modules/coreum-fungible-token',
    external: false,
  },
  {
    label: 'Non-Fungible Tokens',
    href: '/docs/v4/modules/coreum-non-fungible-token',
    external: false,
  },
  {
    label: 'Deterministic Gas',
    href: '/docs/v4/modules/coreum-deterministic-gas',
    external: false,
  },
  {
    label: 'Fee Model',
    href: '/docs/v4/modules/coreum-fee-model',
    external: false,
  },
  {
    label: 'DEX',
    href: '/docs/v4/modules/coreum-dex',
    external: false,
  },
  {
    label: 'Cosmos Non-Fungible Tokens',
    href: '/docs/v4/modules/cosmos-non-fungible-token',
    external: false,
  },
];

const ModulesMainPage = () => {
  const nextNavigationItem = MODULES_ITEMS[0];
  const prevNavigationItem = {
    label: 'Smart Tokens',
    href: '/docs/v4/overview/smart-tokens',
  };

  return (
    <div className="flex flex-col w-full gap-6 px-2 pt-6 pb-[5.5rem]">
      <div className="text-[2rem] font-medium text-main-title-light dark:text-main-title-dark tracking-[-0.64px]">
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
        <NavigatonItem href={prevNavigationItem.href} label={prevNavigationItem.label} mode={NavigatonItemMode.Previous} />
        <NavigatonItem href={nextNavigationItem.href} label={nextNavigationItem.label} mode={NavigatonItemMode.Next} />
      </div>
    </div>
  );
};

export default ModulesMainPage;
