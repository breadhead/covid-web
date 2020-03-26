import { getConclutionText } from '../../getConclutionText'

describe('getConclutionText', () => {
  test('should return false for non-link text', () => {
    const text = 'Hello world!'

    expect(getConclutionText(text)).toBeFalsy()
  })
})
