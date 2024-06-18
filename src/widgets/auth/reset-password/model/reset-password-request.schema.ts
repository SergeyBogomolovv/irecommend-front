import { z } from 'zod';

export const ResetPasswordRequestSchema = z.object({
  email: z.string().email({ message: 'Введен неправильные email' }),
});

export type ResetPasswordRequest = z.infer<typeof ResetPasswordRequestSchema>;
