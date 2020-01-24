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
      return data.map(item => {
        return {
          ['monthName']: monthsMap[item.monthName],
          ['Среднее время']: Math.round(item.average / 1000 / 60 / 60),
          ['Медианное время']: Math.round(item.median / 1000 / 60 / 60),
          ['Максимальное время']: Math.round(item.max / 1000 / 60 / 60),
          ['Минимальное время']: Math.round(item.min / 1000 / 60 / 60),
        }
      })
    default:
      return null
  }
}
