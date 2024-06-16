'use client';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/shared/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormWrapper from '@/shared/ui/forw-wrapper';
import { useForm } from 'react-hook-form';
import { Input } from '@nextui-org/input';
import FormError from '@/shared/ui/form-error';
import { Button } from '@nextui-org/react';
import {
  ResetPasswordRequest,
  ResetPasswordRequestSchema,
} from '../model/reset-password-request.schema';
import { usePasswordResetRequest } from '../api/use-password-reset-request';

export function ResetPasswordRequestForm() {
  const form = useForm<ResetPasswordRequest>({
    resolver: zodResolver(ResetPasswordRequestSchema),
    defaultValues: {
      email: '',
    },
  });

  const [resetPasswordRequest, { loading }] = usePasswordResetRequest(form);

  function onSubmit(input: ResetPasswordRequest) {
    resetPasswordRequest({ variables: { email: input.email } });
  }

  return (
    <FormWrapper
      header="Забыли пароль?"
      description="Введите почту, с которой вы регистрировались, на нее вам придет письмо с кодом подтверждения."
      footer="Вернуться ко входу"
      footerHref="/login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input label="Почта" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormError message={form.formState.errors.root?.message} />
          <Button
            isDisabled={loading}
            className="w-full"
            color="primary"
            size="lg"
            type="submit"
          >
            Отправить
          </Button>
        </form>
      </Form>
    </FormWrapper>
  );
}
