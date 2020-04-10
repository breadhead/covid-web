import { addHours, isAfter } from 'date-fns';

export const hasWebinarStarted = (startDate?: string) => {
  const now = new Date();
  const webinarDate = addHours(startDate || new Date(), -1);

  return !!startDate && isAfter(now, webinarDate);
};
