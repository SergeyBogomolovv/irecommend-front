'use client';
import { Password_ResetDocument } from '@/graphql/generated/graphql';
import { useMutation } from '@apollo/client';
import { UseFormReturn } from 'react-hook-form';
import { ResetPassword } from '../model/reset-password.schema';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export const usePasswordReset = (form: UseFormReturn<ResetPassword>) => {
  const router = useRouter();
  return useMutation(Password_ResetDocument, {
    onError(error) {
      form.setError('root', { message: error?.message });
    },
    onCompleted() {
      router.push('/login');
      toast.success('Пароль успешно изменен!');
    },
  });
};
