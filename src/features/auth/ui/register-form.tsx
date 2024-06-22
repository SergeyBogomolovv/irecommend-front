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
import { Button } from '@nextui-org/button';
import FormError from '@/shared/ui/form-error';
import { useRegisterForm } from '../model/use-register-form';

export function RegisterForm() {
  const { form, handleSubmit, loading } = useRegisterForm();

  return (
    <FormWrapper
      header="Добро пожаловать!"
      description="Зарегистрируйтесь, чтобы начать пользоваться IRecommend"
      footer="У вас уже есть аккаунт?"
      footerHref="/login"
    >
      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input label="Как вас зовут?" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
              <FormItem>
                <FormControl>
                  <Input label="Придумайте пароль" {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="passwordRepeat"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input label="Повторите пароль" {...field} type="password" />
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
            Зарегистрироваться
          </Button>
        </form>
      </Form>
    </FormWrapper>
  );
}
