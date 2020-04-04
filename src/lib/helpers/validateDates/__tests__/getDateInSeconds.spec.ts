import dayjs from 'dayjs';

import { getDateInSeconds } from '../getDateInSeconds';

describe('getDateInSeconds works', () => {
  test('should return a correct date', () => {
    expect(getDateInSeconds({ year: 2018, month: 1 })).toBe(
      dayjs('2018-1-1').valueOf(),
    );
  });
});
