import { Chip, Link } from '@nextui-org/react';
import { RecommendationType } from '../graphql/graphql';

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
