import {ErrorCode} from './erorCodes';
import {Validator} from './types';

const compareDates: Validator = (dates) => {
  return dates[1] >= dates[0] ? undefined : ErrorCode.MixedDateOrder;
};

export { compareDates };
