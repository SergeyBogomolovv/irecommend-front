'use client';
import { useViewer } from '@/entities/viewer';
import { ViewerButton } from '@/features/viewer-button';
import { Button, Link, NavbarItem } from '@nextui-org/react';

export function Account() {
  const { error } = useViewer();

  return (
    <>
      {!error ? (
        <ViewerButton />
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
