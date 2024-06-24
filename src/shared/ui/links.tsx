import { recommendationTypes } from '@/shared/constants/recommendations';
import { RecommendationLink } from '@/shared/ui/recommendation-link';

export const Links = () => {
  return (
    <div className="w-full sm:flex gap-4 items-center justify-center max-w-screen flex-wrap hidden">
      {recommendationTypes.map((recommendationType) => (
        <RecommendationLink
          key={recommendationType.type}
          title={recommendationType.title}
          type={recommendationType.type}
        />
      ))}
    </div>
  );
};
