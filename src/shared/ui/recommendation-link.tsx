import { RecommendationType } from '@/shared/constants/recommendations';
import { Chip, Link } from '@nextui-org/react';

interface Props {
  type: RecommendationType;
  title: string;
}

export function RecommendationLink({ title, type }: Props) {
  return (
    <Chip
      className="cursor-pointer"
      as={Link}
      href={`/${type}`}
      variant="shadow"
      color="primary"
    >
      {title}
    </Chip>
  );
}
