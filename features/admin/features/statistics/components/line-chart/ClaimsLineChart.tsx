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
import Layout from '@app/features/admin/organisms/Layout'

const data = [
  {
    name: 'Февраль',
    all: 5000,
    answered: 2500,
  },
  {
    name: 'Март',
    all: 2500,
    answered: 2500,
  },
  {
    name: 'Апрель',
    all: 3000,
    answered: 2500,
  },
  {
    name: 'Май',
    all: 3200,
    answered: 3908,
    amt: 2500,
  },
  {
    name: 'Июнь',
    all: 3300,
    answered: 2500,
  },
  {
    name: 'Июль',
    all: 3400,
    answered: 3800,
  },
]

export const ClaimsLineChart = () => {
  return (
    <Layout>
      <LineChart
        width={730}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="answered" stroke="#8884d8" />
        <Line type="monotone" dataKey="all" stroke="#82ca9d" />
      </LineChart>
    </Layout>
  )
}
