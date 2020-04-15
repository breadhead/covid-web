import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useScrollBodyLock } from './scroll-lock/useScrollBodyLock';

export const useResetScrollLock = () => {
  const { asPath } = useRouter();
  const { unlock } = useScrollBodyLock();

  useEffect(() => {
    unlock();
  }, [asPath]);
};
