'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ToolsPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/docs/overview/tools');
  }, []);

  return null;
};

export default ToolsPage;
