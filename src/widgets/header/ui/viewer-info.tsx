'use client';
import { ViewerButton } from '@/features/viewer-button';
import { useAuth } from '@/shared/hooks/use-auth';
import { Button, Link, NavbarItem } from '@nextui-org/react';

export default function ViewerInfo() {
  const { viewer } = useAuth();

  return (
    <>
      {viewer ? (
        <ViewerButton
          name={viewer.profile?.name}
          description={viewer?.email}
          avatarProps={{
            src: viewer.profile?.logo,
            name: viewer.profile?.name.toLocaleUpperCase(),
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
