'use client';

import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import Button from '@/components/parts/form/button';
import FormField from '@/components/parts/form/form-field';
import { yupResolver } from '@hookform/resolvers/yup';
import { RECORD_FORM_FIELDS, VisitFormSchema } from './types';

interface AddVisitFormProps {
  onSuccess: (data: Yup.InferType<typeof VisitFormSchema>) => void;
}
export default function AddVetVistForm({ onSuccess }: AddVisitFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(VisitFormSchema),
  });

  // this really doesn't need to do anything
  const trySubmit = async (data: Yup.InferType<typeof VisitFormSchema>) => {
    onSuccess(data);
    return;
  };

  return (
    <form
      className="space-y-2"
      key={2}
      onSubmit={(e: FormEvent) => void handleSubmit(trySubmit)(e)}
      noValidate
    >
      <FormField
        label="Vet Name"
        placeholder="Vet name"
        type="text"
        errors={errors.vetName}
        required
        {...register(RECORD_FORM_FIELDS.VET_NAME)}
      />

      <FormField
        label="Visit Date"
        placeholder="Visit Date"
        type="date"
        errors={errors.visitDate}
        required
        {...register(RECORD_FORM_FIELDS.VISIT_DATE)}
      />

      <FormField
        label="Notes"
        placeholder="Notes"
        type="textarea"
        errors={errors.notes}
        {...register(RECORD_FORM_FIELDS.NOTES)}
      />

      <Button primary type="submit">
        Save New Record
      </Button>
    </form>
  );
}
