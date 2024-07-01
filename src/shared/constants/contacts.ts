import { Contacts } from '../graphql/graphql';

interface IContactType {
  title: string;
  type: Contacts;
}

export const contactTypes: IContactType[] = [
  { title: 'ВКонтакте', type: Contacts.Vk },
  { title: 'Discord', type: Contacts.Discord },
  { title: 'Instagram', type: Contacts.Instagram },
  { title: 'Телеграм', type: Contacts.Telegram },
];
