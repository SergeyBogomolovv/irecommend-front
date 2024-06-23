'use client';
import { accessTokenKey } from '@/shared/constants/tokens';
import { LogoutDocument } from '@/shared/graphql/graphql';
import { useMutation } from '@apollo/client';

export const useLogout = () => {
  const [logout, { loading }] = useMutation(LogoutDocument, {
    onCompleted: () => {
      localStorage.removeItem(accessTokenKey);
    },
    refetchQueries: ['Viewer'],
  });
  return { loading, logout };
};
