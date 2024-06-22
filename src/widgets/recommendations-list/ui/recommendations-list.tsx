'use client';
import {
  RecommendationCard,
  RecommendationSkeleton,
} from '@/entities/recommendation';
import { useGetRecommendations } from '../model/use-get-recommendations';

export function RecommendationsList() {
  const { recommendations, loading } = useGetRecommendations();

  return (
    <div className="flex flex-col mt-10 gap-6 container flex-wrap w-full items-center justify-items-center">
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
    </div>
  );
}
