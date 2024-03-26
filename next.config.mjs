import remarkGfm from 'remark-gfm'
import nextMDX from '@next/mdx'

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  experimental: {
    appDir: true,
    mdxRs: true,
  },
};

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
