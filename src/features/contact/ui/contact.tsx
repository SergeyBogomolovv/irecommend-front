import { Button, Chip } from '@nextui-org/react';
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
  },
  [Contacts.Instagram]: {
    label: 'Instagram',
    icon: FaInstagram,
  },
  [Contacts.Telegram]: {
    label: 'Телеграм',
    icon: FaTelegram,
  },
  [Contacts.Vk]: {
    label: 'ВКонтакте',
    icon: SlSocialVkontakte,
  },
};

export const Contact = ({ type, href, id }: Props) => {
  const Icon = contacts[type].icon;
  const { deleteContact, loading } = useDeleteContact(id);

  return (
    <Chip
      as={Button}
      isLoading={loading}
      onClose={() => deleteContact()}
      lang={href}
      classNames={{ content: 'flex items-center gap-x-1' }}
      color="primary"
    >
      <Icon className="size-5" />
      {contacts[type].label}
    </Chip>
  );
};
