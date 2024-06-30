import { Update_AvatarDocument } from '@/shared/graphql/graphql';
import { useMutation } from '@apollo/client';
import { ChangeEvent, useRef } from 'react';
import { toast } from 'sonner';

export const useUpdateAvatar = () => {
  const inputRef: any = useRef(null);

  const [update, { loading }] = useMutation(Update_AvatarDocument, {
    refetchQueries: ['Profile'],
    onCompleted: () => {
      toast.success('Аватарка обновлена');
    },
    onError: () => {
      toast.error('Ошибка при обновлении аватарки');
    },
  });

  const handleUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      update({ variables: { image: e.target.files[0] } });
    }
  };

  return { handleUploadFile, loading, inputRef };
};
