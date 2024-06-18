'use client';
import { LogoutDocument, ViewerDocument } from '@/graphql/generated/graphql';
import { useMutation } from '@apollo/client';
import client from '../config/apollo/client';

export const useLogout = () => {
  return useMutation(LogoutDocument, {
    onCompleted: () => {
      localStorage.removeItem('access_token');
      client.refetchQueries({ include: [ViewerDocument] });
    },
  });
};
