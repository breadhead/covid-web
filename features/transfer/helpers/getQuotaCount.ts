import { none, Option, option, some } from 'ts-option'
import { StrippedQuota } from '../container'
export const getQuotaCount = (
  id: string,
  quotas: StrippedQuota[]) => {
  const foundQuota = quotas.find((quota) => quota.id === id)
  const foundQuotaCount = foundQuota ? foundQuota.count : 0
  return foundQuotaCount
}
