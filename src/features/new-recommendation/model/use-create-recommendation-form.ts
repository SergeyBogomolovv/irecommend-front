'use client';

import { useForm } from 'react-hook-form';
import {
  CreateRecommendationInput,
  CreateRecommendationInputSchema,
} from './create-recommendation-input-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@apollo/client';
import { Create_RecommendationDocument } from '@/shared/graphql/graphql';
import { toast } from 'sonner';
import { ChangeEvent, useRef, useState } from 'react';
import { useDisclosure } from '@nextui-org/react';

export const useCreateRecommendationForm = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const form = useForm<CreateRecommendationInput>({
    resolver: zodResolver(CreateRecommendationInputSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const onReject = () => {
    setPreviewImages([]);
    form.reset();
    onClose();
  };

  const handleUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    const length = e.target.files?.length;
    if (e.target.files && length) {
      setPreviewImages(() => {
        const result = [];
        for (let i = 0; i < length; i++) {
          if (e.target.files) {
            result.push(URL.createObjectURL(e.target.files[i]));
          }
        }
        return result;
      });
    }
  };

  const fileRef: any = useRef(null);
  const { ref: registerRef, ...rest } = form.register('images');
  const ref = (e: HTMLInputElement) => {
    registerRef(e);
    fileRef.current = e;
  };

  const [createRecommendation, { loading }] = useMutation(
    Create_RecommendationDocument,
    {
      onCompleted: () => {
        toast.success('Рекомендация создана');
        setPreviewImages([]);
        form.reset();
        onClose();
      },
      onError: () => {
        toast.error('Ошибка при создании рекомендации');
      },
      refetchQueries: ['Last_recommendations'],
    },
  );

  return {
    onReject,
    isOpen,
    onOpen,
    onOpenChange,
    form,
    loading,
    fileInputProps: { ...rest, ref, onChange: handleUploadFile },
    handleUploadFile,
    previewImages,
    onAddImageClick: () => fileRef.current.click(),
    handleSubmit: form.handleSubmit((input) => {
      createRecommendation({
        variables: {
          images: input.images,
          payload: {
            title: input.title,
            type: input.type,
            description: input.description,
            link: input.link,
          },
        },
      });
    }),
  };
};
