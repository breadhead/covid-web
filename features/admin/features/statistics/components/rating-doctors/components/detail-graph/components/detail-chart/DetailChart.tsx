import * as React from 'react'

import { useChartData } from '../../useChartData'
import { DoctorStatsReport } from '@app/features/admin/features/statistics/types/DoctorStatsReport'
import { GraphType } from '../../DetailGraph'
import { ChartCount } from '../chart-count'
import { ChartTime } from '../chart-time'

interface DetailChartProps {
  type: GraphType
  data: DoctorStatsReport[] | null
}

export const DetailChart = ({ type, data }: DetailChartProps) => {
  const chartData = useChartData(type, data)

  switch (type) {
    case GraphType.Count:
      return <ChartCount data={chartData} />
    case GraphType.Time:
      return <ChartTime data={chartData} />
    default:
      return null
  }
}
