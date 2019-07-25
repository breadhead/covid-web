import Gender from '@app/models/Gender'

export const genderRadioGroup = Object.entries(Gender).map(([id, value]) => ({
  id,
  value,
}))
