import type { Metadata } from "next";
import { Noto_Sans, Space_Grotesk } from "next/font/google";
import { Layout } from "@/components/Layout";
import classNames from "classnames";
import "./globals.css";

import "highlight.js/styles/github-dark.css";
import { useMemo } from "react";
import { THEME_MODE } from "@/constants";

const notoSans = Noto_Sans({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

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
      url: 'https://test.docs.coreum.dev/images/og.jpg',
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const currentTheme = useMemo(() => {
  //   const theme = localStorage.getItem(THEME_MODE);

  //   return theme && theme === 'dark' ? 'dark' : 'light';
  // }, []);

  return (
    <html lang="en">
      <body className={classNames(notoSans.className, spaceGrotesk.className, 'h-full m-0')}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
