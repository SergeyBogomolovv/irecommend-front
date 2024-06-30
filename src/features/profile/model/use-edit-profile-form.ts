import { useDisclosure } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { EditProfile, EditProfileSchema } from './edit-profile.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Edit_ProfileDocument, Profile } from '@/shared/graphql/graphql';
import { toast } from 'sonner';
import { useMutation } from '@apollo/client';

export const useEditProfileForm = (profile: Profile) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const onReject = () => {
    form.reset();
    onClose();
  };

  const form = useForm<EditProfile>({
    resolver: zodResolver(EditProfileSchema),
    defaultValues: {
      name: profile?.name,
      about: profile?.about || '',
    },
  });

  const [editProfile, { loading }] = useMutation(Edit_ProfileDocument, {
    onCompleted: () => {
      toast.success('Информация обновлена');
      form.reset();
      onClose();
    },
    onError: () => {
      toast.error('Ошибка при обновлении информации');
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
      editProfile({ variables: { payload } }),
    ),
    loading,
  };
};
