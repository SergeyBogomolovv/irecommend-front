import { SearchByParams } from '@/widgets/feed';
import { Suspense } from 'react';

export const SearchPage = () => {
  return (
    <Suspense>
      <SearchByParams />
    </Suspense>
  );
};
