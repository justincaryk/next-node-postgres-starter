type OptimisticResults = 'optimistic' | 'isRestoring';

export const staticQueryConfig = {
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  _optimisticResults: 'optimistic' as OptimisticResults,
};
