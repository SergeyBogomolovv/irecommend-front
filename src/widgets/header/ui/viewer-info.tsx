'use client';
import { ViewerButton } from '@/features/viewer-button';
import { Button, Link, NavbarItem } from '@nextui-org/react';
import { ViewerDocument } from '@/shared/graphql/generated/graphql';
import { useQuery } from '@apollo/client';

export default function ViewerInfo() {
  const { data } = useQuery(ViewerDocument);

  return (
    <>
      {data ? (
        <ViewerButton
          name={data.profile?.profile?.name}
          description={data?.profile.email}
          avatarProps={{
            src: data.profile?.profile?.logo,
            name: data.profile?.profile?.name.toLocaleUpperCase(),
          }}
        />
      ) : (
        <>
          <NavbarItem className="hidden lg:flex">
            <Link href="/login">Вход</Link>
          </NavbarItem>
          <NavbarItem className="hidden sm:flex">
            <Button as={Link} color="primary" href="/register" variant="flat">
              Регистрация
            </Button>
          </NavbarItem>
        </>
      )}
    </>
  );
}
