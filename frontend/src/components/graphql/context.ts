'use client';

import { GraphQLClient } from 'graphql-request';
import { createContext } from 'react';

export const GraphQLClientContext = createContext<{
  graphQLClient: GraphQLClient;
}>({
  graphQLClient: new GraphQLClient(
    process.env.NEXT_PUBLIC_GRAPHQL_HOST || 'http://127.0.0.1:5000/api/graphql',
    {
      headers: {
        credentials: 'include',
        method: 'POST',
        mode: 'cors',
      },
    },
  ),
});

export default GraphQLClientContext;
