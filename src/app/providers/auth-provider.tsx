'use client';
import { useViewer } from '@/entities/viewer';
import {
  favoritesRoute,
  loginRoute,
  profileRoute,
  registerRoute,
  resetPasswordRequestRoute,
  resetPasswordRoute,
  verifyAccountRoute,
  viewersRecommendationsRoute,
} from '@/shared/constants/routes';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const authRoutes = [
  loginRoute,
  registerRoute,
  verifyAccountRoute,
  resetPasswordRequestRoute,
  resetPasswordRoute,
];

const privateRoutes = [
  profileRoute,
  viewersRecommendationsRoute,
  favoritesRoute,
];

interface Props {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const isOnAuthRoute = authRoutes.includes(pathname);
  const isOnPrivateRoute = privateRoutes.includes(pathname);
  const { notAuthenticated } = useViewer();
  const cannotBeOnAuth = isOnAuthRoute && !notAuthenticated;
  const cannotBeOnPrivate = notAuthenticated && isOnPrivateRoute;

  useEffect(() => {
    if (cannotBeOnPrivate) {
      router.push('/login');
    } else if (cannotBeOnAuth) {
      router.push('/');
    }
  }, [pathname, router, notAuthenticated]);

  return <>{!cannotBeOnAuth && !cannotBeOnPrivate && <>{children}</>}</>;
}
