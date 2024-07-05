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
import { Button, Link } from '@nextui-org/react';
import { useLoginForm } from '../model/use-login-form';
import { registerRoute } from '@/shared/constants/routes';

export function LoginForm() {
  const { loading, form, handleSubmit } = useLoginForm();

  return (
    <FormWrapper
      imageSrc="/login.svg"
      header="Рады видеть вас снова!"
      description="Войдите в аккаунт, чтобы продолжить пользоваться IRecommend"
      footer="Еще не зарегистрированы?"
      footerHref={registerRoute}
    >
      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input label="Ваша почта" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="flex flex-col items-end">
                <FormControl>
                  <Input label="Введите пароль" {...field} type="password" />
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
            Вход
          </Button>
          <Button
            href="/reset-password/request"
            isLoading={loading}
            as={Link}
            className="w-full"
            color="danger"
            size="sm"
            type="button"
          >
            Забыли пароль?
          </Button>
        </form>
      </Form>
    </FormWrapper>
  );
}
