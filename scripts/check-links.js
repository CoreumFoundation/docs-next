import fs from 'fs';
import path from 'path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMdx from 'remark-mdx';
import {globby} from 'globby';
import axios from 'axios';
import { visit } from 'unist-util-visit';

const processor = unified()
  .use(remarkParse)
  .use(remarkMdx);

const EXCLUDED_HOSTS = [
  'coreum-grpc.publicnode.com:443',
  'coreum-grpc.chainroot.io:443',
];

const isExternal = (url) => {
  const external = /^https?:\/\//.test(url);
  if (!external) return false;

  try {
    const { host } = new URL(url);
    const isExcluded = EXCLUDED_HOSTS.includes(host);
    const isLocalhost = /^(localhost|127\.0\.0\.1|::1|.*\.local)(:\d+)?$/.test(host);
    return !isExcluded && !isLocalhost;
  } catch {
    return false;
  }
};


const validateExternalLink = async (url) => {
  try {
    const res = await fetch(url, { method: 'HEAD', timeout: 5000 });

    return res.ok;
  } catch {
    return false;
  }
};

const validateInternalLink = (link, filePath, baseDir = 'app') => {
  const cleanLink = link.split('#')[0].split('?')[0];
  if (!cleanLink) return true;

  if (EXCLUDED_HOSTS.some((pattern) => cleanLink.includes(pattern))) {
    return true;
  }

  const routePath = cleanLink.startsWith('/')
    ? cleanLink.slice(1)
    : path.join(path.dirname(filePath), cleanLink);

  const targetPath = path.join(process.cwd(), baseDir, routePath);

  const extensions = [
    '',
    '.mdx',
    '.md',
    '.tsx',
    '.ts',
    '.jsx',
    '.js',
    '/page.mdx',
    '/page.tsx',
    '/page.js',
    '/page.jsx',
  ];

  const exists = extensions.some((ext) =>
    fs.existsSync(targetPath + ext)
  );

  return exists;
};

const checkLinks = async () => {
  const files = await globby(['./**/*.mdx']);

  let hasErrors = false;

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    const tree = processor.parse({ value: content, path: file });

    const linkChecks = [];

    visit(tree, 'link', (node) => {
      const url = node.url;

      const check = async () => {
        if (isExternal(url)) {
          const ok = await validateExternalLink(url);
          if (!ok) {
            console.error(`❌ Broken external link in ${file}: ${url}`);
            hasErrors = true;
          }
        } else {
          const ok = validateInternalLink(url, file);
          if (!ok) {
            console.error(`❌ Broken internal link in ${file}: ${url}`);
            hasErrors = true;
          }
        }
      };
      linkChecks.push(check());
    });

    await Promise.all(linkChecks);
  }

  if (!hasErrors) {
    console.log('✅ All links valid');
  } else {
    process.exitCode = 1;
  }
};

checkLinks();
