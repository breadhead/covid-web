import React, { useState, useEffect } from 'react'
import { Table } from 'antd'
import { useApi } from '@app/lib/api/useApi'
import { formatTimestamp } from '../../helpers/formatTimestamp'
import { TimeReport as TimeReportModel } from '@app/src/domain/statistics/model/time-report'
import { useColumnSearchProps } from './useColumnSearchProps'
import { useCurrentColumns } from './useCurrentColumns'
import { DEFAULT_START } from '../funnel/ClaimsFunnel';
import { ReportCalendar } from './components/report-calendar';
import { getTableData } from './helpers/getTableData';

const now = new Date()

export const TimeReport = () => {
  const api = useApi()
  const [timeData, setTimeData] = useState<TimeReportModel | null>(null)

  const [from, setFrom] = useState<Date>(DEFAULT_START)
  const [to, setTo] = useState<Date>(now)

  useEffect(
    () => {
      api.fetchTimeReport(from, to).then(setTimeData)
    },
    [from, to],
  )

  const getColumnSearchProps = useColumnSearchProps()
  const columns = useCurrentColumns(getColumnSearchProps)

  if (!timeData) {
    return <p>Загружаем...</p>
  }

  const { median, max, average, doctors, success, failure } = timeData

  const tableData = getTableData(doctors)

  return (
    <div>
      <section style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <p>Общее среднее время ответа: {formatTimestamp(average)}</p>
          <p>Общее медианное время ответа: {formatTimestamp(median)}</p>
          <p>Максимальное время ответа: {formatTimestamp(max)}</p>
          <p>Всего заявок, закрытых вовремя: {success}</p>
          <p>Всего просроченных заявок: {failure}</p>
        </div>
        <ReportCalendar from={from} to={to} setFrom={setFrom} setTo={setTo} />
      </section>
      <Table columns={columns} dataSource={tableData} />
    </div>
  )
}
