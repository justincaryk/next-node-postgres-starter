'use client';

import { useContext } from 'react';

import GraphQLContext from './context';

function useGraphQL() {
  return useContext(GraphQLContext);
}

export default useGraphQL;
