'use client';

import { PrivatePathname, PublicPathname } from '@/types';

import { usePathname, useRouter } from 'next/navigation';
import { useAtom } from 'jotai';
import { PropsWithChildren, useEffect, useMemo, useState } from 'react';

import { ADMIN_ROUTES, PRIVATE_ROUTES, PUBLIC_ROUTES } from '@/constants';
import { parseJwt } from '@/utils/utils';
import { useCurrentUser, useSetCurrentUser } from './atoms/current-user';
// import Loading from '../../app/loading'

import { AUTH_TOKEN } from './types';

export default function AuthProvider({ children }: PropsWithChildren) {
  const [currentUser] = useAtom(useCurrentUser);
  const router = useRouter();
  const pathname = usePathname();
  const [_, setCurrentUser] = useAtom(useSetCurrentUser);
  // don't render anything until check dependencies are ready
  const [hydrating, setHydrating] = useState(true);
  // don't render anything unless the auth checks have resolved
  const [readyToRender, setReadyToRender] = useState(false);

  const privateRoutes = useMemo(() => Object.values(PRIVATE_ROUTES), []);
  const publicRoutes = useMemo(() => Object.values(PUBLIC_ROUTES), []);
  const adminRoutes = useMemo(() => Object.values(ADMIN_ROUTES), []);

  const isPublicRoute = useMemo(() => {
    return publicRoutes.includes(pathname as PublicPathname);
  }, [pathname, publicRoutes]);

  const isPrivateRoute = useMemo(() => {
    return privateRoutes.includes(pathname as PrivatePathname);
  }, [pathname, privateRoutes]);

  const isAdminRoute = useMemo(() => {
    return adminRoutes.includes(pathname as PrivatePathname);
  }, [pathname, adminRoutes]);

  // create the session
  useEffect(() => {
    const JWT = localStorage.getItem(AUTH_TOKEN);

    if (JWT && !currentUser) {
      const parsed = parseJwt(JWT);

      if (Object.keys(parsed).length) {
        setCurrentUser({
          userId: parsed.user_id,
          email: parsed.email,
          userRole: parsed.role,
          jwt: JWT,
        });
      }
    }

    setHydrating(false);
  }, [currentUser, setCurrentUser, router]);

  useEffect(() => {
    if (hydrating) {
      return;
    }

    // reroute non-admin from private
    if (isAdminRoute) {
      if (!currentUser) {
        router.push(PUBLIC_ROUTES.SIGNIN);
        return;
      }
      if (currentUser && currentUser.userRole !== 'role_admin') {
        router.push(PRIVATE_ROUTES.DASHBOARD);
        return;
      }
    }

    // reroute FROM public pages if signed in
    if (isPublicRoute && currentUser?.userId && !currentUser?.pauseOnRoute) {
      router.push(PRIVATE_ROUTES.DASHBOARD);
      return;
    }
    // reroute TO signin if signed out
    else if (!currentUser?.userId && isPrivateRoute) {
      router.push(PUBLIC_ROUTES.SIGNIN);
      return;
    }

    setReadyToRender(true);
  }, [isPrivateRoute, isPublicRoute, isAdminRoute, router, currentUser, hydrating]);

  if (!readyToRender) {
    return <div>LOADING...</div>; //<Loading />
  }

  return <div>{children}</div>;
}
