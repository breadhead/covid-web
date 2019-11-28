import * as React from 'react'
import { Table } from 'antd'
import { useMemo } from 'react'
import { getDataSource } from './helpers/getDataSource'

export interface RatingTableProps {
  data: {
    [key: string]: {
      count: number
      percentage: string
    }
  }[]
  styles: { [key: string]: string }
  questionId: string
}

export const RatingTable = ({ data, styles, questionId }: RatingTableProps) => {
  const dataSource = useMemo(
    () => {
      return getDataSource(data, questionId)
    },
    [data],
  )

  const columns = [
    {
      title: 'Количество звёзд',
      dataIndex: 'starsCount',
      key: 'starsCount',
      sorter: (a: any, b: any) => {
        return a.starsCount.length - b.starsCount.length
      },
    },
    {
      title: 'Количество ответов',
      dataIndex: 'answersCount',
      key: 'answersCount',
      sorter: (a: any, b: any) => {
        return a.answersCount - b.answersCount
      },
    },
    {
      title: 'Доля',
      dataIndex: 'proportion',
      key: 'proportion',
      sorter: (a: any, b: any) => {
        return (
          Number(a.proportion.split('.')[0]) -
          Number(b.proportion.split('.')[0])
        )
      },
    },
  ]

  return (
    <Table
      rowClassName={styles.row as any}
      dataSource={dataSource}
      columns={columns}
    />
  )
}
