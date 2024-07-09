import { UserCard } from '@/features/user-card';
import { Maybe } from '@/shared/graphql/graphql';
import { formatDate } from '@/shared/lib/format-date';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from '@nextui-org/react';

interface Props {
  userId: string;
  created_at: string;
  loading?: boolean;
  title: string;
  description: Maybe<string> | undefined;
  link: Maybe<string> | undefined;
  actionButton: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
}

export const Recommendation = ({
  actionButton,
  created_at,
  title,
  link,
  body,
  description,
  footer,
  userId,
}: Props) => {
  return (
    <Card className="py-2 w-full">
      <CardHeader className="pb-1 pt-2 px-4 flex-col items-start">
        <div className="flex justify-between items-center w-full">
          <UserCard id={userId} description={formatDate(created_at)} />
          {actionButton}
        </div>
        <div className="flex flex-col mt-2">
          <h4 className="font-bold text-large">{title}</h4>
          <small className="text-default-500">{description}</small>
          {link && (
            <Link
              className="max-w-[250px] truncate mt-2"
              showAnchorIcon
              size="sm"
              isExternal
              href={link}
            >
              Ссылка
            </Link>
          )}
        </div>
      </CardHeader>
      {body && <CardBody className="overflow-visible">{body}</CardBody>}
      <CardFooter>{footer}</CardFooter>
    </Card>
  );
};
