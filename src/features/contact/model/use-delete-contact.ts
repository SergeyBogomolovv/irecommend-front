'use client';

import { Delete_ContactDocument } from '@/shared/graphql/graphql';
import { useMutation } from '@apollo/client';
import { toast } from 'sonner';

export const useDeleteContact = (id: string) => {
  const [deleteContact, { loading }] = useMutation(Delete_ContactDocument, {
    variables: { id },
    refetchQueries: ['Profile'],
    onCompleted(data) {
      toast.success(data.remove_contact.message);
    },
    onError() {
      toast.error('Ошибка при удалении контакта');
    },
  });
  return { deleteContact, loading };
};
