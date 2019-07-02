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
    // eslint-disable-next-line no-throw-literal
    throw { message: 'Недостаточно квот', path: 'count' }
  }
  return true
}
