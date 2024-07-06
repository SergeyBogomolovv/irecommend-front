import { z } from 'zod';

export const UpdateRecommendationSchema = z.object({
  title: z.optional(z.string()),
  description: z.optional(z.string()),
  link: z
    .string()
    .url({ message: 'Ссылка невалидна' })
    .optional()
    .or(z.literal('')),
});

export type UpdateRecommendation = z.infer<typeof UpdateRecommendationSchema>;
