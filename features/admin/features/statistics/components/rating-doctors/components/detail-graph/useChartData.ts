import { DoctorStatsReport } from '../../../../types/DoctorStatsReport'
import { monthsMap } from './hepers/monthsMap'
import { formatTimestamp } from '../../../../helpers/formatTimestamp'

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
        average: formatTimestamp(item.average),
        median: formatTimestamp(item.median),
        max: formatTimestamp(item.max),
      }
    })

  return formattedData
}
