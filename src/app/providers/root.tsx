'use client';
import { UIProvider } from './ui';
import { ApolloProvider } from './apollo';

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <UIProvider>
      <ApolloProvider>{children}</ApolloProvider>
    </UIProvider>
  );
}
