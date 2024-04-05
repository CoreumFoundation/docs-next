export const SIDEBAR_ITEMS = [
  {
    name: 'Overview',
    href: '/docs/overview',
    children: [
      {
        name: 'Introduction',
        href: '/docs/overview/introduction',
      },
      {
        name: 'Smart Contracts',
        href: '/docs/overview/smart-contracts'
      },
      {
        name: 'Smart Tokens',
        href: '/docs/overview/smart-tokens'
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
    href: '/docs/tutorials',
    children: [
      {
        name: 'Get Started',
        href: '/docs/tutorials/get-started',
        children: [
          {
            name: 'Setup CLI Network Variables',
            href: '/docs/tutorials/get-started/setup-cli',
            children: [],
          },
          {
            name: 'Install cored',
            href: '/docs/tutorials/get-started/install-cored',
            children: [],
          },
          {
            name: 'CLI',
            href: '/docs/tutorials/get-started/cli',
            children: [
              {
                name: 'Transfer Funds with CLI',
                href: '/docs/tutorials/get-started/cli/transfer-funds-cli',
              },
              {
                name: 'Send Multisig Transaction',
                href: '/docs/tutorials/get-started/cli/send-multisig-transaction',
              },
              {
                name: 'Smart FT with Access Control List (ACL)',
                href: '/docs/tutorials/get-started/cli/smart-ft-with-acl',
              },
              {
                name: 'Ledger Nano with CLI',
                href: '/docs/tutorials/get-started/cli/ledger-nano',
              }
            ],
          },
          {
            name: 'Golang',
            href: '/docs/tutorials/get-started/golang',
            children: [
              {
                name: 'Transfer Funds with Golang',
                href: '/docs/tutorials/get-started/golang/transfer-funds',
              },
              {
                name: 'Create Fungible Token with Golang',
                href: '/docs/tutorials/get-started/golang/create-ft',
              },
              {
                name: 'Create Non-Fungible Token with Golang',
                href: '/docs/tutorials/get-started/golang/create-nft',
              }
            ],
          },
          {
            name: 'Typescript',
            href: '/docs/tutorials/get-started/typescript',
            children: [
              {
                name: 'Transfer Funds with Typescript',
                href: '/docs/tutorials/get-started/typescript/transfer-funds',
              },
              {
                name: 'Using CosmJS',
                href: '/docs/tutorials/get-started/typescript/cosmjs',
              },
              {
                name: 'Using coreum-js',
                href: '/docs/tutorials/get-started/typescript/coreum-js',
              },
            ],
          },
          {
            name: 'WASM',
            href: '/docs/tutorials/get-started/wasm',
            children: [
              {
                name: 'Deploy First WASM Contract',
                href: '/docs/tutorials/get-started/wasm/deploy-wasm-contract',
              },
              {
                name: 'Smart FT with WASM',
                href: '/docs/tutorials/get-started/wasm/smart-ft-with-wasm',
              },
              {
                name: 'Testing Multiple Contracts',
                href: '/docs/tutorials/get-started/wasm/testing-multiple-contracts',
              },
              {
                name: 'Using CosmJS with WASM Contracts',
                href: '/docs/tutorials/get-started/wasm/using-cosmjs-with-wasm-contracts',
              },
            ],
          },
        ],
      },
      {
        name: 'Use Tokens',
        href: '/docs/tutorials/use-tokens',
        children: [
          {
            name: 'Create and Manage FT with CLI',
            href: '/docs/tutorials/use-tokens/create-and-manage-ft-with-cli',
          },
          {
            name: 'Create and Manage FT with Golang',
            href: '/docs/tutorials/use-tokens/create-and-manage-ft-with-golang',
          },
          {
            name: 'Create and Manage NFT with CLI',
            href: '/docs/tutorials/use-tokens/create-and-manage-nft-with-cli',
          },
          {
            name: 'Create and Manage NFT with Golang',
            href: '/docs/tutorials/use-tokens/create-and-manage-nft-with-golang',
          },
          {
            name: 'Smart FT with WASM',
            href: '/docs/tutorials/use-tokens/smart-ft-with-wasm',
          },
        ],
      },
      {
        name: 'Integrate Coreum',
        href: '/docs/tutorials/integrate-coreum',
        children: [
          {
            name: 'CEX Integration',
            href: '/docs/tutorials/integrate-coreum/cex-integrations',
          },
          {
            name: 'Wallet Integration',
            href: '/docs/tutorials/integrate-coreum/wallet-integration',
          },
          {
            name: 'Explorer API - Beta',
            href: '/docs/tutorials/integrate-coreum/explorer-api',
          },
        ],
      },
      {
        name: 'Build Apps',
        href: '/docs/tutorials/build-apps',
        children: [
          {
            name: 'Web App',
            href: '/docs/tutorials/build-apps/web-app',
          },
          {
            name: 'AMM (Automated Market Maker)',
            href: '/docs/tutorials/build-apps/amm',
          }
        ],
      },
      {
        name: 'IBC',
        href: '/docs/tutorials/ibc',
        children: [
          {
            name: 'IBC Channels',
            href: '/docs/tutorials/ibc/ibc-channels',
          },
          {
            name: 'IBC Transfer to Osmosis Using Keplr Wallet',
            href: '/docs/tutorials/ibc/ibc-transfer-to-osmosis',
          },
          {
            name: 'IBC Smart Contract Call Tutorial',
            href: '/docs/tutorials/ibc/ibc-smart-contract-call',
          },
          {
            name: 'IBC WASM Transfer Tutorial',
            href: '/docs/tutorials/ibc/ibc-wasm-transfer',
          },
          {
            name: 'IBC Transfer Using CLI',
            href: '/docs/tutorials/ibc/ibc-transfer-using-cli',
          },
        ],
      },
      {
        name: 'Coreum WASM SDK',
        href: '/docs/tutorials/coreum-wasm-sdk',
      },
      {
        name: 'Coreum TS Protobuf',
        href: '/docs/tutorials/coreum-ts-protobuf',
      },
      {
        name: 'Crust for Development',
        href: '/docs/tutorials/crust-for-development',
      }
    ],
  },
  {
    name: 'Modules',
    href: '/docs/modules',
    children: [
      {
        name: 'Coreum Fungible Token',
        href: '/docs/modules/coreum-fungible-token',
      },
      {
        name: 'Coreum Non-Fungible Token',
        href: '/docs/modules/coreum-non-fungible-token',
      },
      {
        name: 'Coreum Deterministic Gas',
        href: '/docs/modules/coreum-deterministic-gas',
      },
      {
        name: 'Coreum Fee Model',
        href: '/docs/modules/coreum-fee-model',
      },
      {
        name: 'Cosmos Non-Fungible Token',
        href: '/docs/modules/cosmos-non-fungible-token',
      }
    ],
  },
  {
    name: 'XRPL Bridge',
    href: '/docs/xrpl-bridge',
    children: [
      {
        name: 'Install Relayer',
        href: '/docs/xrpl-bridge/install-relayer',
      },
      {
        name: 'Run Relayer',
        href: '/docs/xrpl-bridge/run-relayer',
      },
      {
        name: 'Asset flow',
        href: '/docs/xrpl-bridge/asset-flow',
      },
      {
        name: 'Register New Token',
        href: '/docs/xrpl-bridge/register-new-token',
      },
      {
        name: 'Fees',
        href: '/docs/xrpl-bridge/fees',
      },
      {
        name: 'Update Relayer',
        href: '/docs/xrpl-bridge/update-relayer',
      },
    ],
  },
  {
    name: 'Become Validator',
    href: '/docs/become-validator',
    children: [
      {
        name: 'Run Full Node',
        href: '/docs/become-validator/run-full-node',
      },
      {
        name: 'Validator',
        href: '/docs/become-validator/validator',
        children: [
          {
            name: 'Validator',
            href: '/docs/become-validator/validator/run-validator',
          },
          {
            name: 'Sentry',
            href: '/docs/become-validator/validator/run-sentry',
          },
          {
            name: 'How to Unjail My Validator',
            href: '/docs/become-validator/validator/unjail-validator',
          },
        ],
      },
      {
        name: 'Essentials',
        href: '/docs/become-validator/essentials',
        children: [
          {
            name: 'System Requirements',
            href: '/docs/become-validator/essentials/system-requirements',
          },
          {
            name: 'How much fund do I need to create a validator?',
            href: '/docs/become-validator/essentials/how-much-fund-to-create-validator',
          },
          {
            name: 'Node prerequisites',
            href: '/docs/become-validator/essentials/node-prerequisites',
          },
          {
            name: 'Install cored',
            href: '/docs/become-validator/essentials/install-cored',
          },
          {
            name: 'Setup network variables',
            href: '/docs/become-validator/essentials/network-variables',
          },
          {
            name: 'Set connection config',
            href: '/docs/become-validator/essentials/connection-config',
          },
        ],
      },
      {
        name: 'Troubleshooting',
        href: '/docs/become-validator/troubleshooting',
      },
      {
        name: 'Upgrades',
        href: '/docs/become-validator/upgrades',
        children: [
          {
            name: 'How to Upgrade My Node',
            href: '/docs/become-validator/upgrades/main-info',
          },
          {
            name: 'Upgrades History',
            href: '/docs/become-validator/upgrades/history',
          },
        ],
      }
    ],
  },
  {
    name: 'API',
    href: '/docs/api',
    children: [
      {
        name: 'Protobuf',
        href: '/docs/api/protobuf',
      }
    ]
  },
  {
    name: 'Tools/Ecosystem',
    href: '/docs/tools',
    children: [
      {
        name: 'Wallets',
        href: '/docs/tools/wallets',
      },
      {
        name: 'Faucet',
        href: '/docs/tools/faucet',
      },
      {
        name: 'Blockchain Explorers',
        href: '/docs/tools/blockchain-explorers',
      },
    ],
  },
  {
    name: 'Help',
    href: '/docs/help',
    children: [
      {
        name: 'FAQ',
        href: '/docs/help/faq',
      },
      {
        name: 'Useful links',
        href: '/docs/help/useful-links',
      },
    ],
  },
  {
    name: 'Bug Bounty',
    href: 'https://skynet.certik.com/projects/coreum#bug-bounty',
    external: true,
  }
];
