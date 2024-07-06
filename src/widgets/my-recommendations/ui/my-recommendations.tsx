'use client';
import { MyRecommendation } from '@/features/my-recommendation';
import { useGetMyRecommendations } from '../model/use-get-my-recommendations';
import { Recommendation } from '@/shared/graphql/graphql';
import { RecommendationSkeleton } from '@/entities/recommendation';

export const MyRecommendations = () => {
  const { recommendations, loading } = useGetMyRecommendations();

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
          {recommendations.length > 0 ? (
            <>
              {recommendations.map((recommendation) => (
                <MyRecommendation
                  key={recommendation.id}
                  recommendation={recommendation as Recommendation}
                />
              ))}
            </>
          ) : (
            <>No data</>
          )}
        </>
      )}
    </div>
  );
};
