'use client';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/shared/ui/form';
import FormWrapper from '@/shared/ui/forw-wrapper';
import { Button } from '@nextui-org/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/shared/ui/input-otp';
import FormError from '@/shared/ui/form-error';
import { useVerifyAccountForm } from '../model/use-verify-account-form';
import { registerRoute } from '@/shared/constants/routes';

export function VerifyAccountForm() {
  const { form, loading, handleSubmit } = useVerifyAccountForm();
  return (
    <FormWrapper
      header="Подтвердите ваш аккаунт"
      description="Проверьте вашу почту, на нее должен был прийти код подтверждения"
      footer="Назад к регистрации"
      footerHref={registerRoute}
    >
      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
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
          <FormError message={form.formState.errors.root?.message} />
          <Button
            isDisabled={loading}
            className="w-full"
            color="primary"
            size="lg"
            type="submit"
          >
            Подтвердить аккаунт
          </Button>
        </form>
      </Form>
    </FormWrapper>
  );
}
