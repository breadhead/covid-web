/* eslint-disable no-useless-computed-key */
import { DoctorGraphInfo } from '../../../../types/DoctorStatsReport'
import { monthsMap } from './hepers/monthsMap'
import { GraphType } from './DetailGraph'
import { formatTimestampToDays } from '../../../../helpers/formatTimestampToDays'

export interface FormattedChatData {
  [key: string]: string | number | undefined
}

export const useChartData = (
  type: GraphType,
  data: DoctorGraphInfo[] | null,
): FormattedChatData[] | null => {
  if (!data) return null

  switch (type) {
    case GraphType.Count:
      return data.map(item => {
        return {
          ['monthName']: monthsMap[item.monthName],
          ['Всего']: item.all,
          ['Закрыты вовремя']: item.success,
          ['Просрочены']: item.failure,
          ['Закрыты клиентом']: item.closedByClient,
        }
      })
    case GraphType.Time:
      return data.map(item => {
        return {
          ['monthName']: monthsMap[item.monthName],
          ['Среднее время']: formatTimestampToDays(item.average),
          ['Медианное время']: formatTimestampToDays(item.median),
          ['Максимальное время']: formatTimestampToDays(item.max),
          ['Минимальное время']: formatTimestampToDays(item.min),
        }
      })
    default:
      return null
  }
}
