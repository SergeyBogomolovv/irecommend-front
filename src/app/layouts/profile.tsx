import { ProfileNav } from '@/features/profile-nav';

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="pt-3 grow flex flex-col gap-y-4 items-center px-2 ">
      <ProfileNav />
      {children}
    </section>
  );
}
