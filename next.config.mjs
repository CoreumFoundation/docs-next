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
};

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
