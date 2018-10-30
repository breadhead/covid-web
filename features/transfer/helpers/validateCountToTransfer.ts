import { getQuotaCount } from './getQuotaCount'

export const validateCountToTransfer = (

  sourceId: string,
  countToTransfer: number,
  quotas: Array<{ id: string, name: string, count: number }>,
) => {
  const sourceCount = getQuotaCount(sourceId, quotas)
  const isCountToTransferValid = sourceCount >= countToTransfer

  if (!isCountToTransferValid) {
    throw { message: 'Недостаточно квот', path: 'count' }
  }
  return true
}
