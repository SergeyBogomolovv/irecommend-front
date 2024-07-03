'use client';
import {
  Favorites_RecommendationsDocument,
  Recommendation,
} from '@/shared/graphql/graphql';
import { useQuery } from '@apollo/client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export const useGetFavorites = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams || '');
  const pathname = usePathname();
  const { replace } = useRouter();

  const onPageChange = (page: number) => {
    params.set('page', page.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  const { data, refetch, loading, error } = useQuery(
    Favorites_RecommendationsDocument,
  );

  useEffect(() => {
    const page = Number(searchParams?.get('page'));
    page ? refetch({ page }) : refetch();
  }, [params]);

  return {
    recommendations:
      (data?.favorites_recommendations.recommendations as Recommendation[]) ||
      [],
    loading,
    error,
    pagesCount: data?.favorites_recommendations.pagesCount,
    onPageChange,
  };
};
