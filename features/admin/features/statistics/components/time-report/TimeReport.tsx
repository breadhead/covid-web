import React, { useState, useEffect, useMemo } from 'react'
import { Table } from 'antd'
import { useApi } from '@app/lib/api/useApi'
import { formatTimestamp } from '../../helpers/formatTimestamp'
import { TimeReport as TimeReportModel } from './../../types/TimeReport'
import { useColumnSearchProps } from './useColumnSearchProps'
import { useCurrentColumns } from './useCurrentColumns'
import { DEFAULT_START } from '../funnel/ClaimsFunnel'
import { ReportCalendar } from './components/report-calendar'
import { getTableData } from './helpers/getTableData'
import * as s from './TimeReport.css'
import { RatingDoctorsType } from '../../RatingDoctors'
import { DetailTable } from '../rating-doctors/components/detail-table'

const now = new Date()

export const TimeReport = () => {
  const api = useApi()
  const [timeData, setTimeData] = useState<TimeReportModel | null>(null)
  const [ratingData, setRatingData] = useState<RatingDoctorsType[] | null>(null)
  const [name, setName] = useState<string | null>(null)

  const [from, setFrom] = useState<Date>(DEFAULT_START)
  const [to, setTo] = useState<Date>(now)

  useEffect(
    () => {
      api.fetchTimeReport(from, to).then(setTimeData)
      api.fetchRatingDoctors().then(setRatingData)
    },
    [from, to],
  )

  const currentDoctorRating = useMemo(
    () => {
      return !!ratingData ? ratingData.find(item => item.doctor === name) : null
    },
    [name, ratingData],
  )

  const getColumnSearchProps = useColumnSearchProps()
  const columns = useCurrentColumns(getColumnSearchProps)

  if (!timeData) {
    return <p>Загружаем...</p>
  }

  const {
    median,
    max,
    average,
    doctors,
    success,
    failure,
    ratingAverage,
    ratingMedian,
  } = timeData

  const tableData = getTableData(doctors)

  return !!name ? (
    <DetailTable
      name={name}
      content={currentDoctorRating}
      setCurrent={setName}
    />
  ) : (
    <div>
      <section style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <p>Общее среднее время ответа: {formatTimestamp(average)}</p>
          <p>Общее медианное время ответа: {formatTimestamp(median)}</p>
          <p>Максимальное время ответа: {formatTimestamp(max)}</p>
          <p>Всего заявок, закрытых вовремя: {success}</p>
          <p>Всего просроченных заявок: {failure}</p>
        </div>
        <div>
          <p>Средняя оценка по всем вопросам: {ratingAverage}</p>
          <p>Медианная оценка по всем вопросам: {ratingMedian}</p>
        </div>
        <ReportCalendar from={from} to={to} setFrom={setFrom} setTo={setTo} />
      </section>
      <div className={s.tableContainer}>
        <Table
          onRow={(record: any) => {
            return {
              onClick: () => {
                setName(record.name)
              },
            }
          }}
          columns={columns}
          dataSource={tableData}
        />
      </div>
    </div>
  )
}
