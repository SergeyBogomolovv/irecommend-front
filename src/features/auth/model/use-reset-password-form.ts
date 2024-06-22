'use client';
import { Password_ResetDocument } from '@/shared/graphql/generated/graphql';
import { useMutation } from '@apollo/client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginRoute } from '@/shared/constants/routes';
import { toast } from 'sonner';
import {
  ResetPassword,
  ResetPasswordSchema,
} from '../helpers/reset-password.schema';

export function useResetPasswordForm() {
  const router = useRouter();
  const queryparams = useSearchParams();

  const email = queryparams.get('email') || '';
  const form = useForm<ResetPassword>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      email,
      code: '',
      newPassword: '',
      newPasswordRepeat: '',
    },
  });

  const [resetPassword, { loading }] = useMutation(Password_ResetDocument, {
    onError(error) {
      form.setError('root', { message: error?.message });
    },
    onCompleted() {
      router.push(loginRoute);
      toast.success('Пароль успешно изменен!');
    },
  });

  return {
    form,
    loading,
    handleSubmit: form.handleSubmit((input) =>
      resetPassword({
        variables: {
          passwordResetInput: {
            email: input.email,
            code: input.code,
            newPassword: input.newPassword,
          },
        },
      }),
    ),
  };
}
