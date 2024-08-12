'use client';

import { useAtom } from 'jotai';
import { FormEvent, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { Pet } from '@/graphql/generated/graphql';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCurrentUser } from '../auth/atoms/current-user';
import { PET_FORM_FIELDS, PetAddSchema } from '../create-profile/types';
import Button from '../parts/form/button';
import FormField from '../parts/form/form-field';
import { usePetsApi } from './pets-api';

interface AddPetFormProps {
  onSuccess: (pet: Pet) => void;
}
export default function AddPetForm({ onSuccess }: AddPetFormProps) {
  const [currentUser] = useAtom(useCurrentUser);
  const { data: animals } = usePetsApi().getAnimals;
  const { mutate: addPet, status, data } = usePetsApi().addPet;

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

      <Button type="submit" primary aria-invalid={!isValid}>
        Save new pet
      </Button>
    </form>
  );
}
