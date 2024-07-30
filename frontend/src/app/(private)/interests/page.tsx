'use client';

import { InterestOption } from '@/types';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import Card from '@/components/parts/card';
import Button from '@/components/parts/form/button';
import PageSubtitle from '@/components/parts/page-subtitle';
import PageTitle from '@/components/parts/page-title';
import SkipLink from '@/components/parts/skip-link';
import { ROUTES } from '@/constants';
import { interestOptions } from '@/mocks';

export default function Interests() {
  const router = useRouter();
  const [userInterestIds, updateUserInterestIds] = useState<number[]>([]);

  const handleInterestClick = (interest: InterestOption) => {
    const alreadySelected = userInterestIds.find((x) => x === interest.id);
    if (alreadySelected) {
      updateUserInterestIds(userInterestIds.filter((x) => x !== interest.id));
    } else {
      updateUserInterestIds([interest.id, ...userInterestIds]);
    }
  };

  const submitInterests = () => {
    const selectedInterests = interestOptions.filter((opt) => userInterestIds.includes(opt.id));
    console.log('user interests: ', selectedInterests);

    router.push(ROUTES.DASHBOARD);
  };

  return (
    <div className="space-y-10">
      <div>
        <PageTitle text={'Tell us about your interests.'} />
        <PageSubtitle text={'Please choose as many as you like.'} />
      </div>
      <SkipLink href={ROUTES.DASHBOARD} skipLinkText="Skip and go to Dashboard" />
      <div
        className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-4"
        role="group"
      >
        {interestOptions.map((opt, i) => (
          <Card
            key={opt.id}
            id={`card-${i + 1}`}
            onClick={() => handleInterestClick(opt)}
            active={userInterestIds.includes(opt.id)}
          >
            {opt.name}
          </Card>
        ))}
      </div>
      <div className="flex gap-x-4 items-center justify-end">
        <Link
          href={ROUTES.DASHBOARD}
          className="w-1/3"
          title="Skip interests and go straight to dashboard"
        >
          <Button type="submit">Skip</Button>
        </Link>
        <div className="w-2/3">
          <Button
            primary
            type="submit"
            disabled={!userInterestIds.length}
            aria-disabled={!userInterestIds.length}
            onClick={submitInterests}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
