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
