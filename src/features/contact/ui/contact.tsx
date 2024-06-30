import { Button, Chip, Link, Tooltip } from '@nextui-org/react';
import { Contacts } from '../../../shared/graphql/graphql';
import { FaDiscord } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';
import { useDeleteContact } from '../model/use-delete-contact';

interface Props {
  type: Contacts;
  href: string;
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

export const Contact = ({ type, href, id }: Props) => {
  const Icon = contacts[type].icon;
  const { deleteContact, loading } = useDeleteContact(id);

  return (
    <Tooltip showArrow content={href}>
      <Link isExternal href={href}>
        <Chip
          as={Button}
          isLoading={loading}
          onClose={() => deleteContact()}
          lang={href}
          classNames={{ content: 'flex items-center gap-x-1' }}
          color={
            contacts[type].color as
              | 'default'
              | 'primary'
              | 'secondary'
              | 'success'
              | 'warning'
              | 'danger'
          }
        >
          <Icon className="size-5" />
          {contacts[type].label}
        </Chip>
      </Link>
    </Tooltip>
  );
};
