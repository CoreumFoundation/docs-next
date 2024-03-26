import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 style={{ fontSize: '100px' }}>{children}</h1>,
    h2: ({ children }) => <h2 style={{ fontSize: '90px' }}>{children}</h2>,
    h3: ({ children }) => <h3 style={{ fontSize: '80px' }}>{children}</h3>,
    h4: ({ children }) => <h4 style={{ fontSize: '70px' }}>{children}</h4>,
    h5: ({ children }) => <h5 style={{ fontSize: '60px' }}>{children}</h5>,
    h6: ({ children }) => <h6 style={{ fontSize: '50px' }}>{children}</h6>,
    p: ({ children }) => <p style={{ fontSize: '30px' }}>{children}</p>,
    table: ({ children }) => <table style={{ fontSize: '100px' }}>{children}</table>,
    thead: ({ children }) => <thead style={{ fontSize: '100px' }}>{children}</thead>,
    tbody: ({ children }) => <tbody style={{ fontSize: '100px' }}>{children}</tbody>,
    td: ({ children }) => <td style={{ fontSize: '10px' }}>{children}</td>,
    ul: ({ children }) => <ul style={{ fontSize: '100px' }}>{children}</ul>,
    ol: ({ children }) => <ol style={{ fontSize: '100px' }}>{children}</ol>,
    li: ({ children }) => <li style={{ fontSize: '14px' }}>{children}</li>,
    a: (props) => <a {...props}>{props.children}</a>,
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
        alt={props.alt || ''}
      />
    ),
    ...components,
  }
}
