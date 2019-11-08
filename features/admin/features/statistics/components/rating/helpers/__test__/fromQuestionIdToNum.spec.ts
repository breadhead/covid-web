import { fromQuestionIdToNum } from '../fromQuestionIdToNum'

describe('fromQuestionIdToNum', () => {
  test('should return 1 for Q1', () => {
    const res = fromQuestionIdToNum('Q1')
    expect(res).toBe(1)
  })
})
