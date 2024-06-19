'use client';
import { ViewerDocument } from '@/shared/graphql/generated/graphql';
import { useQuery } from '@apollo/client';

export function useViewer() {
  const { data, error, loading } = useQuery(ViewerDocument);
  return {
    viewer: data?.profile,
    error,
    loading,
  };
}
