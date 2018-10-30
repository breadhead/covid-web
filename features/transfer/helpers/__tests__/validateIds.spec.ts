import { validateIds } from '../validateIds'

test('should throw if passed two equal ids', () => {
  expect(() => validateIds('asjd', 'asjd')).toThrow('Выбраны одинаковые квоты')
})
test('should return true if passed unequal ids', () => {
  expect(validateIds('asjssssssd', 'asjd')).toBe(true)
})
