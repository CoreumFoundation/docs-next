'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const BridgePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/docs/overview/xrpl-bridge');
  }, []);

  return null;
};

export default BridgePage;
