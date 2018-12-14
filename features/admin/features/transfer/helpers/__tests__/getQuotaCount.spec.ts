import { getQuotaCount } from '../getQuotaCount'

test('should get quota count from an array of quotas', () => {
  expect(
    getQuotaCount('1', [
      { id: '1', count: 23, name: 'jhgjhgj' },
      { id: '5', count: 123, name: 'ajsjkgjhsag' },
    ]),
  ).toBe(23)
})
