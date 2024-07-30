import Link from 'next/link';

import { COMPANY_NAME, ROUTES } from '@/constants';
import { CheckIcon } from '@heroicons/react/24/outline';
import Button from '../parts/form/button';
import PageSubtitle from '../parts/page-subtitle';
import PageTitle from '../parts/page-title';

export default function RegisterSuccess() {
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
              <Link href={ROUTES.OCCUPATION}>
                <Button primary>Continue to profile setup</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
