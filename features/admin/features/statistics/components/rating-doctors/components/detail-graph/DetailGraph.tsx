import * as React from 'react'
import { useApi } from '@app/lib/api/useApi'
import { useEffect, useState } from 'react'
import { DoctorStatsReport } from '../../../../types/DoctorStatsReport'
import { Select } from 'antd'
import { DetailChart } from './components/detail-chart'

const { Option } = Select

export enum GraphType {
  Count = 'count',
  Time = 'time',
}

interface DetailGraphProps {
  name: string
}

export const DetailGraph = ({ name }: DetailGraphProps) => {
  const api = useApi()

  const [data, setData] = useState<DoctorStatsReport[] | null>(null)
  const [current, setCurrent] = useState(GraphType.Count)

  useEffect(
    () => {
      api.fetchDoctorReport(name).then(setData)
    },
    [name],
  )

  return (
    <div>
      <Select
        defaultValue={GraphType.Count}
        style={{ width: 320, marginBottom: 44, marginLeft: 4 }}
        onChange={val => {
          setCurrent(val)
        }}
      >
        <Option value={GraphType.Count}>Количество заявок</Option>
        <Option value={GraphType.Time}>Время ответа</Option>
      </Select>
      <DetailChart type={current} data={data} />
    </div>
  )
}
