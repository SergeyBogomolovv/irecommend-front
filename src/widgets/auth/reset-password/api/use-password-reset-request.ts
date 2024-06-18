'use client';

import { Password_Reset_RequestDocument } from '@/graphql/generated/graphql';
import { useMutation } from '@apollo/client';
import { UseFormReturn } from 'react-hook-form';
import { ResetPasswordRequest } from '../model/reset-password-request.schema';
import { useRouter } from 'next/navigation';

export const usePasswordResetRequest = (
  form: UseFormReturn<ResetPasswordRequest>,
) => {
  const router = useRouter();
  return useMutation(Password_Reset_RequestDocument, {
    onError(error) {
      form.setError('root', { message: error?.message });
    },
    onCompleted(data) {
      router.push(`/reset-password?email=${data.password_reset_request.email}`);
    },
  });
};
