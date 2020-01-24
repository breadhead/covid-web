import { DoctorStatsReport } from '../../../../types/DoctorStatsReport'
import { monthsMap } from './hepers/monthsMap'
import { GraphType } from './DetailGraph'

export interface FormattedChatData {
  [key: string]: string | number | undefined
}

export const useChartDataClaimsCount = (
  type: GraphType,
  data: DoctorStatsReport[] | null,
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
          ['Медианная оценка']: item.ratingMedian,
          ['Средняя оценка']: item.ratingAverage,
        }
      })
    case GraphType.Time:
      return null
    default:
      return null
  }
}
