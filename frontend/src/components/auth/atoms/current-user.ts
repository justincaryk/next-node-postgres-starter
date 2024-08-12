'use client';

import { atom, useAtom } from 'jotai';

import { AUTH_TOKEN } from '../types';

export interface CurrentUser {
  userId: string;
  email: string;
  userRole: 'role_user' | 'role_admin';
  jwt: string;
  pauseOnRoute?: boolean;
}

export const useCurrentUser = atom<CurrentUser | null>(null);

export const useSetCurrentUser = atom(null, (get, set, currentUser: CurrentUser | null) => {
  set(useCurrentUser, currentUser);
});

export function useSignout() {
  const [_, setCurrentUser] = useAtom(useSetCurrentUser);
  return {
    signout: () => {
      setCurrentUser(null);
      localStorage.setItem(AUTH_TOKEN, '');
    },
  };
}
