'use client';

import { RegisterDocument } from '@/graphql/generated/graphql';
import { useMutation } from '@apollo/client';
import { UseFormReturn } from 'react-hook-form';
import { Register } from '../model/register.schema';
import { useRouter } from 'next/navigation';

export const useRegister = (form: UseFormReturn<Register>) => {
  const router = useRouter();
  return useMutation(RegisterDocument, {
    onCompleted: (data) => {
      router.push(`/verify-account?email=${data.register.email}`);
    },
    onError: (error) => {
      form.setError('root', { message: error?.message });
    },
  });
};
