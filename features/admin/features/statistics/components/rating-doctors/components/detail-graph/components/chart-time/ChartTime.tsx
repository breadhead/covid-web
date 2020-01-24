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
import { FormattedChatData } from '../../useChartDataClaimsCount'

interface ChartCountProps {
  data: FormattedChatData[] | null
}

export const ChartTime = ({ data }: ChartCountProps) => {
  return (
    <>
      <p>Время в часах</p>
      <LineChart
        width={1000}
        height={500}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="monthName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Минимальное время"
          stroke="#82ca9d"
          strokeWidth="3"
        />
        <Line
          type="monotone"
          dataKey="Максимальное время"
          stroke="#ca8282"
          strokeWidth="3"
        />
        <Line
          type="monotone"
          dataKey="Среднее время"
          stroke="#ffa6ed"
          strokeWidth="3"
        />
        <Line
          type="monotone"
          dataKey="Медианное время"
          stroke=" #bca6ff"
          strokeWidth="3"
        />
      </LineChart>
    </>
  )
}
