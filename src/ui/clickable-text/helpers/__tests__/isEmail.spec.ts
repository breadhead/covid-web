import {isEmail} from '../isEmail';

describe('isEmail', () => {
  test('should return true for regular email', () => {
    const email = 'hello@gmail.com';

    expect(isEmail(email)).toBeTruthy();
  });

  test('should return true for email with dot', () => {
    const email = 'hello.hello@gmail.com';

    expect(isEmail(email)).toBeTruthy();
  });

  test('should return true for email with _', () => {
    const email = 'wlwl_hello.hello@gmail.com';

    expect(isEmail(email)).toBeTruthy();
  });

  test('should return true for email with rarely domen', () => {
    const email = 'hello@gmail.mememe';

    expect(isEmail(email)).toBeTruthy();
  });

  test('should return true for email with rarely mail agent', () => {
    const email = 'hello@dmmdm.com';

    expect(isEmail(email)).toBeTruthy();
  });

  test('should return true for email with short mail agent', () => {
    const email = 'hello@d.com';

    expect(isEmail(email)).toBeTruthy();
  });

  test('should return true for email with short domen', () => {
    const email = 'hello@d.com';

    expect(isEmail(email)).toBeTruthy();
  });

  test('should return true for email started on +', () => {
    const email = '+hello@gmail.com';

    expect(isEmail(email)).toBeTruthy();
  });

  test('should return false for regular string', () => {
    const email = 'hello';

    expect(isEmail(email)).toBeFalsy();
  });

  test('should return false for empty string', () => {
    const email = '';

    expect(isEmail(email)).toBeFalsy();
  });

  test('should return false for string with @', () => {
    const email = 'memem @ memem';

    expect(isEmail(email)).toBeFalsy();
  });

  test('should return false for string with @mention', () => {
    const email = 'memem @memem';

    expect(isEmail(email)).toBeFalsy();
  });

  test('should return false for string starts on @mention', () => {
    const email = '@memem';

    expect(isEmail(email)).toBeFalsy();
  });

  test('should return false for url', () => {
    const email = 'http://google.com';

    expect(isEmail(email)).toBeFalsy();
  });
});
