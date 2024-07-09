import { User as UserCard } from '@nextui-org/react';
import { UserSkeleton } from './skeleton';
import { Maybe } from 'graphql/jsutils/Maybe';

interface Props {
  name: string | undefined;
  avatar: Maybe<string>;
  description: string;
  loading?: boolean;
  asButton?: boolean;
}

export const User = ({
  name,
  description,
  loading,
  avatar,
  asButton,
}: Props) => {
  return (
    <>
      {loading ? (
        <UserSkeleton />
      ) : (
        <UserCard
          as={asButton ? 'button' : 'div'}
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
