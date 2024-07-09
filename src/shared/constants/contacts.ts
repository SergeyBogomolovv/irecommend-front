import { IconType } from 'react-icons/lib';
import { Contacts } from '../graphql/graphql';
import { FaDiscord, FaInstagram, FaTelegram } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';

interface IContactType {
  title: string;
  type: Contacts;
  icon: IconType;
  className: string;
}

export const contactTypes: IContactType[] = [
  {
    title: 'ВКонтакте',
    type: Contacts.Vk,
    icon: SlSocialVkontakte,
    className: 'bg-[#0077FF]',
  },
  {
    title: 'Discord',
    type: Contacts.Discord,
    icon: FaDiscord,
    className: 'bg-[#36393E]',
  },
  {
    title: 'Instagram',
    type: Contacts.Instagram,
    icon: FaInstagram,
    className: 'bg-[#E1306C]',
  },
  {
    title: 'Телеграм',
    type: Contacts.Telegram,
    icon: FaTelegram,
    className: 'bg-[#24A1DE]',
  },
];
