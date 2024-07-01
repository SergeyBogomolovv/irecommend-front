import { Contacts } from '@/shared/graphql/graphql';
import { z } from 'zod';

export const AddContactSchema = z.object({
  nickname: z.string(),
  type: z.nativeEnum(Contacts),
});

export type AddContact = z.infer<typeof AddContactSchema>;
