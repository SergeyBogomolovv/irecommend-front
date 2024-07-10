import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/app/providers/root';
import { Header } from '@/widgets/header';
import { Toaster } from '@/shared/ui/sonner';
import ScrollToTop from '@/shared/ui/scroll-to-top';
import { NewRecommendation } from '@/features/new-recommendation';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'IRecommend',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.svg" />
      <body>
        <Providers>
          <main className="flex flex-col min-h-screen">
            <Suspense>
              <Header />
            </Suspense>
            {children}
          </main>
          <NewRecommendation />
          <Toaster />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
