import { Quota } from '@app/models/Quota/Quota'

export const sumCount = (quotas: Quota[]) =>
  quotas.map(quota => quota.count).reduce((prev, cur) => prev + cur)
