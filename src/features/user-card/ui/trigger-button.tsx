import { User } from '@/entities/user';
import { Maybe } from '@/shared/graphql/graphql';
import { PopoverTrigger } from '@nextui-org/react';

interface Props {
  name?: string;
  description?: string;
  loading: boolean;
  avatarUrl?: Maybe<string>;
  customChildren?: React.ReactNode;
}

export const TriggerButton = ({
  name,
  description,
  loading,
  avatarUrl,
  customChildren,
}: Props) => {
  return (
    <PopoverTrigger>
      <div className="transition-transform w-full">
        {customChildren ? (
          customChildren
        ) : (
          <User
            asButton
            avatar={avatarUrl}
            loading={loading}
            description={description}
            name={name}
          />
        )}
      </div>
    </PopoverTrigger>
  );
};
