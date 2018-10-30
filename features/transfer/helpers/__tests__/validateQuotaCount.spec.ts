import { validateCountToTransfer } from '../validateCountToTransfer'

test('should throw error if count is invalid', () => {
  expect(() => validateCountToTransfer('asda2342', 12,
    [{ id: 'asda2342', count: 11, name: 'jhgjhgj' },
    { id: '5', count: 123, name: 'ajsjkgjhsag' }],
  )).toThrow('Недостаточно квот')
})

test('should return true if count is valid', () => {
  expect(validateCountToTransfer('asda2342', 12,
    [{ id: 'asda2342', count: 14, name: 'jhgjhgj' },
    { id: '5', count: 123, name: 'ajsjkgjhsag' }],
  )).toBe(true)
})
test('should return true if count is valid', () => {
  expect(validateCountToTransfer('asda2342', 12,
    [{ id: 'asda2342', count: 12, name: 'jhgjhgj' },
    { id: '5', count: 123, name: 'ajsjkgjhsag' }],
  )).toBe(true)
})
