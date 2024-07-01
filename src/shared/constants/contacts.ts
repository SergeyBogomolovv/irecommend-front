import { IconType } from 'react-icons/lib';
import { Contacts } from '../graphql/graphql';
import { FaDiscord, FaInstagram, FaTelegram } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';

interface IContactType {
  title: string;
  type: Contacts;
  icon: IconType;
  color:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | undefined;
}

export const contactTypes: IContactType[] = [
  {
    title: 'ВКонтакте',
    type: Contacts.Vk,
    icon: SlSocialVkontakte,
    color: 'primary',
  },
  {
    title: 'Discord',
    type: Contacts.Discord,
    icon: FaDiscord,
    color: 'default',
  },
  {
    title: 'Instagram',
    type: Contacts.Instagram,
    icon: FaInstagram,
    color: 'danger',
  },
  {
    title: 'Телеграм',
    type: Contacts.Telegram,
    icon: FaTelegram,
    color: 'primary',
  },
];
