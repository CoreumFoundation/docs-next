export const ROUTE_V4_PREFIX = '/docs/v4';
export const ROUTE_NEXT_PREFIX = '/docs/next';

export const SIDEBAR_ITEMS = [
  {
    name: 'Overview',
    href: '/overview',
    children: [
      {
        name: 'General Overview',
        href: '/overview/general',
      },
      {
        name: 'Introduction',
        href: '/overview/introduction',
      },
      {
        name: 'Smart Contracts',
        href: '/overview/smart-contracts'
      },
      {
        name: 'Smart Tokens',
        href: '/overview/smart-tokens'
      },
      {
        name: 'Modules',
        href: '/overview/modules',
      },
      {
        name: 'Tutorials',
        href: '/overview/tutorials',
      },
      {
        name: 'Become Validator',
        href: '/overview/validator',
      },
      {
        name: 'Tools/Ecosystem',
        href: '/overview/tools',
      },
      {
        name: 'XRPL Bridge',
        href: '/overview/xrpl-bridge',
      },
      {
        name: 'Help',
        href: '/overview/help',
      },
      {
        name: 'Technical White Paper',
        href: 'https://www.coreum.com/assets/coreum_technical_paper.pdf',
        external: true,
      }
    ],
  },
  {
    name: 'Tutorials',
    href: '/tutorials',
    children: [
      {
        name: 'Get Started',
        href: '/tutorials/get-started',
        children: [
          {
            name: 'Setup CLI Network Variables',
            href: '/tutorials/get-started/setup-cli',
            children: [],
          },
          {
            name: 'Install cored',
            href: '/tutorials/get-started/install-cored',
            children: [],
          },
          {
            name: 'Set Up cored Using Docker',
            href: '/tutorials/get-started/setup-cored-using-docker',
            children: [],
          },
          {
            name: 'Install prebuild macOS',
            href: '/tutorials/get-started/install-prebuild-macos',
            children: [],
          },
          {
            name: 'Install prebuild windows',
            href: '/tutorials/get-started/install-prebuild-windows',
            children: [],
          },
          {
            name: 'CLI',
            href: '/tutorials/get-started/cli',
            children: [
              {
                name: 'Transfer Funds with CLI',
                href: '/tutorials/get-started/cli/transfer-funds-cli',
              },
              {
                name: 'Send Multisig Transaction',
                href: '/tutorials/get-started/cli/send-multisig-transaction',
              },
              {
                name: 'Smart FT with Access Control List (ACL)',
                href: '/tutorials/get-started/cli/smart-ft-with-acl',
              },
              {
                name: 'Ledger Nano with CLI',
                href: '/tutorials/get-started/cli/ledger-nano',
              }
            ],
          },
          {
            name: 'Golang',
            href: '/tutorials/get-started/golang',
            children: [
              {
                name: 'Transfer Funds with Golang',
                href: '/tutorials/get-started/golang/transfer-funds',
              },
              {
                name: 'Create Fungible Token with Golang',
                href: '/tutorials/get-started/golang/create-ft',
              },
              {
                name: 'Create Non-Fungible Token with Golang',
                href: '/tutorials/get-started/golang/create-nft',
              }
            ],
          },
          {
            name: 'Typescript',
            href: '/tutorials/get-started/typescript',
            children: [
              {
                name: 'Transfer Funds with Typescript',
                href: '/tutorials/get-started/typescript/transfer-funds',
              },
              {
                name: 'Using CosmJS',
                href: '/tutorials/get-started/typescript/cosmjs',
              },
              {
                name: 'Using coreum-js',
                href: '/tutorials/get-started/typescript/coreum-js',
              },
            ],
          },
          {
            name: 'WASM',
            href: '/tutorials/get-started/wasm',
            children: [
              {
                name: 'Deploy First WASM Contract',
                href: '/tutorials/get-started/wasm/deploy-wasm-contract',
              },
              {
                name: 'Smart FT with WASM',
                href: '/tutorials/get-started/wasm/smart-ft-with-wasm',
              },
              {
                name: 'Testing Multiple Contracts',
                href: '/tutorials/get-started/wasm/testing-multiple-contracts',
              },
              {
                name: 'Using CosmJS with WASM Contracts',
                href: '/tutorials/get-started/wasm/using-cosmjs-with-wasm-contracts',
              },
            ],
          },
        ],
      },
      {
        name: 'Use Tokens',
        href: '/tutorials/use-tokens',
        children: [
          {
            name: 'Create and Manage FT with CLI',
            href: '/tutorials/use-tokens/create-and-manage-ft-with-cli',
          },
          {
            name: 'Create and Manage FT with Golang',
            href: '/tutorials/use-tokens/create-and-manage-ft-with-golang',
          },
          {
            name: 'Create and Manage NFT with CLI',
            href: '/tutorials/use-tokens/create-and-manage-nft-with-cli',
          },
          {
            name: 'Create and Manage NFT with Golang',
            href: '/tutorials/use-tokens/create-and-manage-nft-with-golang',
          },
          {
            name: 'Smart FT with WASM',
            href: '/tutorials/use-tokens/smart-ft-with-wasm',
          },
        ],
      },
      {
        name: 'Integrate Coreum',
        href: '/tutorials/integrate-coreum',
        children: [
          {
            name: 'CEX Integration',
            href: '/tutorials/integrate-coreum/cex-integrations',
          },
          {
            name: 'Wallet Integration',
            href: '/tutorials/integrate-coreum/wallet-integration',
          },
          {
            name: 'Explorer API - Beta',
            href: '/tutorials/integrate-coreum/explorer-api',
          },
        ],
      },
      {
        name: 'Build Apps',
        href: '/tutorials/build-apps',
        children: [
          {
            name: 'Web App',
            href: '/tutorials/build-apps/web-app',
          },
          {
            name: 'AMM (Automated Market Maker)',
            href: '/tutorials/build-apps/amm',
          }
        ],
      },
      {
        name: 'IBC',
        href: '/tutorials/ibc',
        children: [
          {
            name: 'IBC Channels',
            href: '/tutorials/ibc/ibc-channels',
          },
          {
            name: 'IBC Transfer to Osmosis Using Keplr Wallet',
            href: '/tutorials/ibc/ibc-transfer-to-osmosis',
          },
          {
            name: 'IBC Smart Contract Call Tutorial',
            href: '/tutorials/ibc/ibc-smart-contract-call',
          },
          {
            name: 'IBC WASM Transfer Tutorial',
            href: '/tutorials/ibc/ibc-wasm-transfer',
          },
          {
            name: 'IBC Transfer Using CLI',
            href: '/tutorials/ibc/ibc-transfer-using-cli',
          },
        ],
      },
      {
        name: 'IS020022',
        href: '/tutorials/ISO20022',
        children: [
          {
            name: 'Intro to ISO20022',
            href: '/tutorials/ISO20022/intro-to-ISO20022',
          },
          {
            name: 'Financial Simulator',
            href: '/tutorials/ISO20022/financial-simulator',
          },
          {
            name: 'ISO20022 Client',
            href: '/tutorials/ISO20022/ISO20022-Client',
          }
        ],
      },
      {
        name: 'Gas Price',
        href: '/tutorials/gas-price',
      },
      {
        name: 'Coreum WASM SDK',
        href: '/tutorials/coreum-wasm-sdk',
      },
      {
        name: 'Coreum TS Protobuf',
        href: '/tutorials/coreum-ts-protobuf',
      },
      {
        name: 'Crust for Development',
        href: '/tutorials/crust-for-development',
      },
      {
        name: 'Special Addresses',
        href: '/tutorials/special-addresses',
      },
      {
        name: "Coreum XRPL Bridge",
        href: '/tutorials/xrpl-bridge-integration',
      },
    ],
  },
  {
    name: 'Modules',
    href: '/modules',
    children: [
      {
        name: 'Coreum Fungible Token',
        href: '/modules/coreum-fungible-token',
      },
      {
        name: 'Coreum Non-Fungible Token',
        href: '/modules/coreum-non-fungible-token',
      },
      {
        name: 'Coreum Deterministic Gas',
        href: '/modules/coreum-deterministic-gas',
      },
      {
        name: 'Coreum Fee Model',
        href: '/modules/coreum-fee-model',
      },
      {
        name: 'Coreum DEX',
        href: '/modules/coreum-dex',
      },
      {
        name: 'Cosmos Non-Fungible Token',
        href: '/modules/cosmos-non-fungible-token',
      }
    ],
  },
  {
    name: 'XRPL Bridge',
    href: '/xrpl-bridge',
    children: [
      {
        name: 'Install Relayer',
        href: '/xrpl-bridge/install-relayer',
      },
      {
        name: 'Run Relayer',
        href: '/xrpl-bridge/run-relayer',
      },
      {
        name: 'Asset flow',
        href: '/xrpl-bridge/asset-flow',
      },
      {
        name: 'Register New Token',
        href: '/xrpl-bridge/register-new-token',
      },
      {
        name: 'Fees',
        href: '/xrpl-bridge/fees',
      },
      {
        name: 'Update Relayer',
        href: '/xrpl-bridge/update-relayer',
      }
    ],
  },
  {
    name: 'DEX API',
    href: '/core_dex',
    children: [
      {
        name: 'Overview',
        href: '/core_dex/overview',
      },
      {
        name: 'API Server',
        href: '/core_dex/api-server',
        children: [
          {
            name: 'Overview',
            href: '/core_dex/api-server/overview',
          },
          {
            name: 'Update service',
            href: '/core_dex/api-server/update-service',
          },
        ],
      },
      {
        name: 'Data Aggregator',
        href: '/core_dex/data-aggregator',
      },
      {
        name: 'Store',
        href: '/core_dex/store',
      },
      {
        name: 'Frontend',
        href: '/core_dex/frontend',
      },
    ],
  },
  {
    name: 'Become Validator',
    href: '/become-validator',
    children: [
      {
        name: 'Run Full Node',
        href: '/become-validator/run-full-node',
      },
      {
        name: 'Validator',
        href: '/become-validator/validator',
        children: [
          {
            name: 'Validator',
            href: '/become-validator/validator/run-validator',
          },
          {
            name: 'Sentry',
            href: '/become-validator/validator/run-sentry',
          },
          {
            name: 'How to Unjail My Validator',
            href: '/become-validator/validator/unjail-validator',
          },
        ],
      },
      {
        name: 'Essentials',
        href: '/become-validator/essentials',
        children: [
          {
            name: 'System Requirements',
            href: '/become-validator/essentials/system-requirements',
          },
          {
            name: 'How much fund do I need to create a validator?',
            href: '/become-validator/essentials/how-much-fund-to-create-validator',
          },
          {
            name: 'Node prerequisites',
            href: '/become-validator/essentials/node-prerequisites',
          },
          {
            name: 'Install cored',
            href: '/become-validator/essentials/install-cored',
          },
          {
            name: 'Setup network variables',
            href: '/become-validator/essentials/network-variables',
          },
          {
            name: 'Set connection config',
            href: '/become-validator/essentials/connection-config',
          },
        ],
      },
      {
        name: 'Troubleshooting',
        href: '/become-validator/troubleshooting',
      },
      {
        name: 'Upgrades',
        href: '/become-validator/upgrades',
        children: [
          {
            name: 'How to Upgrade My Node',
            href: '/become-validator/upgrades/main-info',
          },
          {
            name: 'Upgrades History',
            href: '/become-validator/upgrades/history',
          },
        ],
      }
    ],
  },
  {
    name: 'API',
    href: '/api',
    children: [
      {
        name: 'Protobuf',
        href: '/api/protobuf',
      },
      {
        name: 'Protobuf v5',
        href: '/api/protobuf-v5',
      },
      {
        name: 'Rust Protobuf',
        href: '/api/rust-protobuf',
      }
    ]
  },
  {
    name: 'Tools/Ecosystem',
    href: '/tools',
    children: [
      {
        name: 'Wallets',
        href: '/tools/wallets',
      },
      {
        name: 'Faucet',
        href: '/tools/faucet',
      },
      {
        name: 'Blockchain Explorers',
        href: '/tools/blockchain-explorers',
      },
    ],
  },
  {
    name: 'Help',
    href: '/help',
    children: [
      {
        name: 'FAQ',
        href: '/help/faq',
      },
      {
        name: 'Useful links',
        href: '/help/useful-links',
      },
    ],
  },
  {
    name: 'Bug Bounty',
    href: 'https://skynet.certik.com/projects/coreum#bug-bounty',
    external: true,
  }
];
