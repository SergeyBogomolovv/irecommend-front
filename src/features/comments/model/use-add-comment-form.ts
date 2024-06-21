'use client';
import { Create_CommentDocument } from '@/shared/graphql/generated/graphql';
import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AddComment, AddCommentSchema } from '../helpers/add-comment-schema';
import { toast } from 'sonner';

export function useAddCommentSchema(recommendationId: string) {
  const form = useForm<AddComment>({
    resolver: zodResolver(AddCommentSchema),
    defaultValues: {
      content: '',
    },
  });

  const [login, { loading }] = useMutation(Create_CommentDocument, {
    onCompleted: (data) => {
      form.reset();
      toast.success(data.create_comment.message);
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
      login({ variables: { recommendationId, content: input.content } }),
    ),
  };
}
