import { Links } from '@/shared/ui/links';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="sm:container px-2 gap-y-6 pt-3 flex flex-col items-center justify-center">
      <Links />
      {children}
    </div>
  );
}
