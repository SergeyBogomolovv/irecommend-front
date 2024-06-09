import { z } from 'zod';

export const RegisterSchema = z
  .object({
    name: z.string().min(3, { message: 'Имя должно быть длинее 3х символов' }),
    email: z.string().email({ message: 'Введен некорректный email' }),
    password: z
      .string()
      .min(6, { message: 'Пароль должен содержать минимум 6 символов' }),
    passwordRepeat: z
      .string()
      .min(6, { message: 'Пароль должен содержать минимум 6 символов' }),
  })
  .refine((data) => data.password === data.passwordRepeat, {
    message: 'Пароли не совпадают',
    path: ['passwordRepeat', 'password'],
  });

export type Register = z.infer<typeof RegisterSchema>;
