import { Partner } from './config'

export const getCurrentPartnersOptions = (partners: Partner[]) => {
  const types = partners.map((partner: Partner) => partner.type)
  const labels = partners.map((partner: Partner) => partner.typeLabel)

  const uniqueTypes = Array.from(new Set(types))
  const uniqueLabels = Array.from(new Set(labels))

  return uniqueTypes.map((type, i) => {
    return { type, label: uniqueLabels[i] }
  })
}
