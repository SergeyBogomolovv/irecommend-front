import { User as UserCard } from '@nextui-org/react';
import { UserSkeleton } from './skeleton';
import { Maybe } from 'graphql/jsutils/Maybe';

interface Props {
  name: string | undefined;
  avatar: Maybe<string>;
  description: string;
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
