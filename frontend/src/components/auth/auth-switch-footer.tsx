import { PrivatePathname, PublicPathname } from '@/types';

import Link from 'next/link';

interface AuthSwitchFooterProps {
  to: PrivatePathname | PublicPathname;
  text: string;
  linkText: string;
}
export default function AuthSwitchFooter({ to, text, linkText }: AuthSwitchFooterProps) {
  return (
    <div className="w-full">
      <div className="pt-4 border-t flex justify-center text-sm">
        {text} &nbsp;
        <Link href={to} className="underline cursor-pointer" role="link">
          {linkText}
        </Link>
      </div>
    </div>
  );
}
