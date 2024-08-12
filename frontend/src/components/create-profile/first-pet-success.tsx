'use client';

import { useRouter } from 'next/navigation';

import { PRIVATE_ROUTES } from '@/constants';
import { Pet } from '@/graphql/generated/graphql';
import { CheckIcon } from '@heroicons/react/24/outline';
import Button from '../parts/form/button';
import PageSubtitle from '../parts/page-subtitle';
import PageTitle from '../parts/page-title';

interface AddFirstPetSuccessProps {
  pet: Pet;
}
export default function FirstPetSuccess({ pet }: AddFirstPetSuccessProps) {
  const router = useRouter();

  const handleClickNext = () => {
    router.push(PRIVATE_ROUTES.DASHBOARD);
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
          <PageTitle
            text={`You've added your first pet, ${pet.name}!`}
            className="text-center pt-4"
          />
          <PageSubtitle
            text={'Click below to finish setting up your profile'}
            className="text-center"
          />
          <div>
            <div className="mt-10">
              <Button primary onClick={handleClickNext}>
                Continue to dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
