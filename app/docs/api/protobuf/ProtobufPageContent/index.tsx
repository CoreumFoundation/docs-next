'use client';

import { useSetMobileDevice } from "@/helpers/isMobileDevice";
import Link from "next/link";
import dynamic from "next/dynamic";
const Component = dynamic(() => import('../protobuf.mdx'), { ssr: false })

export const ProtobufPageContent = () => {
  const isMobile = useSetMobileDevice();

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
      <Component />
    </div>
  );
}
