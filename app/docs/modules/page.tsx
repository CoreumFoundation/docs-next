import { DocLinkItem, DocLinkItemProps } from "@/components/DocLinkItem";
import { NavigatonItem, NavigatonItemMode } from "@/components/NavigationItem";

const MODULES_ITEMS: DocLinkItemProps[] = [
  {
    label: 'Fungible Tokens',
    href: '/docs/modules/coreum-fungible-token',
    external: false,
  },
  {
    label: 'Non-Fungible Tokens',
    href: '/docs/modules/coreum-non-fungible-token',
    external: false,
  },
  {
    label: 'Deterministic Gas',
    href: '/docs/modules/coreum-deterministic-gas',
    external: false,
  },
  {
    label: 'Fee Model',
    href: '/docs/modules/coreum-fee-model',
    external: false,
  },
  {
    label: 'Cosmos Non-Fungible Tokens',
    href: '/docs/modules/cosmos-non-fungible-token',
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
