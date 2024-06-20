import { User as UserCard } from '@nextui-org/react';
import { UserSkeleton } from './skeleton';
import { MaybeNot } from '@/shared/lib/types';

interface Props {
  name: MaybeNot<string>;
  avatar: MaybeNot<string>;
  description: MaybeNot<string>;
  loading?: boolean;
}

export const User = ({ name, description, loading, avatar }: Props) => {
  return (
    <>
      {loading ? (
        <UserSkeleton />
      ) : (
        <UserCard
          name={name}
          description={description}
          avatarProps={{
            src: avatar || '',
            name: name?.toLocaleUpperCase(),
          }}
        />
      )}
    </>
  );
};
