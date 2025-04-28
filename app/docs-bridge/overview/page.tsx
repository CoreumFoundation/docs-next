import { DocLinkItem, DocLinkItemProps } from "@/components/DocLinkItem";
import { NavigatonItem, NavigatonItemMode } from "@/components/NavigationItem";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "XRPL-Coreum Bridge: Enabling Blockchain Interoperability | Coreum Developers",
  description: "Discover the XRPL-Coreum Bridge, a groundbreaking solution for seamless asset transfers between XRPL and IBC-compatible appchains. Learn about the bridge's decentralized, non-custodial mechanism and its architecture involving smart contracts and multi-signing accounts.",
  keywords: [
    'XRPL-Coreum Bridge',
    'Blockchain Interoperability',
    'Asset Transfer Blockchain',
    'Decentralized Blockchain Mechanism',
    'Multi-signing Blockchain Account',
    'Blockchain Smart Contracts',
    'Coreum Blockchain Solutions',
    'XRPL Token Bridging',
    'Blockchain Relayers',
    'Smart Contract Minting Tokens'
  ],
  openGraph: {
    type: 'website',
    description: "Explore the XRPL-Coreum Bridge that facilitates asset transfers between the XRPL and Coreum blockchains, enhancing blockchain interoperability with a robust, decentralized architecture.",
    siteName: "XRPL-Coreum Bridge: Enabling Blockchain Interoperability | Coreum Developers",
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};

const XRPL_BRIDGE_ITEMS: DocLinkItemProps[] = [
  {
    label: 'Introduction',
    href: '/docs-bridge/introduction',
    external: false,
  },
  {
    label: 'Asset Flow',
    href: '/docs-bridge/asset-flow',
    external: false,
  },
  {
    label: 'Fees',
    href: '/docs-bridge/fees',
    external: false,
  },
  {
    label: 'Register New Token',
    href: '/docs-bridge/register-new-token',
    external: false,
  },
  {
    label: 'Install Relayer',
    href: '/docs-bridge/install-relayer',
    external: false,
  },
  {
    label: 'Run Relayer',
    href: '/docs-bridge/run-relayer',
    external: false,
  },
  {
    label: 'Update Relayer',
    href: '/docs-bridge/update-relayer',
    external: false,
  },
];

const XRPLBridgeMainPage = () => {
  const nextNavigationItem = XRPL_BRIDGE_ITEMS[0];

  return (
    <div className="flex flex-col w-full gap-6 px-2 pt-6 pb-[5.5rem]">
      <div className="text-[2rem] font-medium text-main-title-light dark:text-main-title-dark tracking-[-0.64px]">
        XRPL Bridge
      </div>
      <div className="text-base font-medium tracking-[-0.32px] mt-4">
        Get started:
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3">
        {XRPL_BRIDGE_ITEMS.map((item: DocLinkItemProps, index: number) => (
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

export default XRPLBridgeMainPage;
