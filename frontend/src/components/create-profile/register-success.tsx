'use client';

import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';

import { COMPANY_NAME, PRIVATE_ROUTES } from '@/constants';
import { SignupResult } from '@/graphql/generated/graphql';
import { parseJwt } from '@/utils/utils';
import { CheckIcon } from '@heroicons/react/24/outline';
import { useSetCurrentUser } from '../auth/atoms/current-user';
import { AUTH_TOKEN } from '../auth/types';
import Button from '../parts/form/button';
import PageSubtitle from '../parts/page-subtitle';
import PageTitle from '../parts/page-title';

interface RegisterSuccessProps {
  result: SignupResult;
}
export default function RegisterSuccess({ result }: RegisterSuccessProps) {
  const [_, setCurrentUser] = useAtom(useSetCurrentUser);
  const router = useRouter();

  const handleClickNext = () => {
    localStorage.setItem(AUTH_TOKEN, result.jwtToken);
    const parsed = parseJwt(result.jwtToken);

    setCurrentUser({
      userId: parsed.user_id,
      email: parsed.email,
      userRole: parsed.role,
      jwt: result.jwtToken,
      pauseOnRoute: true,
    });

    router.push(PRIVATE_ROUTES.ADD_FIRST_PET);
  };

  return (
    <div
      className="p-6 space-y-10 flex justify-center"
      aria-live="polite"
      title="Account successfully created."
    >
      <div className="pb-6 inline-block text-blue-x-dark">
        <div className="bg-green-md rounded-t-lg py-4">
          <div className="flex justify-center">
            <div className="inline-block -mt-10 rounded-full bg-green-md p-1 border-4 border-white">
              <CheckIcon className="w-10" />
            </div>
          </div>
          <div className="w-full block text-3xl text-center font-bold">Success!</div>
        </div>
        <div className="px-6 pb-6 space-y-4 border-b border-l border-r rounded-lg">
          <PageTitle text={`You just joined ${COMPANY_NAME}!`} className="text-center pt-4" />
          <PageSubtitle
            text={'Click below to finish setting up your profile'}
            className="text-center"
          />
          <div>
            <div className="mt-10">
              <Button primary onClick={handleClickNext}>
                Continue to profile setup
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
