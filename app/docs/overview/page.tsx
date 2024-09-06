'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const OverviewPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/docs/overview/general');
  }, [router]);

  return null;
};

export default OverviewPage;
