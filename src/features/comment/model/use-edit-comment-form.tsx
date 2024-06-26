'use client';
import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Comment, Edit_CommentDocument } from '@/shared/graphql/graphql';
import { EditComment, EditCommentSchema } from '../helpers/edit-comment-schema';
import { Dispatch, SetStateAction } from 'react';

export function useEditCommentForm(
  comment: Comment,
  setEditMode: Dispatch<SetStateAction<boolean>>,
) {
  const form = useForm<EditComment>({
    resolver: zodResolver(EditCommentSchema),
    defaultValues: {
      content: comment.content,
    },
  });

  const [editComment, { loading }] = useMutation(Edit_CommentDocument, {
    onCompleted: (data) => {
      setEditMode(false);
      toast.success(data.edit_comment.message);
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
      editComment({ variables: { id: comment.id, content: input.content } }),
    ),
  };
}
