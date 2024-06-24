'use client';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { resetPasswordRoute } from '@/shared/constants/routes';
import {
  ResetPasswordRequest,
  ResetPasswordRequestSchema,
} from '../helpers/reset-password-request.schema';
import { Password_Reset_RequestDocument } from '@/shared/graphql/graphql';

export function useResetPasswordRequestForm() {
  const router = useRouter();

  const form = useForm<ResetPasswordRequest>({
    resolver: zodResolver(ResetPasswordRequestSchema),
    defaultValues: {
      email: '',
    },
  });
  const [resetPassword, { loading }] = useMutation(
    Password_Reset_RequestDocument,
    {
      onError(error) {
        form.setError('root', { message: error?.message });
      },
      onCompleted(data) {
        router.push(
          `${resetPasswordRoute}?email=${data.password_reset_request.email}`,
        );
      },
    },
  );

  return {
    form,
    loading,
    handleSubmit: form.handleSubmit((input) =>
      resetPassword({
        variables: { email: input.email },
      }),
    ),
  };
}
