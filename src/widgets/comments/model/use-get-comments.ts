'use client';

import { Get_CommentsDocument } from '@/shared/graphql/graphql';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export const useGetComments = (recommendationId: string) => {
  const [isFetchAll, setIsFetchAll] = useState(false);

  const { loading, data, refetch } = useQuery(Get_CommentsDocument, {
    variables: { recommendationId },
    onError() {
      toast.error('Ошибка при получении комментариев');
    },
  });

  useEffect(() => {
    if (isFetchAll) {
      refetch({ recommendationId, count: null });
    } else {
      refetch({ recommendationId, count: 3 });
    }
  }, [isFetchAll]);

  return {
    loading: loading,
    comments: data?.get_comments.comments,
    setIsFetchAll,
    canFetchMore: Number(data?.get_comments.totalCount) > 3,
    totalCount: data?.get_comments.totalCount,
    isFetchAll,
  };
};
