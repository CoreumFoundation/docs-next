import type { MDXComponents } from 'mdx/types';
import { Noto_Sans, Space_Grotesk } from 'next/font/google';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import * as React from 'react';

const notoSans = Noto_Sans({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

function getAnchor(text: string) {
  const value = typeof text === 'string' ? text : text[0];

  return (value || '')
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/[ ]/g, '-');
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => {
      const anchor = getAnchor(children as string);

      return (
        <h1
          id={anchor}
          className="font-medium capitalize text-grey-gradient !text-[2rem]"
          style={{
            fontSize: '32px',
            marginTop: '40px',
            marginBottom: '40px',
          }}
        >
          {children}
        </h1>
      );
    },
    h2: ({ children }) => {
      const anchor = getAnchor(children as string);

      return (
        <h2
          id={anchor}
          className="font-medium text-[#EEE]"
          style={{
            fontSize: '24px',
            marginTop: '12px',
            marginBottom: '12px',
            wordWrap: 'break-word',
          }}
        >
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      const anchor = getAnchor(children as string);

      return (
        <h3
          id={anchor}
          className="font-medium text-[#EEE]"
          style={{
            fontSize: '18px',
            marginBottom: '12px',
            wordWrap: 'break-word',
          }}
        >
          {children}
        </h3>
      );
    },
    h4: ({ children }) => {
      const anchor = getAnchor(children as string);

      return (
        <h4
          id={anchor}
          className="font-medium text-[#EEE]"
          style={{
            fontSize: '16px',
            marginBottom: '12px',
            wordWrap: 'break-word',
          }}
        >
          {children}
        </h4>
      );
    },
    h5: ({ children }) => {
      const anchor = getAnchor(children as string);

      return (
        <h5
          id={anchor}
          className="font-medium text-[#EEE]"
          style={{
            fontSize: '14px',
            marginBottom: '12px',
            wordWrap: 'break-word',
          }}
        >
          {children}
        </h5>
      );
    },
    h6: ({ children }) => {
      const anchor = getAnchor(children as string);

      return (
        <h6
          id={anchor}
          className="font-medium text-[#EEE]"
          style={{
            fontSize: '12px',
            marginBottom: '12px',
            wordWrap: 'break-word',
          }}
        >
          {children}
        </h6>
      );
    },
    p: ({ children }) => (
      <p
        className="text-base font-normal text-[#868991] leading-7"
        style={{
          letterSpacing: '-0.16px',
          fontFamily: notoSans.style.fontFamily,
          marginBottom: '24px',
          overflowWrap: 'anywhere',
        }}
      >
        {children}
      </p>
    ),
    table: ({ children }) => (
      <table
        className="block mt-2 mb-10"
        style={{
          overflowX: 'auto'
        }}
      >
        {children}
      </table>
    ),
    thead: ({ children }) => (
      <thead
        className="text-[#5E6773] font-normal"
        style={{
          paddingBottom: '12px'
        }}
      >
        {children}
      </thead>
    ),
    tr: ({ children }) => (
      <tr style={{
        borderRadius: '8px',
        overflow: 'hidden',
      }}>
        {children}
      </tr>
    ),
    th: ({ children }) => (
      <th
        className="font-normal"
        style={{
          padding: '16px 12px',
          fontFamily: spaceGrotesk.style.fontFamily,
          letterSpacing: '-0.32px',
          backgroundColor: '#0d110f',
          minWidth: 180,
          textAlign: 'left',
        }}
      >
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td
        className="font-normal text-[#9FA2AC]"
        style={{
          padding: '16px 12px',
          fontFamily: notoSans.style.fontFamily,
          letterSpacing: '-0.16px',
          backgroundColor: '#0d110f',
          // borderBottom: '12px solid #101216',
          minWidth: 180,
        }}
      >
        {children}
      </td>
    ),
    a: (props) => (
      <Link
        href={props.href || '#'}
        className="text-base font-semibold leading-7"
        style={{
          color: '#25D695',
          fontFamily: notoSans.style.fontFamily,
        }}
        {...props}
      >
        {props.children}
      </Link>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
        alt={props.alt || ''}
      />
    ),
    pre: ({ children }) => (
      <pre
        className="mdx-pre rounded-lg p-4 overflow-auto whitespace-pre-wrap break-words"
        style={{
          fontSize: '14px',
          marginTop: '12px',
          marginBottom: '12px',
          overflowWrap: 'break-word',
          counterReset: 'line',
        }}
      >
        {children}
      </pre>
    ),
    code: ({ children }) => (
      <code
        className="text-[#eee] text-sm font-normal"
        style={{
          fontSize: '14px',
          letterSpacing: '-0.14px',
          overflowWrap: 'anywhere',
        }}
      >
        {children}
      </code>
    ),
    ol: ({ children }) => <ol style={{ listStyleType: 'decimal', marginLeft: '16px', marginBottom: '20px' }}>{children}</ol>,
    ul: ({ children }) => <ul className="mdx-ul" style={{ marginLeft: '20px', marginBottom: '20px' }}>{children}</ul>,
    li: ({ children }) => <li style={{ fontSize: '14px', wordWrap: 'break-word' }}>{children}</li>,
  }
}
