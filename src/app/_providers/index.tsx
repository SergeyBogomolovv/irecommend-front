'use client';
import { UIProvider } from './ui-provider';
import { ApolloProvider } from './apollo-provider';

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
