import * as React from 'react'

import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts'

import { useApi } from '@app/lib/api/useApi'
import { useEffect, useState } from 'react'
import { DoctorStatsReport } from '../../../../types/DoctorStatsReport'
import { useChartData } from './useChartData'

interface DetailGraphProps {
  name: string
}

export const DetailGraph = ({ name }: DetailGraphProps) => {
  const api = useApi()

  const [data, setData] = useState<DoctorStatsReport[] | null>(null)

  useEffect(
    () => {
      api.fetchDoctorReport(name).then(setData)
    },
    [name],
  )

  const chartData = useChartData(data)

  return (
    <div>
      <h2>Количество заявок</h2>
      <LineChart
        width={1000}
        height={500}
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="monthName" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* <Line type="monotone" dataKey="average" stroke="#888" strokeWidth="3" /> */}
        <Line
          type="monotone"
          dataKey="success"
          stroke="#82ca9d"
          strokeWidth="3"
        />
        <Line
          type="monotone"
          dataKey="failure"
          stroke="#ca8282"
          strokeWidth="3"
        />
        <Line
          type="monotone"
          dataKey="closedByClient"
          stroke="#f0ac3e"
          strokeWidth="3"
        />
        <Line type="monotone" dataKey="all" stroke="#3c54ee" strokeWidth="3" />
      </LineChart>
    </div>
  )
}
