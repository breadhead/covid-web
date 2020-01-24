import { DoctorStatsReport } from '../../../../types/DoctorStatsReport'
import { monthsMap } from './hepers/monthsMap'

export const useChartData = (data: DoctorStatsReport[] | null) => {
  if (!data) return null

  const formattedData = data
    .sort((a: DoctorStatsReport, b: DoctorStatsReport) => {
      return a.monthName - b.monthName
    })
    .map(item => {
      return {
        monthName: monthsMap[item.monthName],
        ['Всего']: item.all,
        ['Закрыты вовремя']: item.success,
        ['Просрочены']: item.failure,
        ['Закрыты клиентом']: item.closedByClient,
        ['Медианная оценка']: item.ratingMedian,
        ['Средняя оценка']: item.ratingAverage,
      }
    })

  return formattedData
}
