'use client';

import { One_UserDocument } from '@/shared/graphql/graphql';
import { useQuery } from '@apollo/client';

export const useGetUser = (id: string) => {
  const { data, loading } = useQuery(One_UserDocument, {
    variables: { id },
  });

  return { user: data?.one_user, loading };
};
