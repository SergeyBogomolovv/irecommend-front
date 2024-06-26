'use client';
import { useMutation } from '@apollo/client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { accessTokenKey } from '@/shared/constants/tokens';
import { VerifyAccount, VerifyAccountSchema } from '../helpers/verify.schema';
import { profileRoute } from '@/shared/constants/routes';
import { VerifyAccountDocument } from '@/shared/graphql/graphql';

export function useVerifyAccountForm() {
  const queryparams = useSearchParams();
  const email = queryparams?.get('email') || '';

  const router = useRouter();

  const form = useForm<VerifyAccount>({
    resolver: zodResolver(VerifyAccountSchema),
    defaultValues: {
      code: '',
      email,
    },
  });

  const [verify, { loading }] = useMutation(VerifyAccountDocument, {
    onCompleted: (data) => {
      localStorage.setItem(accessTokenKey, data.verify_account.access_token);
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
    handleSubmit: form.handleSubmit((input) =>
      verify({ variables: { input } }),
    ),
  };
}
