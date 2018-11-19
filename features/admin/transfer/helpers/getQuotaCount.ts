import { Option } from 'tsoption'
import { StrippedQuota } from '../container'
export const getQuotaCount = (
  id: string,
  quotas: StrippedQuota[]) => Option
    .of(quotas.find((quota) => quota.id === id))
    .map((quota) => quota.count)
    .map((count) => parseInt(count, 10))
    .getOrElse(0)
