'use client';
import { UIProvider } from './ui';
import { ApolloProvider } from './apollo';
import AuthGuard from './auth-guard';

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <UIProvider>
      <ApolloProvider>
        <AuthGuard>{children}</AuthGuard>
      </ApolloProvider>
    </UIProvider>
  );
}
