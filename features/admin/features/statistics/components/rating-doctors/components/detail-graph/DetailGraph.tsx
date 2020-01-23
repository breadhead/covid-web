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
import { DEFAULT_START } from '../../../funnel/ClaimsFunnel'

interface DetailGraphProps {
  name: string
}

const now = new Date()

export const DetailGraph = ({ name }: DetailGraphProps) => {
  const api = useApi()

  const [data, setData] = useState<DoctorStatsReport | null>(null)

  useEffect(
    () => {
      api.fetchDoctorReport(DEFAULT_START, now, name).then(setData)
    },
    [name],
  )

  const chartData = [
    {
      name: 'Январь',
      median: 10,
      average: 15,
      max: 30,
      all: 100,
      closedByClient: 14,
      success: 10,
      failure: 22,
    },
    {
      name: 'Февраль',
      median: 15,
      average: 20,
      max: 40,
      all: 200,
      closedByClient: 44,
      success: 30,
      failure: 25,
    },
    {
      name: 'Март',
      median: 17,
      average: 30,
      max: 70,
      all: 340,
      closedByClient: 124,
      success: 50,
      failure: 35,
    },
  ]

  return (
    <div>
      <LineChart
        width={730}
        height={250}
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="median" stroke="#8884d8" />
        <Line type="monotone" dataKey="average" stroke="#82ca9d" />
        <Line type="monotone" dataKey="max" stroke="#fcedaa" />
      </LineChart>
    </div>
  )
}
