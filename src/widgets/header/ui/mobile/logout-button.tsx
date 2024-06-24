'use client';
import { useLogout } from '@/features/auth';
import { Button } from '@nextui-org/react';

export function LogoutButton() {
  const { logout, loading } = useLogout();
  return (
    <Button
      onClick={() => logout()}
      isLoading={loading}
      className="w-full"
      color="danger"
      variant="flat"
    >
      Выйти из аккаунта
    </Button>
  );
}
