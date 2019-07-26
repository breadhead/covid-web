import { useEffect, useState } from 'react'
import { formatTimestamp } from './formatTimestamp'

export const useCurrentColumns = (
  getColumnSearchProps: (val: string) => void,
) => {
  const [columns, setColumns] = useState<any[]>([])

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
          title: 'Просроченных заявок',
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

  return columns
}
