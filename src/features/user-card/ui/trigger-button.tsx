import { User } from '@/entities/user';
import { Maybe } from '@/shared/graphql/graphql';
import { PopoverTrigger } from '@nextui-org/react';

interface Props {
  name?: string;
  description: string;
  loading: boolean;
  avatarUrl?: Maybe<string>;
}

export const TriggerButton = ({
  name,
  description,
  loading,
  avatarUrl,
}: Props) => {
  return (
    <PopoverTrigger>
      <div className="transition-transform">
        <User
          asButton
          avatar={avatarUrl}
          loading={loading}
          description={description}
          name={name}
        />
      </div>
    </PopoverTrigger>
  );
};
