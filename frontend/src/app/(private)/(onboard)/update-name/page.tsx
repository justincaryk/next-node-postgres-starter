'use client';

import { useState } from 'react';

import UserNameForm from '@/components/create-profile/user-name-form';
import UserNameSuccess from '@/components/create-profile/user-name-success';
import PageSubtitle from '@/components/parts/page-subtitle';
import PageTitle from '@/components/parts/page-title';
import SkipLink from '@/components/parts/skip-link';
import { PRIVATE_ROUTES } from '@/constants';

export default function UserNamePage() {
  const [nameUpdated, setNameUpdated] = useState(false);

  const handleFormSubmitSuccess = () => {
    setNameUpdated(true);
  };

  return (
    <>
      {nameUpdated ? (
        <UserNameSuccess />
      ) : (
        <div className="space-y-10">
          <div>
            <PageTitle text={'Tell us your name!'} />
            <PageSubtitle
              text={'You can skip this and add these details later if you would like.'}
            />
          </div>

          <SkipLink href={PRIVATE_ROUTES.DASHBOARD} skipLinkText="Skip this and go to Dashboard" />

          <UserNameForm onSuccess={handleFormSubmitSuccess} />
        </div>
      )}
    </>
  );
}
