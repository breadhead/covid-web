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
import { FormattedChatData } from '../../useChartData'

interface ChartCountProps {
  data: FormattedChatData[] | null
}

export const ChartCount = ({ data }: ChartCountProps) => {
  return (
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
        dataKey="Закрыты вовремя"
        stroke="#82ca9d"
        strokeWidth="3"
      />
      <Line
        type="monotone"
        dataKey="Просрочены"
        stroke="#ca8282"
        strokeWidth="3"
      />
      <Line
        type="monotone"
        dataKey="Закрыты клиентом"
        stroke="#f0ac3e"
        strokeWidth="3"
      />
      <Line type="monotone" dataKey="Всего" stroke="#3c54ee" strokeWidth="3" />
    </LineChart>
  )
}
