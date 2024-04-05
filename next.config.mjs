import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
import rehypeHighlight from 'rehype-highlight';
import rehypeIgnore from 'rehype-ignore';
// import remarkParse from 'remark-parse';
// import remarkRehype from 'remark-rehype';
// import rehypeFormat from 'rehype-format';
// import rehypeStringify from 'rehype-stringify';
// import remarkPrism from 'remark-prism';
// import rehypeRaw from 'rehype-raw';

const withMDX = createMDX({
  extension: /\.mdx?$/,
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight, rehypeIgnore],
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
