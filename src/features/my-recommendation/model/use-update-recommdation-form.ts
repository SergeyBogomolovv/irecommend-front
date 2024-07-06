import {
  Recommendation,
  Update_RecommendationDocument,
} from '@/shared/graphql/graphql';
import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import {
  UpdateRecommendation,
  UpdateRecommendationSchema,
} from '../helpers/update-recommendation.schema';
import { zodResolver } from '@hookform/resolvers/zod';

export const useUpdateRecommendationForm = (recommendation: Recommendation) => {
  const form = useForm<UpdateRecommendation>({
    resolver: zodResolver(UpdateRecommendationSchema),
    defaultValues: {
      title: recommendation.title,
      description: recommendation.description,
      link: recommendation.link,
    },
  });
  const [updateRecommendation, { loading }] = useMutation(
    Update_RecommendationDocument,
    {
      onCompleted(data) {
        toast.success(data.update_recommendation.message);
      },
      refetchQueries: [
        'Favorites',
        'MyRecommendations',
        'Favorites_recommendations',
        'Last_recommendations',
        'ViewersFavorites',
      ],
    },
  );
  return {
    form,
    loading,
    handleSubmit: form.handleSubmit((payload) =>
      updateRecommendation({ variables: { payload, id: recommendation.id } }),
    ),
  };
};
