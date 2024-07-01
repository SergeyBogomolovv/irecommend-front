'use client';
import { toast } from 'sonner';

export const useCopy = (str: string) => {
  return async () => {
    await navigator.clipboard.writeText(str);
    toast.success('Ник скопирован');
  };
};
