'use client';
import { MyRecommendation } from '@/features/my-recommendation';
import { useGetMyRecommendations } from '../model/use-get-my-recommendations';
import { Recommendation } from '@/shared/graphql/graphql';
import { RecommendationSkeleton } from '@/entities/recommendation';
import Image from 'next/image';

export const MyRecommendations = () => {
  const { recommendations, loading } = useGetMyRecommendations();

  return (
    <div className="flex flex-col sm:gap-y-6 gap-y-2 items-center justify-items-center sm:w-[524px] mb-10">
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
            <div className="mt-10 flex flex-col gap-y-4 items-center justify-center">
              <Image
                className="w-10/12"
                src={'/searching.svg'}
                alt=""
                width={500}
                height={500}
              />
              <p className="text-xl font-semibold">
                Вы не создали ни одной рекомендации.
              </p>
              <small className="text-sm text-foreground-500">
                Создайте рекомендацию, нажав на кнопку в правом нижнем углу.
              </small>
            </div>
          )}
        </>
      )}
    </div>
  );
};
