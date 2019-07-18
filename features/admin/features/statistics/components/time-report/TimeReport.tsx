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
          title: 'Среднее время',
          dataIndex: 'average',
          key: 'average',
          render: formatTimestamp,
          defaultSortOrder: 'descend',
          sorter: (a: { average: number }, b: { average: number }) =>
            a.average - b.average,
        },
        {
          title: 'Медианное время',
          dataIndex: 'median',
          key: 'median',
          render: formatTimestamp,
          defaultSortOrder: 'descend',
          sorter: (a: { median: number }, b: { median: number }) =>
            a.median - b.median,
        },
        {
          title: 'Максимальное время',
          dataIndex: 'max',
          key: 'max',
          render: formatTimestamp,
          defaultSortOrder: 'descend',
          sorter: (a: { max: number }, b: { max: number }) => a.max - b.max,
        },
        {
          title: 'Успешных заявок',
          dataIndex: 'success',
          key: 'success',
          defaultSortOrder: 'descend',
          sorter: (a: { success: number }, b: { success: number }) =>
            a.success - b.success,
        },
        {
          title: 'Неуспешных заявок',
          dataIndex: 'failure',
          key: 'failure',
          defaultSortOrder: 'descend',
          sorter: (a: { failure: number }, b: { failure: number }) =>
            a.failure - b.failure,
        },
      ]

      setColumns(currentColumns)
    },
    [getColumnSearchProps],
  )

  if (!timeData) {
    return <p>Загружаем...</p>
  }

  const { median, max, average, doctors, success, failure } = timeData

  const tableData = doctors.map(doctor => ({
    key: doctor.name,
    ...doctor,
  }))

  return (
    <div>
      <p>Общее среднее время ответа: {formatTimestamp(average)}</p>
      <p>Общее медианное время ответа: {formatTimestamp(median)}</p>
      <p>Максимальное время ответа: {formatTimestamp(max)}</p>
      <p>Успешных заявок: {success}</p>
      <p>Неуспешных заявок: {failure}</p>
      <Table columns={columns} dataSource={tableData} />
    </div>
  )
}
