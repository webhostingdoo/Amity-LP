'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function GclidCapture() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const gclid = searchParams.get('gclid');
    if (gclid) {
      sessionStorage.setItem('gclid', gclid);
    }
  }, [searchParams]);

  return null;
}
