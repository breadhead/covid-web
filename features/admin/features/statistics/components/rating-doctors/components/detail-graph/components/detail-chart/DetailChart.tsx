import * as React from 'react'

import { useChartDataClaimsCount } from '../../useChartDataClaimsCount'
import { DoctorStatsReport } from '@app/features/admin/features/statistics/types/DoctorStatsReport'
import { GraphType } from '../../DetailGraph'
import { ChartCount } from '../chart-count'

interface DetailChartProps {
  type: GraphType
  data: DoctorStatsReport[] | null
}

export const DetailChart = ({ type, data }: DetailChartProps) => {
  const chartData = useChartDataClaimsCount(type, data)

  return (
    <div>
      <ChartCount data={chartData} />
    </div>
  )
}
