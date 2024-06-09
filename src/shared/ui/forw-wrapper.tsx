import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Link } from '@nextui-org/link';

interface Props {
  children: React.ReactNode;
  header: string;
  description: string;
  footer: string;
  footerHref: string;
}

export default function FormWrapper({
  children,
  header,
  description,
  footer,
  footerHref,
}: Props) {
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[600px] w-full"
      shadow="none"
    >
      <CardHeader className="flex flex-col gap-2 items-start">
        <h2 className="text-3xl font-semibold">{header}</h2>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardHeader>
      <CardBody>{children}</CardBody>
      <CardFooter>
        <Link
          size="sm"
          color="foreground"
          className="mx-auto"
          href={footerHref}
        >
          {footer}
        </Link>
      </CardFooter>
    </Card>
  );
}
