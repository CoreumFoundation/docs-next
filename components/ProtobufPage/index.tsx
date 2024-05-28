'use client';

import { isBrowser } from "@/helpers/isBrowser";
import { useSetMobileDevice } from "@/helpers/isMobileDevice";
import Link from "next/link";
import { FC } from "react";

interface ProtobufPageContentProps {
  children: React.ReactNode;
}

export const ProtobufPageContent: FC<ProtobufPageContentProps> = ({ children }) => {
  const isMobile = useSetMobileDevice();
  const isClientSideBrowser = isBrowser();

  if (!isClientSideBrowser) {
    return (
      <div className="sr-only">
        Protobuf documentation
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className="flex flex-col w-full py-4">
        <div>
          Please, use desktop version to access this page or you can find it in <Link href="https://github.com/CoreumFoundation/coreum/blob/master/docs/api.md" target="_blank" className="text-[#25D695] hover:opacity-80 font-bold">Github Docs</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      {children}
    </div>
  );
}
