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

  if (notAuthenticated && isOnPrivateRoute) {
    return router.push('/login');
  } else if (isOnAuthRoute && !notAuthenticated) {
    return router.back();
  } else {
    return <main>{children}</main>;
  }
}
