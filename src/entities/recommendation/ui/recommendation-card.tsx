import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
} from '@nextui-org/react';
import { User } from '@/entities/user';
import { formatDate } from '@/shared/lib/format-date';
import { FavoriteButton } from '@/features/favorite-button';
import { Comment, Recommendation } from '@/shared/graphql/graphql';
import { CommentsList } from '@/features/comments-list';
import ImagesCarousel from '@/shared/ui/images-carousel';

interface Props {
  loading?: boolean;
  recommendation: Recommendation;
}

export function RecommendationCard({ loading, recommendation }: Props) {
  return (
    <Card className="py-2 w-full">
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
        {recommendation.link && (
          <Link
            className="max-w-[250px] truncate mt-2"
            showAnchorIcon
            size="sm"
            isExternal
            href={recommendation.link}
          >
            Ссылка
          </Link>
        )}
      </CardHeader>
      {!!recommendation.images.length && (
        <CardBody className="overflow-visible">
          <ImagesCarousel
            images={recommendation.images.map((image) => image.url)}
          />
        </CardBody>
      )}
      <CardFooter>
        <CommentsList
          recommendationId={recommendation.id}
          comments={recommendation.comments as Comment[]}
        />
      </CardFooter>
    </Card>
  );
}
