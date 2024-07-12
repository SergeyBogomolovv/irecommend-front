'use client';

import { useForm } from 'react-hook-form';
import { SearchSchema, SearchSchemaType } from './search.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';

export const useSearchForm = (onSearch?: () => any) => {
  const form = useForm<SearchSchemaType>({
    resolver: zodResolver(SearchSchema),
    defaultValues: {
      query: '',
    },
  });
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams || '');
  const { replace, push } = useRouter();
  return {
    form,
    handleSubmit: form.handleSubmit(({ query }) => {
      if (onSearch) onSearch();
      if (query) {
        params.set('query', query);
        replace(`/search?${params.toString()}`);
      } else {
        push('/');
      }
    }),
  };
};
