import { z } from 'zod';

export const AddCommentSchema = z.object({
  content: z.string().min(3, { message: 'Минимум 3 символа' }),
});

export type AddComment = z.infer<typeof AddCommentSchema>;
