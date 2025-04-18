import { DocLinkItem, DocLinkItemProps } from "@/components/DocLinkItem";
import { NavigatonItem, NavigatonItemMode } from "@/components/NavigationItem";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "",
  description: "",
  keywords: [
  ],
  openGraph: {
    type: 'website',
    description: "",
    siteName: "",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};

const CORE_DEX_ITEMS: DocLinkItemProps[] = [
  {
    label: 'Introduction',
    href: '/docs/next/core-dex/introduction',
    external: false,
  },
  {
    label: 'Coreum DEX API server',
    href: '/docs/next/core-dex/api-server/overview',
    external: false,
  },
  {
    label: 'Coreum DEX update service',
    href: '/docs/next/core-dex/api-server/update-service',
    external: false,
  },
  {
    label: 'Data aggregator',
    href: '/docs/next/core-dex/data-aggregator',
    external: false,
  },
  {
    label: 'Store',
    href: '/docs/next/core-dex/store',
    external: false,
  },
  {
    label: 'Frontend',
    href: '/docs/next/core-dex/frontend',
    external: false,
  },
];

const CoreDEXMainPage = () => {
  const nextNavigationItem = CORE_DEX_ITEMS[0];

  return (
    <div className="flex flex-col w-full gap-6 max-w-[900px] px-2 pt-6 pb-[5.5rem]">
      <div className="text-[2rem] font-medium text-[#EEE] tracking-[-0.64px]">
        CoreDEX
      </div>
      <div className="text-base font-medium tracking-[-0.32px] mt-4">
        Get started:
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3">
        {CORE_DEX_ITEMS.map((item: DocLinkItemProps, index: number) => (
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

export default CoreDEXMainPage;
