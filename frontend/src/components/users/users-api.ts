import { AdminAllUsersQuery } from '@/graphql/generated/graphql';
import GetAllUsersAdminRequest from '@/graphql/queries/admin-users';
import { useQuery } from '@tanstack/react-query';
import useGraphQL from '../graphql/useGraphQL';
import { staticQueryConfig } from '../react-query/defaults';

export enum USERS_QUERY_KEYS {
  USER_RECORDS = 'user_records',
}

export function useUsersApi() {
  const { graphQLClient } = useGraphQL();

  return {
    getUsers: useQuery({
      queryKey: [USERS_QUERY_KEYS.USER_RECORDS],
      queryFn: async () => graphQLClient.request<AdminAllUsersQuery>(GetAllUsersAdminRequest),
      ...staticQueryConfig,
    }),
  };
}
