'use client';

import { Comment } from '@/shared/graphql/graphql';
import { formatDate } from '@/shared/lib/format-date';
import { toast } from 'sonner';

export const useCopy = (comment: Comment) => {
  return async () => {
    await navigator.clipboard.writeText(
      `${comment.author.profile.name}, ${formatDate(comment.created_at)}: ${comment.content}`,
    );
    toast.success('Комментарий скопирован');
  };
};
