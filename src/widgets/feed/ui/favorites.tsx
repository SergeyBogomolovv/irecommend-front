'use client';
import { useGetFavorites } from '../model/use-get-favorites';
import FeedContainer from './feed-container';

export function Favorites() {
  const { recommendations, loading, onPageChange, pagesCount } =
    useGetFavorites();

  return (
    <FeedContainer
      recommendations={recommendations}
      loading={loading}
      onPageChange={onPageChange}
      pagesCount={pagesCount}
    />
  );
}
