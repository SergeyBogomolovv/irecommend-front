'use client';

import {
  Recommendation,
  Search_RecommendationsDocument,
} from '@/shared/graphql/graphql';
import { useQuery } from '@apollo/client';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export const useGetBySearch = () => {
  const searchParams = useSearchParams();
  const { data, refetch, loading, error } = useQuery(
    Search_RecommendationsDocument,
  );

  useEffect(() => {
    if (searchParams.get('query')) {
      refetch({ query: searchParams.get('query')! });
    }
  }, [searchParams]);
  return {
    loading,
    recommendations: data?.search_recommendations as Recommendation[],
    error,
  };
};
