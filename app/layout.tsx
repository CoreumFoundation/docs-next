import type { Metadata } from "next";
import { Noto_Sans, Space_Grotesk } from "next/font/google";
import { Layout } from "@/components/Layout";
import classNames from "classnames";
import "./globals.css";

import "highlight.js/styles/github-dark.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-sans',
});
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: "Coreum Docs",
  description: "Discover Coreum, a layer-1 enterprise-grade blockchain with ISO20022, IBC interoperability, and Smart Tokens. Learn about $COREUM token, smart contracts, DEX, and cross-chain bridges.",
  keywords: ['Coreum blockchain', 'enterprise-grade blockchain', 'decentralized applications', 'smart contracts', 'smart tokens', '$COREUM token', 'BPoS consensus', 'ISO20022 compatibility', 'IBC interoperability', 'Coreum DEX', 'crypto bridges', 'Sologenic ecosystem', 'blockchain scalability'],
  icons: "/favicon.ico",
  openGraph: {
    type: 'website',
    url: '',
    description: 'Discover Coreum, a layer-1 enterprise-grade blockchain with ISO20022, IBC interoperability, and Smart Tokens. Learn about $COREUM token, smart contracts, DEX, and cross-chain bridges.',
    siteName: 'Coreum Docs',
    images: [{
      url: 'http://docs.coreum.dev/images/og.jpg',
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(notoSans.variable, spaceGrotesk.variable, 'h-full m-0')}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
