'use client';

import { Delete_CommentDocument } from '@/shared/graphql/graphql';
import { useMutation } from '@apollo/client';
import { toast } from 'sonner';

export const useDeleteComment = (id: string) => {
  const [deleteComment, { loading }] = useMutation(Delete_CommentDocument, {
    onCompleted: (data) => {
      toast.success(data.delete_comment.message);
    },
    onError: () => {
      toast.error('Ошибка при удалении комментария');
    },
    refetchQueries: ['Last_recommendations'],
    variables: { id },
  });
  return { deleteComment, loading };
};
