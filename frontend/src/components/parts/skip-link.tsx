'use client';

import { twMerge } from 'tailwind-merge';

interface SkipLinkProps {
  href: string;
  skipLinkText: string;
  className?: string;
}
export default function SkipLink({ href, skipLinkText, className = '' }: SkipLinkProps) {
  const classes = twMerge('sr-only focus:not-sr-only focus:underline text-lg', className);
  return (
    <a className={classes} href={href}>
      {skipLinkText}
    </a>
  );
}
