'use client';

import { GraphQLClient } from 'graphql-request';
import { useAtom } from 'jotai';
import { PropsWithChildren, useEffect, useMemo, useState } from 'react';

import { useCurrentUser } from '../auth/atoms/current-user';
import GraphQLClientContext from './context';

export default function GraphQLProvider({ children }: PropsWithChildren) {
  const [currentUser] = useAtom(useCurrentUser);
  const headers = useMemo(() => {
    const headers = new Headers();

    if (currentUser?.jwt) {
      console.log('jwt:::', currentUser?.jwt);
      headers.append('Authorization', `Bearer ${currentUser?.jwt}`);
      headers.append('mode', 'cors');
    }

    return headers;
  }, [currentUser]);

  const [graphQLClient, updateGraphQLClient] = useState(
    new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_HOST || 'http://127.0.0.1:5000/api/graphql', {
      headers,
    }),
  );

  useEffect(() => {
    if (currentUser?.jwt) {
      updateGraphQLClient(
        new GraphQLClient(
          process.env.NEXT_PUBLIC_GRAPHQL_HOST || 'http://127.0.0.1:5000/api/graphql',
          {
            headers,
          },
        ),
      );
    }
  }, [currentUser, headers]);

  return (
    <GraphQLClientContext.Provider value={{ graphQLClient }}>
      {children}
    </GraphQLClientContext.Provider>
  );
}
