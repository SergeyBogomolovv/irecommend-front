import { ThemeSwitch } from '@/shared/ui/theme-switch';
import { Button, Avatar } from '@nextui-org/react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button color="primary">Press me</Button>
      <ThemeSwitch />
      <Avatar name="Gerax"></Avatar>
    </main>
  );
}
