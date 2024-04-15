'use client';

import dynamic from "next/dynamic";
import { useEffect } from "react";

const Component = dynamic(() => import('./protobuf.mdx'), { ssr: false });

const Page = () => {
  return (
    <div className="flex flex-col w-full">
      <Component />
    </div>
  );
};

export default Page;
