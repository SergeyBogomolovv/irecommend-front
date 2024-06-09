'use client';

import client from '@/shared/config/apollo/client';
import { ApolloProvider as ApolloClientProvider } from '@apollo/client';

interface ProviderProps {
  children: React.ReactNode;
}

export function ApolloProvider({ children }: ProviderProps) {
  return (
    <ApolloClientProvider client={client}>{children}</ApolloClientProvider>
  );
}
