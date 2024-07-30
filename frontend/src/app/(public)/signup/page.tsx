'use client';

import { useState } from 'react';

import AuthSwitchFooter from '@/components/parts/auth-switch-footer';
import PageTitle from '@/components/parts/page-title';
import RegisterForm from '@/components/register/register-form';
import RegisterSuccess from '@/components/register/register-success';
import { ROUTES } from '@/constants';

export default function SignupPage() {
  const [successfullyRegistered, setSuccessfullyRegistered] = useState(false);

  const onFormSubmitSuccess = () => {
    setSuccessfullyRegistered(true);
  };

  return (
    <>
      {successfullyRegistered ? (
        <RegisterSuccess />
      ) : (
        <div className="space-y-10">
          <PageTitle text={'Create an account.'} />
          <RegisterForm onSuccess={onFormSubmitSuccess} />
          <AuthSwitchFooter to={ROUTES.SIGNIN} text="Already a user?" linkText="Log in" />
        </div>
      )}
    </>
  );
}
