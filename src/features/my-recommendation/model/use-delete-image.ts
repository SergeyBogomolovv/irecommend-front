import { Delete_Image_From_RecommendationDocument } from '@/shared/graphql/graphql';
import { useMutation } from '@apollo/client';
import { toast } from 'sonner';

export const useDeleteImage = (imageId: string) => {
  const [deleteImage, { loading }] = useMutation(
    Delete_Image_From_RecommendationDocument,
    {
      variables: { imageId },
      refetchQueries: [
        'Favorites',
        'MyRecommendations',
        'Favorites_recommendations',
        'Last_recommendations',
        'ViewersFavorites',
      ],
      onError: () => {
        toast.error('Ошибка при удалении картинки');
      },
    },
  );
  return { deleteImage, loading };
};
