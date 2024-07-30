'use client';

import Link from 'next/link';
import React from 'react';

import { ROUTES } from '@/constants';

export default function Home() {
  return (
    <div className="mt-20">
      <div className="w-full flex justify-center items-center flex-col">
        <div className="w-2/3 space-y-10">
          <div className="space-y-4">
            <div className="text-xl font-bold">Begin Journey</div>
            <ul>
              <li>
                <Link href={ROUTES.SIGNUP}>Sign up</Link>
              </li>
              <li>
                <Link href={ROUTES.SIGNIN}>Log in</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="text-xl font-bold">All Routes:</div>
            <ul>
              <li>
                <Link href={ROUTES.SIGNUP}>Sign up</Link>
              </li>
              <li>
                <Link href={ROUTES.SIGNUP}>Log in</Link>
              </li>
              <li>
                <Link href={ROUTES.DASHBOARD}>
                  Dashboard (only used to complete the user journey)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
