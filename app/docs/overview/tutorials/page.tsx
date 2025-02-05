import { DocLinkItem, DocLinkItemProps } from "@/components/DocLinkItem";
import { NavigatonItem, NavigatonItemMode } from "@/components/NavigationItem";
import classNames from "classnames";
import React from "react";
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coreum Tutorials | Coreum Docs",
  description: "Browse a comprehensive range of Coreum Tutorials to get started with CLI and Golang for blockchain development. Learn to set up network variables, transfer funds, work with smart contracts, and more.",
  keywords: [
    'Coreum Tutorials',
    'CLI for Blockchain',
    'Golang Blockchain Development',
    'Coreum CLI Setup',
    'Transfer Funds Coreum',
    'Multisig Transactions Coreum',
    'Blockchain Development Guides',
    'Smart Contract Tutorials',
    'Coreum Golang Integration',
    'Decentralized Applications Coreum'
  ],
  openGraph: {
    type: 'website',
    description: "Browse a comprehensive range of Coreum Tutorials to get started with CLI and Golang for blockchain development. Learn to set up network variables, transfer funds, work with smart contracts, and more.",
    siteName: "Coreum Tutorials | Coreum Docs",
    images: [{
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};

const TUTORIALS_ITEMS = {
  get_started: {
    logo: '',
    label: 'Get Started:',
    items: [
      {
        label: 'Set up CLI Network Variables',
        href: '/docs/tutorials/get-started/setup-cli',
        external: false,
      },
      {
        label: 'Install cored',
        href: '/docs/tutorials/get-started/install-cored',
        external: false,
      },
    ],
  },
  cli: {
    logo: '/images/tutorials/cli.svg',
    label: 'CLI:',
    items: [
      {
        label: 'Transfer funds with CLI',
        href: '/docs/tutorials/get-started/cli/transfer-funds-cli',
        external: false,
      },
      {
        label: 'Send multisig Transaction',
        href: '/docs/tutorials/get-started/cli/send-multisig-transaction',
        external: false,
      },
      {
        label: 'Smart FT with Access Control List (ACL)',
        href: '/docs/tutorials/get-started/cli/smart-ft-with-acl',
        external: false,
      },
      {
        label: 'Ledger Nano with CLI: Support and Usage',
        href: '/docs/tutorials/get-started/cli/ledger-nano',
        external: false,
      },
    ],
  },
  golang: {
    logo: '/images/tutorials/golang.svg',
    label: 'Golang:',
    items: [
      {
        label: 'Transfer funds with Golang',
        href: '/docs/tutorials/get-started/golang/transfer-funds',
        external: false,
      },
      {
        label: 'Create and manage my first FT with Golang',
        href: '/docs/tutorials/get-started/golang/create-ft',
        external: false,
      },
      {
        label: 'Create and manage my first NFT with Golang',
        href: '/docs/tutorials/get-started/golang/create-nft',
        external: false,
      },
    ],
  },
  ts_js: {
    logo: '/images/tutorials/ts-js.svg',
    label: 'TS/JS:',
    items: [
      {
        label: 'Transfer funds with Typescript',
        href: '/docs/tutorials/get-started/typescript/transfer-funds',
        external: false,
      },
      {
        label: 'Using CosmJS',
        href: '/docs/tutorials/get-started/typescript/cosmjs',
        external: false,
      },
      {
        label: 'Using coreum-js SDK to interact with Coreum network',
        href: '/docs/tutorials/get-started/typescript/coreum-js',
        external: false,
      },
    ],
  },
  wasm: {
    logo: '/images/tutorials/wasm.svg',
    label: 'WASM:',
    items: [
      {
        label: 'Deploy first WASM contract',
        href: '/docs/tutorials/get-started/wasm/deploy-wasm-contract',
        external: false,
      },
      {
        label: 'Smart FT with WASM',
        href: '/docs/tutorials/get-started/wasm/smart-ft-with-wasm',
        external: false,
      },
      {
        label: 'Testing multiple contracts',
        href: '/docs/tutorials/get-started/wasm/testing-multiple-contracts',
        external: false,
      },
      {
        label: 'Using CosmJS with WASM contracts',
        href: '/docs/tutorials/get-started/wasm/using-cosmjs-with-wasm-contracts',
        external: false,
      },
    ],
  },
  use_tokens: {
    logo: '',
    label: 'Use Tokens:',
    items: [
      {
        label: 'Create and manage my first FT with CLI',
        href: '/docs/tutorials/use-tokens/create-and-manage-ft-with-cli',
        external: false,
      },
      {
        label: 'Create and manage my first FT with Golang',
        href: '/docs/tutorials/use-tokens/create-and-manage-ft-with-golang',
        external: false,
      },
      {
        label: 'Create and manage my first NFT with CLI',
        href: '/docs/tutorials/use-tokens/create-and-manage-nft-with-cli',
        external: false,
      },
      {
        label: 'Create and manage my first NFT with Golang',
        href: '/docs/tutorials/use-tokens/create-and-manage-nft-with-golang',
        external: false,
      },
      {
        label: 'Smart FT with WASM',
        href: '/docs/tutorials/use-tokens/smart-ft-with-wasm',
        external: false,
      },
    ],
  },
  integrate_coreum: {
    logo: '',
    label: 'Integrate Coreum:',
    items: [
      {
        label: 'CEX integration',
        href: '/docs/tutorials/integrate-coreum/cex-integrations',
        external: false,
      },
      {
        label: 'Wallet integration',
        href: '/docs/tutorials/integrate-coreum/wallet-integration',
        external: false,
      },
      {
        label: 'Explorer API - Beta',
        href: '/docs/tutorials/integrate-coreum/explorer-api',
        external: false,
      },
    ],
  },
  build_apps: {
    logo: '',
    label: 'Build Apps:',
    items: [
      {
        label: 'Web app',
        href: '/docs/tutorials/build-apps/web-app',
        external: false,
      },
      {
        label: 'AMM',
        href: '/docs/tutorials/build-apps/amm',
        external: false,
      },
    ],
  },
  ibc: {
    logo: '',
    label: 'IBC:',
    items: [
      {
        label: 'IBC Channels',
        href: '/docs/tutorials/ibc/ibc-channels',
        external: false,
      },
      {
        label: 'IBC Transfer to Osmosis Using Keplr Wallet',
        href: '/docs/tutorials/ibc/ibc-transfer-to-osmosis',
        external: false,
      },
      {
        label: 'IBC Smart Contract Call Tutorial',
        href: '/docs/tutorials/ibc/ibc-smart-contract-call',
        external: false,
      },
      {
        label: 'IBC WASM Transfer Tutorial',
        href: '/docs/tutorials/ibc/ibc-wasm-transfer',
        external: false,
      },
      {
        label: 'IBC Transfer Using CLI',
        href: '/docs/tutorials/ibc/ibc-transfer-using-cli',
        external: false,
      },
    ],
  },
};

const TutorialsMainPage = () => {
  const nextNavigationItem = TUTORIALS_ITEMS.get_started.items[0];

  return (
    <div className="flex flex-col w-full gap-6 max-w-[900px] px-2 pt-6 pb-[5.5rem]">
      <div className="text-[2rem] font-medium text-[#EEE] tracking-[-0.64px]">
        Coreum Tutorials
      </div>
      {Object.values(TUTORIALS_ITEMS).map((tutorialItem, index) => {
        const labelCx = classNames('mt-4', {
          'text-2xl font-medium tracking-[-0.48px] text-[#eee]': !tutorialItem.logo.length,
          'flex items-center gap-2 text-base font-normal tracking-[-0.16px] text-[#868991]': tutorialItem.logo.length,
        });

        return (
          <React.Fragment key={`tutorial-map-${index}`}>
            <div className={labelCx}>
              {tutorialItem.logo.length
                ? (
                  <Image
                    alt={tutorialItem.label}
                    src={tutorialItem.logo}
                    width={36}
                    height={36}
                  />
                )
                : ''
              }
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
          </React.Fragment>
        );
      })}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 py-10">
        <div />
        <NavigatonItem href={nextNavigationItem.href} label={nextNavigationItem.label} mode={NavigatonItemMode.Next} />
      </div>
    </div>
  );
};

export default TutorialsMainPage;
