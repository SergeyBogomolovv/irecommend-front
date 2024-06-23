import { Links } from '@/widgets/links';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container gap-y-4 flex flex-col items-center justify-center">
      <Links />
      {children}
    </div>
  );
}
