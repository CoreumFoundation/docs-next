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
        <Badge label="v4" />
      </div>
      {children}
    </>
  );
}
