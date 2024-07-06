import { Add_Images_To_RecommendationDocument } from '@/shared/graphql/graphql';
import { useMutation } from '@apollo/client';
import { ChangeEvent, useRef } from 'react';
import { toast } from 'sonner';

export const useAddImage = (recommendationId: string) => {
  const inputRef: any = useRef(null);
  const [addImage, { loading }] = useMutation(
    Add_Images_To_RecommendationDocument,
    {
      refetchQueries: [
        'Favorites',
        'MyRecommendations',
        'Favorites_recommendations',
        'Last_recommendations',
        'ViewersFavorites',
      ],
      onError: () => {
        toast.error('Ошибка при добавлении картинки');
      },
    },
  );
  const handleUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      addImage({ variables: { images: e.target.files, id: recommendationId } });
    }
  };
  return { handleUploadFile, loading, inputRef };
};
