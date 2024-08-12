'use client';

import Link from 'next/link';
import { useAtom } from 'jotai';
import { FormEvent, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import Button from '@/components/parts/form/button';
import FormField from '@/components/parts/form/form-field';
// import SkipLink from '@/components/parts/skip-link';
import { PRIVATE_ROUTES } from '@/constants';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCurrentUser } from '../auth/atoms/current-user';
import { useAuthApi } from '../auth/auth-api';
import { USER_NAME_FORM_FIELDS, UserNameSchema } from './types';

interface UpdateUserFormProps {
  onSuccess: () => void;
}
export default function UserNameForm({ onSuccess }: UpdateUserFormProps) {
  const { mutate: updateUser, status, data } = useAuthApi().updateUser;
  const [currentUser] = useAtom(useCurrentUser);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(UserNameSchema),
  });

  const trySubmit = async (data: Yup.InferType<typeof UserNameSchema>) => {
    if (isSubmitting) {
      return;
    }

    await updateUser({
      id: currentUser?.userId,
      patch: {
        firstName: data.firstName,
        lastName: data.lastName,
      },
    });
  };

  useEffect(() => {
    if (status === 'success') {
      if (!data.updateUserById?.user?.id) {
        setError('root', {
          message: 'Sorry, something went wrong. Please refresh the page and try again.',
        });
      } else {
        onSuccess();
      }
      return;
    }
    // server error
    if (status === 'error') {
      setError('root', { message: 'An unknown error has occured. Please reload and try again' });
    }
  }, [data, setError, status, onSuccess]);

  return (
    <form
      className="space-y-6"
      onSubmit={(e: FormEvent) => void handleSubmit(trySubmit)(e)}
      noValidate
    >
      <FormField
        label="First name"
        placeholder="First name"
        type="text"
        errors={errors.firstName}
        required
        {...register(USER_NAME_FORM_FIELDS.FIRST_NAME)}
      />

      <FormField
        label="Last name"
        placeholder="Last name"
        type="text"
        errors={errors.lastName}
        required
        {...register(USER_NAME_FORM_FIELDS.LAST_NAME)}
      />

      <div className="text-red-error" role="alert">
        {errors.root ? errors.root.message : ''}
      </div>

      <div className="flex gap-x-4 items-center justify-end">
        <Link href={PRIVATE_ROUTES.DASHBOARD} className="w-1/3">
          <Button type="button">Skip</Button>
        </Link>
        <div className="w-2/3">
          <Button primary type="submit" aria-disabled={!isValid}>
            Continue
          </Button>
        </div>
      </div>
    </form>
  );
}
