import { z } from 'zod';

export const UpdateRecommendationSchema = z.object({
  title: z.optional(z.string()),
  description: z.optional(z.string()),
  link: z.nullable(z.string().url()),
});

export type UpdateRecommendation = z.infer<typeof UpdateRecommendationSchema>;
