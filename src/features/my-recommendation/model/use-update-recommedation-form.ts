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
import { useState } from 'react';

export const useUpdateRecommendationForm = (recommendation: Recommendation) => {
  const [editMode, setEditMode] = useState(false);
  const form = useForm<UpdateRecommendation>({
    resolver: zodResolver(UpdateRecommendationSchema),
    defaultValues: {
      title: recommendation.title,
      description: recommendation.description,
      link: recommendation.link || undefined,
    },
  });
  const [updateRecommendation, { loading }] = useMutation(
    Update_RecommendationDocument,
    {
      onCompleted(data) {
        setEditMode(false);
        toast.success(data.update_recommendation.message);
      },
      refetchQueries: ['MyRecommendations'],
    },
  );
  return {
    form,
    editMode,
    setEditMode,
    loading,
    handleSubmit: form.handleSubmit((payload) => {
      updateRecommendation({ variables: { payload, id: recommendation.id } });
    }),
  };
};
