'use client';

import { useState } from 'react';

import FirstPetForm from '@/components/create-profile/first-pet-form';
import FirstPetSuccess from '@/components/create-profile/first-pet-success';
import PageSubtitle from '@/components/parts/page-subtitle';
import PageTitle from '@/components/parts/page-title';
import SkipLink from '@/components/parts/skip-link';
import { PRIVATE_ROUTES } from '@/constants';
import { Pet } from '@/graphql/generated/graphql';

export default function UserNamePage() {
  const [petCreateResult, setPetCreateResult] = useState<Pet | null>(null);

  const onFormSubmitSuccess = (pet: Pet) => {
    setPetCreateResult(pet);
  };

  return (
    <>
      {petCreateResult ? (
        <FirstPetSuccess pet={petCreateResult} />
      ) : (
        <div className="space-y-10">
          <div>
            <PageTitle text={'Tell us about your wonderful pet!'} />
            <PageSubtitle text={'You can change these details and more pets later.'} />
          </div>

          <SkipLink href={PRIVATE_ROUTES.DASHBOARD} skipLinkText="Skip this and go to Dashboard" />
          {/* <SkipLink
            href={PRIVATE_ROUTES.UPDATE_NAME}
            skipLinkText="Skip this and update your name"
          /> */}

          <FirstPetForm onSuccess={onFormSubmitSuccess} />
        </div>
      )}
    </>
  );
}
