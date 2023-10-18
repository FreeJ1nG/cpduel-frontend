import { useCallback, useMemo } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

import useIsMounted from '@/common/hooks/useIsMounted';
import { PATH_AUTH } from '@/common/routes/path';

interface UseAccessTokenFeatures {
  setAccessToken: (new_access_token: string) => void;
  forceGetAccessToken: () => string;
  getAccessToken: () => string | undefined;
  removeAccessToken: () => void;
}

export default function useAccessToken(): UseAccessTokenFeatures {
  const isMounted = useIsMounted();
  const router = useRouter();
  const setAccessToken = useCallback((new_access_token: string) => {
    Cookies.set('access-token', new_access_token);
  }, []);
  const forceGetAccessToken = useCallback(() => {
    if (!isMounted) return '';
    if (Cookies.get('access-token')) {
      return Cookies.get('access-token') ?? '';
    }
    router.push(PATH_AUTH.login);
    return '';
  }, [router, isMounted]);
  const getAccessToken = useCallback(() => {
    return Cookies.get('access-token');
  }, []);
  const removeAccessToken = useCallback(() => {
    Cookies.remove('access-token');
  }, []);

  return useMemo(
    () => ({
      setAccessToken,
      forceGetAccessToken,
      getAccessToken,
      removeAccessToken,
    }),
    [setAccessToken, forceGetAccessToken, getAccessToken, removeAccessToken],
  );
}
