import { ResetPasswordForm } from '@/features/auth';
import { Suspense } from 'react';

export default function ResetPasswordPage() {
  return (
    <Suspense>
      <ResetPasswordForm />
    </Suspense>
  );
}
