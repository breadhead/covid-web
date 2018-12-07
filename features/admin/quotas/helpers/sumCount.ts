import { Quota } from '@app/models/Quota/Quota'

export const sumCount = (quotas: Quota[]) => quotas.length > 0
  ? quotas
    .map((quota) => quota.count)
    .reduce((prev, cur) => prev + cur)
  : 0
