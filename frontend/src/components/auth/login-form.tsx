'use client';

import { useAtom } from 'jotai';
import { FormEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import Button from '@/components/parts/form/button';
import FormField from '@/components/parts/form/form-field';
import { SigninInput } from '@/graphql/generated/graphql';
import { parseJwt } from '@/utils/utils';
// import { sleep } from '@/utils/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCurrentUser, useSetCurrentUser } from './atoms/current-user';
import { useAuthApi } from './auth-api';
import { AUTH_FORM_FIELDS, AUTH_TOKEN, SigninSchema } from './types';

// TESTING ONLY:
// 1. email@exists.com will return "ok" and move forward
// 2. email@no-exist.com will return "not found"
// 3. all other will return "invalid credentials"
interface LoginProps {
  onSuccess: () => void;
}
export default function LoginForm({ onSuccess }: LoginProps) {
  const [signinError, setSigninError] = useState('');
  const { mutate: signin, data, status } = useAuthApi().signIn;

  const [_, setCurrentUser] = useAtom(useSetCurrentUser);
  const [currentUser] = useAtom(useCurrentUser);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(SigninSchema),
  });

  // sign in success
  useEffect(() => {
    if (status === 'success') {
      if (data.signin?.jwtToken && !currentUser?.userId) {
        localStorage.setItem(AUTH_TOKEN, data.signin.jwtToken);
        const parsed = parseJwt(data.signin.jwtToken);

        setCurrentUser({
          userId: parsed.user_id,
          email: parsed.email,
          userRole: parsed.role,
          jwt: data.signin?.jwtToken,
        });

        onSuccess();
      }
    }
  }, [status, data, currentUser, setCurrentUser, onSuccess]);

  // failed
  useEffect(() => {
    if (status === 'success' && !data.signin?.jwtToken) {
      setSigninError('The email or password is incorrect');
      return;
    }
  }, [status, data, setSigninError]);

  const trySubmit = async (data: Yup.InferType<typeof SigninSchema>) => {
    await signin(data as SigninInput);
  };

  return (
    <form
      className="space-y-6"
      onSubmit={(e: FormEvent) => void handleSubmit(trySubmit)(e)}
      noValidate
    >
      <FormField
        label="Email"
        placeholder="email"
        type="email"
        errors={errors.email}
        required
        {...register(AUTH_FORM_FIELDS.EMAIL)}
      />

      <FormField
        label="Password"
        placeholder="password"
        type="password"
        errors={errors.password}
        required
        {...register(AUTH_FORM_FIELDS.PASSWORD)}
      />

      <div className="text-red-error" role="alert">
        {signinError ? signinError : ''}
      </div>

      <Button primary type="submit" loading={isSubmitting}>
        Submit
      </Button>
    </form>
  );
}
