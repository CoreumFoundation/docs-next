import { Badge } from "@/components/Badge";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex items-center gap-2 mt-10">
        <Badge label="v5 (LATEST)" />
        <Badge label="Devnet" />
        <Badge label="Testnet" />
        <Badge label="Mainnet" />
      </div>
      {children}
    </>
  );
}
