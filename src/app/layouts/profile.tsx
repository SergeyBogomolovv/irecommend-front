export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="grow flex flex-col items-center ">{children}</div>;
}
