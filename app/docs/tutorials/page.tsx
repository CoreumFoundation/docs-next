'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ToolsPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/docs/overview/tutorials');
  }, [router]);

  return null;
};

export default ToolsPage;
