import dayjs from 'dayjs';

import {getDateString} from './getDateString';
import {DateInterface} from './types';

const getDateInSeconds = (date: DateInterface) => {
  return dayjs(getDateString(date)).valueOf();
};

export { getDateInSeconds };
