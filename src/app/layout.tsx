import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './_providers';
import { Header } from '@/widgets/header';
import { Toaster } from '@/shared/ui/sonner';
import { CreateRecommendationButton } from '@/features/create-recommendation-button';
import ScrollToTop from '@/shared/ui/scroll-to-top';

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
      <body>
        <Providers>
          <main className="flex flex-col min-h-screen">
            <Header />
            {children}
          </main>
          <CreateRecommendationButton />
          <Toaster />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
