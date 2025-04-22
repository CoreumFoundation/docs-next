import { DocLinkItem, DocLinkItemProps } from "@/components/DocLinkItem";
import { NavigatonItem, NavigatonItemMode } from "@/components/NavigationItem";
import classNames from "classnames";
import React from "react";
import Image from 'next/image';
import { Metadata } from 'next';
import { TutorialOverviewIcon } from "@/components/TutorialOverviewIcon";

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
    lightLogo: '',
    label: 'Get Started:',
    items: [
      {
        label: 'Set up CLI Network Variables',
        href: '/docs/next/tutorials/get-started/setup-cli',
        external: false,
      },
      {
        label: 'Install cored',
        href: '/docs/next/tutorials/get-started/install-cored',
        external: false,
      },
      {
        label: 'Special Addresses',
        href: '/docs/next/tutorials/special-addresses',
        external: false,
      }
    ],
  },
  cli: {
    logo: '/images/tutorials/cli.svg',
    lightLogo: '/images/tutorials/lightCli.svg',
    label: 'CLI:',
    items: [
      {
        label: 'Transfer funds with CLI',
        href: '/docs/next/tutorials/get-started/cli/transfer-funds-with-cli',
        external: false,
      },
      {
        label: 'Send multisig Transaction',
        href: '/docs/next/tutorials/get-started/cli/send-multisig-transaction',
        external: false,
      },
      {
        label: 'Smart FT with Access Control List (ACL)',
        href: '/docs/next/tutorials/get-started/cli/smart-ft-with-acl',
        external: false,
      },
      {
        label: 'Ledger Nano with CLI: Support and Usage',
        href: '/docs/next/tutorials/get-started/cli/ledger-nano',
        external: false,
      },
    ],
  },
  golang: {
    logo: '/images/tutorials/golang.svg',
    lightLogo: '/images/tutorials/golang.svg',
    label: 'Golang:',
    items: [
      {
        label: 'Transfer funds with Golang',
        href: '/docs/next/tutorials/get-started/golang/transfer-funds',
        external: false,
      },
      {
        label: 'Create and manage my first FT with Golang',
        href: '/docs/next/tutorials/get-started/golang/create-ft',
        external: false,
      },
      {
        label: 'Create and manage my first NFT with Golang',
        href: '/docs/next/tutorials/get-started/golang/create-nft',
        external: false,
      },
    ],
  },
  ts_js: {
    logo: '/images/tutorials/ts-js.svg',
    lightLogo: '/images/tutorials/ts-js.svg',
    label: 'TS/JS:',
    items: [
      {
        label: 'Transfer funds with Typescript',
        href: '/docs/next/tutorials/get-started/typescript/transfer-funds',
        external: false,
      },
      {
        label: 'Using CosmJS',
        href: '/docs/next/tutorials/get-started/typescript/cosmjs',
        external: false,
      },
      {
        label: 'Using coreum-js SDK to interact with Coreum network',
        href: '/docs/next/tutorials/get-started/typescript/coreum-js',
        external: false,
      },
    ],
  },
  wasm: {
    logo: '/images/tutorials/wasm.svg',
    lightLogo: '/images/tutorials/wasm.svg',
    label: 'Smart Contracts:',
    items: [
      {
        label: 'Coreum WASM SDK',
        href: '/docs/next/tutorials/smart-contracts/coreum-wasm-sdk',
        external: false,
      },
      {
        label: 'Deploy first WASM contract',
        href: '/docs/next/tutorials/smart-contracts/deploy-wasm-contract',
        external: false,
      },
      {
        label: 'Testing multiple contracts',
        href: '/docs/next/tutorials/smart-contracts/testing-multiple-contracts',
        external: false,
      },
      {
        label: 'Using CosmJS with WASM contracts',
        href: '/docs/next/tutorials/smart-contracts/using-cosmjs-with-wasm-contracts',
        external: false,
      },
    ],
  },
  use_tokens: {
    logo: '',
    lightLogo: '',
    label: 'Smart Tokens:',
    items: [
      {
        label: 'Create and manage my first FT',
        href: '/docs/next/tutorials/smart-tokens/create-and-manage-ft',
        external: false,
      },
      {
        label: 'Create and manage my first NFT',
        href: '/docs/next/tutorials/smart-tokens/create-and-manage-nft',
        external: false,
      },
      {
        label: 'Smart FT with WASM',
        href: '/docs/next/tutorials/smart-tokens/use-cases/airdrop-token',
        external: false,
      },
      {
        label: 'Asset FT Extension',
        href: '/docs/next/tutorials/smart-tokens/asset-ft-extension',
        external: false,
      },
    ],
  },
  integrate_coreum: {
    logo: '',
    lightLogo: '',
    label: 'Integrate Coreum:',
    items: [
      {
        label: 'CEX integration',
        href: '/docs/next/tutorials/integrate-coreum/cex-integrations',
        external: false,
      },
      {
        label: 'Wallet integration',
        href: '/docs/next/tutorials/integrate-coreum/wallet-integration',
        external: false,
      },
      {
        label: 'Explorer API - Beta',
        href: '/docs/next/tutorials/integrate-coreum/explorer-api',
        external: false,
      },
      {
        label: 'XRPL Bridge Integration',
        href: '/docs/next/tutorials/integrate-coreum/xrpl-bridge-integration',
        external: false,
      },
    ],
  },
  build_apps: {
    logo: '',
    lightLogo: '',
    label: 'Build Apps:',
    items: [
      {
        label: 'Crust for Development',
        href: '/docs/next/tutorials/build-apps/development-environment',
        external: false,
      },
      {
        label: 'Web app',
        href: '/docs/next/tutorials/build-apps/web-app',
        external: false,
      },
      {
        label: 'AMM',
        href: '/docs/next/tutorials/build-apps/amm',
        external: false,
      },
    ],
  },
  ibc: {
    logo: '',
    lightLogo: '',
    label: 'IBC:',
    items: [
      {
        label: 'IBC Channels',
        href: '/docs/next/tutorials/ibc/ibc-channels',
        external: false,
      },
      {
        label: 'IBC Transfer to Osmosis Using Keplr Wallet',
        href: '/docs/next/tutorials/ibc/ibc-transfer-to-osmosis',
        external: false,
      },
      {
        label: 'IBC Smart Contract Call Tutorial',
        href: '/docs/next/tutorials/ibc/ibc-smart-contract-call',
        external: false,
      },
      {
        label: 'IBC WASM Transfer Tutorial',
        href: '/docs/next/tutorials/ibc/ibc-wasm-transfer',
        external: false,
      },
      {
        label: 'IBC Transfer Using CLI',
        href: '/docs/next/tutorials/ibc/ibc-transfer-using-cli',
        external: false,
      },
    ],
  },
  iso: {
    logo: '',
    lightLogo: '',
    label: 'ISO20022',
    items: [
      {
        label: 'Introduction to ISO20022',
        href: '/docs/next/tutorials/ISO20022/intro-to-ISO20022',
        external: false,
      },
      {
        label: 'Financial simulator',
        href: '/docs/next/tutorials/ISO20022/financial-simulator',
        external: false,
      },
      {
        label: 'ISO20022 Client',
        href: '/docs/next/tutorials/ISO20022/ISO20022-Client',
        external: false,
      },
    ],
  }
};

const TutorialsMainPage = () => {
  const nextNavigationItem = {
    label: 'Gas Price',
    href: '/docs/next/tutorials/gas-price',
  };

  return (
    <div className="flex flex-col w-full gap-6 px-2 pt-6 pb-[5.5rem]">
      <div className="text-[2rem] font-medium text-main-title-light dark:text-main-title-dark tracking-[-0.64px]">
        Coreum Tutorials
      </div>
      {Object.values(TUTORIALS_ITEMS).map((tutorialItem, index) => {
        const labelCx = classNames('mt-4', {
          'text-2xl font-medium tracking-[-0.48px] text-main-title-light dark:text-main-title-dark': !tutorialItem.logo.length,
          'flex items-center gap-2 text-base font-normal tracking-[-0.16px] text-[#868991]': tutorialItem.logo.length,
        });

        return (
          <React.Fragment key={`tutorial-map-${index}`}>
            <div className={labelCx}>
              <TutorialOverviewIcon
                label={tutorialItem.label}
                logo={tutorialItem.logo}
                lightLogo={tutorialItem.lightLogo}
              />
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
