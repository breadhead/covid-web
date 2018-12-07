import { StrippedQuota } from '../container'
import { getQuotaCount } from './getQuotaCount'

export const validateCountToTransfer = (
  sourceId: string,
  countToTransfer: number,
  quotas: StrippedQuota[],
) => {
  const sourceCount = getQuotaCount(sourceId, quotas)
  const isCountToTransferValid = sourceCount >= countToTransfer

  if (!isCountToTransferValid) {
    throw { message: 'Недостаточно квот', path: 'count' }
  }
  return true
}
