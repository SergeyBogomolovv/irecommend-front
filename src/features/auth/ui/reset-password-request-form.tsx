'use client';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/shared/ui/form';
import FormWrapper from '@/shared/ui/forw-wrapper';
import { Input } from '@nextui-org/input';
import FormError from '@/shared/ui/form-error';
import { Button } from '@nextui-org/react';
import { useResetPasswordRequestForm } from '../model/use-reset-password-request-form';
import { loginRoute } from '@/shared/constants/routes';

export function ResetPasswordRequestForm() {
  const { form, handleSubmit, loading } = useResetPasswordRequestForm();

  return (
    <FormWrapper
      header="Забыли пароль?"
      description="Введите почту, с которой вы регистрировались, на нее вам придет письмо с кодом подтверждения."
      footer="Вернуться ко входу"
      footerHref={loginRoute}
    >
      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-4">
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
