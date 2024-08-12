import type { Metadata } from 'next';

import './globals.css';

import { Quicksand } from 'next/font/google';
import React from 'react';

import { COMPANY_NAME } from '@/constants';
import Providers from './providers';

const quicksand = Quicksand({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: COMPANY_NAME,
  description: 'Get to Learning!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
