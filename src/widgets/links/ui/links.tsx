import { RecommendationLink } from '@/entities/recommendation';
import { recommendationTypes } from '@/shared/constants/recommendations';

export const Links = () => {
  return (
    <div className="w-full flex gap-4 items-center justify-center py-3 max-w-screen flex-wrap">
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
