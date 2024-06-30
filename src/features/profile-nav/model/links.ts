interface Links {
  route: string;
  key: string;
  label: string;
}
export const links: Links[] = [
  { route: '/profile', key: 'profile', label: 'Профиль' },
  {
    route: '/profile/recommendations',
    key: 'recommendations',
    label: 'Рекомендации',
  },
  { route: '/profile/favorites', key: 'favorites', label: 'Избранное' },
];
