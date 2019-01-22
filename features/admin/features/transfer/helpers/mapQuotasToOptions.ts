import StrippedQuota from './StrippedQuota'

export const mapQuotasToOptions = (quotas: StrippedQuota[]) =>
  quotas.map(quota => ({ name: quota.name, value: quota.id }))
