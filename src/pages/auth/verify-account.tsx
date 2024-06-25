import { VerifyAccountForm } from '@/features/auth';
import { Suspense } from 'react';

export function VerifyAccountPage() {
  return (
    <Suspense>
      <VerifyAccountForm />
    </Suspense>
  );
}
