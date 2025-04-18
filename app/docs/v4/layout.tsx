import { Batch } from "@/components/Batch";
import { WarningBlock } from "@/components/Warning";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex items-center gap-2 mt-10">
        <Batch label="v4" />
        <Batch label="Mainnet" />
        <Batch label="Testnet" />
        <Batch label="Devnet" />
      </div>
      {children}
    </>
  );
}
