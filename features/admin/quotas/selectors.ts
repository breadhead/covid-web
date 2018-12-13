import { curryRight, flow, groupBy, mapValues } from 'lodash'
import { createSelector } from 'reselect'

import { State } from '@app/lib/store'
import { sumCount } from './helpers/sumCount'

export const getQuotas = (state: State) => state.quotas.data

export const getCount = createSelector(
  getQuotas,
  sumCount,
)

export const getCountByTypes = createSelector(
  getQuotas,
  flow([curryRight(groupBy)('type'), curryRight(mapValues)(sumCount)]),
)
