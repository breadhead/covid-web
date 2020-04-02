import { isDate } from '../isDate';

describe('isDate', () => {
  test('should return true for regular date', () => {
    const date = '06.16.2019';

    expect(isDate(date)).toBeTruthy();
  });

  test('should return true for date with /', () => {
    const date = '06/16/2019';

    expect(isDate(date)).toBeTruthy();
  });

  test('should return true for with short year', () => {
    const date = '06.16.19';

    expect(isDate(date)).toBeTruthy();
  });

  test('should return true for date without year', () => {
    const date = '06.16';

    expect(isDate(date)).toBeTruthy();
  });

  test('should return true for reverse date', () => {
    const date = '2019.04.17';

    expect(isDate(date)).toBeTruthy();
  });

  test('should return true for reverse date with short year', () => {
    const date = '19.04.17';

    expect(isDate(date)).toBeTruthy();
  });

  test('should return false for regular string', () => {
    const date = 'hello';

    expect(isDate(date)).toBeFalsy();
  });

  test('should return false for empty string', () => {
    const date = '';

    expect(isDate(date)).toBeFalsy();
  });

  test('should return false for telephone number', () => {
    const date = '89211234567';

    expect(isDate(date)).toBeFalsy();
  });

  test('should return false for telephone number starts on +', () => {
    const date = '+79211234567';

    expect(isDate(date)).toBeFalsy();
  });

  test('should return false for telephone number with dashes', () => {
    const date = '+7-921-123-45-67';

    expect(isDate(date)).toBeFalsy();
  });

  test('should return false for time', () => {
    const date = '14:56';

    expect(isDate(date)).toBeFalsy();
  });

  test('should return false for url', () => {
    const date = 'http://google.com';

    expect(isDate(date)).toBeFalsy();
  });
});
