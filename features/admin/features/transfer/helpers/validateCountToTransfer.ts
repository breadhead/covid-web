import { getQuotaCount } from './getQuotaCount'
import StrippedQuota from './StrippedQuota'

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
