import { splitText } from '../splitText';

describe('splitText', () => {
  test('should return the same text for empty by', () => {
    const text = 'Hello world and, wait';

    expect(splitText(text, [])).toEqual([text]);
  });

  test('should return splitted text for single by', () => {
    const text = 'Hello world and, wait';

    expect(splitText(text, ['and'])).toEqual(['Hello world ', 'and', ', wait']);
  });

  test('should return splitted text for multiply by', () => {
    const text = 'Hello world and, wait';

    expect(splitText(text, ['and', ','])).toEqual([
      'Hello world ',
      'and',
      ',',
      ' wait',
    ]);
  });

  test('should split Gdrive link with comment correctly', () => {
    const text =
      'Hello, check https://drive.google.com/open?id=0B_fsfvYDcajXdjVScXRUVnBhMjg';

    expect(
      splitText(text, [
        'https://drive.google.com/open?id=0B_fsfvYDcajXdjVScXRUVnBhMjg',
      ]),
    ).toEqual([
      'Hello, check ',
      'https://drive.google.com/open?id=0B_fsfvYDcajXdjVScXRUVnBhMjg',
    ]);
  });
});
