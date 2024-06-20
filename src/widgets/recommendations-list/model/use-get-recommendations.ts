'use client';
import { RecommendationType } from '@/shared/constants/recommendations';
import {
  Last_RecommendationsDocument,
  Recommendation,
  RecommendationType as IRecommendationType,
} from '@/shared/graphql/generated/graphql';
import { useQuery } from '@apollo/client';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export const useGetRecommendations = () => {
  const { data, refetch, loading, error } = useQuery(
    Last_RecommendationsDocument,
  );
  const params = useSearchParams();

  useEffect(() => {
    const type = params.get('recommendations');
    if (type && type in RecommendationType)
      refetch({ type: type as IRecommendationType });
  }, [params]);

  return {
    recommendations: (data?.last_recommendations as Recommendation[]) || [],
    loading,
    error,
  };
};
