import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './constants';

export type AuthAccountRequestBody = {
  email: string;
  password: string;
};

export type RegisterAccountResponsePayload = {
  code: 'ok' | 'email in use';
};

export type SigninResponsePayload = {
  code: 'ok' | 'invalid credentials' | 'no user found';
};

export interface InterestOption {
  id: number;
  name: string;
  relatedOccupations: number[];
}

export type Industry = {
  id: number;
  name: string;
};

export type PublicPathname = (typeof PUBLIC_ROUTES)[keyof typeof PUBLIC_ROUTES];
export type PrivatePathname = (typeof PRIVATE_ROUTES)[keyof typeof PRIVATE_ROUTES];
