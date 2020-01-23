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
        ...item,
        monthName: monthsMap[item.monthName],
        median: {
          name: 'mememm',
          value: Math.round(item.median / 1000 / 60 / 60),
        },
        max: Math.round(item.max / 1000 / 60 / 60),
      }
    })

  return formattedData
}
