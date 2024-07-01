import { Button, Chip, Link, Tooltip } from '@nextui-org/react';
import { Contacts, Maybe } from '@/shared/graphql/graphql';
import { FaDiscord } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';
import { useDeleteContact } from '../model/use-delete-contact';

interface Props {
  type: Contacts;
  href?: Maybe<string>;
  nickname: string;
  id: string;
}

const contacts = {
  [Contacts.Discord]: {
    label: 'Discord',
    icon: FaDiscord,
    color: 'default',
  },
  [Contacts.Instagram]: {
    label: 'Instagram',
    icon: FaInstagram,
    color: 'danger',
  },
  [Contacts.Telegram]: {
    label: 'Телеграм',
    icon: FaTelegram,
    color: 'primary',
  },
  [Contacts.Vk]: {
    label: 'ВКонтакте',
    icon: SlSocialVkontakte,
    color: 'primary',
  },
};

export const Contact = ({ type, href, id, nickname }: Props) => {
  const Icon = contacts[type].icon;
  const { deleteContact, loading } = useDeleteContact(id);

  return (
    <Tooltip showArrow content={href}>
      <Chip
        as={Button}
        isLoading={loading}
        onClose={() => deleteContact()}
        classNames={{ content: 'flex items-center gap-x-1' }}
        color={contacts[type].color as any}
      >
        <Icon className="size-5" />
        {type === Contacts.Discord ? (
          <p>{nickname}</p>
        ) : (
          <Link isExternal href={href || ''} color="secondary">
            {nickname}
          </Link>
        )}
      </Chip>
    </Tooltip>
  );
};
