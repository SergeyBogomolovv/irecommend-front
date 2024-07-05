import { Links } from '@/shared/ui/links';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="px-2 gap-y-6 pt-3 flex flex-col items-center justify-center">
      <Links />
      {children}
    </section>
  );
}
