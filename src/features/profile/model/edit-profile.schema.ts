import { z } from 'zod';

export const EditProfileSchema = z.object({
  name: z.string().min(3, { message: 'Имя должно быть длиннее 3х символов' }),
  about: z.optional(z.string()),
});

export type EditProfile = z.infer<typeof EditProfileSchema>;
