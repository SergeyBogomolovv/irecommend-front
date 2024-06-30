'use client';
import { loginRoute } from '@/shared/constants/routes';
import { accessTokenKey } from '@/shared/constants/tokens';
import { LogoutDocument } from '@/shared/graphql/graphql';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';

export const useLogout = () => {
  const router = useRouter();
  const [logout, { loading }] = useMutation(LogoutDocument, {
    onCompleted: () => {
      localStorage.removeItem(accessTokenKey);
      router.push(loginRoute);
    },
    refetchQueries: ['Viewer'],
  });
  return { loading, logout };
};
