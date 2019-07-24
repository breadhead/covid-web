import { Aids } from '@app/models/Aids'

export const aidsRadioGroup = Object.entries(Aids).map(([id, value]) => ({
  id,
  value,
}))
