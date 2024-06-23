'use client';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Login, LoginSchema } from '../helpers/login-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { profileRoute } from '@/shared/constants/routes';
import { accessTokenKey } from '@/shared/constants/tokens';
import { LoginDocument } from '@/shared/graphql/graphql';

export function useLoginForm() {
  const router = useRouter();

  const form = useForm<Login>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [login, { loading }] = useMutation(LoginDocument, {
    onCompleted: (data) => {
      localStorage.setItem(accessTokenKey, data?.login.access_token);
      router.push(profileRoute);
    },
    onError: (error) => {
      form.setError('root', { message: error?.message });
    },
    refetchQueries: ['Viewer'],
  });

  return {
    form,
    loading,
    handleSubmit: form.handleSubmit((input) => login({ variables: { input } })),
  };
}
