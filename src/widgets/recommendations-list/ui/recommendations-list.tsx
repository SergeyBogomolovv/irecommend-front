'use client';
import {
  RecommendationCard,
  RecommendationSkeleton,
} from '@/entities/recommendation';
import { useGetRecommendations } from '../model/use-get-recommendations';
import { Pagination } from '@nextui-org/react';
interface Props {
  type?: string;
}
export function RecommendationsList({ type }: Props) {
  const { recommendations, loading, onPageChange, pagesCount } =
    useGetRecommendations(type);

  return (
    <div className="flex flex-col sm:gap-y-6 gap-y-2 items-center justify-items-center sm:w-[524px]">
      {loading ? (
        <>
          <RecommendationSkeleton />
          <RecommendationSkeleton />
          <RecommendationSkeleton />
        </>
      ) : (
        <>
          {recommendations.map((recommendation) => (
            <RecommendationCard
              key={recommendation.id}
              recommendation={recommendation}
            />
          ))}
        </>
      )}
      <Pagination
        onChange={onPageChange}
        showControls
        total={pagesCount || 1}
        initialPage={1}
      />
    </div>
  );
}
