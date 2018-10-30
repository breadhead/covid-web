export const getQuotaCount = (
  id: string,
  quotas: Array<{ id: string, name: string, count: number }>) => {
  const foundQuota = quotas.find((quota) => quota.id === id)
  const foundQuotaCount = foundQuota ? foundQuota.count : 0
  return foundQuotaCount
}
