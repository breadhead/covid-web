import { getDeclensionedWord } from '../helpers';

describe('getDeclensionedWord', () => {
  test('should save right end for singular', () => {
    const num = 1;
    expect(getDeclensionedWord(num)).toBe('консультация');
  });

  test('should save right end for a few characters word', () => {
    const num = 2;
    expect(getDeclensionedWord(num)).toBe('консультации');
  });

  test('should save right end for a few characters word', () => {
    const num = 3;
    expect(getDeclensionedWord(num)).toBe('консультации');
  });

  test('should save right end for a few characters word', () => {
    const num = 21;
    expect(getDeclensionedWord(num)).toBe('консультация');
  });

  test('should save right end for plural', () => {
    const num = 11;
    expect(getDeclensionedWord(num)).toBe('консультаций');
  });
});
