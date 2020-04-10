import { isBefore, addHours } from 'date-fns';

import { ArticlesItem } from '@app/src/domain/models/common/ArticlesItem';

export const hasWebinarStarted = (startDate?: string) =>
  !!startDate && isBefore(new Date(), addHours(startDate, -1));
