'use client';

import React from 'react';

import { COMPANY_NAME } from '@/constants';
import reportAccessibility from '@/utils/report-accessibility';

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-slate-50 mb-25 min-h-screen">
      <div className="w-full flex items-center py-2 px-12 justify-end" role="banner">
        <div className="font-bold text-4xl text-blue-dark">{COMPANY_NAME}</div>
        <div className="rounded-full bg-blue-dark ml-2 p-1">
          <div className="rounded-full bg-blue-light p-1">
            <img src="my-pets-logo.png" className="max-h-7" alt={`${COMPANY_NAME} Logo`} />
          </div>
        </div>
      </div>
      <main className="flex justify-center pb-10 lg:pb-6">
        <div className="w-full px-10">{children}</div>
      </main>
    </div>
  );
}

// @eslint-disable-next-line @typescript-eslint/no-floating-promises
void reportAccessibility(React);

export default DashboardLayout;
