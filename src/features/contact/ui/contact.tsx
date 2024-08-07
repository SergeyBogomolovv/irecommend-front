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
  editable?: boolean;
}

export const Contact = ({ type, href, id, nickname, editable }: Props) => {
  const contact = contactTypes.find((contact) => contact.type === type)!;
  const Icon = contact?.icon;
  const { deleteContact, loading } = useDeleteContact(id);
  const copy = useCopy(nickname);
  if (editable) {
    return (
      <Tooltip showArrow content={href || 'Скопировать'}>
        <Chip
          as={Button}
          isLoading={loading}
          onClose={() => deleteContact()}
          className={contact.className}
          classNames={{
            content: 'flex items-center gap-x-1 text-white',
            closeButton: 'text-stone-300',
          }}
        >
          <Icon className="size-5 text-white" />
          {type === Contacts.Discord ? (
            <p onClick={() => copy()}>{nickname}</p>
          ) : (
            <Link
              isExternal
              href={href || '/'}
              className="text-white"
              size="sm"
            >
              {nickname}
            </Link>
          )}
        </Chip>
      </Tooltip>
    );
  }
  return (
    <Tooltip showArrow content={href || 'Скопировать'}>
      <Chip
        as={Button}
        className={contact.className}
        classNames={{ content: 'flex items-center gap-x-1 text-white' }}
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
