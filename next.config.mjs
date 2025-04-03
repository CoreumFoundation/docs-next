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
  // Add markdown plugins here, as desired
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
  // Configure `pageExtensions`` to include MDX files
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
        source: '/docs/overview',
        destination: '/docs/next/overview/general',
        permanent: true,
      },
      {
        source: '/docs/api',
        destination: '/docs/next/api/protobuf',
        permanent: true,
      },
      {
        source: '/docs/nodes-and-validators',
        destination: '/docs/next/overview/validator',
        permanent: true,
      },
      {
        source: '/docs/next/nodes-and-validators',
        destination: '/docs/next/overview/validator',
        permanent: true,
      },
      {
        source: '/docs/v4/nodes-and-validators',
        destination: '/docs/v4/overview/validator',
        permanent: true,
      },
      {
        source: '/docs/help',
        destination: '/docs/next/overview/help',
        permanent: true,
      },
      {
        source: '/docs/modules',
        destination: '/docs/next/overview/modules',
        permanent: true,
      },
      {
        source: '/docs/tools',
        destination: '/docs/next/overview/tools',
        permanent: true,
      },
      {
        source: '/docs/tutorials',
        destination: '/docs/next/overview/tutorials',
        permanent: true,
      },
      {
        source: '/docs/xrpl-bridge',
        destination: '/docs/next/overview/xrpl-bridge',
        permanent: true,
      },
      {
        source: '/docs/nodes-and-validators/upgrades',
        destination: '/docs/next/nodes-and-validators/upgrades/main-info',
        permanent: true,
      },
      {
        source: '/docs/next/nodes-and-validators/upgrades',
        destination: '/docs/next/nodes-and-validators/upgrades/main-info',
        permanent: true,
      },
      {
        source: '/docs/next',
        destination: '/docs/next/overview/general',
        permanent: true,
      },
      {
        source: '/docs/next/overview',
        destination: '/docs/next/overview/general',
        permanent: true,
      },
      {
        source: '/docs/next/api',
        destination: '/docs/next/api/protobuf',
        permanent: true,
      },
      {
        source: '/docs/next/nodes-and-validators',
        destination: '/docs/next/overview/validator',
        permanent: true,
      },
      {
        source: '/docs/next/nodes-and-validators',
        destination: '/docs/next/overview/validator',
        permanent: true,
      },
      {
        source: '/docs/next/help',
        destination: '/docs/next/overview/help',
        permanent: true,
      },
      {
        source: '/docs/next/modules',
        destination: '/docs/next/overview/modules',
        permanent: true,
      },
      {
        source: '/docs/next/tools',
        destination: '/docs/next/overview/tools',
        permanent: true,
      },
      {
        source: '/docs/next/tutorials',
        destination: '/docs/next/overview/tutorials',
        permanent: true,
      },
      {
        source: '/docs/next/xrpl-bridge',
        destination: '/docs/next/overview/xrpl-bridge',
        permanent: true,
      },

      {
        source: '/docs/v4/overview',
        destination: '/docs/v4/overview/general',
        permanent: true,
      },
      {
        source: '/docs/v4/api',
        destination: '/docs/v4/api/protobuf',
        permanent: true,
      },
      {
        source: '/docs/v4/nodes-and-validators',
        destination: '/docs/v4/overview/validator',
        permanent: true,
      },
      {
        source: '/docs/v4/nodes-and-validators',
        destination: '/docs/v4/overview/validator',
        permanent: true,
      },
      {
        source: '/docs/v4/help',
        destination: '/docs/v4/overview/help',
        permanent: true,
      },
      {
        source: '/docs/v4/modules',
        destination: '/docs/v4/overview/modules',
        permanent: true,
      },
      {
        source: '/docs/v4/tools',
        destination: '/docs/v4/overview/tools',
        permanent: true,
      },
      {
        source: '/docs/v4/tutorials',
        destination: '/docs/v4/overview/tutorials',
        permanent: true,
      },
      {
        source: '/docs/v4/xrpl-bridge',
        destination: '/docs/v4/overview/xrpl-bridge',
        permanent: true,
      },

      {
        source: '/docs/api/:slug',
        destination: '/docs/next/api/:slug',
        permanent: true,
      },
      {
        source: '/docs/nodes-and-validators/:slug',
        destination: '/docs/next/nodes-and-validators/:slug',
        permanent: true,
      },
      {
        source: '/docs/help/:slug',
        destination: '/docs/next/help/:slug',
        permanent: true,
      },
      {
        source: '/docs/modules/:slug',
        destination: '/docs/next/modules/:slug',
        permanent: true,
      },
      {
        source: '/docs/overview/:slug',
        destination: '/docs/next/overview/:slug',
        permanent: true,
      },
      {
        source: '/docs/tools-and-ecosystem/:slug',
        destination: '/docs/next/tools-and-ecosystem/:slug',
        permanent: true,
      },
      {
        source: '/docs/tutorials/:slug',
        destination: '/docs/next/tutorials/:slug',
        permanent: true,
      },
      {
        source: '/docs/xrpl-bridge/:slug',
        destination: '/docs/next/xrpl-bridge/:slug',
        permanent: true,
      },
      {
        source: '/docs/v4/xrpl-bridge',
        destination: '/docs/v4/overview/xrpl-bridge',
        permanent: true,
      },
      {
        source: '/docs/next/xrpl-bridge',
        destination: '/docs/next/overview/xrpl-bridge',
        permanent: true,
      },
      {
        source: '/docs/tutorials/use-tokens',
        destination: '/docs/next/tutorials/use-tokens/create-and-manage-ft-with-cli',
        permanent: true,
      },
      {
        source: '/docs/next/tutorials/use-tokens',
        destination: '/docs/next/tutorials/use-tokens/create-and-manage-ft-with-cli',
        permanent: true,
      },
    ]
  }
};

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
