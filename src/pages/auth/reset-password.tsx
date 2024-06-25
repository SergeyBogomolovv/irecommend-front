import { ResetPasswordForm } from '@/features/auth';
import { Suspense } from 'react';

export function ResetPasswordPage() {
  return (
    <Suspense>
      <ResetPasswordForm />
    </Suspense>
  );
}
