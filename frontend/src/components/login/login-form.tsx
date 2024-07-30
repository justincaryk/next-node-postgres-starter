'use client';

import { SigninResponsePayload } from '@/types';

import { FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { AUTH_FORM_FIELDS, SigninSchema } from '@/app/(public)/types';
import Button from '@/components/parts/form/button';
import FormField from '@/components/parts/form/form-field';
// import { sleep } from '@/utils/utils';
import { yupResolver } from '@hookform/resolvers/yup';

// TESTING ONLY:
// 1. email@exists.com will return "ok" and move forward
// 2. email@no-exist.com will return "not found"
// 3. all other will return "invalid credentials"

interface LoginProps {
  onSuccess: () => void;
}
export default function LoginForm({ onSuccess }: LoginProps) {
  const [signinError, setSigninError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(SigninSchema),
  });

  const trySubmit = async (data: Yup.InferType<typeof SigninSchema>) => {
    console.log('data: ', data);

    try {
      const res = await fetch('/api/sign-in', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      const status = res.status;
      const result = (await res.json()) as SigninResponsePayload;

      if (status === 200) {
        if (result.code === 'ok') {
          // artificial sleep timer for debugging transition states
          // await sleep(1500);
          onSuccess();
        } else if (result.code === 'invalid credentials') {
          setSigninError('The email or password is incorrect');
        } else if (result.code === 'no user found') {
          setSigninError('No user was found');
        }
      }
    } catch (err) {
      // TODO: set general error
      console.error('error: ', err);
    }
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
