import { RecommendationLink } from '@/entities/recommendation';
import { recommendationTypes } from '@/shared/constants/recommendations';

export function Links() {
  return (
    <div className="w-full sm:flex gap-4 items-center justify-center py-3 max-w-screen flex-wrap hidden">
      {recommendationTypes.map((recommendationType) => (
        <RecommendationLink
          key={recommendationType.type}
          title={recommendationType.title}
          type={recommendationType.type}
        />
      ))}
    </div>
  );
}
