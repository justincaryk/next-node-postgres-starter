'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { PUBLIC_ROUTES } from '@/constants';

export default function AuthRedirec() {
  const router = useRouter();

  useEffect(() => {
    if (router) {
      router.push(PUBLIC_ROUTES.SIGNIN);
    }
  }, [router]);

  return <div>LOADING...</div>;
}
