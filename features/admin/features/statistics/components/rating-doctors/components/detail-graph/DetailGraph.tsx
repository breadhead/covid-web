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
        {/* <Line type="monotone" dataKey="median" stroke="#8884d8" />
        <Line type="monotone" dataKey="average" stroke="#82ca9d" />
        <Line type="monotone" dataKey="max" stroke="#fcedaa" /> */}

        <Line type="monotone" dataKey="success" stroke="#82ca9d" />
        <Line type="monotone" dataKey="failure" stroke="#82ca9d" />
        <Line type="monotone" dataKey="closedByClient" stroke="#82ca9d" />
        <Line type="monotone" dataKey="all" stroke="#82ca9d" />
      </LineChart>
    </div>
  )
}
