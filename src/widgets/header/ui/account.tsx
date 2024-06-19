'use client';
import { useViewer } from '@/entities/viewer';
import { ViewerButton } from '@/features/navbar';
import { loginRoute, registerRoute } from '@/shared/constants/routes';
import { Button, Link, NavbarItem } from '@nextui-org/react';

export function Account() {
  const { notAuthenticated } = useViewer();

  return (
    <>
      {notAuthenticated ? (
        <>
          <NavbarItem className="hidden sm:flex">
            <Button as={Link} color="primary" href={loginRoute} variant="flat">
              Вход
            </Button>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <Link href={registerRoute}>Регистрация</Link>
          </NavbarItem>
        </>
      ) : (
        <NavbarItem className="hidden sm:flex">
          <ViewerButton />
        </NavbarItem>
      )}
    </>
  );
}
