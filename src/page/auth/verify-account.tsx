import { VerifyAccountForm } from '@/features/auth';
import { Suspense } from 'react';

export default function VerifyAccountPage() {
  return (
    <Suspense>
      <VerifyAccountForm />
    </Suspense>
  );
}
