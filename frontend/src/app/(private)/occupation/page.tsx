'use client';

import { Industry } from '@/types';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Card from '@/components/parts/card';
import Button from '@/components/parts/form/button';
import PageSubtitle from '@/components/parts/page-subtitle';
import PageTitle from '@/components/parts/page-title';
import SkipLink from '@/components/parts/skip-link';
import { ROUTES } from '@/constants';
import { industries } from '@/mocks';

export default function Occupation() {
  const router = useRouter();
  const [userIndustry, setUserIndustry] = useState<Industry | null>(null);

  const handleIndustryClick = (industry: Industry) => {
    setUserIndustry(industry);
  };

  const submitOccupation = () => {
    console.log('user occupation: ', userIndustry);
    if (!userIndustry?.id) {
      return;
    }
    router.push(ROUTES.INTERESTS);
  };

  return (
    <div className="space-y-10">
      <div>
        <PageTitle text={'Tell us about yourself.'} />
        <PageSubtitle text={'What is your professional background?'} />
      </div>

      <SkipLink href={ROUTES.INTERESTS} skipLinkText="Skip and go to Interests List" />
      <SkipLink href={ROUTES.DASHBOARD} skipLinkText="Skip and go to Dashboard" />

      <div
        className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-4"
        role="group"
      >
        {industries.map((industry) => (
          <Card
            key={industry.id}
            active={industry.id === userIndustry?.id}
            onClick={() => handleIndustryClick(industry)}
          >
            {industry.name}
          </Card>
        ))}
      </div>
      <div className="flex gap-x-4 items-center justify-end">
        <Link href={ROUTES.INTERESTS} className="w-1/3">
          <Button type="submit">Skip</Button>
        </Link>
        <div className="w-2/3">
          <Button
            primary
            type="submit"
            disabled={!userIndustry?.id}
            aria-disabled={!userIndustry?.id}
            onClick={submitOccupation}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
