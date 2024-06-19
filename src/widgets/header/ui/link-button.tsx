import { Button, Link } from '@nextui-org/react';

interface Props {
  children: React.ReactNode;
  href: string;
}

export function LinkButton({ href, children }: Props) {
  return (
    <Button
      as={Link}
      href={href}
      className="w-full"
      color="primary"
      variant="flat"
    >
      {children}
    </Button>
  );
}
