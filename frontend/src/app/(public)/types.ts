import * as Yup from 'yup';

import { zxcvbn } from '@zxcvbn-ts/core';

// import { passwordStrength } from 'check-password-strength'

export enum AUTH_FORM_FIELDS {
  EMAIL = 'email',
  PASSWORD = 'password',
}

export const weakPasswordErrorMsg = 'This password is not strong enough!';

export const SigninSchema = Yup.object().shape({
  email: Yup.string().email('A valid email is required').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export const SignupSchema = Yup.object().shape({
  email: Yup.string().email('A valid email is required').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .test('is-strong-enough', weakPasswordErrorMsg, (password: string) => {
      const { score } = zxcvbn(password);
      if (score < 3) {
        return false;
      }
      return true;
    }),
});
