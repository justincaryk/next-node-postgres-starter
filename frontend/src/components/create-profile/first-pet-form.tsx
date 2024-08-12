'use client';

import Link from 'next/link';
import { useAtom } from 'jotai';
import { FormEvent, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import Button from '@/components/parts/form/button';
import FormField from '@/components/parts/form/form-field';
import { PRIVATE_ROUTES } from '@/constants';
import { Pet } from '@/graphql/generated/graphql';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCurrentUser, useSetCurrentUser } from '../auth/atoms/current-user';
import { usePetsApi } from '../pets/pets-api';
import { PET_FORM_FIELDS, PetAddSchema } from './types';

interface FirstPetFormProps {
  onSuccess: (pet: Pet) => void;
}
export default function FirstPetForm({ onSuccess }: FirstPetFormProps) {
  const [_, setCurrentUser] = useAtom(useSetCurrentUser);
  const [currentUser] = useAtom(useCurrentUser);
  const { data: animals } = usePetsApi().getAnimals;
  const { mutate: addPet, status, data } = usePetsApi().addPet;

  // pauseOnRoute is only used immediately after signup to prevent
  // the auth provider from rerouting directly to dashboard
  useEffect(() => {
    if (currentUser?.pauseOnRoute) {
      setCurrentUser({
        ...currentUser,
        pauseOnRoute: false,
      });
    }
  }, [currentUser, setCurrentUser]);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(PetAddSchema),
  });

  const trySubmit = async (data: Yup.InferType<typeof PetAddSchema>) => {
    if (isSubmitting) {
      return;
    }

    await addPet({
      animalId: data.animal,
      dob: data.dob,
      name: data.name,
      userId: currentUser?.userId,
    });
  };

  useEffect(() => {
    if (status === 'success') {
      if (!data.createPet?.pet?.id) {
        setError('root', {
          message: 'Sorry, something went wrong. Please refresh the page and try again.',
        });
      } else {
        onSuccess(data.createPet.pet as Pet);
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
        label="Pet name"
        placeholder="Pet name"
        type="text"
        errors={errors.name}
        required
        {...register(PET_FORM_FIELDS.NAME)}
      />

      <FormField
        label="Date of birth"
        placeholder="Date of birth"
        type="date"
        max={new Date().toISOString().split('T')[0]}
        errors={errors.dob}
        required
        {...register(PET_FORM_FIELDS.DOB)}
      />

      <FormField
        label="Pet type"
        placeholder="Pet type"
        errors={errors.animal}
        type="select"
        required
        options={
          animals?.allAnimals?.nodes.map((animal) => ({
            text: animal.name,
            value: animal.id,
          })) || []
        }
        {...register(PET_FORM_FIELDS.ANIMAL)}
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
