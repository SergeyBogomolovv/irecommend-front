'use client';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormWrapper from '@/shared/ui/forw-wrapper';
import { useForm } from 'react-hook-form';
import { Input } from '@nextui-org/input';
import FormError from '@/shared/ui/form-error';
import { Button } from '@nextui-org/react';
import {
  ResetPassword,
  ResetPasswordSchema,
} from '../model/reset-password.schema';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/shared/ui/input-otp';
import { usePasswordReset } from '../api/use-password-reset';
import { useSearchParams } from 'next/navigation';

export function ResetPasswordForm() {
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

  const [resetPassword, { loading }] = usePasswordReset(form);

  function onSubmit(values: ResetPassword) {
    resetPassword({
      variables: {
        passwordResetInput: {
          email: values.email,
          code: values.code,
          newPassword: values.newPassword,
        },
      },
    });
  }

  return (
    <FormWrapper
      header="Придумайте новый пароль."
      description="Код сброса пароля пришел вам на почту"
      footer="Вернуться ко входу"
      footerHref="/login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Код подтверждения</FormLabel>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup className="mx-auto w-full">
                      <InputOTPSlot className="w-full" index={0} />
                      <InputOTPSlot className="w-full" index={1} />
                      <InputOTPSlot className="w-full" index={2} />
                      <InputOTPSlot className="w-full" index={3} />
                      <InputOTPSlot className="w-full" index={4} />
                      <InputOTPSlot className="w-full" index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage className="text-center" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input label="Новый пароль" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="newPasswordRepeat"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input label="Повторите пароль" type="password" {...field} />
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
            Сменить пароль
          </Button>
        </form>
      </Form>
    </FormWrapper>
  );
}
