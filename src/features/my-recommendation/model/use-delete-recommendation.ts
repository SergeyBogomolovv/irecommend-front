import { Delete_RecommendationDocument } from '@/shared/graphql/graphql';
import { useMutation } from '@apollo/client';
import { toast } from 'sonner';

export const useDeleteRecommendation = (id: string) => {
  const [deleteRecommendation, { loading }] = useMutation(
    Delete_RecommendationDocument,
    {
      variables: { id },
      onCompleted(data) {
        toast.success(data.delete_recommendation.message);
      },
      refetchQueries: [
        'Favorites',
        'MyRecommendations',
        'Favorites_recommendations',
        'Last_recommendations',
        'ViewersFavorites',
      ],
      onError: () => {
        toast.error('Ошибка при удалении рекоммендации');
      },
    },
  );
  return { deleteRecommendation, loading };
};
