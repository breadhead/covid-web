import { flow } from 'lodash'

import { Quota } from '@app/models/Quota/Quota'
import { Order } from '../organisms/Sorting'

const comporators = {
  [Order.Count]: (a: Quota, b: Quota) => b.count - a.count,
  [Order.Name]: (a: Quota, b: Quota) => flow([
    ([one, two]) => [one.name, two.name],
    ([one, two]) => one < two ? -1 : 1,
  ])([a, b]),
} as any

export const sortQuotas = (order: Order) => (quotas: Quota[]) =>
  quotas.sort(comporators[order])
