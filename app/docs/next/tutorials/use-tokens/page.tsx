'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/docs/tutorials/use-tokens/create-and-manage-ft-with-cli');
  }, [router]);

  return null;
};

export default Page;
