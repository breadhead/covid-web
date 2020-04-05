import dayjs from 'dayjs';

import { compareDates } from '../compareDates';
import { ErrorCode } from '../erorCodes';

describe('validateDates works', () => {
  test('should return undefined when dates are in correct order', () => {
    const date1 = dayjs('2015-01-18').valueOf();
    const date2 = dayjs('2018-01-18').valueOf();

    expect(compareDates([date1, date2])).toBe(undefined);
  });
  test('should return undefined when date1 is later than date2', () => {
    const date1 = dayjs('2018-01-18').valueOf();
    const date2 = dayjs('2015-01-18').valueOf();

    expect(compareDates([date1, date2])).toBe(ErrorCode.MixedDateOrder);
  });
});
