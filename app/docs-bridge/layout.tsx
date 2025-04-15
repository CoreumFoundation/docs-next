import { SidebarBridge } from "@/components/SidebarBridge";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarBridge>
      {children}
    </SidebarBridge>
  );
}
