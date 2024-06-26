import { Link } from '@nextui-org/react';

interface Props {
  title: string;
  description: string;
  link?: string | null;
}

export function Recommendation({ title, description, link }: Props) {
  return (
    <div className="flex flex-col mt-2">
      <h4 className="font-bold text-large">{title}</h4>
      <small className="text-default-500">{description}</small>
      {link && (
        <Link
          className="max-w-[250px] truncate"
          showAnchorIcon
          size="sm"
          isExternal
          href={link}
        >
          Ссылка
        </Link>
      )}
    </div>
  );
}
