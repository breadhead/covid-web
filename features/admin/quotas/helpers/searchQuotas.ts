import { flow } from 'lodash'

import { Quota } from '@app/models/Quota/Quota'

export const searchQuotas = (query: string) => (quotas: Quota[]) =>
  quotas.filter(flow([
    (quota: Quota) => quota.name + quota.company.name + quota.comment,
    (str: string) => str.toLowerCase(),
    (str: string) => str.includes(query.toLowerCase()),
  ]))
