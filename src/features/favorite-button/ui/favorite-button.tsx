'use client';
import { Recommendation } from '@/shared/graphql/graphql';
import { Button, Tooltip } from '@nextui-org/react';
import { IoIosHeartEmpty } from 'react-icons/io';
import { useAddToFavorites } from '../model/use-add-to-favorites';
import { useViewer } from '@/entities/viewer';

interface Props {
  recommendation: Recommendation;
}

export const FavoriteButton = ({ recommendation }: Props) => {
  const { action, loading, isInFavorites } = useAddToFavorites(
    recommendation.id,
  );
  const { viewer } = useViewer();
  return (
    <Tooltip
      showArrow
      content={isInFavorites ? 'Удалить из избранного' : 'Добавить в избранное'}
      delay={500}
    >
      <Button
        isDisabled={!viewer}
        onClick={() => action()}
        color={isInFavorites ? 'danger' : 'default'}
        disabled={loading}
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
