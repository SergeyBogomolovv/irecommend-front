import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Link } from '@nextui-org/link';
import Image from 'next/image';

interface Props {
  children: React.ReactNode;
  header: string;
  description: string;
  footer: string;
  footerHref: string;
  imageSrc: string;
}

export default function FormWrapper({
  children,
  header,
  description,
  footer,
  footerHref,
  imageSrc,
}: Props) {
  return (
    <Card
      isBlurred
      className="border-none max-w-[600px] w-full my-10"
      shadow="none"
    >
      <CardHeader className="flex flex-col gap-2">
        <h2 className="text-3xl font-semibold">{header}</h2>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardHeader>
      <CardBody>
        <Image
          src={imageSrc}
          alt=""
          className="mx-auto"
          width={500}
          height={500}
        />
      </CardBody>
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
