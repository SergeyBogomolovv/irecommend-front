import { RecommendationType } from '@/shared/constants/recommendations';
import { Chip, Link } from '@nextui-org/react';

interface Props {
  type: RecommendationType;
  title: string;
}

export function RecommendationLink({ title, type }: Props) {
  return (
    <Chip
      as={Link}
      href={`/?recommendations=${type}`}
      variant="shadow"
      color="primary"
    >
      {title}
    </Chip>
  );
}
