import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
import { User } from '@/entities/user';
import { formatDate } from '@/shared/lib/format-date';
import { FavoriteButton } from '@/features/favorite-button';
import { Recommendation as IRecommendation } from '@/shared/graphql/graphql';
import ImagesCarousel from '@/shared/ui/images-carousel';
import { Recommendation } from '@/entities/recommendation';
import { CommentsList } from '@/widgets/comments';

interface Props {
  loading?: boolean;
  recommendation: IRecommendation;
}

export function RecommendationCard({ loading, recommendation }: Props) {
  return (
    <Card className="py-2 w-full">
      <CardHeader className="pb-1 pt-2 px-4 flex-col items-start">
        <div className="flex justify-between items-center w-full">
          <User
            name={recommendation.author.profile.name}
            avatar={recommendation.author.profile.logo}
            description={formatDate(recommendation.created_at)}
            loading={loading}
          />
          <FavoriteButton recommendation={recommendation} />
        </div>
        <Recommendation
          title={recommendation.title}
          description={recommendation.description}
          link={recommendation.link}
        />
      </CardHeader>
      {!!recommendation.images.length && (
        <CardBody className="overflow-visible">
          <ImagesCarousel
            images={recommendation.images.map((image) => image.url)}
          />
        </CardBody>
      )}
      <CardFooter>
        <CommentsList recommendationId={recommendation.id} />
      </CardFooter>
    </Card>
  );
}
