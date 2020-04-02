import dayjs from 'dayjs';

import { ErrorCode } from './erorCodes';
import { Validator } from './types';

const checkForFutureDateError: Validator = (dates: number[]) => {
  const now = dayjs().valueOf();

  const noFutureDate = dates.every((date) => date <= now);
  return noFutureDate ? undefined : ErrorCode.FutureDate;
};

export { checkForFutureDateError };
