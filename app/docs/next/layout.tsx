import { Batch } from "@/components/Batch";
import { Breadcrumb } from "@/components/Breadcrumb";

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
      </div>
      <div className="mt-3">
        <Breadcrumb />
      </div>
      {children}
    </>
  );
}
