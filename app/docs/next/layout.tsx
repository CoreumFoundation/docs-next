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
        <Batch label="v5 (LATEST)" />
        <Batch label="Devnet" />
        <Batch label="Testnet" />
      </div>
      <div className="flex items-center w-full mt-6 mb-12">
        <WarningBlock />
      </div>
      {children}
    </>
  );
}
