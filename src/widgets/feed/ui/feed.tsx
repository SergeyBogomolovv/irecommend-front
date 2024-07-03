'use client';
import { useGetLastRecommendations } from '../model/use-get-last-recommendations';
import FeedContainer from '@/shared/ui/feed-container';
interface Props {
  type?: string;
}

export function Feed({ type }: Props) {
  const { recommendations, loading, onPageChange, pagesCount } =
    useGetLastRecommendations(type);

  return (
    <FeedContainer
      recommendations={recommendations}
      loading={loading}
      onPageChange={onPageChange}
      pagesCount={pagesCount}
    />
  );
}
