import { flow } from 'lodash'

import { Quota } from '@app/models/Quota/Quota'
import { Order } from '../organisms/Sorting'

const quotaToDateValue = (quota: Quota) => new Date(quota.createdAt).valueOf()

const countComporator = () => (a: Quota, b: Quota) => b.count - a.count

const nameComporator = () => (a: Quota, b: Quota) => (a.name < b.name ? -1 : 1)

const dateComporator = (order: 'ACS' | 'DESC') => (a: Quota, b: Quota) =>
  flow([
    quotas => quotas.map(quotaToDateValue),
    ([one, two]) => one - two,
    result => (order === 'DESC' ? result : -result),
  ])([a, b])

const comporators = {
  [Order.Count]: countComporator(),
  [Order.Name]: nameComporator(),
  [Order.DateNew]: dateComporator('ACS'),
  [Order.DateOld]: dateComporator('DESC'),
} as any

export const sortQuotas = (order: Order) => (quotas: Quota[]) =>
  quotas.sort(comporators[order])
