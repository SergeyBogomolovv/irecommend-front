import { z } from 'zod';

export const ResetPasswordSchema = z
  .object({
    email: z.string().email({ message: 'Введен неправильные email' }),
    code: z.string().length(6, { message: 'В коде должно быть 6 символов' }),
    newPassword: z
      .string()
      .min(6, { message: 'Пароль должен содержать минимум 6 символов' }),
    newPasswordRepeat: z
      .string()
      .min(6, { message: 'Пароль должен содержать минимум 6 символов' }),
  })
  .refine((data) => data.newPassword === data.newPasswordRepeat, {
    message: 'Пароли не совпадают',
    path: ['newPassword', 'newPasswordRepeat'],
  });

export type ResetPassword = z.infer<typeof ResetPasswordSchema>;
