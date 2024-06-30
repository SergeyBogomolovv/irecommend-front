import { Skeleton } from '@nextui-org/react';
import { Maybe } from '../graphql/graphql';

interface Props {
  label: string;
  text?: Maybe<string>;
  loading?: boolean;
}
const InfoBadge = ({ label, text, loading }: Props) => {
  return (
    <div className="flex items-center justify-between bg-default-100 p-2 rounded-lg text-sm">
      <p>{label}:</p>
      <Skeleton className="rounded-lg" isLoaded={!loading}>
        <p className="font-mono truncate max-w-[200px]">
          {loading ? 'some text for skeleton' : text}
        </p>
      </Skeleton>
    </div>
  );
};

export default InfoBadge;
