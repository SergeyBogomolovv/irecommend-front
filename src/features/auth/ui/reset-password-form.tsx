'use client';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';
import FormWrapper from '@/shared/ui/forw-wrapper';
import { Input } from '@nextui-org/input';
import FormError from '@/shared/ui/form-error';
import { Button } from '@nextui-org/react';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/shared/ui/input-otp';
import { useResetPasswordForm } from '../model/use-reset-password-form';
import { loginRoute } from '@/shared/constants/routes';

export function ResetPasswordForm() {
  const { form, handleSubmit, loading } = useResetPasswordForm();

  return (
    <FormWrapper
      imageSrc="new-password.svg"
      header="Придумайте новый пароль."
      description="Код сброса пароля пришел вам на почту"
      footer="Вернуться ко входу"
      footerHref={loginRoute}
    >
      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            isLoading={loading}
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
