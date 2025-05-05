import { Badge } from "@/components/Badge";
import { WarningBlock } from "@/components/Warning";

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
      <div className="flex items-center w-full mt-6 mb-12">
        <WarningBlock />
      </div>
      {children}
    </>
  );
}
