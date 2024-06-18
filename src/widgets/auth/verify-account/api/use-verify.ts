'use client';

import { VerifyAccountDocument } from '@/graphql/generated/graphql';
import { useMutation } from '@apollo/client';
import { UseFormReturn } from 'react-hook-form';
import { VerifyAccount } from '../model/verify.schema';

export const useVerify = (form: UseFormReturn<VerifyAccount>) => {
  return useMutation(VerifyAccountDocument, {
    onCompleted: (data) => {
      localStorage.setItem('access_token', data.verify_account.access_token);
    },
    onError: (error) => {
      form.setError('root', { message: error?.message });
    },
  });
};
