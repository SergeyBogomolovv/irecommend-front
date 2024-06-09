import { z } from 'zod';

export const VerifyAccountSchema = z.object({
  code: z.string().length(6, { message: 'В коде должно быть 6 символов' }),
});

export type VerifyAccount = z.infer<typeof VerifyAccountSchema>;
