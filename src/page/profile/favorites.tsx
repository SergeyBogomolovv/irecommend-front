import { Favorites } from '@/widgets/feed';
import { Suspense } from 'react';

export default function ProfileFavoritesPage() {
  return (
    <Suspense>
      <Favorites />
    </Suspense>
  );
}
