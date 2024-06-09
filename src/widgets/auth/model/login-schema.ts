import { z } from 'zod'

export const LoginSchema = z.object({
  email: z.string().email({ message: 'Введен некорректный email' }),
  password: z
    .string()
    .min(6, { message: 'Пароль должен содержать минимум 6 символов' }),
})

export type Login = z.infer<typeof LoginSchema>
