import { RecommendationsList } from '@/widgets/recommendations-list';
import { Suspense } from 'react';
interface Params {
  params: {
    type: string;
  };
}

export default function Home({ params }: Params) {
  return (
    <Suspense>
      <RecommendationsList type={params.type} />
    </Suspense>
  );
}
