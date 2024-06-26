import { z } from 'zod';

export const EditCommentSchema = z.object({
  content: z.string().min(3, { message: 'Минимум 3 символа' }),
});

export type EditComment = z.infer<typeof EditCommentSchema>;
