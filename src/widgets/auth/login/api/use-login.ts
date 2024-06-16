'use client';
import { LoginDocument } from '@/graphql/generated/graphql';
import { useMutation } from '@apollo/client';
import { UseFormReturn } from 'react-hook-form';
import { Login } from '../model/login-schema';
import { useRouter } from 'next/navigation';

export const useLogin = (form: UseFormReturn<Login>) => {
  const router = useRouter();
  return useMutation(LoginDocument, {
    onCompleted: (data) => {
      localStorage.setItem('access_token', data?.login.access_token);
      router.push('/profile');
    },
    onError: (error) => {
      form.setError('root', { message: error?.message });
    },
  });
};
