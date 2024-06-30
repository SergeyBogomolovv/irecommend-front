import { Contacts } from '@/shared/graphql/graphql';
import { z } from 'zod';

export const AddContactSchema = z.object({
  url: z.string().url({ message: 'Ссылка невалидна' }).or(z.literal('')),
  type: z.nativeEnum(Contacts),
});

export type AddContact = z.infer<typeof AddContactSchema>;
