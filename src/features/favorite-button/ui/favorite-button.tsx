import { Recommendation } from '@/shared/graphql/generated/graphql';
import { Button, Tooltip } from '@nextui-org/react';
import { IoIosHeartEmpty } from 'react-icons/io';

interface Props {
  recommendation: Recommendation;
  loading?: boolean;
}

export const FavoriteButton = ({ recommendation, loading }: Props) => {
  return (
    <Tooltip showArrow content="Добавить в избранное" delay={500}>
      <Button
        color="danger"
        aria-label="Like"
        size="sm"
        radius="full"
        className="text-sm"
        variant="shadow"
      >
        <IoIosHeartEmpty className="size-5" />
        {recommendation.favoritesCount}
      </Button>
    </Tooltip>
  );
};
