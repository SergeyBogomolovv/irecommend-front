import { RecommendationsList } from '@/widgets/recommendations-list';
import { Suspense } from 'react';
export default function Home() {
  return (
    <Suspense>
      <RecommendationsList />
    </Suspense>
  );
}
