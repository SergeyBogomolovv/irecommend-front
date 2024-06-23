import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
import { User } from '@/entities/user';
import { formatDate } from '@/shared/lib/format-date';
import { FavoriteButton } from '@/features/favorite-button';
import { Comment, Recommendation } from '@/shared/graphql/generated/graphql';
import ImagesCarousel from './images-carousel';
import { CommentsList } from '@/features/comments-list';

interface Props {
  loading?: boolean;
  recommendation: Recommendation;
}

export function RecommendationCard({ loading, recommendation }: Props) {
  return (
    <Card className="py-2">
      <CardHeader className="pb-1 pt-2 px-4 flex-col items-start">
        <div className="flex justify-between items-center w-full mb-3">
          <User
            name={recommendation.author.profile.name}
            avatar={recommendation.author.profile.logo}
            description={formatDate(recommendation.created_at)}
            loading={loading}
          />
          <FavoriteButton recommendation={recommendation} />
        </div>
        <h4 className="font-bold text-large">{recommendation.title}</h4>
        <small className="text-default-500">{recommendation.description}</small>
      </CardHeader>
      <CardBody className="overflow-visible">
        <ImagesCarousel images={recommendation.images} />
      </CardBody>
      <CardFooter>
        <CommentsList
          recommendationId={recommendation.id}
          comments={recommendation.comments as Comment[]}
        />
      </CardFooter>
    </Card>
  );
}
