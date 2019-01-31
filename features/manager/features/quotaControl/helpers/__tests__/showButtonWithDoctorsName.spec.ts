import { showButtonWithDoctorsName } from '../showButtonWithDoctorsName'

describe('showButtonWithDoctorsName works', () => {
  test('should return true if doctor is assigned', () => {
    expect(showButtonWithDoctorsName(true)).toBe(true)
  })
  test('should return fasle if doctor is not assigned', () => {
    expect(showButtonWithDoctorsName(false)).toBe(false)
  })
})
