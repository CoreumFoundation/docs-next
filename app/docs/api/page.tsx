'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ApiPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/docs/api/protobuf');
  }, []);

  return null;
};

export default ApiPage;
