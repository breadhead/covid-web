import { flatten } from '../flatten'

describe('flatten', () => {
  test('should not modify flat array', () => {
    expect(flatten(['hello', 'world'])).toEqual(['hello', 'world'])
  })

  test('should flat two-level array  array', () => {
    expect(flatten(['hello', ['my', 'fau']])).toEqual(['hello', 'my', 'fau'])
  })

  test('should flat three-level array  array', () => {
    expect(flatten(['hello', ['my', 'fau'], [['again', 'i']]])).toEqual([
      'hello',
      'my',
      'fau',
      'again',
      'i',
    ])
  })
})
