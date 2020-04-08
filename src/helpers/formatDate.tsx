import { format } from 'date-fns';
import locale from 'date-fns/locale/ru';

export const formatDate = (date: string) => {
  return format(date, 'D MMMM YYYY', { locale });
};

export const formatDateWithTime = (date: string) => {
  return format(date, 'D MMMM YYYY, HH:mm', { locale });
};
