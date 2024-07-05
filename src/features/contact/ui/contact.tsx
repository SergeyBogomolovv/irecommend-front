import { Button, Chip, Link, Tooltip } from '@nextui-org/react';
import { Contacts, Maybe } from '@/shared/graphql/graphql';
import { useDeleteContact } from '../model/use-delete-contact';
import { contactTypes } from '@/shared/constants/contacts';
import { useCopy } from '../model/use-copy';

interface Props {
  type: Contacts;
  href?: Maybe<string>;
  nickname: string;
  id: string;
}

export const Contact = ({ type, href, id, nickname }: Props) => {
  const contact = contactTypes.find((contact) => contact.type === type)!;
  const Icon = contact?.icon;
  const { deleteContact, loading } = useDeleteContact(id);
  const copy = useCopy(nickname);
  return (
    <Tooltip showArrow content={href || 'Скопировать'}>
      <Chip
        as={Button}
        isLoading={loading}
        onClose={() => deleteContact()}
        classNames={{ content: 'flex items-center gap-x-1 text-white' }}
        color={contact?.color}
      >
        <Icon className="size-5 text-white" />
        {type === Contacts.Discord ? (
          <p onClick={() => copy()}>{nickname}</p>
        ) : (
          <Link isExternal href={href || '/'} className="text-white" size="sm">
            {nickname}
          </Link>
        )}
      </Chip>
    </Tooltip>
  );
};
