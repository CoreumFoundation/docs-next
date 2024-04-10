import type { Metadata } from "next";
import { Noto_Sans, Space_Grotesk } from "next/font/google";
import { Layout } from "@/components/Layout";
import classNames from "classnames";
import "./globals.css";

import "highlight.js/styles/github-dark.css";

const notoSans = Noto_Sans({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Coreum Docs",
  description: "Learn about Coreum with our official documentation. Developers and blockchain can discover more about the super ledger, layer 1 built on Cosmos SDK. Coreum smart contracts are built with Rust prioritizing  security, scalability and efficiency for your projects. Your gateway to the next-generation blockchain technology starts here.",
  keywords: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
