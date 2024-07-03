'use client';
import {
  Last_RecommendationsDocument,
  Recommendation,
  RecommendationType,
} from '@/shared/graphql/graphql';
import { useQuery } from '@apollo/client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export const useGetLastRecommendations = (type?: string) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams || '');
  const pathname = usePathname();
  const { replace } = useRouter();

  const onPageChange = (page: number) => {
    params.set('page', page.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  const { data, refetch, loading, error } = useQuery(
    Last_RecommendationsDocument,
  );

  useEffect(() => {
    const page = Number(searchParams?.get('page'));
    if (type) {
      page
        ? refetch({ type: type as RecommendationType, page })
        : refetch({ type: type as RecommendationType });
    } else {
      page ? refetch({ page }) : refetch();
    }
  }, [params, type]);

  return {
    recommendations:
      (data?.last_recommendations.recommendations as Recommendation[]) || [],
    loading,
    error,
    pagesCount: data?.last_recommendations.pagesCount,
    onPageChange,
  };
};
