'use client';

import { useState } from 'react';

import AuthSwitchFooter from '@/components/auth/auth-switch-footer';
import RegisterForm from '@/components/create-profile/register-form';
import RegisterSuccess from '@/components/create-profile/register-success';
import PageTitle from '@/components/parts/page-title';
import { PUBLIC_ROUTES } from '@/constants';
import { SignupResult } from '@/graphql/generated/graphql';

export default function SignupPage() {
  const [registerResult, setRegisterResult] = useState<SignupResult | null>(null);

  const onFormSubmitSuccess = (result: SignupResult) => {
    setRegisterResult(result);
  };

  return (
    <>
      {registerResult ? (
        <RegisterSuccess result={registerResult} />
      ) : (
        <div className="space-y-10">
          <PageTitle text={'Create an account.'} />
          <RegisterForm onSuccess={onFormSubmitSuccess} />
          <AuthSwitchFooter to={PUBLIC_ROUTES.SIGNIN} text="Already a user?" linkText="Log in" />
        </div>
      )}
    </>
  );
}
