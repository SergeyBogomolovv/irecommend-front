export enum ContactType {
  TELEGRAM = 'TELEGRAM',
  VK = 'VK',
  INSTAGRAM = 'INSTAGRAM',
  DISCORD = 'DISCORD',
}

interface IContactType {
  title: string;
  type: ContactType;
}

export const contactTypes: IContactType[] = [
  { title: 'ВКонтакте', type: ContactType.VK },
  { title: 'Discord', type: ContactType.DISCORD },
  { title: 'Instagram', type: ContactType.INSTAGRAM },
  { title: 'Телеграм', type: ContactType.TELEGRAM },
];
