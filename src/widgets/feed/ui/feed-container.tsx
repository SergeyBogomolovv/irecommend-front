import {
  Recommendation,
  RecommendationSkeleton,
} from '@/entities/recommendation';
import { FavoriteButton } from '@/features/favorite-button';
import { Recommendation as IRecommendation } from '@/shared/graphql/graphql';
import ImagesCarousel from '@/shared/ui/images-carousel';
import { CommentsList } from '@/widgets/comments';
import { Pagination } from '@nextui-org/react';

interface Props {
  recommendations: IRecommendation[];
  loading?: boolean;
  onPageChange: (page: number) => void;
  pagesCount?: number;
  emptyRender?: React.ReactNode;
}

const FeedContainer = ({
  recommendations,
  loading,
  onPageChange,
  pagesCount,
  emptyRender,
}: Props) => {
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
                <Recommendation
                  key={recommendation.id}
                  title={recommendation.title}
                  description={recommendation.description}
                  link={recommendation.link}
                  username={recommendation.author.profile.name}
                  avatar={recommendation.author.profile.logo}
                  created_at={recommendation.created_at}
                  loading={loading}
                  actionButton={
                    <FavoriteButton recommendation={recommendation} />
                  }
                  footer={<CommentsList recommendationId={recommendation.id} />}
                  body={
                    recommendation.images.length ? (
                      <ImagesCarousel
                        images={recommendation.images.map((image) => image.url)}
                      />
                    ) : null
                  }
                />
              ))}
            </>
          ) : (
            <>{emptyRender}</>
          )}
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
