'use client';
import { ViewerDocument } from '@/shared/graphql/graphql';
import { NetworkStatus, useQuery } from '@apollo/client';

export function useViewer() {
  const { data, error, loading, networkStatus } = useQuery(ViewerDocument, {
    refetchWritePolicy: 'overwrite',
  });
  return {
    viewer: data?.profile,
    notAuthenticated: !!error && networkStatus !== NetworkStatus.refetch,
    loading: loading,
  };
}
