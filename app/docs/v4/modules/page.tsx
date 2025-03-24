'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ModulesPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/docs/overview/modules');
  }, [router]);

  return null;
};

export default ModulesPage;
