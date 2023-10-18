import {
  ChildrenProps,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useRouter } from 'next/router';

import useAccessToken from '@/common/hooks/useAccessToken';
import useIsMounted from '@/common/hooks/useIsMounted';
import { PATH_AUTH, PATH_DASHBOARD } from '@/common/routes/path';
import {
  useLazyGetUserQuery,
  useLoginMutation,
  useRegisterMutation,
} from '@/features/auth/api';

interface IAuthContext {
  login?: ({ email, password }: AuthFeature.LoginParam) => void;
  register?: ({
    email,
    password,
    firstname,
    lastname,
  }: AuthFeature.RegisterParam) => void;
  logout?: () => void;
  isAuthenticated?: boolean;
  email?: string;
  firstname?: string;
  lastname?: string;
  role?: string;
  active?: boolean;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export function AuthContextProvider({ children }: ChildrenProps) {
  const router = useRouter();
  const isMounted = useIsMounted();
  const [user, setUser] = useState<User | undefined>(undefined);
  const [loginUser] = useLoginMutation();
  const [registerUser] = useRegisterMutation();
  const { getAccessToken, removeAccessToken, setAccessToken } =
    useAccessToken();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    Boolean(getAccessToken()),
  );
  const [fetchUserData] = useLazyGetUserQuery();

  useEffect(() => {
    if (getAccessToken()) {
      fetchUserData({ accessToken: getAccessToken() })
        .unwrap()
        .then((result) => {
          setUser(result);
        })
        .catch((err) => {
          alert(err);
          // CHANGE ERROR HANDLING AS U WISH
        });
    } else {
      setUser(undefined);
    }
  }, [isAuthenticated, fetchUserData, getAccessToken]);

  const login = useCallback(
    ({ email, password }: AuthFeature.LoginParam) => {
      loginUser({ payload: { email, password } })
        .unwrap()
        .then((result) => {
          setAccessToken(result.token);
          setIsAuthenticated(true);
          router.push(PATH_DASHBOARD.root);
        })
        .catch((err) => {
          alert(err);
          // CHANGE ERROR HANDLING AS U WISH
        });
    },
    [loginUser, setAccessToken, router],
  );

  const register = useCallback(
    ({ email, password, firstname, lastname }: AuthFeature.RegisterParam) => {
      registerUser({ payload: { email, password, firstname, lastname } })
        .unwrap()
        .then(() => {
          router.push(PATH_AUTH.login);
        })
        .catch((err) => {
          alert(err);
          // CHANGE ERROR HANDLING AS U WISH
        });
    },
    [registerUser, router],
  );

  const logout = useCallback(() => {
    removeAccessToken();
    setIsAuthenticated(false);
  }, [removeAccessToken, setIsAuthenticated]);

  const authContextProviderValue = useMemo(
    () => ({
      ...(isMounted && {
        user,
        isAuthenticated,
        login,
        register,
        logout,
      }),
    }),
    [isMounted, user, login, register, logout, isAuthenticated],
  );

  return (
    <AuthContext.Provider value={authContextProviderValue}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  return useContext(AuthContext);
};

import {
  ChildrenProps,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useRouter } from 'next/router';

import useAccessToken from '@/common/hooks/useAccessToken';
import useIsMounted from '@/common/hooks/useIsMounted';
import useToaster from '@/common/hooks/useToaster';
import { PATH_AUTH, PATH_DASHBOARD } from '@/common/routes/path';
import {
  useLazyGetUserQuery,
  useLoginMutation,
  useRegisterMutation,
} from '@/features/auth/api';

interface IAuthContext {
  login?: (
    { username, password }: AuthFeature.LoginParam,
    errorHandler?: (err: string) => void,
  ) => void;
  register?: (
    { username, fullName, password }: AuthFeature.RegisterParam,
    errorHandler?: (err: string) => void,
  ) => void;
  logout?: () => void;
  isAuthenticated: boolean | null;
  user: Models.User | null;
  isMounted: boolean;
}

const AuthContext = createContext<IAuthContext>({
  login: () => {},
  register: () => {},
  logout: () => {},
  isAuthenticated: null,
  user: null,
  isMounted: false,
});

export function AuthContextProvider({ children }: ChildrenProps) {
  const toaster = useToaster();
  const router = useRouter();
  const isMounted = useIsMounted();
  const [user, setUser] = useState<Models.User | null>(null);
  const [loginUser] = useLoginMutation();
  const [registerUser] = useRegisterMutation();
  const { getAccessToken, removeAccessToken, setAccessToken } =
    useAccessToken();
  const [fetchUserData] = useLazyGetUserQuery();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(
    Boolean(getAccessToken()),
  );

  useEffect(() => {
    if (getAccessToken()) {
      fetchUserData({ accessToken: getAccessToken() })
        .unwrap()
        .then((resp) => {
          if (resp.data) {
            setUser(resp.data);
          }
        })
        .catch((err) => {
          toaster.launch({
            color: 'error',
            message: err.data.error,
          });
        });
    } else {
      setUser(null);
    }
  }, [isAuthenticated, fetchUserData, getAccessToken, toaster]);

  const login = useCallback(
    (
      { username, password }: AuthFeature.LoginParam,
      errorHandler?: (err: string) => void,
    ) => {
      loginUser({ payload: { username, password } })
        .unwrap()
        .then((resp) => {
          if (resp) {
            setAccessToken(resp.token);
            setIsAuthenticated(true);
            router.push(PATH_DASHBOARD.root);
          }
        })
        .catch(errorHandler);
    },
    [loginUser, setAccessToken, router],
  );

  const register = useCallback(
    (
      { username, fullName, password }: AuthFeature.RegisterParam,
      errorHandler?: (err: string) => void,
    ) => {
      registerUser({ payload: { username, fullName, password } })
        .unwrap()
        .then(() => {
          router.push(PATH_AUTH.login);
        })
        .catch(errorHandler);
    },
    [registerUser, router],
  );

  const logout = useCallback(async () => {
    await router.push(PATH_DASHBOARD.root);
    removeAccessToken();
    setIsAuthenticated(false);
  }, [removeAccessToken, router]);

  const authContextProviderValue = useMemo(
    () => ({
      ...(isMounted && {
        login,
        register,
        logout,
      }),
      isAuthenticated,
      user,
      isMounted,
    }),
    [isMounted, user, isAuthenticated, login, register, logout],
  );

  return (
    <AuthContext.Provider value={authContextProviderValue}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  return useContext(AuthContext);
};
