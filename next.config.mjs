import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
import rehypeHighlight from 'rehype-highlight';
import rehypeIgnore from 'rehype-ignore';

import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { rehypeGithubAlerts } from 'rehype-github-alerts';

import langHttp from 'highlight.js/lib/languages/http';
import langNginx from 'highlight.js/lib/languages/nginx';
import langJs from 'highlight.js/lib/languages/javascript';
import langBash from 'highlight.js/lib/languages/bash';
import langGolang from 'highlight.js/lib/languages/go';
import langTs from 'highlight.js/lib/languages/typescript';
import langJson from 'highlight.js/lib/languages/json';
import langRust from 'highlight.js/lib/languages/rust';

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkParse, remarkRehype],
    rehypePlugins: [
      [rehypeHighlight, {
        languages: {
          bash: langBash,
          js: langJs,
          http: langHttp,
          nginx: langNginx,
          go: langGolang,
          ts: langTs,
          json: langJson,
          rust: langRust,
        },
      }],
      rehypeIgnore,
      rehypeStringify,
      rehypeGithubAlerts,
    ],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  output: "standalone",
  staticPageGenerationTimeout: 1000,
  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/next/overview/general',
        permanent: true,
      },
      {
        source: '/docs/next',
        destination: '/docs/next/overview/general',
        permanent: true,
      },
      {
        source: '/docs/v4',
        destination: '/docs/v4/overview/general',
        permanent: true,
      },

      {
        source: '/docs/overview',
        destination: '/docs/next/overview/general',
        permanent: true,
      },
      {
        source: '/docs/next/overview',
        destination: '/docs/next/overview/general',
        permanent: true,
      },
      {
        source: '/docs/v4/overview',
        destination: '/docs/v4/overview/general',
        permanent: true,
      },
      {
        source: '/docs/overview/:slug',
        destination: '/docs/next/overview/:slug',
        permanent: true,
      },

      {
        source: '/docs/api',
        destination: '/docs/next/api/overview',
        permanent: true,
      },
      {
        source: '/docs/next/api',
        destination: '/docs/next/api/overview',
        permanent: true,
      },
      {
        source: '/docs/v4/api',
        destination: '/docs/v4/api/overview',
        permanent: true,
      },
      {
        source: '/docs/api/:slug',
        destination: '/docs/next/api/:slug',
        permanent: true,
      },

      {
        source: '/docs/nodes-and-validators',
        destination: '/docs/next/nodes-and-validators/overview',
        permanent: true,
      },
      {
        source: '/docs/next/nodes-and-validators',
        destination: '/docs/next/nodes-and-validators/overview',
        permanent: true,
      },
      {
        source: '/docs/v4/nodes-and-validators',
        destination: '/docs/v4/nodes-and-validators/overview',
        permanent: true,
      },
      {
        source: '/docs/nodes-and-validators/:slug',
        destination: '/docs/next/nodes-and-validators/:slug',
        permanent: true,
      },
      {
        source: '/docs/nodes-and-validators/essentials',
        destination: '/docs/next/nodes-and-validators/essentials/system-requirements',
        permanent: true,
      },
      {
        source: '/docs/next/nodes-and-validators/essentials',
        destination: '/docs/next/nodes-and-validators/essentials/system-requirements',
        permanent: true,
      },
      {
        source: '/docs/v4/nodes-and-validators/essentials',
        destination: '/docs/v4/nodes-and-validators/essentials/system-requirements',
        permanent: true,
      },
      {
        source: '/docs/nodes-and-validators/upgrades',
        destination: '/docs/next/nodes-and-validators/upgrades/upgrades-instructions',
        permanent: true,
      },
      {
        source: '/docs/next/nodes-and-validators/upgrades',
        destination: '/docs/next/nodes-and-validators/upgrades/upgrades-instructions',
        permanent: true,
      },
      {
        source: '/docs/v4/nodes-and-validators/upgrades',
        destination: '/docs/v4/nodes-and-validators/upgrades/upgrades-instructions',
        permanent: true,
      },

      {
        source: '/docs/core-dex',
        destination: '/docs/next/core-dex/overview',
        permanent: true,
      },
      {
        source: '/docs/next/core-dex',
        destination: '/docs/next/core-dex/overview',
        permanent: true,
      },
      {
        source: '/docs/core-dex/:slug',
        destination: '/docs/next/core-dex/:slug',
        permanent: true,
      },
      {
        source: '/docs/core-dex/api-server',
        destination: '/docs/next/core-dex/api-server/overview',
        permanent: true,
      },
      {
        source: '/docs/next/core-dex/api-server',
        destination: '/docs/next/core-dex/api-server/overview',
        permanent: true,
      },


      {
        source: '/docs/help',
        destination: '/docs/next/help/overview',
        permanent: true,
      },
      {
        source: '/docs/next/help',
        destination: '/docs/next/help/overview',
        permanent: true,
      },
      {
        source: '/docs/v4/help',
        destination: '/docs/v4/help/overview',
        permanent: true,
      },
      {
        source: '/docs/help/:slug',
        destination: '/docs/next/help/:slug',
        permanent: true,
      },

      {
        source: '/docs/modules',
        destination: '/docs/next/modules/overview',
        permanent: true,
      },
      {
        source: '/docs/next/modules',
        destination: '/docs/next/modules/overview',
        permanent: true,
      },
      {
        source: '/docs/v4/modules',
        destination: '/docs/v4/modules/overview',
        permanent: true,
      },
      {
        source: '/docs/modules/:slug',
        destination: '/docs/next/modules/:slug',
        permanent: true,
      },

      {
        source: '/docs/tools-and-ecosystem',
        destination: '/docs/next/tools-and-ecosystem/overview',
        permanent: true,
      },
      {
        source: '/docs/next/tools-and-ecosystem',
        destination: '/docs/next/tools-and-ecosystem/overview',
        permanent: true,
      },
      {
        source: '/docs/v4/tools-and-ecosystem',
        destination: '/docs/v4/tools-and-ecosystem/overview',
        permanent: true,
      },
      {
        source: '/docs/tools-and-ecosystem/:slug',
        destination: '/docs/next/tools-and-ecosystem/:slug',
        permanent: true,
      },


      {
        source: '/docs/tutorials',
        destination: '/docs/next/tutorials/overview',
        permanent: true,
      },
      {
        source: '/docs/next/tutorials',
        destination: '/docs/next/tutorials/overview',
        permanent: true,
      },
      {
        source: '/docs/v4/tutorials',
        destination: '/docs/v4/tutorials/overview',
        permanent: true,
      },
      {
        source: '/docs/tutorials/:slug',
        destination: '/docs/next/tutorials/:slug',
        permanent: true,
      },
      {
        source: '/docs/tutorials/get-started',
        destination: '/docs/next/tutorials/get-started/install-cored',
        permanent: true,
      },
      {
        source: '/docs/next/tutorials/get-started',
        destination: '/docs/next/tutorials/get-started/install-cored',
        permanent: true,
      },
      {
        source: '/docs/v4/tutorials/get-started',
        destination: '/docs/v4/tutorials/get-started/install-cored',
        permanent: true,
      },
      {
        source: '/docs/tutorials/get-started/cli',
        destination: '/docs/next/tutorials/get-started/cli/transfer-funds-with-cli',
        permanent: true,
      },
      {
        source: '/docs/next/tutorials/get-started/cli',
        destination: '/docs/next/tutorials/get-started/cli/transfer-funds-with-cli',
        permanent: true,
      },
      {
        source: '/docs/v4/tutorials/get-started/cli',
        destination: '/docs/v4/tutorials/get-started/cli/transfer-funds-with-cli',
        permanent: true,
      },
      {
        source: '/docs/tutorials/get-started/golang',
        destination: '/docs/next/tutorials/get-started/golang/transfer-funds',
        permanent: true,
      },
      {
        source: '/docs/next/tutorials/get-started/golang',
        destination: '/docs/next/tutorials/get-started/golang/transfer-funds',
        permanent: true,
      },
      {
        source: '/docs/v4/tutorials/get-started/golang',
        destination: '/docs/v4/tutorials/get-started/golang/transfer-funds',
        permanent: true,
      },
      {
        source: '/docs/tutorials/get-started/typescript',
        destination: '/docs/next/tutorials/get-started/typescript/transfer-funds',
        permanent: true,
      },
      {
        source: '/docs/next/tutorials/get-started/typescript',
        destination: '/docs/next/tutorials/get-started/typescript/transfer-funds',
        permanent: true,
      },
      {
        source: '/docs/v4/tutorials/get-started/typescript',
        destination: '/docs/v4/tutorials/get-started/typescript/transfer-funds',
        permanent: true,
      },
      {
        source: '/docs/tutorials/smart-contracts',
        destination: '/docs/next/tutorials/smart-contracts/deploy-wasm-contract',
        permanent: true,
      },
      {
        source: '/docs/next/tutorials/smart-contracts',
        destination: '/docs/next/tutorials/smart-contracts/deploy-wasm-contract',
        permanent: true,
      },
      {
        source: '/docs/v4/tutorials/smart-contracts',
        destination: '/docs/v4/tutorials/smart-contracts/deploy-wasm-contract',
        permanent: true,
      },
      {
        source: '/docs/tutorials/integrate-coreum',
        destination: '/docs/next/tutorials/integrate-coreum/cex-integrations',
        permanent: true,
      },
      {
        source: '/docs/next/tutorials/integrate-coreum',
        destination: '/docs/next/tutorials/integrate-coreum/cex-integrations',
        permanent: true,
      },
      {
        source: '/docs/v4/tutorials/integrate-coreum',
        destination: '/docs/v4/tutorials/integrate-coreum/cex-integrations',
        permanent: true,
      },
      {
        source: '/docs/tutorials/build-apps',
        destination: '/docs/next/tutorials/build-apps/web-app',
        permanent: true,
      },
      {
        source: '/docs/next/tutorials/build-apps',
        destination: '/docs/next/tutorials/build-apps/web-app',
        permanent: true,
      },
      {
        source: '/docs/v4/tutorials/build-apps',
        destination: '/docs/v4/tutorials/build-apps/web-app',
        permanent: true,
      },
      {
        source: '/docs/tutorials/ibc',
        destination: '/docs/next/tutorials/ibc/ibc-transfer-to-osmosis',
        permanent: true,
      },
      {
        source: '/docs/next/tutorials/ibc',
        destination: '/docs/next/tutorials/ibc/ibc-transfer-to-osmosis',
        permanent: true,
      },
      {
        source: '/docs/v4/tutorials/ibc',
        destination: '/docs/v4/tutorials/ibc/ibc-transfer-to-osmosis',
        permanent: true,
      },
      {
        source: '/docs/tutorials/ISO20022',
        destination: '/docs/next/tutorials/ISO20022/intro-to-ISO20022',
        permanent: true,
      },
      {
        source: '/docs/next/tutorials/ISO20022',
        destination: '/docs/next/tutorials/ISO20022/intro-to-ISO20022',
        permanent: true,
      },
      {
        source: '/docs/v4/tutorials/ISO20022',
        destination: '/docs/v4/tutorials/ISO20022/intro-to-ISO20022',
        permanent: true,
      },
      {
        source: '/docs/tutorials/smart-tokens',
        destination: '/docs/next/tutorials/smart-tokens/create-and-manage-ft',
        permanent: true,
      },
      {
        source: '/docs/next/tutorials/smart-tokens',
        destination: '/docs/next/tutorials/smart-tokens/create-and-manage-ft',
        permanent: true,
      },
      {
        source: '/docs/v4/tutorials/smart-tokens',
        destination: '/docs/v4/tutorials/smart-tokens/create-and-manage-ft',
        permanent: true,
      },

      {
        source: '/docs/xrpl-bridge',
        destination: '/docs-bridge/overview',
        permanent: true,
      },
      {
        source: '/docs/xrpl-bridge/:slug',
        destination: '/docs-bridge/:slug',
        permanent: true,
      },
      {
        source: '/docs/next/xrpl-bridge/:slug',
        destination: '/docs-bridge/:slug',
        permanent: true,
      },
      {
        source: '/docs/v4/xrpl-bridge/:slug',
        destination: '/docs-bridge/:slug',
        permanent: true,
      },
    ]
  }
};

export default withMDX(nextConfig);
