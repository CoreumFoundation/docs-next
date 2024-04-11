'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/docs/become-validator/upgrades/main-info');
  }, []);

  return null;
};

export default Page;
