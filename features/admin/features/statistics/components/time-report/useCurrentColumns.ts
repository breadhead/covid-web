import { useEffect, useState } from 'react'
import { formatTimestamp } from '../../helpers/formatTimestamp'

export const useCurrentColumns = (
  getColumnSearchProps: (val: string) => void,
) => {
  const [columns, setColumns] = useState<any[]>([])

  useEffect(() => {
    const currentColumns = [
      {
        title: 'Эксперт',
        dataIndex: 'name',
        key: 'name',
        ...(getColumnSearchProps('name') as unknown),
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
        title: 'Всего заявок',
        dataIndex: 'all',
        key: 'all',
        defaultSortOrder: 'descend',
        sorter: (a: { all: number }, b: { all: number }) => a.all - b.all,
      },
      {
        title: 'Закрытых вовремя заявок',
        dataIndex: 'success',
        key: 'success',
        defaultSortOrder: 'descend',
        sorter: (a: { success: number }, b: { success: number }) =>
          a.success - b.success,
      },
      {
        title: 'Закрытых клиентом заявок',
        dataIndex: 'closed-by-client',
        key: 'closed-by-client',
        defaultSortOrder: 'descend',
        sorter: (
          a: { closedByClient: number },
          b: { closedByClient: number },
        ) => a.closedByClient - b.closedByClient,
      },
      {
        title: 'Средняя оценка',
        dataIndex: 'rating-average',
        key: 'rating-average',
        defaultSortOrder: 'descend',
        sorter: (a: { ratingAverage: number }, b: { ratingAverage: number }) =>
          a.ratingAverage - b.ratingAverage,
      },
      {
        title: 'Медианная оценка',
        dataIndex: 'rating-median',
        key: 'rating-median',
        defaultSortOrder: 'descend',
        sorter: (a: { ratingMedian: number }, b: { ratingMedian: number }) =>
          a.ratingMedian - b.ratingMedian,
      },
      {
        title: 'Просроченных заявок',
        dataIndex: 'failure',
        key: 'failure',
        defaultSortOrder: 'descend',
        sorter: (a: { failure: number }, b: { failure: number }) =>
          a.failure - b.failure,
      },
    ]

    setColumns(currentColumns)
  }, [])

  return columns
}
