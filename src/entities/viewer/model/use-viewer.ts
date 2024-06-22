'use client';
import { ViewerDocument } from '@/shared/graphql/generated/graphql';
import { NetworkStatus, useQuery } from '@apollo/client';

export function useViewer() {
  const { data, error, loading, networkStatus } = useQuery(ViewerDocument);
  return {
    viewer: data?.profile,
    notAuthenticated: !!error && networkStatus !== NetworkStatus.refetch,
    loading,
  };
}
