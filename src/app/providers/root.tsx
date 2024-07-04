'use client';
import { UIProvider } from './ui';
import { ApolloProvider } from './apollo';
import AuthProvider from './auth-provider';

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <UIProvider>
      <ApolloProvider>
        <AuthProvider>{children}</AuthProvider>
      </ApolloProvider>
    </UIProvider>
  );
}
