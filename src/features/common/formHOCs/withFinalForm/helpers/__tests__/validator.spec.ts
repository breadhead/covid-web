import * as yup from 'yup';

import {validator} from '../validator';

describe('schema validation works', () => {
  const schema = yup
    .string()
    .email('введите email')
    .required('обязательное поле');
  const validateCb = () => undefined;

  test('should return required error message if value is empty', () => {
    const values = { email: '' };
    const value = '';

    expect(validator({ value, schema, values, validateCb })).toBe(
      'обязательное поле',
    );
  });
  test('should return email error message if value isnt email and not empty', () => {
    const values = { email: 'wrong' };
    const value = 'wrong';

    expect(validator({ value, schema, values, validateCb })).toBe(
      'введите email',
    );
  });

  test('should return undefined if value is email', () => {
    const values = { email: 'correct@correct.correct' };
    const value = 'correct@correct.correct';

    expect(validator({ value, schema, values, validateCb })).toBe(undefined);
  });
});

describe('callback validation with schema works', () => {
  const schema = yup
    .string()
    .email('введите email')
    .required('обязательное поле');
  const validateCb = (value: any, values: any) => {
    if (value !== values.email) {
      throw new Error('пароли должны совпадать');
    }
  };

  test('should return undefined if values of email and confirm are the same', () => {
    const values = { email: 'email@email.email', confirm: 'email@email.email' };
    const value = 'email@email.email';

    expect(validator({ value, schema, values, validateCb })).toBe(undefined);
  });
  test('should return error if values of email and confirm are different', () => {
    const values = { email: 'email@email.email', confirm: 'wrong@wrong.wrong' };
    const value = 'wrong@wrong.wrong';

    expect(validator({ value, schema, values, validateCb })).toBe(
      'пароли должны совпадать',
    );
  });
});
