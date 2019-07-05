import React, { useState, useEffect } from 'react'
import { Table } from 'antd'
import { useApi } from '@app/lib/api/useApi'
import { formatTimestamp } from './formatTimestamp'
import { TimeReport as TimeReportModel } from '@app/src/domain/statistics/model/time-report'
import { useColumnSearchProps } from './useColumnSearchProps'

export const TimeReport = () => {
  const api = useApi()
  const [timeData, setTimeData] = useState<TimeReportModel | null>(null)
  const [columns, setColumns] = useState<any[]>([])

  useEffect(() => {
    api.fetchTimeReport().then(setTimeData)
  }, [])

  const getColumnSearchProps = useColumnSearchProps()
  useEffect(
    () => {
      const currentColumns = [
        {
          title: 'Эксперт',
          dataIndex: 'name',
          key: 'name',
          ...getColumnSearchProps('name'),
        },
        {
          title: 'Среднее время ответа',
          dataIndex: 'average',
          key: 'average',
          render: formatTimestamp,
          defaultSortOrder: 'descend',
          sorter: (a: { average: number }, b: { average: number }) =>
            a.average - b.average,
        },
        {
          title: 'Медианное время ответа',
          dataIndex: 'median',
          key: 'median',
          render: formatTimestamp,
          defaultSortOrder: 'descend',
          sorter: (a: { median: number }, b: { median: number }) =>
            a.median - b.median,
        },
        {
          title: 'Максимальное время ответа',
          dataIndex: 'max',
          key: 'max',
          render: formatTimestamp,
          defaultSortOrder: 'descend',
          sorter: (a: { max: number }, b: { max: number }) => a.max - b.max,
        },
      ]

      setColumns(currentColumns)
    },
    [getColumnSearchProps],
  )

  if (!timeData) {
    return <p>Загружаем...</p>
  }

  const { median, max, average, doctors } = timeData

  const tableData = doctors.map(doctor => ({
    key: doctor.name,
    ...doctor,
  }))

  return (
    <div>
      <p>Общее среднее время ответа: {formatTimestamp(average)}</p>
      <p>Общее медианное время ответа: {formatTimestamp(median)}</p>
      <p>Максимальное время ответа: {formatTimestamp(max)}</p>
      <Table columns={columns} dataSource={tableData} />
    </div>
  )
}
