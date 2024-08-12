import { useParams, usePathname } from 'next/navigation';

export type MemberType = 'ranger' | 'friend';

type CurrentMemberReturnType = {
  id: string | null;
  memberType: MemberType | null;
  referenceColumnName: 'characterId' | 'friendId' | null;
};
export function useCurrentMember() {
  const member = {
    id: null,
    memberType: null,
    referenceColumnName: null,
  } as CurrentMemberReturnType;

  const params = useParams();
  const pathname = usePathname();

  const isRanger = pathname?.includes('ranger');
  const isFriend = pathname?.includes('companion');
  const memberId = (params?.memberId as string) || null;

  if (!member || member.id !== memberId) {
    member.id = memberId;
    member.memberType = isRanger ? 'ranger' : isFriend ? 'friend' : null;
    member.referenceColumnName = isRanger ? 'characterId' : isFriend ? 'friendId' : null;
  }

  return member;
}
