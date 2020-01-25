import * as React from 'react'

import { useChartData } from '../../useChartData'
import { GraphType } from '../../DetailGraph'
import { ChartCount } from '../chart-count'
import { ChartTime } from '../chart-time'
import { DoctorGraphInfo } from '@app/features/admin/features/statistics/types/DoctorStatsReport';

interface DetailChartProps {
  type: GraphType
  data: DoctorGraphInfo[] | null
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
