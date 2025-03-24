'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const HelpPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/docs/overview/help');
  }, [router]);

  return null;
};

export default HelpPage;
