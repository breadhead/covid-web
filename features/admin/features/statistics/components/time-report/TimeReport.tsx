import React, { useState, useEffect } from 'react'
import { Table } from 'antd'
import { useApi } from '@app/lib/api/useApi'
import { formatTimestamp } from './formatTimestamp'
import { TimeReport as TimeReportModel } from '@app/src/domain/statistics/model/time-report'

const columns = [
  {
    title: 'Эксперт',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Среднее время ответа',
    dataIndex: 'average',
    key: 'average',
    render: formatTimestamp,
  },
  {
    title: 'Медианное время ответа',
    dataIndex: 'median',
    key: 'median',
    render: formatTimestamp,
  },
]

export const TimeReport = () => {
  const api = useApi()
  const [timeData, setTimeData] = useState<TimeReportModel | null>(null)

  useEffect(() => {
    api.fetchTimeReport().then(setTimeData)
  }, [])

  if (!timeData) {
    return <p>Загружаем...</p>
  }

  const { median, average, doctors } = timeData

  const tableData = doctors.map(doctor => ({
    key: doctor.name,
    ...doctor,
  }))

  return (
    <div>
      <p>Общее среднее время ответа: {formatTimestamp(average)}</p>
      <p>Общее медианное время ответа: {formatTimestamp(median)}</p>
      <Table columns={columns} dataSource={tableData} />
    </div>
  )
}
