import {
  Add_To_FavoritesDocument,
  Remove_From_FavoritesDocument,
  ViewersFavoritesDocument,
} from '@/shared/graphql/graphql';
import { useMutation, useQuery } from '@apollo/client';
import { toast } from 'sonner';

export const useAddToFavorites = (recommendationId: string) => {
  const { data, loading: isQueryLoading } = useQuery(ViewersFavoritesDocument);

  let isInFavorites = false;
  data?.profile?.favorites.forEach((recommendation) => {
    if (recommendation.id === recommendationId) {
      isInFavorites = true;
    }
  });

  const [addToFavorites, { loading: isAddLoading }] = useMutation(
    Add_To_FavoritesDocument,
    {
      variables: { recommendationId },
      refetchQueries: [
        'Last_recommendations',
        'ViewersFavorites',
        'Favorites_recommendations',
      ],
      onError: () => {
        toast.error('Не получилось добавить в избранное');
      },
    },
  );

  const [removeFromFavorites, { loading: isRemoveLoading }] = useMutation(
    Remove_From_FavoritesDocument,
    {
      variables: { recommendationId },
      refetchQueries: [
        'Last_recommendations',
        'ViewersFavorites',
        'Favorites_recommendations',
      ],
      onError: () => {
        toast.error('Не получилось удалить из избранного');
      },
    },
  );

  return {
    action: isInFavorites ? removeFromFavorites : addToFavorites,
    loading: isAddLoading || isQueryLoading || isRemoveLoading,
    isInFavorites,
  };
};
