import * as Yup from 'yup';

export type AuthFormFields = {
  username: string;
  password: string;
};

export const AUTH_TOKEN = 'auth-token';

export enum AUTH_FORM_FIELDS {
  EMAIL = 'email',
  PASSWORD = 'password',
}

export const SigninSchema = Yup.object().shape({
  email: Yup.string().email('A valid email is required').required('Email is required'),
  password: Yup.string().required('Password is required'),
});
