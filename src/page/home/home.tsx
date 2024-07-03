import { Feed } from '@/widgets/feed';
import { Suspense } from 'react';

interface Params {
  params: {
    type?: string;
  };
}

export default function HomePage({ params }: Params) {
  return (
    <Suspense>
      <Feed type={params.type} />
    </Suspense>
  );
}
