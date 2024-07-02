import { RecommendationSkeleton } from '@/entities/recommendation';
import { Recommendation } from '../graphql/graphql';
import { RecommendationCard } from '@/widgets/recommendation';
import { Pagination } from '@nextui-org/react';

interface Props {
  recommendations: Recommendation[];
  loading?: boolean;
  onPageChange: (page: number) => void;
  pagesCount?: number;
}

const FeedContainer = ({
  recommendations,
  loading,
  onPageChange,
  pagesCount,
}: Props) => {
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
      {!!pagesCount && pagesCount > 1 && (
        <Pagination
          onChange={onPageChange}
          showControls
          total={pagesCount}
          initialPage={1}
        />
      )}
    </div>
  );
};

export default FeedContainer;
