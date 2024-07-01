import { useForm } from 'react-hook-form';
import { AddContact, AddContactSchema } from './add-contact-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@apollo/client';
import { Add_ContactDocument } from '@/shared/graphql/graphql';
import { useDisclosure } from '@nextui-org/react';
import { toast } from 'sonner';

export const useAddContactForm = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const onReject = () => {
    form.reset();
    onClose();
  };

  const form = useForm<AddContact>({
    resolver: zodResolver(AddContactSchema),
    defaultValues: {
      nickname: '',
    },
  });

  const [addContact, { loading }] = useMutation(Add_ContactDocument, {
    onCompleted: (data) => {
      toast.success(data.add_contact.message);
      form.reset();
      onClose();
    },
    onError: () => {
      toast.error('Ошибка при добавлении контакта');
    },
    refetchQueries: ['Profile'],
  });

  return {
    isOpen,
    form,
    onOpen,
    onOpenChange,
    onReject,
    handleSubmit: form.handleSubmit((payload) =>
      addContact({ variables: { payload } }),
    ),
    loading,
  };
};
