'use client';

import { ThemeProviderProps } from 'next-themes/dist/types';
import { UIProvider } from './ui-provider';
import { ApolloProvider } from './apollo-provider';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <UIProvider themeProps={themeProps}>
      <ApolloProvider>{children}</ApolloProvider>
    </UIProvider>
  );
}
