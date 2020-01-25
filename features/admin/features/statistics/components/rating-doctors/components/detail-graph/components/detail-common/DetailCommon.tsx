import * as React from 'react'
import { DoctorStatsReport } from '@app/features/admin/features/statistics/types/DoctorStatsReport'
import { GraphType } from '../../DetailGraph'
import { formatTimestampToDays } from '@app/features/admin/features/statistics/helpers/formatTimestampToDays'

interface DetailCommonProps {
  data: DoctorStatsReport
  type: GraphType
}

export const DetailCommon = ({ data, type }: DetailCommonProps) => {
  const {
    success,
    failure,
    closedByClient,
    all,
    average,
    median,
    min,
    max,
  } = data

  switch (type) {
    case GraphType.Count:
      return (
        <div>
          <p>Закрытых вовремя: {success}</p>
          <p>Просроченных: {failure}</p>
          <p>Закрытых клиентом: {closedByClient}</p>
          <p>Всего: {all}</p>
        </div>
      )
    case GraphType.Time:
      return (
        <div>
          <p>Среднее время: {formatTimestampToDays(average)} д.</p>
          <p>Медианное время: {formatTimestampToDays(median)} д.</p>
          <p>Максимальное время: {formatTimestampToDays(max)} д.</p>
          <p>Минимальное время: {formatTimestampToDays(min)} д.</p>
        </div>
      )
    default:
      return null
  }
}
