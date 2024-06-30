import { RecommendationSkeleton } from '@/entities/recommendation';

export default function HomeLoading() {
  return (
    <div className="flex flex-col sm:gap-y-6 gap-y-2 items-center justify-items-center sm:w-[524px]">
      <RecommendationSkeleton />
      <RecommendationSkeleton />
      <RecommendationSkeleton />
    </div>
  );
}
