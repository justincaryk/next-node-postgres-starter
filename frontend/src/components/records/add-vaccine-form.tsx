'use client';

import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import Button from '@/components/parts/form/button';
import FormField from '@/components/parts/form/form-field';
import { yupResolver } from '@hookform/resolvers/yup';
import { RECORD_FORM_FIELDS, VaccineFormSchema } from './types';

interface AddRecordFormProps {
  onSuccess: (data: Yup.InferType<typeof VaccineFormSchema>) => void;
}
export default function AddVaccineForm({ onSuccess }: AddRecordFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(VaccineFormSchema),
  });

  const trySubmitVaccine = async (data: Yup.InferType<typeof VaccineFormSchema>) => {
    onSuccess(data);
    return;
  };

  return (
    <div>
      <form
        className="space-y-2"
        onSubmit={(e: FormEvent) => void handleSubmit(trySubmitVaccine)(e)}
        noValidate
      >
        <FormField
          label="Record name"
          placeholder="Record name"
          type="text"
          errors={errors.name}
          required
          {...register(RECORD_FORM_FIELDS.NAME)}
        />

        <FormField
          label="Date administered"
          placeholder="Date administered"
          type="date"
          errors={errors.administeredAt}
          required
          {...register(RECORD_FORM_FIELDS.ADMINISTERED_AT)}
        />

        <Button primary type="submit">
          Save New Record
        </Button>
      </form>
    </div>
  );
}
