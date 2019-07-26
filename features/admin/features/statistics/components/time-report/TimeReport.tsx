import React, { useState, useEffect, useCallback } from 'react'
import { Table } from 'antd'
import { useApi } from '@app/lib/api/useApi'
import { formatTimestamp } from './formatTimestamp'
import { TimeReport as TimeReportModel } from '@app/src/domain/statistics/model/time-report'
import { useColumnSearchProps } from './useColumnSearchProps'
import RangePicker from '../../../history/molecule/RangePicker'
import { DEFAULT_START } from '../funnel/ClaimsFunnel'
import { useCurrentColumns } from './useCurrentColumns'

export const TimeReport = () => {
  const api = useApi()
  const now = new Date()
  const [timeData, setTimeData] = useState<TimeReportModel | null>(null)
  const [from, setFrom] = useState<Date>(DEFAULT_START)
  const [to, setTo] = useState<Date>(now)

  useEffect(() => {
    api.fetchTimeReport(from, to).then(setTimeData)
  }, [])

  const getColumnSearchProps = useColumnSearchProps()
  const columns = useCurrentColumns(getColumnSearchProps)

  const changePeriod = useCallback(
    (dates: [Date, Date] | undefined) => {
      if (!dates) {
        setFrom(DEFAULT_START)
        setTo(now)
      } else {
        const [newFrom, newTo] = dates
        setFrom(newFrom)
        setTo(newTo)
      }
    },
    [setFrom],
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
      <section style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <p>Общее среднее время ответа: {formatTimestamp(average)}</p>
          <p>Общее медианное время ответа: {formatTimestamp(median)}</p>
          <p>Максимальное время ответа: {formatTimestamp(max)}</p>
          <p>Всего успешных заявок: {success}</p>
          <p>Всего просроченных заявок: {failure}</p>
        </div>
        <RangePicker
          dateIsDisabled={date => date < DEFAULT_START || date > now}
          value={[from, to]}
          onChange={changePeriod}
        />
      </section>
      <Table columns={columns} dataSource={tableData} />
    </div>
  )
}
