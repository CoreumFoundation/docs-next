export const ROUTE_V4_PREFIX = '/docs/v4';
export const ROUTE_NEXT_PREFIX = '/docs/next';

export const OVERVIEW_ITEMS = [
  {
    name: 'Overview',
    href: '/overview',
    children: [
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
        name: 'Technical White Paper',
        href: 'https://www.coreum.com/assets/coreum_technical_paper.pdf',
        external: true,
      }
    ],
  }
];

export const TUTORIAL_ITEMS = [
  {
    name: 'Tutorials',
    href: '/tutorials',
    children: [
      {
        name: 'Overview',
        href: '/tutorials/overview',
      },
      {
        name: 'Gas Price',
        href: '/tutorials/gas-price',
      },
      {
        name: 'Special Addresses',
        href: '/tutorials/special-addresses',
      },
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
            name: 'CLI',
            href: '/tutorials/get-started/cli',
            children: [
              {
                name: 'Transfer Funds with CLI',
                href: '/tutorials/get-started/cli/transfer-funds-with-cli',
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
        ],
      },
      {
        name: 'Smart Contracts',
        href: '/tutorials/get-started/wasm',
        children: [
          {
            name: 'Deploy First WASM Contract',
            href: '/tutorials/get-started/smart-contracts/deploy-wasm-contract',
          },
          {
            name: 'Smart FT with WASM',
            href: '/tutorials/get-started/smart-contracts/smart-ft-with-wasm',
          },
          {
            name: 'Testing Multiple Contracts',
            href: '/tutorials/get-started/smart-contracts/testing-multiple-contracts',
          },
          {
            name: 'Using CosmJS with WASM Contracts',
            href: '/tutorials/get-started/smart-contracts/using-cosmjs-with-wasm-contracts',
          },
          {
            name: 'Coreum WASM SDK',
            href: '/tutorials/get-started/smart-contracts/coreum-wasm-sdk',
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
          {
            name: "XRPL Bridge Integration",
            href: '/tutorials/integrate-coreum/xrpl-bridge-integration',
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
            name: 'Automated Market Maker (AMM)',
            href: '/tutorials/build-apps/amm',
          },
          {
            name: 'Crust for Development',
            href: '/tutorials/crust-for-development',
          },
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
            href: '/tutorials/ISO20022/ISO20022-client',
          }
        ],
      },
      {
        name: 'Smart Tokens',
        href: '/tutorials/smart-tokens',
        children: [
          {
            name: 'Create and Manage FT',
            href: '/tutorials/smart-tokens/create-and-manage-ft',
          },
          {
            name: 'Create and Manage NFT',
            href: '/tutorials/smart-tokens/create-and-manage-nft',
          },
          {
            name: 'Asset FT Extension',
            href: '/tutorials/smart-tokens/asset-ft-extension'
          },
          {
            name: 'Use cases',
            href: '/tutorials/smart-tokens/use-cases',
            children: [
              {
                name: 'Airdrop Token',
                href: '/tutorials/smart-tokens/use-cases/airdrop-token',
              },
            ],
          }
        ],
      },
    ],
  },
];

export const MODULES_ITEMS = [
  {
    name: 'Modules',
    href: '/modules',
    children: [
      {
        name: 'Overview',
        href: '/modules/overview',
      },
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
];

export const XRPL_BRIDGE_ITEMS = [
  {
    name: 'XRPL Bridge',
    href: '/xrpl-bridge',
    children: [
      {
        name: 'Overview',
        href: '/xrpl-bridge/overview',
      },
      {
        name: 'Introduction',
        href: '/xrpl-bridge/introduction',
      },
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
];

export const DEX_API = [
  {
    name: 'DEX API',
    href: '/core-dex',
    children: [
      {
        name: 'Overview',
        href: '/core-dex/overview',
      },
      {
        name: 'Introduction',
        href: '/core-dex/introduction',
      },
      {
        name: 'API Server',
        href: '/core-dex/api-server',
        children: [
          {
            name: 'Overview',
            href: '/core-dex/api-server/overview',
          },
          {
            name: 'Update service',
            href: '/core-dex/api-server/update-service',
          },
        ],
      },
      {
        name: 'Data Aggregator',
        href: '/core-dex/data-aggregator',
      },
      {
        name: 'Store',
        href: '/core-dex/store',
      },
      {
        name: 'Frontend',
        href: '/core-dex/frontend',
      },
    ],
  },
];

export const VALIDATORS_ITEMS = [
  {
    name: 'Nodes And Validators',
    href: '/nodes-and-validators',
    children: [
      {
        name: 'Overview',
        href: '/nodes-and-validators/overview'
      },
      {
        name: 'Run Full Node',
        href: '/nodes-and-validators/run-full-node',
      },
      {
        name: 'Run Validator',
        href: '/nodes-and-validators/run-validator',
      },
      {
        name: 'Run Sentry Node',
        href: '/nodes-and-validators/run-sentry',
      },
      {
        name: 'Essentials',
        href: '/nodes-and-validators/essentials',
        children: [
          {
            name: 'System Requirements',
            href: '/nodes-and-validators/essentials/system-requirements',
          },
          {
            name: 'How much fund do I need to create a validator?',
            href: '/nodes-and-validators/essentials/how-much-fund-to-create-validator',
          },
          {
            name: 'Node prerequisites',
            href: '/nodes-and-validators/essentials/node-prerequisites',
          },
          {
            name: 'Install cored',
            href: '/nodes-and-validators/essentials/install-cored',
          },
          {
            name: 'Setup network variables',
            href: '/nodes-and-validators/essentials/network-variables',
          },
          {
            name: 'Set connection config',
            href: '/nodes-and-validators/essentials/connection-config',
          },
        ],
      },
      {
        name: 'Upgrades',
        href: '/nodes-and-validators/upgrades',
        children: [
          {
            name: 'How to Upgrade My Node',
            href: '/nodes-and-validators/upgrades/upgrades-history',
          },
          {
            name: 'Upgrades History',
            href: '/nodes-and-validators/upgrades/upgrades-instructions',
          },
        ],
      },
      {
        name: 'Troubleshooting',
        href: '/nodes-and-validators/troubleshooting',
      },
    ],
  },
];

export const API_ITEMS = [
  {
    name: 'API',
    href: '/api',
    children: [
      {
        name: 'Overview',
        href: '/api/overview',
      },
      {
        name: 'Protobuf',
        href: '/api/protobuf',
      },
      {
        name: 'Rust Protobuf',
        href: '/api/rust-protobuf',
      },
      {
        name: 'Coreum TS Protobuf',
        href: '/api/coreum-ts-protobuf',
      },
    ]
  },
];

export const TOOLS_ITEMS = [
  {
    name: 'Tools And Ecosystem',
    href: '/tools-and-ecosystem',
    children: [
      {
        name: 'Overview',
        href: '/tools-and-ecosystem/overview',
      },
      {
        name: 'Wallets',
        href: '/tools-and-ecosystem/wallets',
      },
      {
        name: 'Faucet',
        href: '/tools-and-ecosystem/faucet',
      },
      {
        name: 'Blockchain Explorers',
        href: '/tools-and-ecosystem/blockchain-explorers',
      },
    ],
  },
];

export const HELP_ITEMS = [
  {
    name: 'Help',
    href: '/help',
    children: [
      {
        name: 'Overview',
        href: '/help/overview',
      },
      {
        name: 'FAQ',
        href: '/help/faq',
      },
      {
        name: 'How to Unjail My Validator',
        href: '/help/how-to-unjail-my-validator',
      },
      {
        name: 'Support',
        href: '/help/support'
      }
    ],
  },
];

export const BUG_BOUNTY_ITEMS = [
  {
    name: 'Bug Bounty',
    href: 'https://skynet.certik.com/projects/coreum#bug-bounty',
    external: true,
  }
];
