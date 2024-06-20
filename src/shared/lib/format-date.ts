import { formatRelative } from 'date-fns';
import { ru } from 'date-fns/locale';

export const formatDate = (date: string): string => {
  const relativeDate = formatRelative(date, new Date(), { locale: ru });
  return relativeDate.charAt(0).toUpperCase() + relativeDate.slice(1);
};
