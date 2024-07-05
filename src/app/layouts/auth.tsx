export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="grow flex flex-col items-center justify-center">
      {children}
    </section>
  );
}
