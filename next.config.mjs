import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
import rehypeHighlight from 'rehype-highlight';
import rehypeIgnore from 'rehype-ignore';

import langHttp from 'highlight.js/lib/languages/http';
import langNginx from 'highlight.js/lib/languages/nginx';
import langJs from 'highlight.js/lib/languages/javascript';
import langBash from 'highlight.js/lib/languages/bash';
import langGolang from 'highlight.js/lib/languages/go';
import langTs from 'highlight.js/lib/languages/typescript';

const withMDX = createMDX({
  extension: /\.mdx?$/,
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [rehypeHighlight, {
        languages: {
          bash: langBash,
          js: langJs,
          http: langHttp,
          nginx: langNginx,
          go: langGolang,
          ts: langTs,
        },
      }],
      rehypeIgnore,
    ],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
};

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
