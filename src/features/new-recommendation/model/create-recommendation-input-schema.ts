import { RecommendationType } from '@/shared/graphql/graphql';
import { z } from 'zod';

export const CreateRecommendationInputSchema = z.object({
  title: z
    .string()
    .min(3, { message: 'Название должно быть длиннее 3х символов' }),
  description: z
    .string()
    .min(3, { message: 'Описание имя должно быть длиннее 3х символов' }),
  link: z
    .string()
    .url({ message: 'Ссылка невалидна' })
    .optional()
    .or(z.literal('')),
  type: z.nativeEnum(RecommendationType),
  images: typeof window === 'undefined' ? z.any() : z.instanceof(FileList),
});

export type CreateRecommendationInput = z.infer<
  typeof CreateRecommendationInputSchema
>;
