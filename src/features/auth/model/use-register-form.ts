'use client';
import { verifyAccountRoute } from '@/shared/constants/routes';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Register, RegisterSchema } from '../helpers/register.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterDocument } from '@/shared/graphql/graphql';

export function useRegisterForm() {
  const router = useRouter();

  const form = useForm<Register>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordRepeat: '',
    },
  });

  const [register, { loading }] = useMutation(RegisterDocument, {
    onCompleted: (data) => {
      router.push(`${verifyAccountRoute}?email=${data.register.email}`);
    },
    onError: (error) => {
      form.setError('root', { message: error?.message });
    },
  });

  return {
    form,
    loading,
    handleSubmit: form.handleSubmit((input) => {
      register({
        variables: {
          input: {
            password: input.password,
            name: input.name,
            email: input.email,
          },
        },
      });
    }),
  };
}
