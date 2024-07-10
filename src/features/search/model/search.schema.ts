import { z } from 'zod';

export const SearchSchema = z.object({
  query: z.optional(z.string()),
});

export type SearchSchemaType = z.infer<typeof SearchSchema>;
