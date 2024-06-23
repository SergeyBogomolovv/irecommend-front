'use client';
import {
  RecommendationCard,
  RecommendationSkeleton,
} from '@/entities/recommendation';
import { useGetRecommendations } from '../model/use-get-recommendations';
import { ScrollShadow } from '@nextui-org/react';

export function RecommendationsList() {
  const { recommendations, loading } = useGetRecommendations();

  return (
    <ScrollShadow className="flex flex-col sm:gap-y-6 gap-y-2 items-center justify-items-center sm:w-[524px]">
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
    </ScrollShadow>
  );
}
