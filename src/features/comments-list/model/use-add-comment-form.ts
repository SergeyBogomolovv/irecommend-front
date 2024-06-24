'use client';
import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AddComment, AddCommentSchema } from '../helpers/add-comment-schema';
import { toast } from 'sonner';
import { Create_CommentDocument } from '@/shared/graphql/graphql';

export function useAddCommentForm(recommendationId: string) {
  const form = useForm<AddComment>({
    resolver: zodResolver(AddCommentSchema),
    defaultValues: {
      content: '',
    },
  });

  const [addComment, { loading }] = useMutation(Create_CommentDocument, {
    onCompleted: () => {
      form.reset();
      toast.success('Комментарий добавлен');
    },
    onError: (error) => {
      form.setError('root', { message: error?.message });
    },
    refetchQueries: ['Last_recommendations'],
  });

  return {
    form,
    loading,
    handleSubmit: form.handleSubmit((input) =>
      addComment({ variables: { recommendationId, content: input.content } }),
    ),
  };
}
