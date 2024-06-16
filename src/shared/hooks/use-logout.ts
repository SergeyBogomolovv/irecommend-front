'use client';
import { LogoutDocument } from '@/graphql/generated/graphql';
import { useMutation } from '@apollo/client';

export const useLogout = () => {
  return useMutation(LogoutDocument, {
    onCompleted: () => {
      localStorage.removeItem('access_token');
    },
  });
};
