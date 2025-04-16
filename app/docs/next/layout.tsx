import { Batch } from "@/components/Batch";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex items-center gap-2 mt-10">
        <Batch label="Next" />
        <Batch label="Devnet" />
        <Batch label="Testnet" />
      </div>
      {children}
    </>
  );
}
