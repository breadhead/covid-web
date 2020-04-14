import { format } from 'date-fns';
import locale from 'date-fns/locale/ru';

export const formatDate = (date: Date | string) => {
  return format(date, 'D MMMM YYYY', { locale });
};

export const formatDateWithTime = (date: Date | string) => {
  return format(date, 'D MMMM YYYY, HH:mm', { locale });
};
